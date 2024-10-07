export type Beyblade = {
	id: string;
	name: string;
	thumbnail: string;
	images: string[];
	description: string;
	rotation: Rotation;
	attack: number;
	defense: number;
	burst: number;
	agility: number;
	stamina: number;
	weight: number;
};

export type Rotation = 'LEFT' | 'RIGHT';
export type SortOrder = 'ASC' | 'DESC';
