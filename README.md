# GitHub Action Template

A BiscuitCutter template for creating custom GitHub Actions with TypeScript.

## Features

- 🚀 TypeScript with full type support
- ⚡ @vercel/ncc for bundling
- 🧪 Vitest for testing
- 🔍 ESLint for linting
- 🔄 GitHub Actions for CI/CD
- 🏷️ Automated major version tagging

## Quick Start

Generate a project using this template:

```bash
biscuitcutter gh:biscuitcutter/github-action-template
```

## Template Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `action_name` | Human-readable action name | My GitHub Action |
| `action_slug` | Action name for repository (auto-generated) | my-github-action |
| `action_description` | Action description | A custom GitHub Action |
| `author_name` | Author's name | Your Name |
| `author_email` | Author's email | your.email@example.com |
| `github_username` | GitHub username | your-username |
| `node_version` | Node.js version (18, 20, 22) | 20 |
| `include_branding` | Include branding in action.yml | yes |
| `branding_icon` | Branding icon | zap |
| `branding_color` | Branding color | blue |

## Generated Project Structure

```
my-github-action/
├── .github/
│   └── workflows/
│       ├── ci.yml
│       └── release.yml
├── src/
│   ├── main.ts
│   └── main.test.ts
├── .gitignore
├── action.yml
├── eslint.config.mjs
├── LICENSE
├── package.json
├── README.md
├── tsconfig.json
└── vitest.config.ts
```

## Publishing Your Action

1. Push your code to GitHub
2. Create a release with a semantic version tag (e.g., `v1.0.0`)
3. The release workflow will automatically create/update the major version tag (`v1`)
4. Users can reference your action as `your-username/your-action@v1`

## License

MIT
