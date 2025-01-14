import type { Config } from "drizzle-kit";
import { defineConfig } from "drizzle-kit";

import { env } from "./env";

export default defineConfig({
  out: "./drizzle",
  schema: "./src/schema.ts",
  dialect: "sqlite",
  dbCredentials: {
    url: env.DATABASE_URL,
  },
} satisfies Config);
