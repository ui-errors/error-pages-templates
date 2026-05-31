# Security Policy

##  Security Overview

The `error-pages-templates` repository powers UI templates used by the `ui-errors` CLI. Because these templates may be rendered inside real applications, security is treated as a **core requirement, not an optional guideline**.

We aim to prevent:
- Code injection via templates
- Malicious scripts in UI templates
- Supply chain risks in build output
- Data leakage from runtime environments

---

##  Supported Versions

Only the latest version of the repository and CLI integration are actively supported for security updates.

| Version | Supported |
|--------|----------|
| Latest (main branch) |  |
| Older releases |  |

---

##  Security Scope

This policy applies to:

- All templates in `raw/`
- Generated output in `build/`
- Build scripts in `scripts/`
- GitHub Actions workflows
- Template metadata (`template.json`)

---

##  Strictly Forbidden in Templates

Any pull request containing the following will be rejected immediately:

### Code Execution
- `eval()`
- `new Function()`
- Dynamic script injection
- Obfuscated or minified hidden logic

### Network Activity
- `fetch`, `XMLHttpRequest`, `WebSocket`
- External API calls
- Telemetry or tracking scripts

### External Dependencies
- CDN-hosted scripts
- Third-party JavaScript libraries inside templates
- External runtime dependencies in raw templates

### Data Exfiltration
- Accessing `localStorage` / `sessionStorage` for tracking
- Reading cookies for analytics or fingerprinting
- Collecting environment/browser metadata

### Hidden Behavior
- Obfuscated JS
- Base64 encoded scripts
- Delayed execution payloads
- Conditional execution based on environment

---

##  Image & Asset Policy

- Images must NOT be stored in `raw/`
- External image hosting is discouraged unless necessary
- Prefer inline SVG or static assets embedded in HTML
- No dynamic asset loading at runtime

---

##  Build Security Rules

The build system must:

- Produce deterministic output
- Not introduce new runtime behavior
- Not inject scripts or external dependencies
- Only transform template structure per framework

Any PR that modifies build behavior must be reviewed carefully.

---

##  Security Review Process

All contributions go through:

1. Automated build checks
2. Static inspection of templates
3. Manual review for unsafe patterns
4. Output validation across frameworks

PRs failing security checks will be rejected without merge.

---

## 🧾 Reporting a Vulnerability

If you discover a security issue, please report it responsibly.

### Do NOT:
- Open a public GitHub issue
- Share exploit details publicly
- Submit malicious proof-of-concepts in PRs

### DO:
- Report privately to maintainers (preferred)
- Provide:
  - Description of the issue
  - Steps to reproduce
  - Potential impact
  - Suggested fix (if available)

We will acknowledge reports as soon as possible and work on a fix.

---

##  Response Time

We aim to:

- Acknowledge reports within **48–72 hours**
- Provide mitigation within **7 days** for critical issues
- Release patches as soon as validated

---

##  Security Philosophy

This project follows a strict principle:

> Templates must never be able to behave like applications.

They are **static UI components only**, not executable systems.

---

##  Dependency Policy

- Minimal dependencies only
- No runtime dependencies inside templates
- Build-time tools must be reviewed before introduction
- Avoid adding new packages unless necessary for compilation or validation

---

##  Final Note

Security issues in UI template systems are often subtle. Even small script injections or unsafe build transformations can lead to real-world impact.

If you're unsure whether something is safe  assume it is not and ask for review.
