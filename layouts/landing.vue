<template>
  <div class="page-wrapper">
    <div class="page-view">
      <div class="landing-view">
        <Navbar />
        <LandingHero />
      </div>
      <section class="main-content columns pt-5">
        <div class="container column is-10">
          <nuxt />
        </div>
      </section>
      <Footer />
    </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import LandingHero from '../components/LandingHero'

export default {
  components: {
    Navbar,
    Footer,
    LandingHero,
  },
  transition: 'page'
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
.landing-view {
  background-color: #febd2e;
  margin: -2rem;
  margin-bottom: 0;
  border-radius: 2rem;
  padding: 2rem;
  overflow: hidden;
  position: relative;
  max-height: 35rem;
}
</style>