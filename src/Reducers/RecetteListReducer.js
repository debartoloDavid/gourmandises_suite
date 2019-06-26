import { RECETTE_LIST } from "../Actions/index"

export default function(state = {}, action) {
    switch (action.type) {
        case RECETTE_LIST:
            return { ...state, recettes: action.payload };
        default:
            return state;
    }
}