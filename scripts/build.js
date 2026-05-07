const fs = require("fs")
const path = require("path")

const RAW = path.join(__dirname, "../raw")
const BUILD = path.join(__dirname, "../build")
const ROOT = path.join(__dirname, "..")

function ensure(dir) {
  fs.mkdirSync(dir, { recursive: true })
}

function escapeTemplate(html) {
  return html
    .replace(/\\/g, "\\\\")
    .replace(/`/g, "\\`")
    .replace(/\$\{/g, "\\${")
}

function buildReactComponent(html, componentName) {
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

function build() {
  if (!fs.existsSync(RAW)) {
    console.log("No raw folder found")
    return
  }

  const folders = fs.readdirSync(RAW)

  /*
    FINAL CLI REGISTRY

    templates.json becomes:
    - registry
    - category index
    - framework map
    - install source
  */

  const registry = {
    generatedAt: new Date().toISOString(),

    frameworks: [
      "static",
      "vite",
      "react",
      "next",
      "express",
      "vue",
      "svelte"
    ],

    templates: {
      "404": [],
      "500": []
    }
  }

  let id = 1

  folders.forEach(folder => {
    const dir = path.join(RAW, folder)

    const metaPath = path.join(dir, "template.json")
    const htmlPath = path.join(dir, "index.html")

    // VALIDATION
    if (!fs.existsSync(metaPath) || !fs.existsSync(htmlPath)) {
      console.log(`Skipping invalid template: ${folder}`)
      return
    }

    const meta = JSON.parse(fs.readFileSync(metaPath, "utf-8"))
    const html = fs.readFileSync(htmlPath, "utf-8")

    // ENFORCE IDENTITY RULE
    if (meta.name !== folder) {
      throw new Error(
        `Template mismatch: folder "${folder}" != "${meta.name}"`
      )
    }

    const registerAs = meta.registerAs || {}

    /*
      COMPILERS
    */

    const outputs = {
      static: {
        ext: "html",
        generate: () => html
      },

      vite: {
        ext: "html",
        generate: () => html
      },

      react: {
        ext: "jsx",

        generate404: () =>
          buildReactComponent(html, "NotFound"),

        generate500: () =>
          buildReactComponent(html, "ServerError")
      },

      next: {
        ext: "js",

        generate404: () =>
          buildReactComponent(html, "NotFound"),

        generate500: () =>
          buildReactComponent(html, "Error")
      },

      express: {
        ext: "ejs",
        generate: () => html
      },

      vue: {
        ext: "vue",
        generate: () => buildVueComponent(html)
      },

      svelte: {
        ext: "svelte",
        generate: () => buildSvelteComponent(html)
      }
    }

    /*
      BUILD ALL FRAMEWORK FILES
    */

    Object.entries(outputs).forEach(([framework, config]) => {
      const outDir = path.join(BUILD, framework, folder)

      ensure(outDir)

      // 404
      if (registerAs["404"]) {
        let fileName = ""
        let content = ""

        switch (framework) {
          case "next":
            fileName = "not-found.js"
            content = config.generate404()
            break

          case "react":
            fileName = "404.jsx"
            content = config.generate404()
            break

          default:
            fileName = `404.${config.ext}`
            content = config.generate()
        }

        fs.writeFileSync(
          path.join(outDir, fileName),
          content
        )
      }

      // 500
      if (registerAs["500"]) {
        let fileName = ""
        let content = ""

        switch (framework) {
          case "next":
            fileName = "error.js"
            content = config.generate500()
            break

          case "react":
            fileName = "500.jsx"
            content = config.generate500()
            break

          default:
            fileName = `500.${config.ext}`
            content = config.generate()
        }

        fs.writeFileSync(
          path.join(outDir, fileName),
          content
        )
      }
    })

    /*
      REGISTER 404 TEMPLATE
    */

    if (registerAs["404"]) {
      registry.templates["404"].push({
        id: id++,

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

        type: "404",

        files: {
          static: {
            file: "404.html",
            path: `build/static/${folder}/404.html`
          },

          vite: {
            file: "404.html",
            path: `build/vite/${folder}/404.html`
          },

          react: {
            file: "404.jsx",
            path: `build/react/${folder}/404.jsx`
          },

          next: {
            file: "not-found.js",
            path: `build/next/${folder}/not-found.js`
          },

          express: {
            file: "404.ejs",
            path: `build/express/${folder}/404.ejs`
          },

          vue: {
            file: "404.vue",
            path: `build/vue/${folder}/404.vue`
          },

          svelte: {
            file: "404.svelte",
            path: `build/svelte/${folder}/404.svelte`
          }
        }
      })
    }

    /*
      REGISTER 500 TEMPLATE
    */

    if (registerAs["500"]) {
      registry.templates["500"].push({
        id: id++,

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

        type: "500",

        files: {
          static: {
            file: "500.html",
            path: `build/static/${folder}/500.html`
          },

          vite: {
            file: "500.html",
            path: `build/vite/${folder}/500.html`
          },

          react: {
            file: "500.jsx",
            path: `build/react/${folder}/500.jsx`
          },

          next: {
            file: "error.js",
            path: `build/next/${folder}/error.js`
          },

          express: {
            file: "500.ejs",
            path: `build/express/${folder}/500.ejs`
          },

          vue: {
            file: "500.vue",
            path: `build/vue/${folder}/500.vue`
          },

          svelte: {
            file: "500.svelte",
            path: `build/svelte/${folder}/500.svelte`
          }
        }
      })
    }
  })

  /*
    FINAL REGISTRY OUTPUT
  */

  fs.writeFileSync(
    path.join(ROOT, "templates.json"),
    JSON.stringify(registry, null, 2)
  )

  console.log("✔ Templates compiled and registered successfully")
}

build()
