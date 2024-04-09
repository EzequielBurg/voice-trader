import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";
import tseslint from "typescript-eslint";

import { FlatCompat } from "@eslint/eslintrc";
import pluginJs from "@eslint/js";
import path from "path";
import { fileURLToPath } from "url";

// mimic CommonJS variables -- not needed if using CommonJS
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({baseDirectory: __dirname, recommendedConfig: pluginJs.configs.recommended});

export default [
  ...compat.extends("standard-with-typescript"),
  ...tseslint.configs.recommended,
  pluginReactConfig,

];
