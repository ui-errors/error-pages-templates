const fs = require("fs")
const path = require("path")
const crypto = require("crypto")

const RAW = path.join(__dirname, "../raw")
const BUILD = path.join(__dirname, "../build")
const REGISTRY = path.join(__dirname, "../registry")

/*
  BUILD CACHE

  Prevents rebuilding templates
  that already exist and have
  not changed.
*/

const CACHE_FILE = path.join(
  REGISTRY,
  ".build-cache.json"
)

function ensure(dir) {
  fs.mkdirSync(dir, { recursive: true })
}

function loadCache() {
  if (!fs.existsSync(CACHE_FILE)) {
    return {}
  }

  return JSON.parse(
    fs.readFileSync(CACHE_FILE, "utf-8")
  )
}

function saveCache(cache) {
  fs.writeFileSync(
    CACHE_FILE,
    JSON.stringify(cache, null, 2)
  )
}

function hashContent(content) {
  return crypto
    .createHash("sha256")
    .update(content)
    .digest("hex")
}

function escapeTemplate(html) {
  return html
    .replace(/\\/g, "\\\\")
    .replace(/`/g, "\\`")
    .replace(/\$\{/g, "\\${")
}

function buildReactComponent(
  html,
  componentName
) {
  const escaped = escapeTemplate(html)

  return `export default function ${componentName}() {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: \`${escaped}\`
      }}
    />
  )
}
`
}

function buildVueComponent(html) {
  return `<template>
${html}
</template>
`
}

function buildSvelteComponent(html) {
  return html
}

const FRAMEWORKS = {
  static: {
    ext: "html",

    files: {
      "404": "404.html",
      "500": "500.html"
    },

    generate: html => html
  },

  vite: {
    ext: "html",

    files: {
      "404": "404.html",
      "500": "500.html"
    },

    generate: html => html
  },

  react: {
    ext: "jsx",

    files: {
      "404": "404.jsx",
      "500": "500.jsx"
    },

    generate404: html =>
      buildReactComponent(html, "NotFound"),

    generate500: html =>
      buildReactComponent(html, "ServerError")
  },

  next: {
    ext: "js",

    files: {
      "404": "not-found.js",
      "500": "error.js"
    },

    generate404: html =>
      buildReactComponent(html, "NotFound"),

    generate500: html =>
      buildReactComponent(html, "Error")
  },

  express: {
    ext: "ejs",

    files: {
      "404": "404.ejs",
      "500": "500.ejs"
    },

    generate: html => html
  },

  vue: {
    ext: "vue",

    files: {
      "404": "404.vue",
      "500": "500.vue"
    },

    generate: html =>
      buildVueComponent(html)
  },

  svelte: {
    ext: "svelte",

    files: {
      "404": "404.svelte",
      "500": "500.svelte"
    },

    generate: html =>
      buildSvelteComponent(html)
  }
}

function getInstallTarget(
  framework,
  type,
  file
) {
  const targets = {
    next: {
      "404": `app/${file}`,
      "500": `app/${file}`
    },

    react: {
      "404": `src/pages/${file}`,
      "500": `src/pages/${file}`
    },

    vite: {
      "404": `public/${file}`,
      "500": `public/${file}`
    },

    vue: {
      "404": `src/pages/${file}`,
      "500": `src/pages/${file}`
    },

    svelte: {
      "404": `src/routes/${file}`,
      "500": `src/routes/${file}`
    },

    express: {
      "404": `views/${file}`,
      "500": `views/${file}`
    },

    static: {
      "404": file,
      "500": file
    }
  }

  return targets[framework][type]
}

function createRegistryTemplate({
  id,
  type,
  meta,
  folder
}) {
  const frameworks = {}

  Object.entries(FRAMEWORKS).forEach(
    ([framework, config]) => {
      frameworks[framework] = {
        file: config.files[type],

        path: `build/${framework}/${folder}/${config.files[type]}`,

        install: getInstallTarget(
          framework,
          type,
          config.files[type]
        )
      }
    }
  )

  return {
    id,
    type,

    name: meta.name,

    displayName:
      meta.displayName || meta.name,

    description:
      meta.description || "",

    author:
      meta.author || "unknown",

    version:
      meta.version || "1.0.0",

    tags:
      meta.tags || [],

    frameworks
  }
}

function build() {
  ensure(BUILD)
  ensure(REGISTRY)

  const cache = loadCache()

  const registry404 = {
    generatedAt: new Date().toISOString(),
    type: "404",
    templates: []
  }

  const registry500 = {
    generatedAt: new Date().toISOString(),
    type: "500",
    templates: []
  }

  if (!fs.existsSync(RAW)) {
    console.log("No raw folder found")
    return
  }

  const folders = fs.readdirSync(RAW)

  let id = 1

  folders.forEach(folder => {
    const dir = path.join(RAW, folder)

    const metaPath = path.join(
      dir,
      "template.json"
    )

    const htmlPath = path.join(
      dir,
      "index.html"
    )

    if (
      !fs.existsSync(metaPath) ||
      !fs.existsSync(htmlPath)
    ) {
      console.log(
        `Skipping invalid template: ${folder}`
      )

      return
    }

    const metaContent =
      fs.readFileSync(metaPath, "utf-8")

    const htmlContent =
      fs.readFileSync(htmlPath, "utf-8")

    /*
      TEMPLATE HASH

      If hash matches previous build,
      skip rebuilding.
    */

    const templateHash = hashContent(
      metaContent + htmlContent
    )

    if (
      cache[folder] &&
      cache[folder] === templateHash
    ) {
      console.log(
        `⏭ Skipping unchanged template: ${folder}`
      )

      /*
        STILL REGISTER TEMPLATE
      */

      const meta =
        JSON.parse(metaContent)

      const registerAs =
        meta.registerAs || {}

      if (registerAs["404"]) {
        registry404.templates.push(
          createRegistryTemplate({
            id: id++,
            type: "404",
            meta,
            folder
          })
        )
      }

      if (registerAs["500"]) {
        registry500.templates.push(
          createRegistryTemplate({
            id: id++,
            type: "500",
            meta,
            folder
          })
        )
      }

      return
    }

    /*
      TEMPLATE CHANGED
      → REBUILD
    */

    console.log(
      `🔨 Building template: ${folder}`
    )

    const meta = JSON.parse(metaContent)

    if (meta.name !== folder) {
      throw new Error(
        `Folder "${folder}" does not match template name "${meta.name}"`
      )
    }

    const registerAs =
      meta.registerAs || {}

    Object.entries(FRAMEWORKS).forEach(
      ([framework, config]) => {
        const outDir = path.join(
          BUILD,
          framework,
          folder
        )

        ensure(outDir)

        /*
          BUILD 404
        */

        if (registerAs["404"]) {
          const file =
            config.files["404"]

          let content = ""

          if (
            framework === "react" ||
            framework === "next"
          ) {
            content =
              config.generate404(
                htmlContent
              )
          } else {
            content =
              config.generate(htmlContent)
          }

          fs.writeFileSync(
            path.join(outDir, file),
            content
          )
        }

        /*
          BUILD 500
        */

        if (registerAs["500"]) {
          const file =
            config.files["500"]

          let content = ""

          if (
            framework === "react" ||
            framework === "next"
          ) {
            content =
              config.generate500(
                htmlContent
              )
          } else {
            content =
              config.generate(htmlContent)
          }

          fs.writeFileSync(
            path.join(outDir, file),
            content
          )
        }
      }
    )

    /*
      UPDATE CACHE
    */

    cache[folder] = templateHash

    /*
      REGISTER TEMPLATE
    */

    if (registerAs["404"]) {
      registry404.templates.push(
        createRegistryTemplate({
          id: id++,
          type: "404",
          meta,
          folder
        })
      )
    }

    if (registerAs["500"]) {
      registry500.templates.push(
        createRegistryTemplate({
          id: id++,
          type: "500",
          meta,
          folder
        })
      )
    }
  })

  /*
    SAVE CACHE
  */

  saveCache(cache)

  /*
    WRITE REGISTRIES
  */

  fs.writeFileSync(
    path.join(REGISTRY, "404.json"),
    JSON.stringify(
      registry404,
      null,
      2
    )
  )

  fs.writeFileSync(
    path.join(REGISTRY, "500.json"),
    JSON.stringify(
      registry500,
      null,
      2
    )
  )

  console.log("")
  console.log(
    "✔ Incremental build complete"
  )
  console.log(
    "✔ Registry updated"
  )
}

build()
