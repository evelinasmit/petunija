<template>
  <b-navbar spaced transparent>
    <template #brand>
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <h1 class="brand-icon">Petunija</h1>
      </b-navbar-item>
    </template>
    <template #start>
      <b-navbar-item href="#">Receptai</b-navbar-item>
      <b-navbar-item href="#">Sezono ingredientai</b-navbar-item>
      <b-navbar-item href="#">Apie mus</b-navbar-item>
    </template>

    <template #end>
      <b-navbar-item tag="div">
        <div class="buttons">
          <b-button type="is-primary is-light" rounded>Junkis</b-button>
        </div>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>