import { pgTable, uuid, text, timestamp, varchar } from 'drizzle-orm/pg-core'

export const usersPgSchema = {
    id: uuid('id').defaultRandom().primaryKey(),
    email: text('email').notNull().unique(),
    createdAt: timestamp('created_at').defaultNow(),
}