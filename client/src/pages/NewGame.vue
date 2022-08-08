<template>
  <div class="new-game-container">
    <header>
      <img :src="LogoImage" alt="Popla Logo">
      <h1>Create Game</h1>
    </header>
    <main>
      <div class="main-content">
        <p>Choose a name and a voting system for your game.</p>
        <TextInput label="Game's name" v-model:value="value" />
        <Select label="Voting system" :options="votingSystemOptions" v-model:value="selectedVotingSystem" />
        <Button class="button" label="Create game" />
      </div>
    </main>
  </div>
</template>
<script setup lang="ts">
import { TextInput, Select, Button } from '@/components/shared';
import { ref } from 'vue';
import { LogoImage } from '@assets/images';

const votingSystemOptions = [{
  label: 'Fibonacci ( 0, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ? )',
  value: 'fibonacci'
}, {
  label: 'Sequential ( 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13 )',
  value: 'sequencial'
}];

const selectedVotingSystem = ref('fibonacci');
const value = ref('');
</script>

<style scoped>
.new-game-container {
  padding: 0 1.6rem;
  height: 100vh;
  overflow: hidden;
}

header {
  height: 10rem;
  display: flex;
  align-items: center;
}

header img {
  width: 20rem;
  margin-top: 10px;
}

header h1 {
  font-size: 2.25rem;
  margin-left: -30px;
  color: #b7b4d8;
}

main {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
}

main .main-content {
  margin-top: 20vh;
  text-align: center;
}

@media screen and (max-width: 600px) {
  main .main-content {
    width: 100%;
  }
}


@media (min-width: 601px) and (max-width: 900px) {
  main .main-content {
    width: 80%;
  }
}

@media (min-width: 901px) and (max-width: 1200px) {
  main .main-content {
    width: 60%;
  }
}

@media (min-width: 901px) and (min-width: 1201px) {
  main .main-content {
    width: 40%;
  }
}

main .main-content .button {
  margin-top: 20px;
}
</style>
