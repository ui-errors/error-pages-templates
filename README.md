<div align="center">
  <a href="https://github.com/Safouene1/support-palestine-banner/blob/master/Markdown-pages/Support.md">
    <img src="https://raw.githubusercontent.com/Safouene1/support-palestine-banner/master/banner-project.svg" alt="Support Palestine" style="width: 100%;" />
  </a>
</div>

---

> [!CAUTION]
> The Kenyan tech and developer ecosystem is under severe threat.  
> The newly introduced **Finance Bill** expands software platform taxes, penalizes digital services, and enforces strict **eTIMS validation rules** that block essential business expense deductions for creators and startups.  
> Make your voice heard – reject these clauses by emailing your memorandum to **cna@parliament.go.ke** or sign the collective petition at [change.org](https://change.org).

<p align="center">
  <img src="https://i.ibb.co/gFW7SwzH/images-4.jpg" alt="Support Banner" />
</p>

---

## 📦 UI Error Templates

A growing collection of **customizable error page templates** for modern web applications — designed to power the **ui-errors CLI**.

This repository is built for developers who care about:

- **[Design](ca://s?q=Tell_me_more_about_design_principles)** — clean, modern, and user-friendly layouts  
- **[Simplicity](ca://s?q=Explain_simplicity_in_UI_design)** — lightweight templates that are easy to integrate  
- **[Production-ready UI](ca://s?q=What_is_production_ready_UI)** — polished error pages that work out-of-the-box  

Whether it’s a **[404 page](ca://s?q=What_is_a_404_error_page)** that makes users smile or a **[500 page](ca://s?q=Explain_500_error_page)** that feels intentional, this is where those ideas live.

## supported environments
<div>
  <img src="https://ziadoua.github.io/m3-Markdown-Badges/badges/Android/android1.svg" />
  <img src="https://ziadoua.github.io/m3-Markdown-Badges/badges/Windows/windows1.svg" />
  <img src="https://ziadoua.github.io/m3-Markdown-Badges/badges/macOS/macos1.svg" />
  <img src="https://ziadoua.github.io/m3-Markdown-Badges/badges/Linux/linux2.svg" />
</div>
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
