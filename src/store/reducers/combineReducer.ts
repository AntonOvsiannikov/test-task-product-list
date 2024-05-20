import { productsListReducer } from './productsListReducer';
import { filterReducer } from './filterReducer';
import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
	productsList: productsListReducer,
	filter: filterReducer,
});
