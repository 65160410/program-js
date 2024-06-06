<template>
    <section id="life">
        <h2>ข้อมูลประสบการณ์ชีวิต</h2>
        <ul>
            <li v-for="experience in lifeExperience" :key="experience">{{ experience }}</li>
        </ul>
    </section>
</template>

<script setup>
import { ref } from 'vue';

const lifeExperience = ref([
    'กล้าที่จะเปลี่ยนแปลงตัวเองตลอดเวลา',
    'มีเป้าหมายในชีวิตที่ชัดเจน',
    'เผชิญหน้ากับความล้มเหลวแล้วเริ่มใหม่',
    'มุ่งมั่นในความคิดของตัวเองและทำจนกว่าจะสำเร็จ'
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
    background: #c8f7c5;
    margin: 0.5em 0;
    padding: 0.5em;
    border-radius: 4px;
    color: #333;
}
</style>