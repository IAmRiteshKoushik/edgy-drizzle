CREATE TABLE "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"full_name" text,
	"email" text,
	"password" text,
	"role" text,
	"created_at" timestamp,
	"updated_at" timestamp
);
