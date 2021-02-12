<template>
  <section>
    <b-taglist>
      <b-tag
        v-for="(selection, index) in selected"
        :key="index"
        type="is-primary"
        closable
        @close="onRemoveSelection(selection)"
        >{{ selection }}
      </b-tag>
    </b-taglist>
    <b-field label="Davai vedi ingredientus:">
      <b-autocomplete
        rounded
        v-model="search"
        :data="filteredDataArray"
        placeholder="pvz. pienas"
        icon="magnify"
        clear-on-select
        @select="onAddSelection($event)"
      >
        <template #empty>No results found</template>
      </b-autocomplete>
    </b-field>
  </section>
</template>

<script>
import ingredients from '../assets/data/ingredients'
export default {
  name: 'IngredientSearch',
  data() {
    return {
      data: ingredients,
      selected: new Set(),
      search: '',
    }
  },
  computed: {
    filteredDataArray: function () {
      if (this.search != null && this.search.length > 0)
        return ingredients.filter((option) =>
          this.sanitizedString(option).includes(this.sanitizedString(this.search))
        ).sort((a, b) => a.length - b.length)
    },
  },
  methods: {
    sanitizedString(str) {
      return str
        .toString()
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
    },
    onAddSelection(selection) {
      if (selection != null && selection.length > 0)
        this.selected.add(selection)
    },
    onRemoveSelection(selection) {
      this.selected.delete(selection)
    },
  },
}
</script>

<style lang="scss" scoped>
</style>