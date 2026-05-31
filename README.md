# error-pages-templates

A growing collection of customizable error page templates for modern web applications — designed to power the **ui-errors CLI**.

This repository is built for developers who care about **design, simplicity, and production-ready UI**. Whether it’s a 404 page that makes users smile or a 500 page that feels intentional, this is where those ideas live.

---

##  Why This Project Exists

Error pages are usually ignored, but they’re often the *first thing users see when something breaks*.

We’re building this to change that:

- Make error pages beautiful, expressive, and useful
- Provide ready-to-use templates for modern frameworks
- Build a community-driven design registry
- Keep everything fast, safe, and production-friendly

If you’ve ever designed a cool error page, this is the place to share it.

---

##  Installation

Install the CLI tool first:

```bash
npm install -g errorlab
```
Then you can browse and install templates directly from this repository using ui-errors.

##  Available Templates
- Frameworks: Express, Next.js, React, Vue, Svelte, Vite, Static HTML
- Themes: Cyber, Train, Minimal, Experimental (and more coming)
- Pages: 404 (Not Found), 500 (Server Error), and additional error states
 ## Contributing

### We welcome all contributors  beginners, designers, and experienced developers.

Even small contributions matter: a layout tweak, a new theme idea, or a creative 404 page can help thousands of developers.

### Start Here
- Contribution Guide → CONTRIBUTING.md
- Security Policy → SECURITY.md
- Code of Conduct → CODE_OF_CONDUCT.md
### How to Contribute
- Fork this repository
- Create a new template inside raw/your-template-name/
## Add required files:
- index.html
- template.json

Build the project:
```
npm run build
```
Test across supported frameworks
Submit a pull request 
## Template Structure

Every template must live inside the raw/ directory.
```
raw/your-template-name/
 ├── index.html
 └── template.json
```
## Example template.json
```
{
  "name": "cyber-glitch-404",
  "displayName": "Cyber Glitch 404",
  "author": "your-github-username",
  "tags": ["cyber", "glitch", "dark"],
  "registerAs": {
    "404": true
  }
}
```
### Security First

Security is a core principle of this project.

Before contributing, please read:

## SECURITY.md

Key Rules:
- No external scripts or CDNs
- No tracking or analytics code
- No obfuscated or hidden logic
- No data collection or unsafe runtime behavior
- Templates must remain static and predictable
  ## Build & Test

After adding your template:
```
npm install
npm run build
```
## Make sure:

- No build errors
- No console warnings
- Works across all frameworks
- Fully responsive design
- No external dependencies
  ## Why Contribute?

Because your work doesn’t just stay in a repo — it gets used.

Templates from here can:

- Be installed globally via CLI
- Be used in real production apps
- Reach thousands of developers
- Become part of modern UI systems

Even a small idea can become widely used.

### License

This project is open-source. See the LICENSE file for details.

❤️ Final Note

We’re not just collecting error pages.

We’re building a library of creative UI moments when things go wrong.

If you’ve got an idea — simple, weird, minimal, or experimental — ship it.
