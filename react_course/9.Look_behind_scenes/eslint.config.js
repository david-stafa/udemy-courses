import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  { files: ["**/*.{js,mjs,cjs,jsx,ts,tsx}"] }, // Include TS files
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  {
    ...pluginReact.configs.flat.recommended,
    rules: {
      ...pluginReact.configs.flat.recommended.rules,
      "react/react-in-jsx-scope": "off", // Disable unnecessary React import rule
      "react/prop-types": "off", // 🔥 Disable prop-types validation
    },
  },
];
