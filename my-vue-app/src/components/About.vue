<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-toolbar-title>Portfolio of นาย เสกสันต์ สุขเกษม</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text to="#profile">Profile</v-btn>
      <v-btn text to="#about">ข้อมูลส่วนต้ว</v-btn>
      <v-btn text to="#work">ข้อมูลประสบณ์การทำงาน</v-btn>
      <v-btn text to="#live">ข้อมูลประสบณ์การชีวิต</v-btn>
    </v-app-bar>
    <v-main>
      <profile-section />
      <about-section />
      <work-section />
      <life-section />
    </v-main>
    <v-footer app>
      <v-col class="text-center white--text py-4" color="primary">
        &copy; {{ new Date().getFullYear() }} Portfolio of นาย เสกสันต์ สุขเกษม
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>
import ProfileSection from './components/ProfileSection.vue'
import About from './components/About.vue'
import WorkSection from './components/WorkSection.vue'
import LifeSection from './components/LifeSection.vue'

export default {
  name: 'App',
  components: {
    About,
  },
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
