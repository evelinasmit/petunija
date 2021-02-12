import axios from 'axios';
import ApiUtils from '../util/apiutils';

export const state = () => ({
  recipes: ['test']
})

export const mutations = {
  setRecipes(state, recipes) {
    state.recipes = recipes;
  }
}

export const actions = {
  async searchRecipes({ commit }, ingredients) {
    if (Array.isArray(ingredients) && ingredients.length) {
      await axios.get('/paieska?q=' + ingredients.join('+'))
        .then(response => commit('setRecipes', ApiUtils.parseRecipes(response.data)))
    }
  }
}
