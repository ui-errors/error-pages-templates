# Contributing to error-pages-templates

Thank you for contributing to this project. This repository is a curated registry of error page templates used by the `ui-errors` CLI. Because these templates may be executed in real applications, **security, stability, and predictability are top priorities**.

We welcome contributions — but all submissions must follow the guidelines below.

---

##  Security First Rules (Mandatory)

This project is security-sensitive. All templates are reviewed with security in mind.

###  Not Allowed
- No remote JavaScript (CDNs, external scripts, trackers)
- No inline or injected scripts that access sensitive browser APIs unnecessarily
- No hidden or obfuscated code
- No form submissions to external servers
- No localStorage/sessionStorage abuse for tracking
- No external image hosting dependencies inside templates (see below)
- No execution of dynamic code (`eval`, `new Function`, etc.)
- No network requests (fetch/XHR/WebSocket) unless explicitly approved

###  Images Rule
- Do **NOT** include images inside `raw/`
- If your design needs images:
  - Host them externally (or use stable CDN links), OR
  - Prefer SVG inline assets when possible

###  Code Safety
- Keep templates static and predictable
- Avoid complex runtime logic
- Ensure templates cannot leak environment data
- Do not include any sensitive information or placeholders that could expose secrets

---

##  How to Contribute a Template

### 1. Fork or Clone the Repository

```bash
git clone https://github.com/ui-errors/error-pages-templates.git

```
## 2. Create Your Template

Create a new folder under:
```
raw/your-template-name/
```
Example:
```
raw/cyber-glitch-404/
```
Inside that folder, add:

- index.html → your template design
- template.json → metadata file
## 3. Template Structure
index.html

Must be:

- Fully self-contained
- Framework-agnostic (no React/Vue logic inside raw)
- Safe and static

Example:
```
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
  <title>404 Not Found</title>
</head>
<body>
  <h1>404</h1>
  <p>Page not found</p>
</body>
</html>

```
### template.json
```
{
  "name": "cyber-glitch-404",
  "displayName": "Cyber Glitch 404",
  "author": "your-name",
  "tags": ["cyber", "glitch", "dark"],
  "registerAs": {
    "404": true
  }
}
```
### Rules:
- name must be unique and lowercase
- registerAs defines supported error pages (e.g. 404, 500)
- Keep metadata clean and minimal
## 4. Build Templates

After adding your template:
```
npm install
npm run build
```
This generates framework-specific outputs inside:
```
build/
```
⚠️ You must ensure build completes without errors before submitting.

## 5. Test Your Template

Before opening a PR:

- Open the built output in different frameworks:
- Express
- Next.js
- React
- Static HTML
- Verify layout consistency
- Check for console errors
- Ensure no external unsafe requests
### 6. Submit a Pull Request

When ready:

Push your branch
- Open a PR with:
- Clear description of your template
- Screenshots (optional but recommended)
Notes on frameworks supported
   Review Process

## All PRs are reviewed for:

- Security compliance
- Build stability
- Visual consistency
- Template metadata correctness
- Performance impact

## PRs that violate security rules will be rejected immediately.

##  Best Practices
- Keep designs lightweight
- Prefer CSS over JavaScript
- Use accessible color contrast
- Ensure mobile responsiveness
- Avoid overly large assets
##  Security Reporting

If you find a security issue in the build system or templates:

Do NOT open a public issue.

Instead:

### Contact the maintainers privately (if available)
Or open a security advisory report
 License

By contributing, you agree that your submission will be licensed under the repository’s LICENSE.
