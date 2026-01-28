import { pgTable } from "drizzle-orm/pg-core";
import * as t from "drizzle-orm/pg-core";
import { createSelectSchema } from "drizzle-zod";
import { createZodDto } from "nestjs-zod";
import z from "zod";

export const usersTable = pgTable("users", {
  id: t.uuid("id").defaultRandom().primaryKey(),
  email: t.text("email").notNull().unique(),
  createdAt: t.timestamp("created_at").defaultNow().notNull(),
});

export const usersDbSchema = createSelectSchema(usersTable, {
  id: () => z.uuid(),
  email: () => z.email(),
});

export type UserDbSchemaType = z.infer<typeof usersDbSchema>;

export class UserDbDto extends createZodDto(usersDbSchema) {}
