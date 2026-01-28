import { Pool } from "pg";
import * as schema from "./schema";
import { drizzle } from "drizzle-orm/node-postgres";
import { ConfigService } from "@nestjs/config";

export const DRIZZLE_СONN_TOKEN = Symbol("DRIZZLE_CONNECTION_TOKEN");

export const drizzleProvider = {
  provide: DRIZZLE_СONN_TOKEN,
  inject: [ConfigService],
  useFactory: async (config: ConfigService) => {
    const dbUrl = config.get<string>('DATABASE_URL')

    if (!dbUrl) {
        throw new Error(`DATABASE_URL not defined in .env`)
    }

    const pool = new Pool({
      connectionString: dbUrl,
    });
    
    return drizzle(pool, { schema });
  },
};
