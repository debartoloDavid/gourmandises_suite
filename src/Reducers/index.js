import { combineReducers } from 'redux';

import recettesListReducer from './RecetteListReducer';
import recetteReducer from './RecetteReducer';
import techniquesReducer from './TechniqueReducer';
import ingredientReducer from './IngredientsReducer'

const rootReducer = combineReducers({
  recettesListReducer,
  recetteReducer,
  techniquesReducer,
  ingredientReducer
});

export default rootReducer;