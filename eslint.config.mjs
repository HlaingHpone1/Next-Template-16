import { defineConfig, globalIgnores } from "eslint/config";
import js from "@eslint/js";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import jsxA11y from "eslint-plugin-jsx-a11y";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import importPlugin from "eslint-plugin-import";

const eslintConfig = defineConfig([
  js.configs.recommended,

  ...nextVitals,
  ...nextTs,

  {
    plugins: {
      "jsx-a11y": jsxA11y,
    },
    rules: {
      ...jsxA11y.configs.recommended.rules,
    },
  },

  {
    plugins: {
      "simple-import-sort": simpleImportSort,
      "import": importPlugin,
    },
    rules: {
      "simple-import-sort/imports": "warn",
      "simple-import-sort/exports": "warn",
      "import/first": "warn",
      "import/newline-after-import": "error",
      "import/no-duplicates": "error",
    },
  },

  globalIgnores([
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    "node_modules/**",
  ]),
]);

export default eslintConfig;