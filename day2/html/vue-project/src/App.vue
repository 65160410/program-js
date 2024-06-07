<template>
  <div id="app">
    <!-- <nav>
      <h1>Porfolio of นาย เสกสันต์ สุขเกษม</h1>
      <ul>
        <li><a href="#profile">Profile</a></li>
        <li><a href="#about">ข้อมูลส่วนตัว</a></li>
        <li><a href="#work">ข้อมูลประสบการณ์ทำงาน</a></li>
        <li><a href="#life">ข้อมูลประสบการณ์ชีวิต</a></li>
      </ul>
    </nav>
    <div class="container">
      <ProfileSection />
      <AboutSection />
      <WorkSection />
      <LifeSection />
    </div>
  </div> -->

    <!-- <totalsection></totalsection> -->
    <usermanesger></usermanesger>
  </div>
</template>

<script setup>
// import ProfileSection from './components/ProfileSection.vue';
// import AboutSection from './components/AboutSection.vue';
// import WorkSection from './components/WorkSection.vue';
// import LifeSection from './components/LifeSection.vue';
// import Totalsection from './components/Totalsection.vue';
import Usermanesger from './components/Usermanesger.vue';
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Kanit:wght@300;400;600&display=swap');

body {
  font-family: 'Kanit', sans-serif;
  line-height: 1.6;
  margin: 0;
  padding: 0;
  background-color: #f9f9f9;
  padding-top: 80px;
}

nav {
  background: #fff;
  color: #333;
  padding: 1em 0;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1000;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

nav ul {
  list-style: none;
  padding: 0;
  text-align: center;
  margin: 0;
}

nav ul li {
  display: inline;
  margin: 0 1em;
}

nav ul li a {
  color: #333;
  text-decoration: none;
  font-weight: 600;
}

nav ul li a:hover {
  text-decoration: underline;
}

.container {
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding: 0 1em;
}

h1 {
  text-align: center;
  color: #333;
  font-size: 1.5em;
  margin: 0;
}

h2 {
  color: #333;
  font-size: 1.5em;
  margin-bottom: 1em;
}
</style>
