import { pgTable, text, integer, uuid, pgEnum } from 'drizzle-orm/pg-core';

export const rotationEnum = pgEnum('rotation', ['LEFT', 'RIGHT']);

export const beyblades = pgTable('beyblades', {
	id: uuid('id').defaultRandom().primaryKey(),
	name: text('name').notNull(),
	thumbnail: text('thumbnail'),
	rotation: rotationEnum('rotation').notNull(),
	attack: integer('attack').notNull(),
	defense: integer('defense').notNull(),
	burst: integer('burst').notNull(),
	agility: integer('agility').notNull(),
	stamina: integer('stamina').notNull(),
	weight: integer('weight').notNull(),
	description: text('description')
});

export type Beyblade = typeof beyblades.$inferSelect;
export type NewBeyblade = typeof beyblades.$inferInsert;
