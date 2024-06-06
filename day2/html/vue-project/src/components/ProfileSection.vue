<template>
    <section id="profile">
        <img :src="profileImage" alt="Profile Image" width="200">
        <h2>{{ personalInfo.name }}</h2>
        <p>วันเกิด: {{ personalInfo.dob }}</p>
        <p>ที่อยู่: {{ personalInfo.address }}</p>
        <p>โทร: {{ personalInfo.phone }}</p>
        <p>Email: <a :href="'mailto:' + personalInfo.email">{{ personalInfo.email }}</a></p>
    </section>
</template>

<script setup>
import { ref } from 'vue';

const profileImage = ref('pexels-alina-rossoshanska-338724645-25225806.jpg');
const personalInfo = ref({
    name: 'นาย เสกสันต์ สุขเกษม',
    dob: '19/06/2003',
    address: '11 หมู่ 6',
    phone: '0970533906',
    email: '65160410@go.buu.ac.th'
});
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

p {
    color: #666;
    margin: 0.5em 0;
}

img {
    display: block;
    margin: 0 auto;
    border-radius: 50%;
    width: 200px;
    height: 200px;
    object-fit: cover;
}

a {
    color: #007BFF;
}

a:hover {
    text-decoration: underline;
}
</style>