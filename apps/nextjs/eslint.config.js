import baseConfig, { restrictEnvAccess } from "@arvbin/eslint-config/base";
import nextjsConfig from "@arvbin/eslint-config/nextjs";
import reactConfig from "@arvbin/eslint-config/react";

/** @type {import('typescript-eslint').Config} */
export default [
  {
    ignores: [".next/**"],
  },
  ...baseConfig,
  ...reactConfig,
  ...nextjsConfig,
  ...restrictEnvAccess,
];
