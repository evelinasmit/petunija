<template>
  <div>
    <div class="recipe box" v-for="(recipe, index) in recipes" :key="index">
      <div class="tile is-ancestor">
        <img class="tile is-vertical is-12 is-rounded" :src="recipe.image" :alt="recipe.name">
        <h2 class="tile is-10 is-vertical is-size-4 pl-4">{{ recipe.name }}</h2>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Recipes',
    props: {
      recipes: Array
    }
  }
</script>

<style lang="scss" scoped>
.recipe {
  img {
    border-radius: 1rem;
    max-width: 15rem;
  }
}
</style>