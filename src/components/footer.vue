<template>
  <div class="">
    <v-bottom-navigation

        v-model="value"

        color="indigo"
        grow
        light
        scroll-threshold="50"
        class=" justify-space-between "
    >
      <v-btn>
        <span>Video</span>

        <v-icon>mdi-television-play</v-icon>
      </v-btn>

      <v-btn>
        <span>Music</span>

        <v-icon>mdi-music-note</v-icon>
      </v-btn>

      <v-btn>
        <span>Book</span>

        <v-icon>mdi-book</v-icon>
      </v-btn>

      <v-btn>
        <span>Image</span>

        <v-icon>mdi-image</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </div>
</template>

<script>
export default {
  name: "footer"
}
</script>

<style scoped>

</style>
