<template>
  <div>
    <header-bar></header-bar>
    <v-btn color="primary">da</v-btn>
    <v-btn color="primary">ads</v-btn>
    <footer-bar></footer-bar>
  </div>
</template>
<script>
import headerBar from "../components/header";
import footerBar from "../components/footer";
export default {
  name: 'Home',
  components: {
    footerBar,
    headerBar
  }

}
</script>
