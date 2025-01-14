import { drizzle } from "drizzle-orm/libsql/node";

import { env } from "../env";

export const db = drizzle(env.DATABASE_URL);
