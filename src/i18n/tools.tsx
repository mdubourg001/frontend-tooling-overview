import type { ToolTranslation } from "./types";
import type { Tool as ToolType } from "../types";
import { Tool } from "../components/Tool";
import { TOOLS } from "../constants";

export const toolsEn: Record<string, ToolTranslation> = {
  ECMAScript: {
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
    links: [
      {
        label: "ECMAScript language specification",
        href: "https://tc39.es/ecma262/",
      },
    ],
  },

  Wasm: {
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
    links: [
      {
        label: "WebAssembly website",
        href: "https://webassembly.org/",
      },
    ],
  },

  HTML: {
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
  },

  CSS: {
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
    links: [
      {
        label: "CSS specifications",
        href: "https://www.w3.org/Style/CSS/Overview.en.html",
      },
    ],
  },

  v8: {
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
    links: [
      {
        label: "Service Worker API specification",
        href: "https://w3c.github.io/ServiceWorker/",
      },
    ],
  },

  Chrome: {
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
    links: [
      {
        label: "The browser event-loop",
        href: "https://the-browser-event-loop.netlify.app/",
      },
    ],
  },

  Firefox: {
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
    description: ({ handleToolClick }) => (
      <p>
        Angular is a{" "}
        <Tool
          data={TOOLS["TypeScript"]}
          size="small"
          withHandles={false}
          handleClick={handleToolClick}
        />
        -based web application framework developed by Google. It provides a
        complete solution for building complex applications, including built-in
        tools for routing, form handling, and state management.
      </p>
    ),
  },

  Vite: {
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
    description: () => (
      <p>
        Flow is a static type checker for JavaScript developed by Facebook. It
        adds type annotations to JavaScript code to help catch type errors
        during development and improve code maintainability.
      </p>
    ),
  },

  Acorn: {
    description: () => (
      <p>
        Acorn is a small and fast JavaScript parser written in JavaScript. It
        produces an AST that follows the ESTree standard and has been designed
        to be base for various tools requiring JavaScript code analysis.
      </p>
    ),
  },

  Babel: {
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
    description: () => (
      <p>
        esbuild is an extremely fast JavaScript bundler and minifier written in
        Go. It provides superior build performance compared to traditional
        JavaScript-based tools.
      </p>
    ),
  },

  "Lightning\xa0CSS": {
    description: () => (
      <p>
        Lightning CSS is a CSS parser, compiler, bundler, and minifier written
        in Rust. It provides extremely fast CSS processing capabilities while
        supporting modern CSS features and optimizations.
      </p>
    ),
  },

  Rollup: {
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
        for parsing and minification and aims to provide significant performance
        improvements while maintaining compatibility with the Rollup ecosystem.
      </p>
    ),
  },

  Webpack: {
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
    description: ({ handleToolClick }) => (
      <p>
        Rspack is a Rust-based bundler that aims to be a drop-in replacement for
        <Tool
          data={TOOLS["Webpack"]}
          size="small"
          withHandles={false}
          handleClick={handleToolClick}
        />{" "}
        . It uses{" "}
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
    description: () => (
      <p>
        Terser is a JavaScript minifier that compresses and mangles JavaScript
        code to reduce its size. It is widely used in production builds to
        optimize JavaScript bundles for deployment.
      </p>
    ),
  },

  Oxc: {
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
    description: () => (
      <p>
        Biome is a performant toolchain for web projects, written in Rust. It
        provides fast formatting and linting capabilities while aiming to be a
        drop-in replacement for existing tools in the JavaScript ecosystem.
      </p>
    ),
  },

  Eslint: {
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
};

export const toolsFr: Record<string, ToolTranslation> = {
  ECMAScript: {
    description: () => (
      <>
        <p>
          ECMAScript est une spécification standard pour les langages de script.
          Les "implémentations" les plus connues de cette norme sont JavaScript
          et ActionScript.
          <br />
          <br />
          Alors que l'implémentation d'un environnement d'exécution JavaScript
          offre des capacités d'E/S, des capacités réseau, des capacités de
          stockage et bien plus encore, ECMAScript est une norme qui définit
          uniquement les fonctionnalités de base du langage.
        </p>
      </>
    ),
    links: [
      {
        label: "Spécification du langage ECMAScript",
        href: "https://tc39.es/ecma262/",
      },
    ],
  },

  TypeScript: {
    description: () => (
      <p>
        TypeScript est un langage de programmation fortement typé qui s'appuie
        sur JavaScript en ajoutant des définitions de types statiques. Il
        fournit un système de types qui aide à détecter les erreurs tôt dans le
        développement et améliore la maintenabilité du code grâce à un meilleur
        support d'outils et de documentation.
      </p>
    ),
  },

  React: {
    description: ({ handleToolClick }) => (
      <p>
        React est une bibliothèque JavaScript pour construire des interfaces
        utilisateur. Elle est souvent utilisée pour construire des applications
        monopages en utilisant des bundlers comme{" "}
        <Tool
          data={TOOLS["Vite"]}
          size="small"
          withHandles={false}
          handleClick={handleToolClick}
        />{" "}
        ou à travers des méta-frameworks comme{" "}
        <Tool
          data={TOOLS["Next.js"]}
          size="small"
          withHandles={false}
          handleClick={handleToolClick}
        />{" "}
        afin de fournir une solution complète pour construire des applications
        complexes.
      </p>
    ),
  },

  Wasm: {
    description: () => (
      <>
        <p>
          WebAssembly (Wasm) est une spécification standard pour un format
          d'instruction binaire s'exécutant sur des machines virtuelles basées
          sur une pile. Il est conçu comme une cible de compilation portable
          pour les langages de haut niveau comme C/C++/Rust, permettant au code
          de s'exécuter dans les navigateurs web à une vitesse proche du natif.
        </p>
      </>
    ),
    links: [
      {
        label: "Site web WebAssembly",
        href: "https://webassembly.org/",
      },
    ],
  },

  HTML: {
    description: () => (
      <p>
        HTML est une spécification standard pour le langage de balisage
        structurant le contenu sur le web (entre autres).
        <br />
        <br />
        Les moteurs de rendu des navigateurs sont responsables de
        l'implémentation de la spécification HTML pour analyser et rendre les
        pages web.
      </p>
    ),
    links: [
      {
        label: "Standard HTML vivant",
        href: "https://html.spec.whatwg.org/",
      },
      {
        label: "Moteur de navigateur - Wikipédia",
        href: "https://fr.wikipedia.org/wiki/Moteur_de_rendu",
      },
    ],
  },

  CSS: {
    description: () => (
      <p>
        CSS est une spécification standard pour le langage de style utilisé pour
        décrire la présentation d'un document écrit en HTML.
        <br />
        <br />
        Les moteurs de rendu des navigateurs sont responsables de
        l'implémentation de la spécification CSS pour analyser et rendre les
        pages web.
      </p>
    ),
    links: [
      {
        label: "Spécifications CSS",
        href: "https://www.w3.org/Style/CSS/Overview.en.html",
      },
    ],
  },

  v8: {
    description: ({ handleToolClick }) => (
      <>
        <p>
          v8 est un moteur{" "}
          <Tool
            data={TOOLS["ECMAScript"]}
            size="small"
            withHandles={false}
            handleClick={handleToolClick}
          />{" "}
          et{" "}
          <Tool
            data={TOOLS["Wasm"]}
            size="small"
            withHandles={false}
            handleClick={handleToolClick}
          />{" "}
          open-source développé par Google.
          <br />
          <br />
          Bien qu'il soit le moteur utilisé par (et principalement développé
          pour) le navigateur{" "}
          <Tool
            data={TOOLS["Chrome"]}
            size="small"
            withHandles={false}
            handleClick={handleToolClick}
          />
          , il est également utilisé dans l'environnement d'exécution{" "}
          <Tool
            data={TOOLS["Nodejs"]}
            size="small"
            withHandles={false}
            handleClick={handleToolClick}
          />{" "}
          et d'autres applications.
        </p>
      </>
    ),
  },

  SpiderMonkey: {
    description: ({ handleToolClick }) => (
      <>
        <p>
          SpiderMonkey est un moteur{" "}
          <Tool
            data={TOOLS["ECMAScript"]}
            size="small"
            withHandles={false}
            handleClick={handleToolClick}
          />{" "}
          et{" "}
          <Tool
            data={TOOLS["Wasm"]}
            size="small"
            withHandles={false}
            handleClick={handleToolClick}
          />{" "}
          open-source développé par Mozilla.
          <br />
          <br />
          C'est le moteur utilisé par le navigateur{" "}
          <Tool
            data={TOOLS["Firefox"]}
            size="small"
            withHandles={false}
            handleClick={handleToolClick}
          />{" "}
          et par l'environnement d'exécution{" "}
          <Tool
            data={TOOLS["WinterJS"]}
            size="small"
            withHandles={false}
            handleClick={handleToolClick}
          />
          .
        </p>
      </>
    ),
  },

  JavaScriptCore: {
    description: ({ handleToolClick }) => (
      <>
        <p>
          JavaScriptCore est un moteur{" "}
          <Tool
            data={TOOLS["ECMAScript"]}
            size="small"
            withHandles={false}
            handleClick={handleToolClick}
          />{" "}
          et{" "}
          <Tool
            data={TOOLS["Wasm"]}
            size="small"
            withHandles={false}
            handleClick={handleToolClick}
          />{" "}
          open-source développé par Apple.
          <br />
          <br />
          C'est le moteur utilisé par le navigateur{" "}
          <Tool
            data={TOOLS["Safari"]}
            size="small"
            withHandles={false}
            handleClick={handleToolClick}
          />{" "}
          et par l'environnement d'exécution{" "}
          <Tool
            data={TOOLS["Bun"]}
            size="small"
            withHandles={false}
            handleClick={handleToolClick}
          />
          .
        </p>
      </>
    ),
  },

  Nodejs: {
    description: ({ handleToolClick }) => (
      <p>
        Node.js est un environnement d'exécution JavaScript back-end open-source
        qui s'exécute sur le moteur{" "}
        <Tool
          data={TOOLS["v8"]}
          size="small"
          withHandles={false}
          handleClick={handleToolClick}
        />
        .
        <br />
        <br />
        Alors que v8 fournit les capacités d'exécution{" "}
        <Tool
          data={TOOLS["ECMAScript"]}
          size="small"
          withHandles={false}
          handleClick={handleToolClick}
        />
        , Node.js fournit les APIs permettant l'I/O, l'accès au système de
        fichiers, au réseau, et autres opérations asynchrones. Tout cela est
        orchestré en utilisant une boucle d'événements:{" "}
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
    description: ({ handleToolClick }) => (
      <p>
        Deno est un environnement d'exécution sécurisé pour JavaScript et{" "}
        <Tool
          data={TOOLS["TypeScript"]}
          size="small"
          withHandles={false}
          handleClick={handleToolClick}
        />
        . Il utilise le moteur{" "}
        <Tool
          data={TOOLS["v8"]}
          size="small"
          withHandles={false}
          handleClick={handleToolClick}
        />{" "}
        pour exécuter le code JavaScript.
        <br />
        <br />
        Deno fournit également un ensemble de fonctionnalités intégrées comme la
        vérification de types TypeScript, le formatage, le linting et
        l'exécution de tests.
      </p>
    ),
  },

  Bun: {
    description: ({ handleToolClick }) => (
      <p>
        Bun est un environnement d'exécution pour JavaScript et{" "}
        <Tool
          data={TOOLS["TypeScript"]}
          size="small"
          withHandles={false}
          handleClick={handleToolClick}
        />{" "}
        avec un focus sur la performance. Il utilise le moteur{" "}
        <Tool
          data={TOOLS["JavaScriptCore"]}
          size="small"
          withHandles={false}
          handleClick={handleToolClick}
        />{" "}
        pour exécuter le code JavaScript.
        <br />
        <br />
        Bun supporte (presque entièrement) l'API{" "}
        <Tool
          data={TOOLS["Nodejs"]}
          size="small"
          withHandles={false}
          handleClick={handleToolClick}
        />{" "}
        et fournit également un ensemble de fonctionnalités intégrées comme la
        gestion de paquets, l'exécution de tests et le bundling.
        <br />
        <br />
        Il est intéressant de noter que Bun ne s'appuie pas sur un analyseur
        et/ou compilateur externe pour empaqueter les ressources : il implémente
        les sien.
      </p>
    ),
  },

  WinterJS: {
    description: ({ handleToolClick }) => (
      <p>
        WinterJS est un environnement d'exécution pour JavaScript, et plus
        précisément pour les scripts Service Worker. Il utilise le moteur{" "}
        <Tool
          data={TOOLS["SpiderMonkey"]}
          size="small"
          withHandles={false}
          handleClick={handleToolClick}
        />{" "}
        pour exécuter le code JavaScript.
        <br />
        <br />
        Alors que SpiderMonkey fournit les capacités d'exécution{" "}
        <Tool
          data={TOOLS["ECMAScript"]}
          size="small"
          withHandles={false}
          handleClick={handleToolClick}
        />
        , WinterJS fournit les APIs permettant l'I/O, l'accès au système de
        fichiers, au réseau, et autres opérations asynchrones et liées aux
        Service Workers.
      </p>
    ),
    links: [
      {
        label: "Spécification API Service Worker",
        href: "https://w3c.github.io/ServiceWorker/",
      },
    ],
  },

  Chrome: {
    description: ({ handleToolClick }) => (
      <p>
        Chrome est un navigateur web développé par Google. Il utilise le moteur{" "}
        <Tool
          data={TOOLS["v8"]}
          size="small"
          withHandles={false}
          handleClick={handleToolClick}
        />{" "}
        pour exécuter le code JavaScript et{" "}
        <Tool
          data={TOOLS["Wasm"]}
          size="small"
          withHandles={false}
          handleClick={handleToolClick}
        />
        .
        <br />
        <br />
        Alors que v8 fournit les capacités d'exécution{" "}
        <Tool
          data={TOOLS["ECMAScript"]}
          size="small"
          withHandles={false}
          handleClick={handleToolClick}
        />
        , Chrome fournit les APIs permettant l'I/O, l'accès au système de
        fichiers, au réseau, et autres opérations asynchrones. Tout cela est
        orchestré en utilisant une boucle d'événements:{" "}
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
    links: [
      {
        label: "La boucle d'événements du navigateur",
        href: "https://the-browser-event-loop.netlify.app/",
      },
    ],
  },

  Firefox: {
    description: ({ handleToolClick }) => (
      <p>
        Firefox est un navigateur web développé par Mozilla. Il utilise le
        moteur{" "}
        <Tool
          data={TOOLS["SpiderMonkey"]}
          size="small"
          withHandles={false}
          handleClick={handleToolClick}
        />{" "}
        pour exécuter le code JavaScript et{" "}
        <Tool
          data={TOOLS["Wasm"]}
          size="small"
          withHandles={false}
          handleClick={handleToolClick}
        />
        .
        <br />
        <br />
        Alors que SpiderMonkey fournit les capacités d'exécution{" "}
        <Tool
          data={TOOLS["ECMAScript"]}
          size="small"
          withHandles={false}
          handleClick={handleToolClick}
        />
        , Firefox fournit les APIs permettant l'I/O, l'accès au système de
        fichiers, au réseau et d'autres opérations asynchrones.
      </p>
    ),
  },

  Safari: {
    description: ({ handleToolClick }) => (
      <p>
        Safari est un navigateur web développé par Apple. Il utilise le moteur{" "}
        <Tool
          data={TOOLS["JavaScriptCore"]}
          size="small"
          withHandles={false}
          handleClick={handleToolClick}
        />{" "}
        pour exécuter le code JavaScript et{" "}
        <Tool
          data={TOOLS["Wasm"]}
          size="small"
          withHandles={false}
          handleClick={handleToolClick}
        />
        .
        <br />
        <br />
        Alors que JavaScriptCore fournit les capacités d'exécution{" "}
        <Tool
          data={TOOLS["ECMAScript"]}
          size="small"
          withHandles={false}
          handleClick={handleToolClick}
        />
        , Safari fournit les APIs permettant l'I/O, l'accès au système de
        fichiers, au réseau et d'autres opérations asynchrones.
      </p>
    ),
  },

  "Vue.js": {
    description: ({ handleToolClick }) => (
      <p>
        Vue.js est un framework JavaScript pour construire des interfaces
        utilisateur. Il est souvent utilisé pour construire des applications
        monopages en utilisant des bundlers comme{" "}
        <Tool
          data={TOOLS["Vite"]}
          size="small"
          withHandles={false}
          handleClick={handleToolClick}
        />{" "}
        ou à travers des méta-frameworks comme{" "}
        <Tool
          data={TOOLS["Nuxt"]}
          size="small"
          withHandles={false}
          handleClick={handleToolClick}
        />{" "}
        afin de fournir une solution complète pour construire des applications
        complexes.
      </p>
    ),
  },

  Angular: {
    description: ({ handleToolClick }) => (
      <p>
        Angular est un framework d'application web basé sur{" "}
        <Tool
          data={TOOLS["TypeScript"]}
          size="small"
          withHandles={false}
          handleClick={handleToolClick}
        />{" "}
        développé par Google. Il fournit une solution complète pour construire
        des applications complexes, incluant des outils intégrés pour le
        routage, la gestion des formulaires et la gestion d'état.
      </p>
    ),
  },

  Vite: {
    description: ({ handleToolClick }) => (
      <p>
        Vite est un outil de construction frontend moderne qui offre une
        expérience de développement plus rapide et plus légère. Pendant le
        développement, il utilise les ES modules natifs et{" "}
        <Tool
          data={TOOLS["esbuild"]}
          size="small"
          withHandles={false}
          handleClick={handleToolClick}
        />{" "}
        pour des démarrages à froid ultra-rapides, tandis qu'en production il
        utilise{" "}
        <Tool
          data={TOOLS["Rollup"]}
          size="small"
          withHandles={false}
          handleClick={handleToolClick}
        />{" "}
        ou{" "}
        <Tool
          data={TOOLS["Rolldown"]}
          size="small"
          withHandles={false}
          handleClick={handleToolClick}
        />{" "}
        pour un bundling optimisé.
      </p>
    ),
  },

  Astro: {
    description: ({ handleToolClick }) => (
      <p>
        Astro est un framework web moderne qui permet aux développeurs de
        construire des sites web rapides et axés sur le contenu. Il utilise{" "}
        <Tool
          data={TOOLS["Vite"]}
          size="small"
          withHandles={false}
          handleClick={handleToolClick}
        />{" "}
        comme serveur de développement et propose une "Architecture en îles"
        unique qui permet l'hydratation partielle pour des performances
        optimales.
      </p>
    ),
  },

  "Next.js": {
    description: ({ handleToolClick }) => (
      <p>
        Next.js est un framework pour{" "}
        <Tool
          data={TOOLS["React"]}
          size="small"
          withHandles={false}
          handleClick={handleToolClick}
        />{" "}
        qui permet le rendu côté serveur, la génération de sites statiques et
        des fonctionnalités de développement modernes. Il utilise soit{" "}
        <Tool
          data={TOOLS["Webpack"]}
          size="small"
          withHandles={false}
          handleClick={handleToolClick}
        />{" "}
        soit{" "}
        <Tool
          data={TOOLS["Turbopack"]}
          size="small"
          withHandles={false}
          handleClick={handleToolClick}
        />{" "}
        pour l'empaquetage et fournit une expérience de développement optimisée
        pour construire des applications React.
      </p>
    ),
  },

  Nuxt: {
    description: ({ handleToolClick }) => (
      <p>
        Nuxt est un framework Vue.js qui fournit une structure, des
        fonctionnalités et des outils pour construire des applications Vue.js.
        Il est construit sur{" "}
        <Tool
          data={TOOLS["Vue.js"]}
          size="small"
          withHandles={false}
          handleClick={handleToolClick}
        />{" "}
        et utilise{" "}
        <Tool
          data={TOOLS["Vite"]}
          size="small"
          withHandles={false}
          handleClick={handleToolClick}
        />{" "}
        comme serveur de développement.
      </p>
    ),
  },

  Flow: {
    description: () => (
      <p>
        Flow est un vérificateur de types statiques pour JavaScript développé
        par Facebook. Il ajoute des annotations de type au code JavaScript pour
        aider à détecter les erreurs de type pendant le développement et
        améliorer la maintenabilité du code.
      </p>
    ),
  },

  Acorn: {
    description: () => (
      <p>
        Acorn est un analyseur JavaScript petit et rapide écrit en JavaScript.
        Il produit un AST qui suit la norme ESTree et a été conçu pour être la
        base de divers outils nécessitant une analyse de code JavaScript.
      </p>
    ),
  },

  Babel: {
    description: () => (
      <p>
        Babel est un compilateur JavaScript largement utilisé qui permet
        l'utilisation de fonctionnalités JavaScript de nouvelle génération et de
        transformations de syntaxe. Il permet aux développeurs d'écrire du code
        JavaScript moderne tout en assurant la compatibilité avec les
        navigateurs et environnements plus anciens en transcompilant le code
        vers une version plus ancienne de JavaScript.
      </p>
    ),
  },

  SWC: {
    description: () => (
      <p>
        SWC (Speedy Web Compiler) est un compilateur TypeScript/JavaScript
        super-rapide écrit en Rust. Il peut être utilisé pour le parsing, la
        compilation et la minification, offrant des améliorations de performance
        significatives par rapport aux alternatives basées sur JavaScript.
      </p>
    ),
  },

  Turbopack: {
    description: ({ handleToolClick }) => (
      <p>
        Turbopack est un bundler de nouvelle génération écrit en Rust, développé
        par l'équipe Vercel. Il utilise{" "}
        <Tool
          data={TOOLS["SWC"]}
          size="small"
          withHandles={false}
          handleClick={handleToolClick}
        />{" "}
        pour le traitement JavaScript et TypeScript et est conçu pour être
        incroyablement rapide grâce au calcul incrémental et aux stratégies de
        mise en cache optimisées.
      </p>
    ),
  },

  esbuild: {
    description: () => (
      <p>
        esbuild est un bundler et minificateur JavaScript extrêmement rapide
        écrit en Go. Il offre des performances de construction supérieures par
        rapport aux outils traditionnels basés sur JavaScript.
      </p>
    ),
  },

  "Lightning CSS": {
    description: () => (
      <p>
        Lightning CSS est un analyseur, compilateur, bundler et minificateur CSS
        écrit en Rust. Il fournit des capacités de traitement et d'optimisation
        CSS extrêmement rapides tout en supportant les fonctionnalités CSS
        modernes.
      </p>
    ),
  },

  Rollup: {
    description: ({ handleToolClick }) => (
      <p>
        Rollup est un bundler de modules qui excelle dans la production
        optimisée de bibliothèques et applications JavaScript grâce à son
        écosystème de plugins important. Il utilise{" "}
        <Tool
          data={TOOLS["Acorn"]}
          size="small"
          withHandles={false}
          handleClick={handleToolClick}
        />{" "}
        pour le parsing et peut s'interfacer avec{" "}
        <Tool
          data={TOOLS["Babel"]}
          size="small"
          withHandles={false}
          handleClick={handleToolClick}
        />{" "}
        pour des transformations supplémentaires.
      </p>
    ),
  },

  Rolldown: {
    description: ({ handleToolClick }) => (
      <p>
        Rolldown est un "remplaçant" haute performance pour{" "}
        <Tool
          data={TOOLS["Rollup"]}
          size="small"
          withHandles={false}
          handleClick={handleToolClick}
        />
        , écrit en Rust. Il utilise{" "}
        <Tool
          data={TOOLS["Oxc"]}
          size="small"
          withHandles={false}
          handleClick={handleToolClick}
        />{" "}
        pour le parsing et la minification et vise à fournir des améliorations
        de performance significatives tout en maintenant la compatibilité avec
        l'écosystème Rollup.
      </p>
    ),
  },

  Webpack: {
    description: ({ handleToolClick }) => (
      <p>
        Webpack est un bundler de modules statiques pour les applications
        JavaScript. Il construit un graphe de dépendances et empaquette les
        modules en fichiers de sortie optimisés. Il utilise{" "}
        <Tool
          data={TOOLS["Acorn"]}
          size="small"
          withHandles={false}
          handleClick={handleToolClick}
        />{" "}
        pour le parsing,{" "}
        <Tool
          data={TOOLS["Babel"]}
          size="small"
          withHandles={false}
          handleClick={handleToolClick}
        />{" "}
        pour la compilation et{" "}
        <Tool
          data={TOOLS["Terser"]}
          size="small"
          withHandles={false}
          handleClick={handleToolClick}
        />{" "}
        pour la minification.
      </p>
    ),
  },

  Rspack: {
    description: ({ handleToolClick }) => (
      <p>
        Rspack est un bundler basé sur Rust qui vise à être un remplaçant de{" "}
        <Tool
          data={TOOLS["Webpack"]}
          size="small"
          withHandles={false}
          handleClick={handleToolClick}
        />
        . Il utilise{" "}
        <Tool
          data={TOOLS["SWC"]}
          size="small"
          withHandles={false}
          handleClick={handleToolClick}
        />{" "}
        pour la compilation et la minification et fournit des améliorations de
        performance significatives tout en maintenant la compatibilité avec
        l'écosystème Webpack.
      </p>
    ),
  },

  Parcel: {
    description: ({ handleToolClick }) => (
      <p>
        Parcel est un bundler d'applications web sans configuration qui utilise{" "}
        <Tool
          data={TOOLS["SWC"]}
          size="small"
          withHandles={false}
          handleClick={handleToolClick}
        />{" "}
        pour la compilation JavaScript et{" "}
        <Tool
          data={TOOLS["Lightning\xa0CSS"]}
          size="small"
          withHandles={false}
          handleClick={handleToolClick}
        />{" "}
        pour l'optimisation CSS. Il analyse automatiquement les dépendances et
        fournit un support intégré pour divers types de fichiers sans nécessiter
        de configuration.
      </p>
    ),
  },

  Terser: {
    description: () => (
      <p>
        Terser est un minificateur JavaScript qui compresse et altère le code
        JavaScript pour réduire sa taille. Il est largement utilisé dans les
        constructions de production pour optimiser les paquets JavaScript avant
        leur déploiement.
      </p>
    ),
  },

  Oxc: {
    description: () => (
      <p>
        Oxc est un ensemble d'outils JavaScript/TypeScript écrits en Rust,
        fournissant des capacités de parsing, d'analyse statique, de formatage
        et de compilation haute performance. Il vise à être une chaîne d'outils
        complète qui peut remplacer plusieurs outils JavaScript existants tout
        en offrant des améliorations de performance significatives grâce à son
        implémentation en Rust.
      </p>
    ),
  },

  Prettier: {
    description: () => (
      <p>
        Prettier est un formateur de code opinionné qui supporte de nombreux
        langages. Il impose un style de code cohérent en analysant le code et en
        le réimprimant avec ses propres règles, prenant en compte la longueur
        maximale des lignes et retournant le code à la ligne quand nécessaire.
      </p>
    ),
  },

  Biome: {
    description: () => (
      <p>
        Biome est une chaîne d'outils performante pour les projets web, écrite
        en Rust. Elle fournit des capacités de parsing, d'analyse statique, de
        formatage et de linting rapides tout en visant à être un remplacement
        direct des outils existants dans l'écosystème JavaScript.
      </p>
    ),
  },

  Eslint: {
    description: () => (
      <p>
        ESLint est un outil d'analyse statique de code JavaScript identifiant
        les motifs problématiques dans le code JavaScript. Il aide à maintenir
        la qualité du code en appliquant les conventions de codage et en
        trouvant les erreurs potentielles avant qu'elles ne se produisent à
        l'exécution.
      </p>
    ),
  },

  Jest: {
    description: ({ handleToolClick }) => (
      <p>
        Jest est un framework de test JavaScript développé par Facebook. Il
        fournit une solution de test complète avec des bibliothèques d'assertion
        intégrées, des rapports de couverture de code et des capacités de
        mocking. Il utilise{" "}
        <Tool
          data={TOOLS["Babel"]}
          size="small"
          withHandles={false}
          handleClick={handleToolClick}
        />{" "}
        pour transpiler les fichiers de test, permettant le support des
        fonctionnalités JavaScript modernes.
      </p>
    ),
  },

  Vitest: {
    description: ({ handleToolClick }) => (
      <p>
        Vitest est un framework de test natif à{" "}
        <Tool
          data={TOOLS["Vite"]}
          size="small"
          withHandles={false}
          handleClick={handleToolClick}
        />{" "}
        avec un focus sur la vitesse. Il exploite la même configuration, les
        mêmes compilateurs, résolveurs et plugins qu'une application Vite.
        <br />
        <br />
        Il est conçu pour être compatible avec l'API de Jest tout en fournissant
        un support de première classe pour TypeScript, ES Modules et autres
        technologies web modernes. L'intégration avec Vite le rend extrêmement
        rapide pour les tests unitaires et d'intégration.
      </p>
    ),
  },

  Playwright: {
    description: ({ handleToolClick }) => (
      <p>
        Playwright est un framework de test end-to-end pour les applications web
        modernes, développé par Microsoft. Il permet les tests sur tous les
        navigateurs modernes incluant{" "}
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
        />{" "}
        et{" "}
        <Tool
          data={TOOLS["Safari"]}
          size="small"
          withHandles={false}
          handleClick={handleToolClick}
        />
        .
        <br />
        <br />
        Il fournit des capacités d'automatisation puissantes avec une API simple
        pour le contrôle de navigateur, l'interception réseau et les
        comparaisons visuelles.
      </p>
    ),
  },

  Cypress: {
    description: () => (
      <p>
        Cypress est un framework de test JavaScript conçu pour les applications
        web modernes. Il fournit une expérience de test end-to-end complète avec
        une interface utilisateur interactive pour exécuter les tests et
        observer leur exécution.
        <br />
        <br />
        Les fonctionnalités clés incluent le débogage voyage dans le temps, les
        rechargements en temps réel, l'attente automatique et la capture
        d'écran. Cypress peut être utilisé pour les tests unitaires et
        d'intégration, avec un support intégré pour le stubbing et le mocking.
      </p>
    ),
  },

  npm: {
    description: () => (
      <p>
        npm (Node Package Manager) est le gestionnaire de paquets par défaut
        pour Node.js et le plus grand registre de logiciels au monde. Il permet
        aux développeurs d'installer, partager et gérer les dépendances dans les
        projets JavaScript.
        <br />
        <br />
        npm consiste à la fois en un outil d'interface en ligne de commande
        (CLI) pour installer et gérer les paquets et en un registre en ligne qui
        héberge les paquets JavaScript.
      </p>
    ),
  },

  pnpm: {
    description: ({ handleToolClick }) => (
      <p>
        pnpm est un gestionnaire de paquets rapide et économe en espace disque
        pour les projets JavaScript. Contrairement à{" "}
        <Tool
          data={TOOLS["npm"]}
          size="small"
          withHandles={false}
          handleClick={handleToolClick}
        />{" "}
        ou{" "}
        <Tool
          data={TOOLS["yarn"]}
          size="small"
          withHandles={false}
          handleClick={handleToolClick}
        />{" "}
        qui créent des doublons de paquets dans chaque node_modules de projet,
        pnpm utilise un store adressé par contenu pour lier les mêmes versions
        de paquets à travers plusieurs projets.
        <br />
        <br />
        Cette approche réduit significativement l'utilisation de l'espace disque
        et accélère le temps d'installation, spécialement dans les
        configurations monorepo avec plusieurs paquets partageant des
        dépendances.
      </p>
    ),
  },

  yarn: {
    description: () => (
      <p>
        Yarn est un outil de gestion de dépendances rapide, fiable et sécurisé
        pour les projets JavaScript. Il a été créé pour résoudre les problèmes
        de performance et de sécurité de npm tout en fournissant des
        fonctionnalités supplémentaires comme les espaces de travail et le
        plug'n'play.
      </p>
    ),
  },

  Sass: {
    description: ({ handleToolClick }) => (
      <p>
        Sass (Syntactically Awesome Style Sheets) est un préprocesseur CSS qui
        étend{" "}
        <Tool
          data={TOOLS["CSS"]}
          size="small"
          withHandles={false}
          handleClick={handleToolClick}
        />{" "}
        avec des fonctionnalités comme les variables, les règles imbriquées, les
        mixins et les fonctions.
        <br />
        <br />
        Il aide les développeurs à écrire du code CSS plus maintenable et
        organisé qui se compile en fichiers CSS standard que les navigateurs
        peuvent comprendre. Sass existe en deux syntaxes : la syntaxe indentée
        originale (.sass) et la syntaxe SCSS plus largement utilisée (.scss).
      </p>
    ),
  },

  PostCSS: {
    description: ({ handleToolClick }) => (
      <p>
        PostCSS est un outil pour transformer{" "}
        <Tool
          data={TOOLS["CSS"]}
          size="small"
          withHandles={false}
          handleClick={handleToolClick}
        />{" "}
        avec des plugins JavaScript. Grâce à son écosystème étendu de plugins,
        il peut ajouter des préfixes de fournisseur, convertir les
        fonctionnalités CSS modernes en versions plus anciennes, analyser la
        syntaxe CSS et bien plus.
      </p>
    ),
  },

  Tailwind: {
    description: ({ handleToolClick }) => (
      <p>
        Tailwind CSS est un framework CSS "utility-first" qui fournit des
        classes utilitaires de bas niveau pour construire des designs
        personnalisés. Il utilise{" "}
        <Tool
          data={TOOLS["Lightning\xa0CSS"]}
          size="small"
          withHandles={false}
          handleClick={handleToolClick}
        />{" "}
        pour traiter et optimiser la sortie CSS finale, s'assurant que seules
        les utilitaires utilisés sont inclus dans la construction de production.
      </p>
    ),
  },
};
