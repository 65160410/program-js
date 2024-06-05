<template>
  <v-container class="home">
    <v-parallax src="https://source.unsplash.com/collection/190727/1600x900" height="600">
      <v-layout
        column
        align-center
        justify-center
        class="white--text text-center"
      >
        <h1 class="display-2 mb-3 font-weight-bold text-shadow">Welcome to My Portfolio</h1>
        <h4 class="subheading font-italic text-shadow">Hello, I'm a student at [Your University]. Here are some of my projects and experiences.</h4>
        <v-btn
          large
          class="mt-5"
          color="secondary"
          href="#projects"
        >
          View Projects
        </v-btn>
      </v-layout>
    </v-parallax>
  </v-container>
</template>

<script>
export default {
  name: 'Home',
}
</script>

<style scoped>
.home {
  text-align: center;
}

.text-shadow {
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.6);
}
</style>
