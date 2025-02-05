import type { Tool } from "./types";

export const CATEGORIES = [
  {
    name: "Specification",
    key: "specification",
  },
  {
    name: "JS\xa0Engine",
    key: "jsEngine",
  },
  {
    name: "JS\xa0Runtime",
    key: "jsRuntime",
  },
  {
    name: "Compiler\xa0/\xa0Transpiler",
    key: "compilerTranspiler",
  },
  {
    name: "Parser",
    key: "parser",
  },
  {
    name: "Bundler",
    key: "bundler",
  },
  {
    name: "Minifier",
    key: "minifier",
  },
  {
    name: "View\xa0Library",
    key: "viewLibrary",
  },
  {
    name: "Dev\xa0Server",
    key: "devServer",
  },
  {
    name: "Type\xa0Checker",
    key: "typeChecker",
  },
  {
    name: "Linter",
    key: "linter",
  },
  {
    name: "Formatter",
    key: "formatter",
  },
  {
    name: "Test\xa0Runner",
    key: "testRunner",
  },
  {
    name: "Package\xa0Manager",
    key: "packageManager",
  },
  {
    name: "CSS\xa0Preprocessor",
    key: "cssPreprocessor",
  },
  {
    name: "CSS\xa0Postprocessor",
    key: "cssPostprocessor",
  },
  {
    name: "CSS\xa0Build\xa0System",
    key: "cssBuildSystem",
  },
] as const;

export const CATEGORY_KEYS = CATEGORIES.map((category) => category.key);

export const TOOLS = [
  {
    name: "ECMAScript",
    specification: true,
    picto: "https://svgl.app/library/javascript.svg",
  },
  {
    name: "v8",
    jsEngine: true,
    picto: "https://v8.dev/_img/v8.svg",
    uses: ["ECMAScript"],
  },
  {
    name: "SpiderMonkey",
    jsEngine: true,
    picto:
      "https://upload.wikimedia.org/wikipedia/commons/a/ae/SpiderMonkey_Logo.png",
    uses: ["ECMAScript"],
  },
  {
    name: "JavaScriptCore",
    jsEngine: true,
    picto: "https://docs.webkit.org/assets/WebKit.svg",
    uses: ["ECMAScript"],
  },
  {
    name: "Node.js",
    jsRuntime: true,
    picto: "https://svgl.app/library/nodejs.svg",
    uses: ["v8"],
  },
  {
    name: "Deno",
    jsRuntime: true,
    devServer: true,
    typeChecker: true,
    linter: true,
    formatter: true,
    testRunner: true,
    packageManager: true,
    picto: "https://svgl.app/library/deno.svg",
    uses: ["v8"],
  },
  {
    name: "Bun",
    jsRuntime: true,
    devServer: true,
    compilerTranspiler: true,
    bundler: true,
    linter: true,
    formatter: true,
    testRunner: true,
    packageManager: true,
    picto: "https://svgl.app/library/bun.svg",
    uses: ["JavaScriptCore"],
  },
  {
    name: "WinterJS",
    jsRuntime: true,
    bundler: true,
    picto: "❄️",
    uses: ["SpiderMonkey"],
  },
  {
    name: "React",
    viewLibrary: true,
    picto: "https://svgl.app/library/react_dark.svg",
  },
  {
    name: "Vue.js",
    viewLibrary: true,
    picto: "https://svgl.app/library/vue.svg",
    related: ["React"],
  },
  {
    name: "Angular",
    viewLibrary: true,
    picto: "https://svgl.app/library/angular.svg",
    related: ["Vue.js"],
  },
  {
    name: "Vite",
    devServer: true,
    picto: "https://svgl.app/library/vitejs.svg",
    uses: ["esbuild", "Rollup"],
  },
  {
    name: "Astro",
    devServer: true,
    picto: "https://svgl.app/library/astro.svg",
    uses: ["Vite"],
  },
  {
    name: "Next.js",
    devServer: true,
    picto: "https://svgl.app/library/nextjs_icon_dark.svg",
    uses: ["Webpack", "Turbopack", "React"],
  },
  {
    name: "Nuxt",
    devServer: true,
    picto: "https://svgl.app/library/nuxt.svg",
    uses: ["Vite", "Vue.js"],
  },
  {
    name: "TypeScript",
    typeChecker: true,
    compilerTranspiler: true,
    parser: true,
    picto: "https://svgl.app/library/typescript.svg",
    related: ["Flow"],
  },
  {
    name: "Flow",
    typeChecker: true,
    compilerTranspiler: true,
    picto:
      "https://images.seeklogo.com/logo-png/27/2/flow-logo-png_seeklogo-273174.png",
  },
  {
    name: "Acorn",
    parser: true,
    picto: "https://avatars.githubusercontent.com/u/34631683?s=48&v=4",
  },
  // {
  //   name: "esprima",
  //   parser: true,
  //   picto: "https://avatars.githubusercontent.com/u/70142?s=48&v=4",
  // },
  {
    name: "Babel",
    compilerTranspiler: true,
    parser: true,
    picto: "https://svgl.app/library/babel.svg",
  },
  // {
  //   name: "Sucrase",
  //   compilerTranspiler: true,
  //   parser: true,
  //   picto: "🧁",
  // },
  {
    name: "SWC",
    compilerTranspiler: true,
    parser: true,
    minifier: true,
    picto: "https://svgl.app/library/swc.svg",
  },
  {
    name: "Turbopack",
    bundler: true,
    picto: "https://svgl.app/library/turbopack.svg",
    uses: ["SWC"],
  },
  {
    name: "esbuild",
    bundler: true,
    compilerTranspiler: true,
    minifier: true,
    picto: "https://svgl.app/library/esbuild.svg",
  },
  {
    name: "Lightning\xa0CSS",
    minifier: true,
    linter: true,
    formatter: true,
    picto: "⚡️",
  },
  {
    name: "Rollup",
    bundler: true,
    picto: "https://rollupjs.org/rollup-logo.svg",
    uses: ["Acorn"],
  },
  {
    name: "Webpack",
    devServer: true,
    bundler: true,
    picto:
      "https://raw.githubusercontent.com/webpack/media/master/logo/icon-square-big.png",
    uses: ["Acorn", "Babel", "Terser"],
  },
  {
    name: "Rspack",
    bundler: true,
    minifier: true,
    picto: "https://assets.rspack.dev/rspack/rspack-logo.svg",
    uses: ["SWC"],
  },
  {
    name: "Parcel",
    bundler: true,
    picto: "https://svgl.app/library/parcel.svg",
    uses: ["SWC", "Lightning\xa0CSS"],
  },
  {
    name: "Terser",
    minifier: true,
    picto: "https://terser.org/img/terser-square-logo.svg",
  },
  {
    name: "Oxc",
    parser: true,
    minifier: true,
    linter: true,
    formatter: true,
    picto: "https://svgl.app/library/oxc.svg",
    related: ["Prettier"],
  },
  {
    name: "Prettier",
    formatter: true,
    picto: "https://prettier.io/icon.png",
    related: ["Biome"],
  },
  {
    name: "Biome",
    formatter: true,
    picto: "https://avatars.githubusercontent.com/u/140182603?s=48&v=4",
  },
  {
    name: "Eslint",
    linter: true,
    picto: "https://fr.eslint.org/icon-512.png",
    related: ["Oxc"],
  },
  {
    name: "Jest",
    testRunner: true,
    picto: "https://svgl.app/library/jest.svg",
    uses: ["Babel"],
  },
  {
    name: "Vitest",
    // devServer: true,
    testRunner: true,
    picto: "https://svgl.app/library/vitest.svg",
    uses: ["Vite"],
  },
  {
    name: "Playwright",
    // devServer: true,
    testRunner: true,
    picto: "https://svgl.app/library/playwright.svg",
    uses: ["esbuild"],
  },
  {
    name: "Cypress",
    // devServer: true,
    testRunner: true,
    picto: "https://svgl.app/library/cypress.svg",
    uses: ["Vite"],
  },
  {
    name: "npm",
    packageManager: true,
    picto: "https://svgl.app/library/npm.svg",
    related: ["pnpm"],
  },
  {
    name: "pnpm",
    packageManager: true,
    picto: "https://svgl.app/library/pnpm.svg",
    related: ["yarn"],
  },
  {
    name: "yarn",
    packageManager: true,
    picto: "https://svgl.app/library/yarn.svg",
  },
  {
    name: "Sass",
    cssPreprocessor: true,
    picto: "https://svgl.app/library/sass.svg",
    related: ["PostCSS"],
  },
  {
    name: "PostCSS",
    cssPostprocessor: true,
    picto: "https://svgl.app/library/postcss.svg",
  },
  {
    name: "Tailwind",
    cssBuildSystem: true,
    picto: "https://svgl.app/library/tailwindcss.svg",
    uses: ["Lightning\xa0CSS", "PostCSS"],
  },
] as const satisfies Tool[];

// trick to ensure TOOLS['uses'] is an array of valid TOOLS['name']
type ToolName = (typeof TOOLS)[number]["name"];
TOOLS satisfies (Tool & { uses?: ToolName[]; related?: ToolName[] })[];
