import { ProductType, ActionType } from '@/type';

const defaultState: ProductType[] = [];

export const productsListReducer = (
	state = defaultState,
	action: ActionType
) => {
	switch (action.type) {
		case 'FETCH_PRODUCT_LIST':
			return action.productsList;
		case 'ADD_PRODUCT':
			return [...state, action.product];
		case 'DELETE_PRODUCT':
			state = state.filter(
				(product: ProductType) => action.productId !== product.id
			);
			return state;
		case 'EDIT_PRODUCT':
			state = state.map((product: ProductType) =>
				product.id === action.updateProduct.id ? action.updateProduct : product
			);
			return state;
		default:
			return state;
	}
};
