import { pgTable, serial, text, timestamp } from "npm:drizzle-orm/pg-core";

export const usersTable = pgTable('users', {
  id: serial('id').primaryKey(),
  name: text('full_name'),
  email: text('email'),
  password: text('password'),
  role: text('role').$type<"admin" | "customer">(),
  createdAt: timestamp("created_at"),
  updatedAt: timestamp("updated_at"),
});

export const countriesTable = pgTable("countries", {
  id: serial("id"),
  name: text("name"),
});
