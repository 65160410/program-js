<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-toolbar-title class="font-weight-bold">My Portfolio</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text to="/">Home</v-btn>
      <v-btn text to="/projects">Projects</v-btn>
      <v-btn text to="/about">About</v-btn>
    </v-app-bar>
    <v-main>
      <router-view></router-view>
    </v-main>
    <v-footer app>
      <v-col class="text-center white--text py-4" color="primary">
        &copy; {{ new Date().getFullYear() }} My Portfolio
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
.v-btn {
  color: white;
  font-weight: bold;
}

.v-footer {
  background-color: #4B0082;
  color: white;
}
</style>
