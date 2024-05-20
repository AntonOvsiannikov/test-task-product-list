export enum CommonButtonTypes {
	BUTTON = 'button',
	SUBMIT = 'submit',
	RESET = 'reset',
}
export interface CommonSelectType {
	value: string;
	text: string;
}

export interface IOptions {
	url: string;
	method: string;
}
export interface IAddOptions {
	url: string;
	method: string;
	body: string;
}

export interface ProductType {
	id: number;
	imageUrl: string;
	name: string;
	count: number;
	size: {
		width: string;
		height: string;
	};
	weight: string;
	comments: CommentType[];
}
export interface CommentType {
	id: number;
	productId: number;
	description: string;
	date: string;
}

export interface ActionType {
	type: string;
	payload: string | ProductType;
}
export interface FilteredProductsListType {
	productsList: ProductType[];
	filter: string;
}

export interface FieldType {}
