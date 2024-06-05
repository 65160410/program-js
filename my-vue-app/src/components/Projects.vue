<template>
  <v-container class="projects">
    <v-row justify="center">
      <v-col cols="12" md="10">
        <v-card class="elevation-12 mb-5" color="background">
          <v-card-title class="headline font-weight-bold primary--text">My Projects</v-card-title>
          <v-card-text>
            <v-row>
              <v-col
                v-for="project in projects"
                :key="project.id"
                cols="12"
                md="4"
              >
                <v-card class="elevation-8">
                  <v-img :src="project.image" height="200px"></v-img>
                  <v-card-title class="primary--text">{{ project.title }}</v-card-title>
                  <v-card-subtitle>{{ project.description }}</v-card-subtitle>
                  <v-card-actions>
                    <v-btn color="secondary" text>View More</v-btn>
                  </v-card-actions>
                </v-card>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Projects',
  data() {
    return {
      projects: [
        { id: 1, title: 'Project 1', description: 'Description of project 1', image: 'https://source.unsplash.com/random/800x600?1' },
        { id: 2, title: 'Project 2', description: 'Description of project 2', image: 'https://source.unsplash.com/random/800x600?2' },
        { id: 3, title: 'Project 3', description: 'Description of project 3', image: 'https://source.unsplash.com/random/800x600?3' },
        // Add more projects as needed
      ],
    }
  }
}
</script>

<style scoped>
.projects {
  margin-top: 50px;
}

.v-card-title {
  font-family: 'Georgia', serif;
}

.v-card-subtitle {
  font-family: 'Arial', sans-serif;
}
</style>
