// scripts/security-build-validator.js

const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

const BUILD_DIR = path.join(__dirname, "../build");

/*
  DANGEROUS PATTERNS
  Anything that can execute runtime JS or inject behavior
*/
const DANGEROUS_PATTERNS = [
  /<script[\s\S]*?>[\s\S]*?<\/script>/gi,
  /<script/gi,
  /<\/script>/gi,

  /on\w+\s*=/gi,            // onclick, onerror, onload, etc
  /javascript:/gi,
  /data:text\/html/gi,

  /\beval\s*\(/gi,
  /\bFunction\s*\(/gi,
  /new\s+Function/gi,

  /document\./gi,
  /window\./gi,

  /localStorage\./gi,
  /sessionStorage\./gi,

  /fetch\s*\(/gi,
  /XMLHttpRequest/gi,
  /import\s*\(/gi
];

/*
  GET REAL USER (GitHub or local fallback)
*/
function getUser() {
  try {
    if (process.env.GITHUB_ACTOR) {
      return process.env.GITHUB_ACTOR;
    }

    const name = execSync("git config user.name")
      .toString()
      .trim();

    return name || "unknown-user";
  } catch {
    return "unknown-user";
  }
}

/*
  PRETTY SHOUT LOG
*/
function failSecurity({ file, pattern, template, user }) {
  console.log("\n====================================");
  console.log("❌ SECURITY VIOLATION DETECTED");
  console.log("====================================");
  console.log(`👤 User: ${user}`);
  console.log(`📦 Template: ${template || "unknown"}`);
  console.log(`📁 File: ${file}`);
  console.log(`⚠️ Matched Pattern: ${pattern}`);
  console.log("====================================\n");

  throw new Error("Build blocked due to security violation");
}

/*
  SCAN SINGLE FILE
*/
function scanFile(filePath, templateName, user) {
  const content = fs.readFileSync(filePath, "utf-8");

  for (const pattern of DANGEROUS_PATTERNS) {
    if (pattern.test(content)) {
      failSecurity({
        file: filePath,
        pattern: pattern.toString(),
        template: templateName,
        user
      });
    }
  }
}

/*
  SCAN DIRECTORY RECURSIVELY
*/
function scanDir(dir, templateName, user) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      scanDir(fullPath, templateName, user);
    } else {
      const ext = path.extname(entry.name);

      if (
        [".html", ".js", ".jsx", ".vue", ".svelte", ".ejs"].includes(ext)
      ) {
        scanFile(fullPath, templateName, user);
      }
    }
  }
}

/*
  MAIN
*/
function main() {
  console.log("🔍 Running security scan on build output...\n");

  const user = getUser();

  if (!fs.existsSync(BUILD_DIR)) {
    console.log("⚠️ Build directory not found. Nothing to scan.");
    return;
  }

  const frameworks = fs.readdirSync(BUILD_DIR);

  let scannedFiles = 0;

  for (const fw of frameworks) {
    const fwPath = path.join(BUILD_DIR, fw);

    const templates = fs.readdirSync(fwPath);

    for (const template of templates) {
      const templatePath = path.join(fwPath, template);

      console.log(`📦 Scanning: ${fw}/${template}`);

      scanDir(templatePath, template, user);

      scannedFiles++;
    }
  }

  console.log("\n====================================");
  console.log("✅ SECURITY SCAN PASSED");
  console.log("====================================");
  console.log(`👤 User: ${user}`);
  console.log(`📁 Files scanned: ${scannedFiles}`);
  console.log("====================================\n");
}

main();
