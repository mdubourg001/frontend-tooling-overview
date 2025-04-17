import { Tool } from "./components/Tool";
import { ToolPicto } from "./components/ToolPicto";
import type { Tool as ToolType } from "./types";

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
    name: "Type\xa0Checker",
    key: "typeChecker",
    description:
      "Tool that statically validates that values conform to expected data-types in order to catch type-errors early.",
  },
  {
    name: "View\xa0Library",
    key: "viewLibrary",
    description: (
      <p>
        Libraries providing a set of tools to build user interfaces (UI) using
        components.
      </p>
    ),
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
  // {
  //   name: "CSS\xa0Preprocessor",
  //   key: "cssPreprocessor",
  // },
  // {
  //   name: "CSS\xa0Postprocessor",
  //   key: "cssPostprocessor",
  // },
  {
    name: "CSS\xa0Build\xa0System",
    key: "cssBuildSystem",
    description:
      "Tool providing a set of utilities to generate CSS from higher-level languages or syntaxes.",
  },
] as const;

export const CATEGORY_KEYS = CATEGORIES.map((category) => category.key);

export const TOOLS = {
  ECMAScript: {
    name: "ECMAScript",
    specification: true,
    picto: "https://svgl.app/library/javascript.svg",
    related: ["CSS"],
    links: [
      {
        label: "ECMAScript language specification",
        href: "https://tc39.es/ecma262/",
      },
    ],
    pos: { x: 246.3052188541994, y: -596.693673127955 },
    description: () => (
      <>
        <p>
          ECMAScript is a standard specification for scripting languages. Most
          well-known implementations of this standard are JavaScript and
          ActionScript.
          <br />
          <br />
          While JavaScript runtime implementation feature I/O capabalities,
          networking capabalities, storage capabalities and much more,
          ECMAScript is a standard that defines only the core features of the
          language.
        </p>
      </>
    ),
  },
  Wasm: {
    name: "Wasm",
    specification: true,
    picto:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/WebAssembly_Logo.svg/262px-WebAssembly_Logo.svg.png",
    related: ["ECMAScript"],
    links: [
      {
        label: "WebAssembly website",
        href: "https://webassembly.org/",
      },
    ],
    pos: { x: 302.31149305856997, y: -795.9354657801099 },
    description: () => (
      <>
        <p>
          WebAssembly (Wasm) is a standard specification for a binary
          instruction format running on stack-based virtual machines. It is
          designed as a portable compilation target for high-level languages
          like C/C++/Rust, enabling code to run in web browsers at near-native
          speed.
        </p>
      </>
    ),
  },
  HTML: {
    name: "HTML",
    specification: true,
    picto: "https://svgl.app/library/html5.svg",
    related: ["Wasm"],
    pos: { x: 592.1794685795966, y: -699.0570102974008 },
    links: [
      {
        label: "HTML living standard",
        href: "https://html.spec.whatwg.org/",
      },
      {
        label: "Browser engine - Wikipedia",
        href: "https://en.wikipedia.org/wiki/Browser_engine",
      },
    ],
    description: () => (
      <p>
        HTML is a standard specification for the markup language structuring
        content on the web.
        <br />
        <br />
        Browser's rendering engines are responsible for implementing the HTML
        specification to parse and render web pages.
      </p>
    ),
  },
  CSS: {
    name: "CSS",
    specification: true,
    picto: "https://svgl.app/library/css.svg",
    related: ["HTML"],
    pos: { x: 509.53393002584306, y: -544.5381332075469 },
    links: [
      {
        label: "CSS specifications",
        href: "https://www.w3.org/Style/CSS/Overview.en.html",
      },
    ],
    description: () => (
      <p>
        CSS is a standard specification for the styling language used to
        describe the presentation of a document written in HTML.
        <br />
        <br />
        Browser's rendering engines are responsible for implementing the CSS
        specification to parse and render web pages.
      </p>
    ),
  },
  v8: {
    name: "v8",
    jsEngine: true,
    picto: "https://v8.dev/_img/v8.svg",
    uses: ["ECMAScript"],
    pos: { x: 67.01843534325953, y: -542.8322736807563 },
    description: ({ handleToolClick }) => (
      <>
        <p>
          v8 is an open-source{" "}
          <Tool
            data={TOOLS["ECMAScript"]}
            size="small"
            withHandles={false}
            handleClick={handleToolClick}
          />{" "}
          and{" "}
          <Tool
            data={TOOLS["Wasm"]}
            size="small"
            withHandles={false}
            handleClick={handleToolClick}
          />{" "}
          engine developed by Google.
          <br />
          <br />
          While it is the engine used by (and primarily developed for) the{" "}
          <Tool
            data={TOOLS["Chrome"]}
            size="small"
            withHandles={false}
            handleClick={handleToolClick}
          />{" "}
          web browser, it is also used in the{" "}
          <Tool
            data={TOOLS["Nodejs"]}
            size="small"
            withHandles={false}
            handleClick={handleToolClick}
          />{" "}
          runtime environment and other applications.
        </p>
      </>
    ),
  },
  SpiderMonkey: {
    name: "SpiderMonkey",
    jsEngine: true,
    picto:
      "https://upload.wikimedia.org/wikipedia/commons/a/ae/SpiderMonkey_Logo.png",
    uses: ["ECMAScript"],
    pos: { x: 411.78079262933414, y: -369.0554367193823 },
    description: ({ handleToolClick }) => (
      <>
        <p>
          SpiderMonkey is an open-source{" "}
          <Tool
            data={TOOLS["ECMAScript"]}
            size="small"
            withHandles={false}
            handleClick={handleToolClick}
          />{" "}
          and{" "}
          <Tool
            data={TOOLS["Wasm"]}
            size="small"
            withHandles={false}
            handleClick={handleToolClick}
          />{" "}
          engine developed by Mozilla.
          <br />
          <br />
          It is the engine used by the{" "}
          <Tool
            data={TOOLS["Firefox"]}
            size="small"
            withHandles={false}
            handleClick={handleToolClick}
          />{" "}
          web browser.
        </p>
      </>
    ),
  },
  JavaScriptCore: {
    name: "JavaScriptCore",
    jsEngine: true,
    picto: "https://docs.webkit.org/assets/WebKit.svg",
    uses: ["ECMAScript"],
    pos: { x: 98.3180059315355, y: -765.2866930678401 },
    description: ({ handleToolClick }) => (
      <>
        <p>
          JavaScriptCore is an open-source{" "}
          <Tool
            data={TOOLS["ECMAScript"]}
            size="small"
            withHandles={false}
            handleClick={handleToolClick}
          />{" "}
          and{" "}
          <Tool
            data={TOOLS["Wasm"]}
            size="small"
            withHandles={false}
            handleClick={handleToolClick}
          />{" "}
          engine developed by Apple.
          <br />
          <br />
          It is the engine used by the{" "}
          <Tool
            data={TOOLS["Safari"]}
            size="small"
            withHandles={false}
            handleClick={handleToolClick}
          />{" "}
          web browser.
        </p>
      </>
    ),
  },
  Nodejs: {
    name: "Nodejs",
    jsRuntime: true,
    picto: "https://svgl.app/library/nodejs.svg",
    uses: ["v8"],
    pos: { x: 119.78487018956817, y: -339.12199486552606 },
    description: ({ handleToolClick }) => (
      <p>
        Node.js is an open-source back-end JavaScript runtime environment that
        runs on the{" "}
        <Tool
          data={TOOLS["v8"]}
          size="small"
          withHandles={false}
          handleClick={handleToolClick}
        />{" "}
        engine.
        <br />
        <br />
        While v8 provides the{" "}
        <Tool
          data={TOOLS["ECMAScript"]}
          size="small"
          withHandles={false}
          handleClick={handleToolClick}
        />{" "}
        execution capabilities, Node.js provides the APIs enabling I/O, file
        system, network and other asynchronous operations. All of these are
        orchestrated using an event-loop:{" "}
        <a
          className="underline"
          href="https://libuv.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          libuv
        </a>
        .
      </p>
    ),
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
    description: ({ handleToolClick }) => (
      <p>
        Deno is a secure runtime for JavaScript and{" "}
        <Tool
          data={TOOLS["TypeScript"]}
          size="small"
          withHandles={false}
          handleClick={handleToolClick}
        />{" "}
        . It uses the{" "}
        <Tool
          data={TOOLS["v8"]}
          size="small"
          withHandles={false}
          handleClick={handleToolClick}
        />{" "}
        engine to run JavaScript code.
        <br />
        <br />
        Deno also provides a set of built-in features like TypeScript
        type-checking, formatting, linting, and test running.
      </p>
    ),
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
    description: ({ handleToolClick }) => (
      <p>
        Bun is a runtime for JavaScript and{" "}
        <Tool
          data={TOOLS["TypeScript"]}
          size="small"
          withHandles={false}
          handleClick={handleToolClick}
        />{" "}
        with focus on performance. It uses the{" "}
        <Tool
          data={TOOLS["JavaScriptCore"]}
          size="small"
          withHandles={false}
          handleClick={handleToolClick}
        />{" "}
        engine to run JavaScript code.
        <br />
        <br />
        Bun (almost fully) supports{" "}
        <Tool
          data={TOOLS["Nodejs"]}
          size="small"
          withHandles={false}
          handleClick={handleToolClick}
        />{" "}
        API and also provides a set of built-in features like package
        management, test running and bundling.
        <br />
        <br />
        It's worth mentionning that Bun does not rely on an external parser
        and/or compiler to bundle assets: it implements its own.
      </p>
    ),
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
    description: ({ handleToolClick }) => (
      <p>
        WinterJS is a runtime for JavaScript, and more precisely for Service
        Worker scripts. It uses the{" "}
        <Tool
          data={TOOLS["SpiderMonkey"]}
          size="small"
          withHandles={false}
          handleClick={handleToolClick}
        />{" "}
        engine to run JavaScript code.
        <br />
        <br />
        While SpiderMonkey provides the{" "}
        <Tool
          data={TOOLS["ECMAScript"]}
          size="small"
          withHandles={false}
          handleClick={handleToolClick}
        />{" "}
        execution capabilities, WinterJS provides the APIs enabling I/O, file
        system, network and other asynchronous and Service Worker related
        operations.
      </p>
    ),
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
    description: ({ handleToolClick }) => (
      <p>
        Chrome is a web browser developed by Google. It uses the{" "}
        <Tool
          data={TOOLS["v8"]}
          size="small"
          withHandles={false}
          handleClick={handleToolClick}
        />{" "}
        engine to run JavaScript and{" "}
        <Tool
          data={TOOLS["Wasm"]}
          size="small"
          withHandles={false}
          handleClick={handleToolClick}
        />{" "}
        code.
        <br />
        <br />
        While v8 provides the{" "}
        <Tool
          data={TOOLS["ECMAScript"]}
          size="small"
          withHandles={false}
          handleClick={handleToolClick}
        />{" "}
        execution capabilities, Chrome provides the APIs enabling I/O, file
        system, network and other asynchronous operations. All of these are
        orchestrated using an event-loop:{" "}
        <a
          className="underline"
          href="https://libevent.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          libevent
        </a>
        .
      </p>
    ),
  },
  Firefox: {
    name: "Firefox",
    jsRuntime: true,
    picto: "https://svgl.app/library/firefox.svg",
    uses: ["SpiderMonkey"],
    pos: { x: 664.4765927680539, y: -347.818865029944 },
    description: ({ handleToolClick }) => (
      <p>
        Firefox is a web browser developed by Mozilla. It uses the{" "}
        <Tool
          data={TOOLS["SpiderMonkey"]}
          size="small"
          withHandles={false}
          handleClick={handleToolClick}
        />{" "}
        engine to run JavaScript and{" "}
        <Tool
          data={TOOLS["Wasm"]}
          size="small"
          withHandles={false}
          handleClick={handleToolClick}
        />{" "}
        code.
        <br />
        <br />
        While SpiderMonkey provides the{" "}
        <Tool
          data={TOOLS["ECMAScript"]}
          size="small"
          withHandles={false}
          handleClick={handleToolClick}
        />{" "}
        execution capabilities, Firefox provides the APIs enabling I/O, file
        system, network and other asynchronous operations.
      </p>
    ),
  },
  Safari: {
    name: "Safari",
    jsRuntime: true,
    picto: "https://svgl.app/library/safari.svg",
    uses: ["JavaScriptCore"],
    pos: { x: -214.19369269308655, y: -808.9398228254925 },
    description: ({ handleToolClick }) => (
      <p>
        Safari is a web browser developed by Apple. It uses the{" "}
        <Tool
          data={TOOLS["JavaScriptCore"]}
          size="small"
          withHandles={false}
          handleClick={handleToolClick}
        />{" "}
        engine to run JavaScript and{" "}
        <Tool
          data={TOOLS["Wasm"]}
          size="small"
          withHandles={false}
          handleClick={handleToolClick}
        />{" "}
        code.
        <br />
        <br />
        While JavaScriptCore provides the{" "}
        <Tool
          data={TOOLS["ECMAScript"]}
          size="small"
          withHandles={false}
          handleClick={handleToolClick}
        />{" "}
        execution capabilities, Safari provides the APIs enabling I/O, file
        system, network and other asynchronous operations.
      </p>
    ),
  },
  React: {
    name: "React",
    viewLibrary: true,
    picto: "https://svgl.app/library/react_dark.svg",
    related: ["Angular"],
    pos: { x: -58.06429963253298, y: -34.83767498106292 },
    description: ({ handleToolClick }) => (
      <p>
        React is a JavaScript library for building user interfaces. It is often
        used to build Single-Page applications using bundlers like{" "}
        <Tool
          data={TOOLS["Vite"]}
          size="small"
          withHandles={false}
          handleClick={handleToolClick}
        />{" "}
        or through meta-frameworks like{" "}
        <Tool
          data={TOOLS["Next.js"]}
          size="small"
          withHandles={false}
          handleClick={handleToolClick}
        />{" "}
        to provide a complete solution for building complex applications.
      </p>
    ),
  },
  "Vue.js": {
    name: "Vue.js",
    viewLibrary: true,
    picto: "https://svgl.app/library/vue.svg",
    related: ["React"],
    pos: { x: -81.52622486585564, y: 164.0438743755371 },
    description: ({ handleToolClick }) => (
      <p>
        Vue.js is a JavaScript framework for building user interfaces. It is
        often used to build Single-Page applications using bundlers like{" "}
        <Tool
          data={TOOLS["Vite"]}
          size="small"
          withHandles={false}
          handleClick={handleToolClick}
        />{" "}
        or through meta-frameworks like{" "}
        <Tool
          data={TOOLS["Nuxt"]}
          size="small"
          withHandles={false}
          handleClick={handleToolClick}
        />{" "}
        to provide a complete solution for building complex applications.
      </p>
    ),
  },
  Angular: {
    name: "Angular",
    viewLibrary: true,
    picto: "https://svgl.app/library/angular.svg",
    related: ["Vue.js"],
    pos: { x: 119.27422923260775, y: 212.07119884741195 },
    description: () => (
      <p>
        Angular is a TypeScript-based web application framework developed by
        Google. It provides a complete solution for building complex
        applications, including built-in tools for routing, form handling, and
        state management.
      </p>
    ),
  },
  Vite: {
    name: "Vite",
    devServer: true,
    picto: "https://svgl.app/library/vitejs.svg",
    uses: ["esbuild", "Rollup", "Rolldown"],
    pos: { x: -526.1213275213364, y: 268.5001722732571 },
    description: ({ handleToolClick }) => (
      <p>
        Vite is a modern frontend build tool that offers a faster and leaner
        development experience. During development, it uses native ES modules
        and{" "}
        <Tool
          data={TOOLS["esbuild"]}
          size="small"
          withHandles={false}
          handleClick={handleToolClick}
        />{" "}
        for blazing fast cold starts, while in production it uses{" "}
        <Tool
          data={TOOLS["Rollup"]}
          size="small"
          withHandles={false}
          handleClick={handleToolClick}
        />{" "}
        or{" "}
        <Tool
          data={TOOLS["Rolldown"]}
          size="small"
          withHandles={false}
          handleClick={handleToolClick}
        />{" "}
        for optimal bundling.
      </p>
    ),
  },
  Astro: {
    name: "Astro",
    devServer: true,
    picto: "https://svgl.app/library/astro.svg",
    uses: ["Vite"],
    pos: { x: -498.5321757459903, y: 69.35755612115844 },
    description: ({ handleToolClick }) => (
      <p>
        Astro is a modern web framework that allows developers to build fast,
        content-focused websites. It uses{" "}
        <Tool
          data={TOOLS["Vite"]}
          size="small"
          withHandles={false}
          handleClick={handleToolClick}
        />{" "}
        as its development server and features a unique "Islands Architecture"
        that enables partial hydration for optimal performance.
      </p>
    ),
  },
  "Next.js": {
    name: "Next.js",
    devServer: true,
    picto: "https://svgl.app/library/nextjs_icon_dark.svg",
    uses: ["Webpack", "Turbopack", "React"],
    pos: { x: -168.6625770666429, y: -168.14710421098167 },
    description: ({ handleToolClick }) => (
      <p>
        Next.js is a framework for{" "}
        <Tool
          data={TOOLS["React"]}
          size="small"
          withHandles={false}
          handleClick={handleToolClick}
        />{" "}
        that enables server-side rendering, static site generation, and modern
        development features. It uses either{" "}
        <Tool
          data={TOOLS["Webpack"]}
          size="small"
          withHandles={false}
          handleClick={handleToolClick}
        />{" "}
        or{" "}
        <Tool
          data={TOOLS["Turbopack"]}
          size="small"
          withHandles={false}
          handleClick={handleToolClick}
        />{" "}
        for bundling and provides an optimized development experience for
        building React applications.
      </p>
    ),
  },
  Nuxt: {
    name: "Nuxt",
    devServer: true,
    picto: "https://svgl.app/library/nuxt.svg",
    uses: ["Vite", "Vue.js"],
    pos: { x: -298.6522220630414, y: 191.27908049501596 },
    description: ({ handleToolClick }) => (
      <p>
        Nuxt is a Vue.js framework that provides structure, features, and
        tooling for building Vue.js applications. It is built on top of{" "}
        <Tool
          data={TOOLS["Vue.js"]}
          size="small"
          withHandles={false}
          handleClick={handleToolClick}
        />{" "}
        and uses{" "}
        <Tool
          data={TOOLS["Vite"]}
          size="small"
          withHandles={false}
          handleClick={handleToolClick}
        />{" "}
        as its development server.
      </p>
    ),
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
    description: () => (
      <p>
        TypeScript is a strongly typed programming language that builds on
        JavaScript by adding static type definitions. It provides a type system
        that helps catch errors early in development and enhances code
        maintainability through better tooling support and documentation.
      </p>
    ),
  },
  Flow: {
    name: "Flow",
    typeChecker: true,
    compilerTranspiler: true,
    picto:
      "https://images.seeklogo.com/logo-png/27/2/flow-logo-png_seeklogo-273174.png",
    pos: { x: 908.1569682719157, y: 22.529444376202985 },
    description: () => (
      <p>
        Flow is a static type checker for JavaScript developed by Facebook. It
        adds type annotations to JavaScript code to help catch type errors
        during development and improve code maintainability.
      </p>
    ),
  },
  Acorn: {
    name: "Acorn",
    parser: true,
    picto: "https://avatars.githubusercontent.com/u/34631683?s=48&v=4",
    pos: { x: -514.1797406040629, y: -241.2627508395356 },
    description: () => (
      <p>
        Acorn is a small and fast JavaScript parser written in JavaScript. It
        produces an AST that follows the ESTree standard and has been designed
        to be base for various tools requiring JavaScript code analysis.
      </p>
    ),
  },
  Babel: {
    name: "Babel",
    compilerTranspiler: true,
    parser: true,
    picto: "https://svgl.app/library/babel.svg",
    pos: { x: -665.5181029777923, y: -346.47272446896284 },
    description: () => (
      <p>
        Babel is a widely-used JavaScript compiler that enables the use of
        next-generation JavaScript features and syntax transformations. It
        allows developers to write modern JavaScript code while ensuring
        compatibility with older browsers and environments by transpiling code
        to an older version of JavaScript.
      </p>
    ),
  },
  SWC: {
    name: "SWC",
    compilerTranspiler: true,
    parser: true,
    minifier: true,
    picto: "https://svgl.app/library/swc.svg",
    pos: { x: 428.8349008379959, y: 114.02917621856683 },
    description: () => (
      <p>
        SWC (Speedy Web Compiler) is a super-fast TypeScript/JavaScript compiler
        written in Rust. It can be used for parsing, compilation and
        minification, providing significant performance improvements over
        JavaScript-based alternatives.
      </p>
    ),
  },
  Turbopack: {
    name: "Turbopack",
    bundler: true,
    picto: "https://svgl.app/library/turbopack.svg",
    uses: ["SWC"],
    pos: { x: 182.84092654817937, y: -35.6102629848007 },
    description: ({ handleToolClick }) => (
      <p>
        Turbopack is a next-generation bundler written in Rust, developed by the
        Vercel team. It uses{" "}
        <Tool
          data={TOOLS["SWC"]}
          size="small"
          withHandles={false}
          handleClick={handleToolClick}
        />{" "}
        for JavaScript and TypeScript processing and is designed to be
        incredibly fast through incremental computation and optimized caching
        strategies.
      </p>
    ),
  },
  esbuild: {
    name: "esbuild",
    bundler: true,
    compilerTranspiler: true,
    minifier: true,
    picto: "https://svgl.app/library/esbuild.svg",
    pos: { x: -769.1503231113622, y: 236.20640409365623 },
    description: () => (
      <p>
        esbuild is an extremely fast JavaScript bundler and minifier written in
        Go. It provides superior build performance compared to traditional
        JavaScript-based tools.
      </p>
    ),
  },
  "Lightning\xa0CSS": {
    name: "Lightning\xa0CSS",
    parser: true,
    compilerTranspiler: true,
    bundler: true,
    minifier: true,
    picto: "⚡️",
    pos: { x: 729.3845958163022, y: 435.877239495677 },
    description: () => (
      <p>
        Lightning CSS is a CSS parser, compiler, bundler, and minifier written
        in Rust. It provides extremely fast CSS processing capabilities while
        supporting modern CSS features and optimizations.
      </p>
    ),
  },
  Rollup: {
    name: "Rollup",
    bundler: true,
    picto: "https://rollupjs.org/rollup-logo.svg",
    uses: ["Acorn", "Babel"],
    pos: { x: -664.7215093762428, y: -77.37321587266489 },
    description: ({ handleToolClick }) => (
      <p>
        Rollup is a module bundler that excels at producing efficient bundles
        from JavaScript libraries and applications. It uses{" "}
        <Tool
          data={TOOLS["Acorn"]}
          size="small"
          withHandles={false}
          handleClick={handleToolClick}
        />{" "}
        for parsing and can integrate with{" "}
        <Tool
          data={TOOLS["Babel"]}
          size="small"
          withHandles={false}
          handleClick={handleToolClick}
        />{" "}
        for additional transformations.
      </p>
    ),
  },
  Rolldown: {
    name: "Rolldown",
    bundler: true,
    picto: "https://svgl.app/library/rolldown.svg",
    uses: ["Oxc"],
    pos: { x: -280.43310538839745, y: 420.80474737201945 },
    description: ({ handleToolClick }) => (
      <p>
        Rolldown is a high-performance drop-in replacement for{" "}
        <Tool
          data={TOOLS["Rollup"]}
          size="small"
          withHandles={false}
          handleClick={handleToolClick}
        />{" "}
        , written in Rust. It uses{" "}
        <Tool
          data={TOOLS["Oxc"]}
          size="small"
          withHandles={false}
          handleClick={handleToolClick}
        />{" "}
        for parsing and aims to provide significant performance improvements
        while maintaining compatibility with the Rollup ecosystem.
      </p>
    ),
  },
  Webpack: {
    name: "Webpack",
    devServer: true,
    bundler: true,
    picto:
      "https://raw.githubusercontent.com/webpack/media/master/logo/icon-square-big.png",
    uses: ["Acorn", "Babel", "Terser"],
    pos: { x: -438.6304287237547, y: -444.3975456994178 },
    description: ({ handleToolClick }) => (
      <p>
        Webpack is a static module bundler for modern JavaScript applications.
        It builds a dependency graph and bundles modules into optimized output
        files. It uses{" "}
        <Tool
          data={TOOLS["Acorn"]}
          size="small"
          withHandles={false}
          handleClick={handleToolClick}
        />{" "}
        for parsing,{" "}
        <Tool
          data={TOOLS["Babel"]}
          size="small"
          withHandles={false}
          handleClick={handleToolClick}
        />{" "}
        for transformations, and{" "}
        <Tool
          data={TOOLS["Terser"]}
          size="small"
          withHandles={false}
          handleClick={handleToolClick}
        />{" "}
        for minification.
      </p>
    ),
  },
  Rspack: {
    name: "Rspack",
    bundler: true,
    picto: "https://assets.rspack.dev/rspack/rspack-logo.svg",
    uses: ["SWC"],
    pos: { x: 633.3494977967713, y: 83.68094337095766 },
    description: ({ handleToolClick }) => (
      <p>
        Rspack is a Rust-based bundler that aims to be a drop-in replacement for
        Webpack. It uses{" "}
        <Tool
          data={TOOLS["SWC"]}
          size="small"
          withHandles={false}
          handleClick={handleToolClick}
        />{" "}
        for JavaScript processing and provides significant performance
        improvements while maintaining compatibility with the Webpack ecosystem.
      </p>
    ),
  },
  Parcel: {
    name: "Parcel",
    bundler: true,
    picto: "https://svgl.app/library/parcel.svg",
    uses: ["SWC", "Lightning\xa0CSS"],
    pos: { x: 611.385868954014, y: 281.42815422516935 },
    description: ({ handleToolClick }) => (
      <p>
        Parcel is a zero-configuration web application bundler that uses{" "}
        <Tool
          data={TOOLS["SWC"]}
          size="small"
          withHandles={false}
          handleClick={handleToolClick}
        />{" "}
        for JavaScript processing and{" "}
        <Tool
          data={TOOLS["Lightning\xa0CSS"]}
          size="small"
          withHandles={false}
          handleClick={handleToolClick}
        />{" "}
        for CSS optimization. It automatically analyzes dependencies and
        provides built-in support for various file types without requiring
        configuration.
      </p>
    ),
  },
  Terser: {
    name: "Terser",
    minifier: true,
    picto: "https://terser.org/img/terser-square-logo.svg",
    pos: { x: -472.9170815295258, y: -664.3079914467835 },
    description: () => (
      <p>
        Terser is a JavaScript minifier that compresses and mangles JavaScript
        code to reduce its size. It is widely used in production builds to
        optimize JavaScript bundles for deployment.
      </p>
    ),
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
    description: () => (
      <p>
        Oxc is a collection of JavaScript/TypeScript tools written in Rust,
        providing high-performance parsing, linting, formatting, and compilation
        capabilities. It aims to be a comprehensive toolchain that can replace
        multiple existing JavaScript tools while offering significant
        performance improvements through its Rust implementation.
      </p>
    ),
  },
  Prettier: {
    name: "Prettier",
    formatter: true,
    picto: "https://prettier.io/icon.png",
    related: ["Biome"],
    pos: { x: 170.32523993307007, y: 495.0787784960076 },
    description: () => (
      <p>
        Prettier is an opinionated code formatter that supports many languages.
        It enforces a consistent code style by parsing code and reprinting it
        with its own rules, taking the maximum line length into account and
        wrapping code when necessary.
      </p>
    ),
  },
  Biome: {
    name: "Biome",
    formatter: true,
    linter: true,
    picto: "https://avatars.githubusercontent.com/u/140182603?s=48&v=4",
    pos: { x: 351.058283773523, y: 414.8054076904539 },
    description: () => (
      <p>
        Biome is a performant toolchain for web projects, written in Rust. It
        provides fast formatting and linting capabilities while aiming to be a
        drop-in replacement for existing tools in the JavaScript ecosystem.
      </p>
    ),
  },
  Eslint: {
    name: "Eslint",
    linter: true,
    picto: "https://fr.eslint.org/icon-512.png",
    related: ["Oxc"],
    pos: { x: 19.228428542688768, y: 662.8283445785412 },
    description: () => (
      <p>
        ESLint is a static code analysis tool for identifying problematic
        patterns in JavaScript code. It helps maintain code quality by enforcing
        coding conventions and finding potential errors before they occur at
        runtime.
      </p>
    ),
  },
  Jest: {
    name: "Jest",
    testRunner: true,
    picto: "https://svgl.app/library/jest.svg",
    uses: ["Babel"],
    pos: { x: -752.5796730299668, y: -509.50786545690585 },
    description: ({ handleToolClick }) => (
      <p>
        Jest is a JavaScript testing framework developed by Facebook. It
        provides a complete testing solution with built-in assertion libraries,
        code coverage reporting, and mocking capabilities. It uses{" "}
        <Tool
          data={TOOLS["Babel"]}
          size="small"
          withHandles={false}
          handleClick={handleToolClick}
        />{" "}
        for transpiling test files, enabling support for modern JavaScript
        features.
      </p>
    ),
  },
  Vitest: {
    name: "Vitest",
    testRunner: true,
    picto: "https://svgl.app/library/vitest.svg",
    uses: ["Vite"],
    pos: { x: -504.43193258132504, y: 483.3548639566473 },
    description: ({ handleToolClick }) => (
      <p>
        Vitest is a Vite-native testing framework with a focus on speed. It
        leverages the same configuration, transformers, resolvers, and plugins
        from a{" "}
        <Tool
          data={TOOLS["Vite"]}
          size="small"
          withHandles={false}
          handleClick={handleToolClick}
        />{" "}
        application.
        <br />
        <br />
        It's designed to be compatible with Jest's API while providing
        first-class support for TypeScript, ESM, and other modern web
        technologies. The integration with Vite makes it extremely fast for both
        unit and integration testing.
      </p>
    ),
  },
  Playwright: {
    name: "Playwright",
    testRunner: true,
    picto: "https://svgl.app/library/playwright.svg",
    uses: ["esbuild"],
    pos: { x: -905.6428292986814, y: 59.36082937139386 },
    description: ({ handleToolClick }) => (
      <p>
        Playwright is an end-to-end testing framework for modern web
        applications, developed by Microsoft. It enables testing across all
        modern browsers including{" "}
        <Tool
          data={TOOLS["Chrome"]}
          size="small"
          withHandles={false}
          handleClick={handleToolClick}
        />
        ,{" "}
        <Tool
          data={TOOLS["Firefox"]}
          size="small"
          withHandles={false}
          handleClick={handleToolClick}
        />
        , and{" "}
        <Tool
          data={TOOLS["Safari"]}
          size="small"
          withHandles={false}
          handleClick={handleToolClick}
        />
        .
        <br />
        <br />
        It provides powerful automation capabilities with a simple API for
        browser control, network interception, and visual comparisons.
        Playwright is designed for reliability with auto-wait capabilities and
        isolation through browser contexts.
      </p>
    ),
  },
  Cypress: {
    name: "Cypress",
    testRunner: true,
    picto: "https://svgl.app/library/cypress.svg",
    uses: ["Vite"],
    pos: { x: -694.535986449146, y: 444.75524177013205 },
    description: ({ handleToolClick }) => (
      <p>
        Cypress is a JavaScript testing framework designed for modern web
        applications. It provides a complete end-to-end testing experience with
        an interactive UI for running tests and observing their execution.
        <br />
        <br />
        Key features include time-travel debugging, real-time reloads, automatic
        waiting, and screenshot capture. Cypress can be used for both unit and
        integration testing, with built-in support for stubbing and mocking.
      </p>
    ),
  },
  npm: {
    name: "npm",
    packageManager: true,
    picto: "https://svgl.app/library/npm.svg",
    related: ["pnpm"],
    pos: { x: -473.00711098718295, y: 755.5112190350385 },
    description: () => (
      <p>
        npm (Node Package Manager) is the default package manager for Node.js
        and the world's largest software registry. It allows developers to
        install, share, and manage dependencies in JavaScript projects.
        <br />
        <br />
        npm consists of both a command-line interface (CLI) tool for installing
        and managing packages and an online registry that hosts JavaScript
        packages.
      </p>
    ),
  },
  pnpm: {
    name: "pnpm",
    packageManager: true,
    picto: "https://svgl.app/library/pnpm.svg",
    related: ["yarn"],
    pos: { x: -284.6818593914294, y: 796.0703695907121 },
    description: ({ handleToolClick }) => (
      <p>
        pnpm is a fast, disk-space efficient package manager for JavaScript
        projects. Unlike{" "}
        <Tool
          data={TOOLS["npm"]}
          size="small"
          withHandles={false}
          handleClick={handleToolClick}
        />{" "}
        or{" "}
        <Tool
          data={TOOLS["yarn"]}
          size="small"
          withHandles={false}
          handleClick={handleToolClick}
        />{" "}
        that create duplicates of packages in each project's node_modules, pnpm
        uses a content-addressable store to link the same versions of packages
        across multiple projects.
        <br />
        <br />
        This approach significantly reduces disk space usage and speeds up
        installation time, especially in monorepo setups with multiple packages
        sharing dependencies.
      </p>
    ),
  },
  yarn: {
    name: "yarn",
    packageManager: true,
    picto: "https://svgl.app/library/yarn.svg",
    pos: { x: -108.3473556801319, y: 876.4847679960232 },
    description: () => (
      <p>
        Yarn is a fast, reliable, and secure dependency management tool for
        JavaScript projects. It was created to address performance and security
        issues with npm while providing additional features like workspaces and
        plug'n'play.
      </p>
    ),
  },
  Sass: {
    name: "Sass",
    specification: true,
    compilerTranspiler: true,
    picto: "https://svgl.app/library/sass.svg",
    related: ["PostCSS"],
    pos: { x: 280.0864804668708, y: 819.8871188637629 },
    description: ({ handleToolClick }) => (
      <p>
        Sass (Syntactically Awesome Style Sheets) is a CSS preprocessor that
        extends{" "}
        <Tool
          data={TOOLS["CSS"]}
          size="small"
          withHandles={false}
          handleClick={handleToolClick}
        />{" "}
        with features like variables, nested rules, mixins, and functions.
        <br />
        <br />
        It helps developers write more maintainable and organized CSS code that
        compiles into standard CSS files that browsers can understand. Sass
        comes in two syntaxes: the original indented syntax (.sass) and the more
        widely used SCSS syntax (.scss).
      </p>
    ),
  },
  PostCSS: {
    name: "PostCSS",
    compilerTranspiler: true,
    picto: "https://svgl.app/library/postcss.svg",
    pos: { x: 451.57491388487125, y: 723.6298636886961 },
    description: ({ handleToolClick }) => (
      <p>
        PostCSS is a tool for transforming{" "}
        <Tool
          data={TOOLS["CSS"]}
          size="small"
          withHandles={false}
          handleClick={handleToolClick}
        />{" "}
        with JavaScript plugins. It can add vendor prefixes, convert modern CSS
        features to more compatible versions, lint CSS, support CSS modules, and
        much more through its extensive ecosystem of plugins.
      </p>
    ),
  },
  Tailwind: {
    name: "Tailwind",
    cssBuildSystem: true,
    picto: "https://svgl.app/library/tailwindcss.svg",
    uses: ["Lightning\xa0CSS"],
    related: ["PostCSS"],
    pos: { x: 604.1196342922309, y: 594.3508429689566 },
    description: ({ handleToolClick }) => (
      <p>
        Tailwind CSS is a utility-first CSS framework that provides low-level
        utility classes to build custom designs. It uses{" "}
        <Tool
          data={TOOLS["Lightning\xa0CSS"]}
          size="small"
          withHandles={false}
          handleClick={handleToolClick}
        />{" "}
        for processing and optimizing the final CSS output, ensuring only the
        used utilities are included in the production build.
      </p>
    ),
  },
} as const satisfies Record<string, ToolType>;

// trick to ensure TOOLS['uses'] is an array of valid TOOLS['name']
type ToolName = (typeof TOOLS)[keyof typeof TOOLS]["name"];
TOOLS satisfies Record<
  string,
  ToolType & { uses?: ToolName[]; related?: ToolName[] }
>;
