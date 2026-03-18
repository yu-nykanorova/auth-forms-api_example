export interface IProduct {
	id: number;
	title: string;
	description: string;
	slug: string;
	price: number;
    category: ICategory;
    images: string[]
}

export interface ICategory {
	id: number;
	name: string;
	slug: string;
	image: string;
}