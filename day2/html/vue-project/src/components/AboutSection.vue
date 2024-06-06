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
section {
    padding: 2em;
    background: #fff;
    margin: 1em auto;
    max-width: 800px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
}

h2 {
    color: #333;
    font-size: 1.5em;
    margin-bottom: 1em;
}

ul {
    padding: 0;
    margin: 0;
}

ul li {
    background: #e2e2e2;
    margin: 0.5em 0;
    padding: 0.5em;
    border-radius: 4px;
    color: #333;
}
</style>