import { FilteredProductsListType } from '@/types';
import { sortByNameAZ, sortByPrice } from '@/utils/helperFunction';

export const productSelector = (state: FilteredProductsListType) =>
	state.productsList;
export const filterSelector = (state: FilteredProductsListType) => state.filter;
export const filteredProductsListSelector = (
	state: FilteredProductsListType
) => {
	switch (state.filter) {
		case 'alphabetically':
			return sortByNameAZ(state.productsList);
		case 'count':
			return sortByPrice(state.productsList);
		default:
			return state.productsList;
	}
};

export const stateSelector = (state: FilteredProductsListType) => state;
