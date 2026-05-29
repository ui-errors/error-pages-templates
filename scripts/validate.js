const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

const BUILD_DIR = path.join(__dirname, "../build");

/*
  SAFE SCRIPT POLICY (IMPORTANT CHANGE)

  We ALLOW <script> tags for:
  - animations
  - UI effects
  - transitions

  BUT we BLOCK dangerous runtime behaviors inside them.
*/

/*
  DANGEROUS BEHAVIOR PATTERNS (NOT STRUCTURAL TAGS)
*/
const DANGEROUS_PATTERNS = [
  /javascript:/gi,
  /data:text\/html/gi,

  /\beval\s*\(/gi,
  /\bFunction\s*\(/gi,
  /new\s+Function/gi,

  /document\.cookie/gi,
  /localStorage\./gi,
  /sessionStorage\./gi,

  /fetch\s*\(/gi,
  /XMLHttpRequest/gi,

  /import\s*\(/gi,
  /require\s*\(/gi,

  /window\.location\s*=/gi,
  /location\.href\s*=/gi
];

/*
  OPTIONAL: lightweight script detection (NOT blocking anymore)
*/
function hasScriptTag(content) {
  return /<script\b[^>]*>/gi.test(content);
}

/*
  GET USER (GitHub or fallback)
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
  SHOUT ERROR (enhanced visibility)
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
  SCAN FILE
*/
function scanFile(filePath, templateName, user) {
  const content = fs.readFileSync(filePath, "utf-8");

  // ✅ Allow scripts for animations BUT inspect behavior
  if (hasScriptTag(content)) {
    console.log(`⚡ Script detected (allowed) in ${filePath}`);
  }

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
  SCAN DIRECTORY
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
