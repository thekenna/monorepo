import dotenv from 'dotenv'
import { defineConfig } from 'drizzle-kit';

dotenv.config()

export default defineConfig({
  schema: './src/infrastructure/database/schema/*.ts', // Где лежат наши таблицы
  out: './drizzle', // Куда генерировать SQL миграции
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});