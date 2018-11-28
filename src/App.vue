<template>
  <div>

    <router-view />

  </div>
</template>

<script>
import Navbar from './components/Navbar'

export default {

  components: {
    Navbar
  },

};
</script>


<style lang="scss">
  @import "~bootstrap/scss/bootstrap";
  $fa-font-path: "~font-awesome/fonts/";
  @import "~font-awesome/scss/font-awesome";
  @import "~placeholder-loading/src/scss/placeholder-loading";
</style>
