
# error-pages-templates

A collection of customizable error page templates for web applications. These templates are designed to be installed and used with the **ui-errors CLI**.

## Installation

Before using these templates, you must install the `ui-errors` CLI tool:

```bash
npm install -g errorlab
```

Once installed, you can browse and install templates from this repository using the CLI.

## Available Templates

This repository contains error page templates for various frameworks and themes:

- **Frameworks**: Express, Next.js, React, Vue, Svelte, Vite, and static HTML
- **Themes**: Cyber, Train, and more
- **Error Pages**: 404 (Not Found), 500 (Server Error), and others

## Contributing Templates

We welcome contributions! Here's how to add your custom error page templates:

### Steps to Contribute

1. **Fork or clone** this repository
2. **Create your template** in the `raw/` directory:
   - Create a new folder under `raw/` with your template name (e.g., `raw/my-theme/`)
   - Add an `index.html` file with your template design
   - Make sure you don't push the images here host the images somewhere just pushed one source code
   - Add a `template.json` file with template metadata

3. **Build your templates** for multiple frameworks:
   - Run `npm run build` to generate framework-specific versions
   - This will create compiled templates in the `build/` directory

4. **Test your templates** to ensure they work correctly across all frameworks

5. **Submit a pull request** with your changes

### Template Structure

Each template should include:
- A base HTML template in `raw/[theme-name]/`
- Metadata in `template.json` describing the template
- Support for common error pages (404, 500, etc.)

### Example `template.json`

```json
{
  "name": "theme-name",
  "displayName": "Cyber Glitch 404",
  "author": "ui-errors",
  "tags": ["cyber", "glitch", "dark"],

  "registerAs": {
    "404": true
  }
}
```

## License

Please refer to the LICENSE file in this repository.
