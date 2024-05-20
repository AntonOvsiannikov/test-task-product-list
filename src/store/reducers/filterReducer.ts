import { ActionType } from '@/type';

const defaultState = 'alphabetically';

export const filterReducer = (state = defaultState, action: ActionType) => {
	switch (action.type) {
		case 'SET_FILTER':
			return action.payload;
		default:
			return state;
	}
};
