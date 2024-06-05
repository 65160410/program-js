<template>
  <v-container class="about">
    <v-row justify="center">
      <v-col cols="12" md="8">
        <v-card class="elevation-12" color="background">
          <v-row no-gutters>
            <v-col cols="12" md="4">
              <v-img src="https://source.unsplash.com/random/400x400?face" height="100%"></v-img>
            </v-col>
            <v-col cols="12" md="8">
              <v-card-title class="headline font-weight-bold primary--text">About Me</v-card-title>
              <v-card-text>
                <p>Hello, my name is [Your Name]. I am studying [Your Major] at [Your University]. I have a passion for [Your Interests or Hobbies].</p>
                <p>Feel free to explore my projects and get in touch if you have any questions or opportunities.</p>
              </v-card-text>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'About',
}
</script>

<style scoped>
.about {
  margin-top: 50px;
}

.v-card-title {
  font-family: 'Georgia', serif;
}

.v-card-text {
  font-family: 'Arial', sans-serif;
}
</style>
