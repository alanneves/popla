<template>
  <header>
    <img :src="LogoImage" alt="Popla Logo">
    <h1>Create Game</h1>
  </header>
</template>

<script setup lang="ts">
import { LogoImage } from '@assets/images';
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
