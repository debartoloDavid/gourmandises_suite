import { INGREDIENT_LIST } from "../Actions/index"

export default function(state = {}, action) {
	switch (action.type) {
		case INGREDIENT_LIST:
			return { ...state, ingredients: action.payload };
		default:
			return state;
	}
}