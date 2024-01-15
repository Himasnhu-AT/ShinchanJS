# Installation

[[toc]]

Certainly! Below is an installation guide for your ShinchanJS toy language based on the provided `package.json`. This guide assumes that users have Node.js and npm already installed on their machines.

### 1. Prerequisites

- **Node.js and npm:** Ensure that you have Node.js (version 18 or higher) and npm (Node.js package manager) installed on your system. You can download them from [https://nodejs.org/](https://nodejs.org/).

### 2. Clone the Repository

```bash
git clone https://github.com/Himasnhu-AT/ShinchanJS.git
cd ShinchanJS
```

### 3. Install Dependencies

```bash
npm install
```

This command installs the project dependencies, including Turbo, ESLint configurations, Prettier, and other development tools.

### 4. Build the Project

```bash
npm run build
```

This command builds the ShinchanJS project using Turbo. The `build` script is configured to use `turbo build`.

### 5. Run in Development Mode

```bash
npm run dev
```

This command starts the project in development mode using Turbo. The `dev` script is configured to use `turbo dev`.

### 6. Linting

```bash
npm run lint
```

This command runs ESLint to lint your TypeScript code. The `lint` script is configured to use `turbo lint`.

### 7. Code Formatting

```bash
npm run format
```

This command uses Prettier to format TypeScript and Markdown files. The `format` script is configured to use `prettier`.

### 8. CLI Setup

```bash
npm run cli <path-to-file>
```

::: warning
this is experimental
:::

This command sets up the CLI for the ShinchanJS toy language. It goes into the `packages/cli` directory, compiles TypeScript (`npx tsc`), modifies the `cli.js` file to make it executable, and finally, links the CLI globally with `npm link`.

### 9. Run ShinchanJS CLI

```bash
shinchanjs your-command
```

Now, you can run your ShinchanJS CLI using the specified command. Replace `your-command` with an actual command related to your Shinchan toy language.

## Additional Notes

- **Bug Reporting:**
  If you encounter any issues or want to provide feedback, please submit a bug report on the [ShinchanJS GitHub Issues](https://github.com/Himasnhu-AT/ShinchanJS.git).

- **Homepage:**
  You can visit the [ShinchanJS GitHub Repository](https://github.com/Himasnhu-AT/ShinchanJS.git) for more information and updates.

- **License:**
  ShinchanJS is licensed under the [MIT License](/LICENSE.md). Review the license file for details.
