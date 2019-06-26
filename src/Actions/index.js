import axios from 'axios'
export const RECETTE_LIST = 'RECETTE_LIST'
export const TECHNIQUE_LIST = 'TECHNIQUE_LIST'
export const INGREDIENT_LIST = 'INGREDIENT_LIST'
export const RECCETTE = 'RECCETTE'

const API_END_POINT = 'http://localhost:8080/api/'

export function getRecetteAction(recette) {
  return {
    type: "RECCETTE",
    payload: recette
  };
}

export function repicesListAction(technique, page) {
	technique = (technique != null) ? `&thematiques=${technique}` : ''
	console.log(technique)
	return function (dispatch) {
		return axios(`${API_END_POINT}recettes?_format=hal_json${technique}&page=${page}`).then(function (responseRecettes) {
			// console.log(responseRecettes);
			dispatch({
				type: RECETTE_LIST,
				payload: responseRecettes.data
			})
		});
	}
}

export function techniqueListAction() {
	return function (dispatch) {
		return axios(`${API_END_POINT}technique?_format=hal_json`).then(function (responseTechnique) {
			// console.log(responseTechnique);
			dispatch({
				type: TECHNIQUE_LIST,
				payload: responseTechnique.data
			})
		});
	}
}

export function ingredientListAction() {
	return function (dispatch) {
		return axios(`${API_END_POINT}ingredients?_format=hal_json`).then(function (responseIngredient) {
			dispatch({
				type: INGREDIENT_LIST,
				payload: responseIngredient.data
			})
		});
	}
}