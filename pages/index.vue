<template>
  <section class="ingredient-search">
    <IngredientSearch/>
  </section>
</template>

<script>
import IngredientSearch from "../components/IngredientSearch";

export default {
  name: 'HomePage',
  layout: 'landing',
  components: { IngredientSearch }
}
</script>

<style lang="scss">

</style>