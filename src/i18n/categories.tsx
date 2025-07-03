import type { CategoryTranslation } from "./types";

export const categoriesEn: Record<string, CategoryTranslation> = {
  specification: {
    name: "Specification",
    description: (
      <p>
        A language specification is a documentation artifact defining a set of
        rules and constraints that an implementation must follow to be
        considered compliant.
      </p>
    ),
  },
  jsEngine: {
    name: "JS Engine",
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
  jsRuntime: {
    name: "JS Runtime",
    description:
      "JavaScript execution environment providing APIs for I/O operations (networking, file-system access, multithreading, RTC) based on a event-driven, asynchronous architecture.",
  },
  typeChecker: {
    name: "Type Checker",
    description:
      "Tool that statically validates that values conform to expected data-types in order to catch type-errors early.",
  },
  viewLibrary: {
    name: "View Library",
    description: (
      <p>
        Libraries providing a set of tools to build user interfaces (UI) using
        components.
      </p>
    ),
  },
  compilerTranspiler: {
    name: "Compiler / Transpiler",
    description: (
      <>
        <span>
          Tool transforming code from one language to another, or from a
          superset to a subset of a language (e.g. TS → JS, JSX → JS, ESNext →
          ES5, Sass → CSS...).
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
  parser: {
    name: "Parser",
    description:
      "Tool taking source code as input and converting it into a structured representation, typically an Abstract Syntax Tree (AST), for further processing like compilation or interpretation.",
  },
  bundler: {
    name: "Bundler",
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
  minifier: {
    name: "Minifier",
    description:
      "Tool optimizing code by shrinking variable names, removing useless whitespaces / line-breaks / comments and dropping unused code.",
  },
  devServer: {
    name: "Dev Server",
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
  linter: {
    name: "Linter",
    description:
      "Tool statically analyzing code to find problematic patterns or code that doesn't adhere to configured style guidelines.",
  },
  formatter: {
    name: "Formatter",
    description:
      "Tool automatically formatting code according to a set of rules, typically to enforce a consistent style across a codebase.",
  },
  testRunner: {
    name: "Test Runner",
    description:
      "Tool executing tests and reporting results, typically providing features like test isolation, parallelization, and code coverage.",
  },
  packageManager: {
    name: "Package Manager",
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
  cssBuildSystem: {
    name: "CSS Build System",
    description:
      "Tool providing a set of utilities to generate CSS from higher-level languages or syntaxes.",
  },
};

export const categoriesFr: Record<string, CategoryTranslation> = {
  specification: {
    name: "Spécification",
    description: (
      <p>
        Une spécification de langage est un artefact de documentation
        définissant un ensemble de règles et contraintes qu'une implémentation
        doit suivre pour être considérée conforme.
      </p>
    ),
  },
  jsEngine: {
    name: "Moteur JS",
    description: (
      <p>
        Logiciel de bas niveau responsable de la compilation et de l'exécution
        du code JavaScript (et WebAssembly).
        <br />
        <br />
        Leur utilisation principale se fait à travers les navigateurs web et les
        environnements d'exécution JavaScript qui s'appuient sur eux pour
        exécuter le code JavaScript.
        <br />
        <br />
        <u>Note</u> : Les langages comme JavaScript et WebAssembly "existent" à
        travers l'implémentation de leurs spécifications respectives par les
        moteurs JS.
      </p>
    ),
  },
  jsRuntime: {
    name: "Runtime JS",
    description:
      "Environnement d'exécution JavaScript fournissant des APIs pour les opérations d'I/O (réseau, accès au système de fichiers, multithreading, RTC) basé sur une architecture événementielle et asynchrone.",
  },
  typeChecker: {
    name: "Type Checker",
    description:
      "Outil qui valide statiquement que les valeurs sont conformes aux types de données attendus afin de détecter les erreurs de type tôt.",
  },
  viewLibrary: {
    name: "View Library",
    description: (
      <p>
        Bibliothèques fournissant un ensemble d'outils pour construire des
        interfaces utilisateur (UI) en utilisant des composants.
      </p>
    ),
  },
  compilerTranspiler: {
    name: "Compilateur / Transpileur",
    description: (
      <>
        <span>
          Outil transformant le code d'un langage vers un autre, ou d'un
          sur-ensemble vers un sous-ensemble d'un langage (ex. TS → JS, JSX →
          JS, ESNext → ES5, Sass → CSS...).
        </span>
        <br />
        <br />
        <span>
          Les compilateurs sont des parties centrales de la plupart des outils
          frontend modernes car ils permettent l'utilisation prête à l'emploi de
          fonctionnalités comme le typage statique (ex. TypeScript) ou la
          syntaxe de haut niveau (ex. JSX).
        </span>
      </>
    ),
  },
  parser: {
    name: "Parser",
    description:
      "Outil prenant le code source en entrée et le convertissant en une représentation structurée, typiquement un arbre syntaxique abstrait (AST), pour un traitement ultérieur comme la compilation ou l'interprétation.",
  },
  bundler: {
    name: "Bundler",
    description: (
      <>
        <span>
          Outil prenant plusieurs fichiers d'entrée (code ou autres ressources
          statiques), résolvant leurs dépendances, et les combinant en fichiers
          de sortie optimisés pour une exécution efficace dans un navigateur ou
          environnement d'exécution.
        </span>
        <br />
        <br />
        <span>
          Les "méta-frameworks" modernes et outils de construction (ex. Vite,
          Next.js, Astro...) utilisent des bundlers en interne pour permettre
          l'optimisation et l'utilisation prête à l'emploi de nombreux types de
          ressources (ex. fichiers TypeScript, modules CSS, images, fichiers
          JSON...).
        </span>
        <br />
        <br />
        <span>
          Les bundlers sont également largement utilisés pour la compilation et
          le packaging de bibliothèques.
        </span>
      </>
    ),
  },
  minifier: {
    name: "Minifier",
    description:
      "Outil optimisant le code en réduisant les noms de variables, supprimant les espaces blancs/retours à la ligne/commentaires inutiles et éliminant le code inutilisé.",
  },
  devServer: {
    name: "Serveur de développement",
    description: (
      <>
        <span>
          Serveur local fournissant des fonctionnalités de développement comme
          le rechargement à chaud, les rapports d'erreur, et la transformation
          de ressources facilitant les modifications de code sans nécessiter une
          compilation complète de production.
        </span>
        <br />
        <br />
        <span>
          Les "méta-frameworks" modernes et outils de construction (ex. Vite,
          Next.js, Astro...) sont, en substance, des serveurs de développement
          orchestrant des bundlers.
        </span>
      </>
    ),
  },
  linter: {
    name: "Linter",
    description:
      "Outil analysant statiquement le code pour trouver des patterns problématiques ou du code qui n'adhère pas aux directives de style configurées.",
  },
  formatter: {
    name: "Formatter",
    description:
      "Outil formatant automatiquement le code selon un ensemble de règles, typiquement pour enforcer un style cohérent dans une base de code.",
  },
  testRunner: {
    name: "Test Runner",
    description:
      "Outil exécutant les tests et rapportant les résultats, fournissant typiquement des fonctionnalités comme l'isolation des tests, la parallélisation, et la couverture de code.",
  },
  packageManager: {
    name: "Package Manager",
    description: (
      <>
        <span>
          Outil permettant la gestion (installation, désinstallation, mise à
          jour) des dépendances dans les projets JavaScript. Ils fournissent des
          fonctionnalités comme le versioning, la résolution de dépendances, et
          le verrouillage de versions à travers les fichiers de verrous
          (lockfile).
        </span>
        <br />
        <br />
        <span>
          Les gestionnaires de paquets s'appuient sur des registres pour
          récupérer les paquets et leurs métadonnées : le registre le plus connu
          et utilisé est le{" "}
          <a
            className="underline"
            href="https://www.npmjs.com/"
            target="blank"
            rel="noopener noreferrer"
          >
            registre npm
          </a>
          .
        </span>
      </>
    ),
  },
  cssBuildSystem: {
    name: "CSS Build System",
    description:
      "Outil fournissant un ensemble d'utilitaires pour générer du CSS à partir de langages ou syntaxes de haut niveau.",
  },
};
