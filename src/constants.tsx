import type { Tool as ToolType } from "./types";
import { categoriesEn, categoriesFr } from "./i18n/categories";
import { toolsEn, toolsFr } from "./i18n/tools";
import type { Language } from "./i18n";

const CATEGORY_KEYS = [
  "specification",
  "jsEngine",
  "jsRuntime",
  "typeChecker",
  "viewLibrary",
  "compilerTranspiler",
  "parser",
  "bundler",
  "minifier",
  "devServer",
  "linter",
  "formatter",
  "testRunner",
  "packageManager",
  "cssBuildSystem",
] as const;

export function getCategories(language: Language) {
  const translations = language === "fr" ? categoriesFr : categoriesEn;
  return CATEGORY_KEYS.map((key) => ({
    key,
    name: translations[key].name.replace(/\s/g, "\xa0"), // Convert spaces to non-breaking spaces
    description: translations[key].description,
  }));
}

// For backward compatibility - default to English
export const CATEGORIES = getCategories("en");

export { CATEGORY_KEYS };

// Function to get tool translation
export function getToolTranslation(toolName: string, language: Language) {
  const translations = language === "fr" ? toolsFr : toolsEn;
  return translations[toolName];
}

// Helper function to get localized tool description and links
export function getLocalizedTool(tool: any, language: Language) {
  const translation = getToolTranslation(tool.name, language);

  return {
    ...tool,
    description: translation?.description || tool.description,
    links: translation?.links || tool.links,
  };
}

export const TOOLS = {
  ECMAScript: {
    name: "ECMAScript",
    specification: true,
    picto: "https://svgl.app/library/javascript.svg",
    related: ["CSS"],
    pos: { x: 246.3052188541994, y: -596.693673127955 },
  },
  Wasm: {
    name: "Wasm",
    specification: true,
    picto:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/WebAssembly_Logo.svg/262px-WebAssembly_Logo.svg.png",
    related: ["ECMAScript"],
    pos: { x: 302.31149305856997, y: -795.9354657801099 },
  },
  HTML: {
    name: "HTML",
    specification: true,
    picto: "https://svgl.app/library/html5.svg",
    related: ["Wasm"],
    pos: { x: 592.1794685795966, y: -699.0570102974008 },
  },
  CSS: {
    name: "CSS",
    specification: true,
    picto: "https://svgl.app/library/css.svg",
    related: ["HTML"],
    pos: { x: 509.53393002584306, y: -544.5381332075469 },
  },
  v8: {
    name: "v8",
    jsEngine: true,
    picto: "https://v8.dev/_img/v8.svg",
    uses: ["ECMAScript"],
    pos: { x: 67.01843534325953, y: -542.8322736807563 },
  },
  SpiderMonkey: {
    name: "SpiderMonkey",
    jsEngine: true,
    picto:
      "https://upload.wikimedia.org/wikipedia/commons/a/ae/SpiderMonkey_Logo.png",
    uses: ["ECMAScript"],
    pos: { x: 411.78079262933414, y: -369.0554367193823 },
  },
  JavaScriptCore: {
    name: "JavaScriptCore",
    jsEngine: true,
    picto: "https://docs.webkit.org/assets/WebKit.svg",
    uses: ["ECMAScript"],
    pos: { x: 98.3180059315355, y: -765.2866930678401 },
  },
  Nodejs: {
    name: "Nodejs",
    jsRuntime: true,
    picto: "https://svgl.app/library/nodejs.svg",
    uses: ["v8"],
    pos: { x: 119.78487018956817, y: -339.12199486552606 },
  },
  Deno: {
    name: "Deno",
    jsRuntime: true,
    compilerTranspiler: true,
    devServer: true,
    typeChecker: true,
    linter: true,
    formatter: true,
    testRunner: true,
    packageManager: true,
    picto: "https://svgl.app/library/deno.svg",
    uses: ["v8"],
    pos: { x: -105.70469904882073, y: -428.1595738996822 },
  },
  Bun: {
    name: "Bun",
    jsRuntime: true,
    devServer: true,
    compilerTranspiler: true,
    bundler: true,
    testRunner: true,
    packageManager: true,
    picto: "https://svgl.app/library/bun.svg",
    uses: ["JavaScriptCore"],
    pos: { x: -31.13248146536061, y: -906.0332534923546 },
  },
  WinterJS: {
    name: "WinterJS",
    jsRuntime: true,
    picto: "❄️",
    uses: ["SpiderMonkey"],
    pos: { x: 482.29155416426653, y: -181.2066068659387 },
    links: [
      {
        label: "Service Worker API specification",
        href: "https://w3c.github.io/ServiceWorker/",
      },
    ],
  },
  Chrome: {
    name: "Chrome",
    jsRuntime: true,
    picto: "https://svgl.app/library/chrome.svg",
    uses: ["v8"],
    pos: { x: -189.18245987007117, y: -599.2632511305004 },
    links: [
      {
        label: "The browser event-loop",
        href: "https://the-browser-event-loop.netlify.app/",
      },
    ],
  },
  Firefox: {
    name: "Firefox",
    jsRuntime: true,
    picto: "https://svgl.app/library/firefox.svg",
    uses: ["SpiderMonkey"],
    pos: { x: 664.4765927680539, y: -347.818865029944 },
  },
  Safari: {
    name: "Safari",
    jsRuntime: true,
    picto: "https://svgl.app/library/safari.svg",
    uses: ["JavaScriptCore"],
    pos: { x: -214.19369269308655, y: -808.9398228254925 },
  },
  React: {
    name: "React",
    viewLibrary: true,
    picto: "https://svgl.app/library/react_dark.svg",
    related: ["Angular"],
    pos: { x: -58.06429963253298, y: -34.83767498106292 },
  },
  "Vue.js": {
    name: "Vue.js",
    viewLibrary: true,
    picto: "https://svgl.app/library/vue.svg",
    related: ["React"],
    pos: { x: -81.52622486585564, y: 164.0438743755371 },
  },
  Angular: {
    name: "Angular",
    viewLibrary: true,
    picto: "https://svgl.app/library/angular.svg",
    related: ["Vue.js"],
    pos: { x: 119.27422923260775, y: 212.07119884741195 },
  },
  Vite: {
    name: "Vite",
    devServer: true,
    picto: "https://svgl.app/library/vitejs.svg",
    uses: ["esbuild", "Rollup", "Rolldown"],
    pos: { x: -526.1213275213364, y: 268.5001722732571 },
  },
  Astro: {
    name: "Astro",
    devServer: true,
    picto: "https://svgl.app/library/astro.svg",
    uses: ["Vite"],
    pos: { x: -498.5321757459903, y: 69.35755612115844 },
  },
  "Next.js": {
    name: "Next.js",
    devServer: true,
    picto: "https://svgl.app/library/nextjs_icon_dark.svg",
    uses: ["Webpack", "Turbopack", "React"],
    pos: { x: -168.6625770666429, y: -168.14710421098167 },
  },
  Nuxt: {
    name: "Nuxt",
    devServer: true,
    picto: "https://svgl.app/library/nuxt.svg",
    uses: ["Vite", "Vue.js"],
    pos: { x: -298.6522220630414, y: 191.27908049501596 },
  },
  TypeScript: {
    name: "TypeScript",
    specification: true,
    typeChecker: true,
    compilerTranspiler: true,
    parser: true,
    picto: "https://svgl.app/library/typescript.svg",
    related: ["Flow"],
    pos: { x: 841.0701698094804, y: -148.15664838590854 },
  },
  Flow: {
    name: "Flow",
    typeChecker: true,
    compilerTranspiler: true,
    picto:
      "https://images.seeklogo.com/logo-png/27/2/flow-logo-png_seeklogo-273174.png",
    pos: { x: 908.1569682719157, y: 22.529444376202985 },
  },
  Acorn: {
    name: "Acorn",
    parser: true,
    picto: "https://avatars.githubusercontent.com/u/34631683?s=48&v=4",
    pos: { x: -514.1797406040629, y: -241.2627508395356 },
  },
  Babel: {
    name: "Babel",
    compilerTranspiler: true,
    parser: true,
    picto: "https://svgl.app/library/babel.svg",
    pos: { x: -665.5181029777923, y: -346.47272446896284 },
  },
  SWC: {
    name: "SWC",
    compilerTranspiler: true,
    parser: true,
    minifier: true,
    picto: "https://svgl.app/library/swc.svg",
    pos: { x: 428.8349008379959, y: 114.02917621856683 },
  },
  Turbopack: {
    name: "Turbopack",
    bundler: true,
    picto: "https://svgl.app/library/turbopack.svg",
    uses: ["SWC"],
    pos: { x: 182.84092654817937, y: -35.6102629848007 },
  },
  esbuild: {
    name: "esbuild",
    bundler: true,
    compilerTranspiler: true,
    minifier: true,
    picto: "https://svgl.app/library/esbuild.svg",
    pos: { x: -769.1503231113622, y: 236.20640409365623 },
  },
  "Lightning\xa0CSS": {
    name: "Lightning\xa0CSS",
    parser: true,
    compilerTranspiler: true,
    bundler: true,
    minifier: true,
    picto: "⚡️",
    pos: { x: 729.3845958163022, y: 435.877239495677 },
  },
  Rollup: {
    name: "Rollup",
    bundler: true,
    picto: "https://rollupjs.org/rollup-logo.svg",
    uses: ["Acorn", "Babel"],
    pos: { x: -664.7215093762428, y: -77.37321587266489 },
  },
  Rolldown: {
    name: "Rolldown",
    bundler: true,
    picto: "https://svgl.app/library/rolldown.svg",
    uses: ["Oxc"],
    pos: { x: -280.43310538839745, y: 420.80474737201945 },
  },
  Webpack: {
    name: "Webpack",
    devServer: true,
    bundler: true,
    picto:
      "https://raw.githubusercontent.com/webpack/media/master/logo/icon-square-big.png",
    uses: ["Acorn", "Babel", "Terser"],
    pos: { x: -438.6304287237547, y: -444.3975456994178 },
  },
  Rspack: {
    name: "Rspack",
    bundler: true,
    picto: "https://assets.rspack.dev/rspack/rspack-logo.svg",
    uses: ["SWC"],
    pos: { x: 633.3494977967713, y: 83.68094337095766 },
  },
  Parcel: {
    name: "Parcel",
    bundler: true,
    picto: "https://svgl.app/library/parcel.svg",
    uses: ["SWC", "Lightning\xa0CSS"],
    pos: { x: 611.385868954014, y: 281.42815422516935 },
  },
  Terser: {
    name: "Terser",
    minifier: true,
    picto: "https://terser.org/img/terser-square-logo.svg",
    pos: { x: -472.9170815295258, y: -664.3079914467835 },
  },
  Oxc: {
    name: "Oxc",
    parser: true,
    compilerTranspiler: true,
    minifier: true,
    linter: true,
    formatter: true,
    picto: "https://svgl.app/library/oxc.svg",
    related: ["Prettier"],
    pos: { x: -45.81477575106551, y: 488.07182627220885 },
  },
  Prettier: {
    name: "Prettier",
    formatter: true,
    picto: "https://prettier.io/icon.png",
    related: ["Biome"],
    pos: { x: 170.32523993307007, y: 495.0787784960076 },
  },
  Biome: {
    name: "Biome",
    formatter: true,
    linter: true,
    picto: "https://avatars.githubusercontent.com/u/140182603?s=48&v=4",
    pos: { x: 351.058283773523, y: 414.8054076904539 },
  },
  Eslint: {
    name: "Eslint",
    linter: true,
    picto: "https://fr.eslint.org/icon-512.png",
    related: ["Oxc"],
    pos: { x: 19.228428542688768, y: 662.8283445785412 },
  },
  Jest: {
    name: "Jest",
    testRunner: true,
    picto: "https://svgl.app/library/jest.svg",
    uses: ["Babel"],
    pos: { x: -752.5796730299668, y: -509.50786545690585 },
  },
  Vitest: {
    name: "Vitest",
    testRunner: true,
    picto: "https://svgl.app/library/vitest.svg",
    uses: ["Vite"],
    pos: { x: -504.43193258132504, y: 483.3548639566473 },
  },
  Playwright: {
    name: "Playwright",
    testRunner: true,
    picto: "https://svgl.app/library/playwright.svg",
    uses: ["Vite"],
    pos: { x: -905.6428292986814, y: 59.36082937139386 },
  },
  Cypress: {
    name: "Cypress",
    testRunner: true,
    picto: "https://svgl.app/library/cypress.svg",
    uses: ["Vite"],
    pos: { x: -694.535986449146, y: 444.75524177013205 },
  },
  npm: {
    name: "npm",
    packageManager: true,
    picto: "https://svgl.app/library/npm.svg",
    related: ["pnpm"],
    pos: { x: -473.00711098718295, y: 755.5112190350385 },
  },
  pnpm: {
    name: "pnpm",
    packageManager: true,
    picto: "https://svgl.app/library/pnpm.svg",
    related: ["yarn"],
    pos: { x: -284.6818593914294, y: 796.0703695907121 },
  },
  yarn: {
    name: "yarn",
    packageManager: true,
    picto: "https://svgl.app/library/yarn.svg",
    pos: { x: -108.3473556801319, y: 876.4847679960232 },
  },
  Sass: {
    name: "Sass",
    specification: true,
    compilerTranspiler: true,
    picto: "https://svgl.app/library/sass.svg",
    related: ["PostCSS"],
    pos: { x: 280.0864804668708, y: 819.8871188637629 },
  },
  PostCSS: {
    name: "PostCSS",
    compilerTranspiler: true,
    picto: "https://svgl.app/library/postcss.svg",
    pos: { x: 451.57491388487125, y: 723.6298636886961 },
  },
  Tailwind: {
    name: "Tailwind",
    cssBuildSystem: true,
    picto: "https://svgl.app/library/tailwindcss.svg",
    uses: ["Lightning\xa0CSS"],
    related: ["PostCSS"],
    pos: { x: 604.1196342922309, y: 594.3508429689566 },
  },
} as const satisfies Record<string, ToolType>;

// trick to ensure TOOLS['uses'] is an array of valid TOOLS['name']
type ToolName = (typeof TOOLS)[keyof typeof TOOLS]["name"];
TOOLS satisfies Record<
  string,
  ToolType & { uses?: ToolName[]; related?: ToolName[] }
>;
