import { request } from '@/http';
import { ProductType } from '@/type';

export const getProductList = () => {
	return request({
		url: import.meta.env.VITE_API_BASE_URL + '/products-list',
		method: 'GET',
	});
};
export const getOneProduct = (productId: number) => {
	return request({
		url: import.meta.env.VITE_API_BASE_URL + `/products-list/${productId}`,
		method: 'GET',
	});
};
export const createProduct = (product: ProductType) => {
	return request({
		url: import.meta.env.VITE_API_BASE_URL + `/products-list`,
		method: 'POST',
		body: JSON.stringify(product),
	});
};
export const updateProduct = (product: ProductType) => {
	return request({
		url: import.meta.env.VITE_API_BASE_URL + `/products-list/${product.id}`,
		method: 'PUT',
		body: JSON.stringify(product),
	});
};
export const deleteProduct = (productId: number) => {
	return request({
		url: import.meta.env.VITE_API_BASE_URL + `/products-list/${productId}`,
		method: 'DELETE',
	});
};
