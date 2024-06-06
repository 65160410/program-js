<template>
  <section id="about">
    <h2>ข้อมูลส่วนตัว</h2>
    <ul>
      <li v-for="info in personalDetails" :key="info">{{ info }}</li>
    </ul>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const personalDetails = ref([
  'ชื่อ: นาย เสกสันต์ สุขเกษม',
  'วันเกิด: 19/06/2003',
  'ที่อยู่: 11 หมู่ 6',
  'โทร: 0970535906',
  'Email: 65160410@go.buu.ac.th',
  'ระวัติการศึกษา: ปริญญาตรี',
  'ประสบการณ์การทำงาน: ดีเยี่ยมมาก',
  'ทักษะและความสามารถพิเศษ: หายใจได้ 20,000 ครั้ง/วัน'
]);
</script>

<style scoped>
ul {
  padding: 0;
  margin: 0;
}

ul li {
  background: #e2e2e2;
  margin: 0.5em 0;
  padding: 0.5em;
  border-radius: 4px;
}
</style>
