import type { Tool } from "./types";

export const CATEGORIES = [
  {
    name: "Specification",
    key: "specification",
    description: (
      <p>
        A language specification is a documentation artifact defining a set of
        rules and constraints that an implementation must follow to be
        considered compliant.
      </p>
    ),
  },
  {
    name: "JS\xa0Engine",
    key: "jsEngine",
    description: (
      <p>
        Low-level software responsible of the compilation and execution of
        JavaScript (and WebAssembly) code.
        <br />
        <br />
        Their main use is through web browsers and JavaScript runtimes relying
        on them to execute JavaScript code.
        <br />
        <br />
        <u>Note</u>: Languages like JavaScript and WebAssembly "exist" through
        the implementation of their respective specifications by JS engines.
      </p>
    ),
  },
  {
    name: "JS\xa0Runtime",
    key: "jsRuntime",
    description:
      "JavaScript execution environment providing APIs for I/O operations (networking, file-system access, multithreading, RTC) based on a event-driven, asynchronous architecture.",
  },
  {
    name: "Compiler\xa0/\xa0Transpiler",
    key: "compilerTranspiler",
    description: (
      <>
        <span>
          Tool transforming code from one language to another, or from a
          superset to a subset of a language (e.g. TS {"->"} JS, JSX {"->"} JS,
          ESNext {"->"} ES5, Sass {"->"} CSS...).
        </span>
        <br />
        <br />
        <span>
          Compilers are central parts of most modern frontend tools as they
          allow out-of-the-box usage of features like static typing (e.g.
          TypeScript) or higher-level syntax (e.g. JSX).
        </span>
      </>
    ),
  },
  {
    name: "Parser",
    key: "parser",
    description:
      "Tool taking source code as input and converting it into a structured representation, typically an Abstract Syntax Tree (AST), for further processing like compilation or interpretation.",
  },
  {
    name: "Bundler",
    key: "bundler",
    description: (
      <>
        <span>
          Tool taking multiple entry files (code or other static assets),
          resolving their dependencies, and combining them into optimized output
          files for efficient execution in a browser or runtime environment.
        </span>
        <br />
        <br />
        <span>
          Modern "meta-frameworks" and build tools (e.g. Vite, Next.js,
          Astro...) use bundlers internally to allow out-of-the-box optimization
          and usage of a lot of different assets (e.g. TypeScript files, CSS
          modules, images, JSON files...).
        </span>
        <br />
        <br />
        <span>
          Bundlers are also extensively used for the compilation and packaging
          of libraries.
        </span>
      </>
    ),
  },
  {
    name: "Minifier",
    key: "minifier",
    description:
      "Tool optimizing code by shrinking variable names, removing useless whitespaces / line-breaks / comments and dropping unused code.",
  },
  {
    name: "View\xa0Library",
    key: "viewLibrary",
  },
  {
    name: "Dev\xa0Server",
    key: "devServer",
    description: (
      <>
        <span>
          Local server providing development features like hot reloading, error
          reporting, and asset transformation facilitating code changes without
          needing a full production build.
        </span>
        <br />
        <br />
        <span>
          Modern "meta-frameworks" and build tools (e.g. Vite, Next.js,
          Astro...) are, at core, development servers orchestrating bundlers.
        </span>
      </>
    ),
  },
  {
    name: "Type\xa0Checker",
    key: "typeChecker",
    description:
      "Tool that statically validates that values conform to expected data-types in order to catch type-errors early.",
  },
  {
    name: "Linter",
    key: "linter",
    description:
      "Tool statically analyzing code to find problematic patterns or code that doesn't adhere to configured style guidelines.",
  },
  {
    name: "Formatter",
    key: "formatter",
    description:
      "Tool automatically formatting code according to a set of rules, typically to enforce a consistent style across a codebase.",
  },
  {
    name: "Test\xa0Runner",
    key: "testRunner",
    description:
      "Tool executing tests and reporting results, typically providing features like test isolation, parallelization, and code coverage.",
  },
  {
    name: "Package\xa0Manager",
    key: "packageManager",
    description: (
      <>
        <span>
          Tool allowing the management (installation, uninstallation, update) of
          dependencies in JavaScript projects. They provide features like
          versioning, dependency resolution, and version locking through
          lockfiles.
        </span>
        <br />
        <br />
        <span>
          Package managers rely on registries to fetch packages and their
          metadata: the most known and used registry is the{" "}
          <a
            className="underline"
            href="https://www.npmjs.com/"
            target="blank"
            rel="noopener noreferrer"
          >
            npm registry
          </a>
          .
        </span>
      </>
    ),
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
    related: ["CSS"],
    description: (
      <>
        <p>
          ECMAScript is a standard specification for scripting languages. Most
          well-known implementations of this standard are JavaScript and
          ActionScript.
          <br />
          <br />
          While JavaScript includes I/O features, networking features, storage
          features, and much more, ECMAScript is a standard that defines only
          the core features of the language.
          <br />
          <br />
          The ECMAScript specification is developed by the{" "}
          <a
            className="underline"
            href="https://tc39.es/ecma262/"
            target="_blank"
            rel="noopener noreferrer"
          >
            ECMA International Technical Committee 39
          </a>
          .
        </p>
      </>
    ),
    links: [
      {
        label: "ECMAScript language specification",
        href: "https://tc39.es/ecma262/",
      },
    ],
    pos: { x: 246.3052188541994, y: -596.693673127955 },
  },
  {
    name: "Wasm",
    specification: true,
    picto:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/WebAssembly_Logo.svg/262px-WebAssembly_Logo.svg.png",
    related: ["ECMAScript"],
    description: (
      <>
        <p>
          WebAssembly (Wasm) is a standard specification for a binary
          instruction format running on stack-based virtual machines. It is
          designed as a portable compilation target for high-level languages
          like C/C++/Rust, enabling code to run in web browsers at near-native
          speed.
          <br />
          <br />
          Wasm is developed by the{" "}
          <a
            className="underline"
            href="https://webassembly.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            WebAssembly Community Group
          </a>
          .
        </p>
      </>
    ),
    links: [
      {
        label: "WebAssembly website",
        href: "https://webassembly.org/",
      },
    ],
    pos: { x: 302.31149305856997, y: -795.9354657801099 },
  },
  {
    name: "HTML",
    specification: true,
    picto: "https://svgl.app/library/html5.svg",
    related: ["Wasm"],
    pos: { x: 592.1794685795966, y: -699.0570102974008 },
  },
  {
    name: "CSS",
    specification: true,
    picto: "https://svgl.app/library/css.svg",
    related: ["HTML"],
    pos: { x: 509.53393002584306, y: -544.5381332075469 },
  },
  {
    name: "v8",
    jsEngine: true,
    picto: "https://v8.dev/_img/v8.svg",
    uses: ["ECMAScript"],
    pos: { x: 67.01843534325953, y: -542.8322736807563 },
  },
  {
    name: "SpiderMonkey",
    jsEngine: true,
    picto:
      "https://upload.wikimedia.org/wikipedia/commons/a/ae/SpiderMonkey_Logo.png",
    uses: ["ECMAScript"],
    pos: { x: 411.78079262933414, y: -369.0554367193823 },
  },
  {
    name: "JavaScriptCore",
    jsEngine: true,
    picto: "https://docs.webkit.org/assets/WebKit.svg",
    uses: ["ECMAScript"],
    pos: { x: 98.3180059315355, y: -765.2866930678401 },
  },
  {
    name: "Node.js",
    jsRuntime: true,
    picto: "https://svgl.app/library/nodejs.svg",
    uses: ["v8"],
    pos: { x: 119.78487018956817, y: -339.12199486552606 },
  },
  {
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
    pos: { x: -31.13248146536061, y: -906.0332534923546 },
  },
  {
    name: "WinterJS",
    jsRuntime: true,
    bundler: true,
    picto: "❄️",
    uses: ["SpiderMonkey"],
    pos: { x: 482.29155416426653, y: -181.2066068659387 },
  },
  {
    name: "Chrome",
    jsRuntime: true,
    picto: "https://svgl.app/library/chrome.svg",
    uses: ["v8"],
    pos: { x: -189.18245987007117, y: -599.2632511305004 },
  },
  {
    name: "Firefox",
    jsRuntime: true,
    picto: "https://svgl.app/library/firefox.svg",
    uses: ["SpiderMonkey"],
    pos: { x: 664.4765927680539, y: -347.818865029944 },
  },
  {
    name: "Safari",
    jsRuntime: true,
    picto: "https://svgl.app/library/safari.svg",
    uses: ["JavaScriptCore"],
    pos: { x: -214.19369269308655, y: -808.9398228254925 },
  },
  {
    name: "React",
    viewLibrary: true,
    picto: "https://svgl.app/library/react_dark.svg",
    pos: { x: -58.06429963253298, y: -34.83767498106292 },
  },
  {
    name: "Vue.js",
    viewLibrary: true,
    picto: "https://svgl.app/library/vue.svg",
    related: ["React"],
    pos: { x: -81.52622486585564, y: 164.0438743755371 },
  },
  {
    name: "Angular",
    viewLibrary: true,
    picto: "https://svgl.app/library/angular.svg",
    related: ["Vue.js"],
    pos: { x: 119.27422923260775, y: 212.07119884741195 },
  },
  {
    name: "Vite",
    devServer: true,
    picto: "https://svgl.app/library/vitejs.svg",
    uses: ["esbuild", "Rollup", "Rolldown"],
    pos: { x: -526.1213275213364, y: 268.5001722732571 },
  },
  {
    name: "Astro",
    devServer: true,
    picto: "https://svgl.app/library/astro.svg",
    uses: ["Vite"],
    pos: { x: -498.5321757459903, y: 69.35755612115844 },
  },
  {
    name: "Next.js",
    devServer: true,
    picto: "https://svgl.app/library/nextjs_icon_dark.svg",
    uses: ["Webpack", "Turbopack", "React"],
    pos: { x: -168.6625770666429, y: -168.14710421098167 },
  },
  {
    name: "Nuxt",
    devServer: true,
    picto: "https://svgl.app/library/nuxt.svg",
    uses: ["Vite", "Vue.js"],
    pos: { x: -298.6522220630414, y: 191.27908049501596 },
  },
  {
    name: "TypeScript",
    specification: true,
    typeChecker: true,
    compilerTranspiler: true,
    parser: true,
    picto: "https://svgl.app/library/typescript.svg",
    related: ["Flow"],
    pos: { x: 841.0701698094804, y: -148.15664838590854 },
  },
  {
    name: "Flow",
    typeChecker: true,
    compilerTranspiler: true,
    picto:
      "https://images.seeklogo.com/logo-png/27/2/flow-logo-png_seeklogo-273174.png",

    pos: { x: 908.1569682719157, y: 22.529444376202985 },
  },
  {
    name: "Acorn",
    parser: true,
    picto: "https://avatars.githubusercontent.com/u/34631683?s=48&v=4",
    pos: { x: -514.1797406040629, y: -241.2627508395356 },
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
    pos: { x: -665.5181029777923, y: -346.47272446896284 },
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
    pos: { x: 428.8349008379959, y: 114.02917621856683 },
  },
  {
    name: "Turbopack",
    bundler: true,
    picto: "https://svgl.app/library/turbopack.svg",
    uses: ["SWC"],
    pos: { x: 182.84092654817937, y: -35.6102629848007 },
  },
  {
    name: "esbuild",
    bundler: true,
    compilerTranspiler: true,
    minifier: true,
    picto: "https://svgl.app/library/esbuild.svg",
    pos: { x: -769.1503231113622, y: 236.20640409365623 },
  },
  {
    name: "Lightning\xa0CSS",
    parser: true,
    compilerTranspiler: true,
    bundler: true,
    minifier: true,
    picto: "⚡️",
    pos: { x: 729.3845958163022, y: 435.877239495677 },
  },
  {
    name: "Rollup",
    bundler: true,
    picto: "https://rollupjs.org/rollup-logo.svg",
    uses: ["Acorn", "Babel"],
    pos: { x: -664.7215093762428, y: -77.37321587266489 },
  },
  {
    name: "Rolldown",
    bundler: true,
    picto: "https://svgl.app/library/rolldown.svg",
    uses: ["Oxc"],
    pos: { x: -280.43310538839745, y: 420.80474737201945 },
  },
  {
    name: "Webpack",
    devServer: true,
    bundler: true,
    picto:
      "https://raw.githubusercontent.com/webpack/media/master/logo/icon-square-big.png",
    uses: ["Acorn", "Babel", "Terser"],
    pos: { x: -438.6304287237547, y: -444.3975456994178 },
  },
  {
    name: "Rspack",
    bundler: true,
    picto: "https://assets.rspack.dev/rspack/rspack-logo.svg",
    uses: ["SWC"],
    pos: { x: 633.3494977967713, y: 83.68094337095766 },
  },
  {
    name: "Parcel",
    bundler: true,
    picto: "https://svgl.app/library/parcel.svg",
    uses: ["SWC", "Lightning\xa0CSS"],
    pos: { x: 611.385868954014, y: 281.42815422516935 },
  },
  {
    name: "Terser",
    minifier: true,
    picto: "https://terser.org/img/terser-square-logo.svg",
    pos: { x: -472.9170815295258, y: -664.3079914467835 },
  },
  {
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
  {
    name: "Prettier",
    formatter: true,
    picto: "https://prettier.io/icon.png",
    related: ["Biome"],
    pos: { x: 170.32523993307007, y: 495.0787784960076 },
  },
  {
    name: "Biome",
    formatter: true,
    picto: "https://avatars.githubusercontent.com/u/140182603?s=48&v=4",
    pos: { x: 351.058283773523, y: 414.8054076904539 },
  },
  {
    name: "Eslint",
    linter: true,
    picto: "https://fr.eslint.org/icon-512.png",
    related: ["Oxc"],
    pos: { x: 19.228428542688768, y: 662.8283445785412 },
  },
  {
    name: "Jest",
    testRunner: true,
    picto: "https://svgl.app/library/jest.svg",
    uses: ["Babel"],
    pos: { x: -752.5796730299668, y: -509.50786545690585 },
  },
  {
    name: "Vitest",
    // devServer: true,
    testRunner: true,
    picto: "https://svgl.app/library/vitest.svg",
    uses: ["Vite"],
    pos: { x: -504.43193258132504, y: 483.3548639566473 },
  },
  {
    name: "Playwright",
    // devServer: true,
    testRunner: true,
    picto: "https://svgl.app/library/playwright.svg",
    uses: ["esbuild"],
    pos: { x: -905.6428292986814, y: 59.36082937139386 },
  },
  {
    name: "Cypress",
    // devServer: true,
    testRunner: true,
    picto: "https://svgl.app/library/cypress.svg",
    uses: ["Vite"],
    pos: { x: -694.535986449146, y: 444.75524177013205 },
  },
  {
    name: "npm",
    packageManager: true,
    picto: "https://svgl.app/library/npm.svg",
    related: ["pnpm"],
    pos: { x: -473.00711098718295, y: 755.5112190350385 },
  },
  {
    name: "pnpm",
    packageManager: true,
    picto: "https://svgl.app/library/pnpm.svg",
    related: ["yarn"],
    pos: { x: -284.6818593914294, y: 796.0703695907121 },
  },
  {
    name: "yarn",
    packageManager: true,
    picto: "https://svgl.app/library/yarn.svg",
    pos: { x: -108.3473556801319, y: 876.4847679960232 },
  },
  {
    name: "Sass",
    cssPreprocessor: true,
    picto: "https://svgl.app/library/sass.svg",
    related: ["PostCSS"],
    pos: { x: 280.0864804668708, y: 819.8871188637629 },
  },
  {
    name: "PostCSS",
    cssPostprocessor: true,
    picto: "https://svgl.app/library/postcss.svg",
    pos: { x: 451.57491388487125, y: 723.6298636886961 },
  },
  {
    name: "Tailwind",
    cssBuildSystem: true,
    picto: "https://svgl.app/library/tailwindcss.svg",
    uses: ["Lightning\xa0CSS", "PostCSS"],
    pos: { x: 604.1196342922309, y: 594.3508429689566 },
  },
] as const satisfies Tool[];

// trick to ensure TOOLS['uses'] is an array of valid TOOLS['name']
type ToolName = (typeof TOOLS)[number]["name"];
TOOLS satisfies (Tool & { uses?: ToolName[]; related?: ToolName[] })[];
