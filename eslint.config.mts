import { defineConfig } from "eslint/config";
import globals from "globals";
import tseslint from "typescript-eslint";

export default defineConfig([
  {
    files: ["**/*.{ts,mjs,cjs,mts,cts}"],
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
    ignores: ["dist/**", ".config/**", "tsconfig.json"],
    rules: {
      "no-unused-vars": "error",
      "no-undef": "off",
    },
  },
  ...tseslint.configs.recommended,
]);
