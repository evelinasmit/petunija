<template>
  <section class="ingredient-search">
    <IngredientSearch @ingredient-change="searchRecipes" />
    <Recipes :recipes="recipes" />
  </section>
</template>

<script>
import IngredientSearch from '../components/IngredientSearch'
import Recipes from '../components/Recipes'

export default {
  name: 'HomePage',
  layout: 'landing',
  components: {
    IngredientSearch,
    Recipes,
  },
  data() {
    return {
      ingredients: [],
    }
  },
  computed: {
    recipes() {
      return this.$store.state.recipes.recipes
    },
  },
  methods: {
    searchRecipes(ingredients) {
      this.ingredients = ingredients
      this.$store.dispatch('recipes/searchRecipes', ingredients)
    },
  },
}
</script>

<style lang="scss">
</style>