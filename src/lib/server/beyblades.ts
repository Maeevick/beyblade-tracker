import { db } from './db';
import { beyblades, type Beyblade } from './schema';

export async function getBeyblades(): Promise<Beyblade[]> {
	return db.select().from(beyblades).orderBy(beyblades.name);
}
