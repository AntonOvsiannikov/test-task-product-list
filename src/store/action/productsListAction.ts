import { ProductType } from '@/type';

export const fetchProductList = (productsList: ProductType[]) => {
	return {
		type: 'FETCH_PRODUCT_LIST',
		productsList,
	};
};

export const createProductAction = (product: ProductType) => {
	return {
		type: 'ADD_PRODUCT',
		product,
	};
};
export const deleteProductAction = (productId: number) => {
	return {
		type: 'DELETE_PRODUCT',
		productId,
	};
};
export const editProductAction = (updateProduct: ProductType) => {
	return {
		type: 'EDIT_PRODUCT',
		updateProduct,
	};
};
