<template>
  <header>
    <img :src="LogoImage" alt="Popla Logo">
    <h1>{{ store.getters.gameName }}</h1>
  </header>
</template>

<script setup lang="ts">
import { LogoImage } from '@assets/images';
import { useStore } from 'vuex';

const store = useStore();
</script>

<style scoped>
header {
  display: flex;
  align-items: center;
}

header img {
  width: 230px;
  margin-top: 10px;
}

header h1 {
  font-size: 2.25rem;
  margin-left: -30px;
  color: #b7b4d8;
}
</style>
