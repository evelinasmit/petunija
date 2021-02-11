<template>
  <div class="page-wrapper">
    <div class="page-view">
        <Navbar />
        <section class="main-content columns">

          <div class="container column is-10">
            <nuxt />
          </div>
        </section>
      </div>
    </div>
</template>

<script>
import Navbar from "../components/Navbar";

export default {
  components: {
    Navbar
  },
  data() {
    return {
    }
  },
}
</script>

<style lang="scss">
.page-wrapper {
  background-color: #e6dbcc;
  padding: 3vw;
  min-height: 100vh;
}
.page-view {
  border-radius: 2rem;
  background-color: #f5f3f0;
  border: 5px solid white;
  padding: 2rem;
}
.navbar {
  background-color: transparent;
  .navbar-brand {
    padding-right: 5rem;
  }
  .navbar-menu {
    .navbar-item {
      padding: 0 1.5rem;
    }
  }
}
</style>
