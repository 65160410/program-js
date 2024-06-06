<template>
    <section id="work">
        <h2>ข้อมูลประสบการณ์ทำงาน</h2>
        <ul>
            <li v-for="experience in workExperience" :key="experience">{{ experience }}</li>
        </ul>
    </section>
</template>

<script setup>
import { ref } from 'vue';

const workExperience = ref([
    'รายละเอียดงานที่ 1',
    'รายละเอียดงานที่ 2',
    'รายละเอียดงานที่ 3'
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
    background: #cce7ff;
    margin: 0.5em 0;
    padding: 0.5em;
    border-radius: 4px;
    color: #333;
}
</style>