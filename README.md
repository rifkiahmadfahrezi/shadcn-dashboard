# Next.js Starter Template

A modern, production-ready Next.js boilerplate designed to kickstart projects without starting from scratch. Pre-configured with linting, formatting, type checking, pre-commit hooks, and data fetching tools.

## 🚀 Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router & React 19)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **HTTP Client**: [xior](https://github.com/suhaotian/xior) (Axios alternative)
- **State & Data Fetching**: [TanStack Query v5](https://tanstack.com/query/latest)

## ✨ Features & Setup

- **Oxlint & Oxfmt**: Fast Rust-based linter and formatter with automated Tailwind class sorting and formatting on save.
- **Husky & lint-staged**: Git pre-commit hooks that automatically check and format staged code before committing.
- **Pre-configured Providers & Utilities**:
  - `xior` HTTP client set up in `@/lib/api`.
  - `QueryProvider` integrated in `@/providers/query-provider` and wrapped in `app/layout.tsx`.
- **VS Code Settings**: Pre-configured `.vscode/settings.json` for format on save out-of-the-box.

## 🛠️ Available Scripts

Using **Bun** (or your preferred package manager):

| Command                | Description                                         |
| ---------------------- | --------------------------------------------------- |
| `bun dev`              | Runs the development server                         |
| `bun run build`        | Builds the application for production               |
| `bun start`            | Starts the production server                        |
| `bun run lint`         | Runs Oxlint to check for code issues                |
| `bun run lint:fix`     | Runs Oxlint and auto-fixes issues                   |
| `bun run format`       | Formats all files using Oxfmt                       |
| `bun run format:check` | Checks code formatting                              |
| `bun run type-check`   | Runs TypeScript type checker without emitting files |

## 📁 Project Structure

```
├── app/
│   ├── globals.css        # Tailwind CSS v4 styling
│   ├── layout.tsx         # Root layout with QueryProvider
│   └── page.tsx           # Boilerplate showcase home page
├── lib/
│   └── api.ts             # xior HTTP client instance
├── providers/
│   └── query-provider.tsx # TanStack Query client provider
├── .husky/                # Git pre-commit hook
├── .oxlintrc.json         # Oxlint configuration
├── .oxfmtrc.json          # Oxfmt configuration
└── tsconfig.json          # TypeScript config (with @/* path alias)
```
