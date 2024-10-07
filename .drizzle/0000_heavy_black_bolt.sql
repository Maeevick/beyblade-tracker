DO $$ BEGIN
 CREATE TYPE "public"."rotation" AS ENUM('LEFT', 'RIGHT');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "beyblades" (
	"id" uuid PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"thumbnail" text,
	"rotation" "rotation" NOT NULL,
	"attack" integer NOT NULL,
	"defense" integer NOT NULL,
	"burst" integer NOT NULL,
	"agility" integer NOT NULL,
	"stamina" integer NOT NULL,
	"weight" integer NOT NULL,
	"description" text
);
