import { ProductType } from '@/type';

export const sortByNameAZ = (products: ProductType[]): ProductType[] => {
	return products.slice().sort((a, b) => a.name.localeCompare(b.name));
};

export const sortByPrice = (products: ProductType[]): ProductType[] => {
	return products.slice().sort((a, b) => a.price - b.price);
};
