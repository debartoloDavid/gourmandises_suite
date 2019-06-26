import { RECCETTE } from "../Actions/index"
export default function(state = {}, action) {
    switch (action.type) {
      case RECCETTE:
        return { ...state, recette: action.payload };
      default:
        return state;
    }
}