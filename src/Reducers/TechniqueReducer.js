import { TECHNIQUE_LIST } from "../Actions/index"

export default function(state = {}, action) {
	switch (action.type) {
		case TECHNIQUE_LIST:
			return { ...state, techniques: action.payload };
		default:
			return state;
	}
}