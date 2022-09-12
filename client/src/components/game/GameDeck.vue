<template>
  <div class="game-deck-container">
    <div class="title">Choose your card 👇</div>
    <div class="cards">
      <div v-for="(item, index) in [1,2,3,4,5]" :key="index">
        <DeckCard style="width: 100%; margin-left: 10px;" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import DeckCard from './DeckCard.vue';
</script>

<style scoped>
.game-deck-container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.game-deck-container .title {
  margin-bottom: 10px;
}

.game-deck-container .cards {
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
}
</style>
