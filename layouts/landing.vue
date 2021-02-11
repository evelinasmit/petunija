<template>
  <div class="page-wrapper">
    <div class="page-view">
      <div class="landing-view">
        <Navbar />
        <section class="hero">
          <div class="hero-body">
            <p class="title">
              Pilniems šaldytuvams,<br />
              tuščioms galvoms.
            </p>
            <p class="subtitle pt-5">
              <span class="brand-icon pr-2">Petunija</span> - nemokama išmani receptų paieška, 
              <br> tiesiog įvesk ingredientus iš savo virtuvės.
            </p>
            <img id="main-graphic" :class="{loaded:mainGraphicLoaded}" @load="mainGraphicLoaded = true" src="@/assets/cook.svg" />
            <svg
              class="blob-icon"
              height="500"
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#3A3A3A"
                d="M45.2,-25.2C60.4,-17.1,75.7,1.9,71.5,14.8C67.3,27.7,43.7,34.6,25.9,36.5C8.1,38.5,-3.8,35.5,-21.3,31.8C-38.8,28.1,-61.8,23.8,-70.7,9.2C-79.6,-5.4,-74.3,-30.2,-60.1,-38.1C-46,-46,-23,-37,-4,-33.9C15,-30.7,30.1,-33.3,45.2,-25.2Z"
                transform="translate(100 100)"
              />
            </svg>
            <svg
              class="blob-icon"
              height="500"
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#3A3A3A"
                d="M53.8,-19.1C59.3,-0.6,46.2,22.4,31.1,30.3C16.1,38.3,-0.7,31.2,-16.5,20.3C-32.4,9.4,-47.2,-5.4,-44.3,-20.3C-41.4,-35.3,-20.7,-50.4,1.7,-51C24.2,-51.5,48.4,-37.5,53.8,-19.1Z"
                transform="translate(100 100)"
              />
            </svg>
            <svg
              class="blob-icon"
              height="500"
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#E8DAFF"
                d="M47.4,-41.1C57.5,-25.2,58.9,-5.7,55.1,13.2C51.3,32.1,42.2,50.4,27.3,58.2C12.4,65.9,-8.3,63.1,-23.7,53.9C-39.1,44.7,-49.1,29.1,-49.7,14.7C-50.2,0.4,-41.3,-12.7,-31.5,-28.6C-21.6,-44.4,-10.8,-62.9,3.9,-66C18.7,-69.1,37.4,-56.9,47.4,-41.1Z"
                transform="translate(100 100)"
              />
            </svg>
          </div>
        </section>
      </div>
      <section class="main-content columns">
        <div class="container column is-10">
          <nuxt />
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar'

export default {
  components: {
    Navbar,
  },
  data() {
    return {
      mainGraphicLoaded: false
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
.landing-view {
  background-color: #febd2e;
  margin: -2rem;
  border-radius: 2rem;
  padding: 2rem;
  overflow: hidden;
  position: relative;
  max-height: 35rem;
  .hero {
    max-width: 80%;
    margin: auto;
    p {
      pointer-events: none;
      user-select: none;
    }
    .subtitle {
      font-size: 1.3rem;
      color: #3A3A3A !important;
      line-height: 2rem;
      span {
        font-size: 1.8rem;
      }
    }
  }
  #main-graphic {
    position: absolute;
    max-width: 30rem;
    right: 15%;
    top: 22%;
    pointer-events: none;
    user-select: none;
    z-index: 2;
    opacity: 0;
    transition: ease-in 0.3s;
    &.loaded {
      opacity: 1;
    }
  }
  .blob-icon:first-of-type {
    left: -10%;
  }
  .blob-icon:nth-of-type(2) {
    right: -10%;
  }
  .blob-icon:nth-of-type(3) {
    z-index: 1;
    bottom: 10%;
    right: 20%;
    opacity: 90%;
  }
  .blob-icon {
    position: absolute;
    bottom: -40%;
  }
}
</style>