<template>
  <div class="game-deck-container">
    <div class="title">Choose your card 👇</div>
    <div class="cards">
      <div v-for="(item, index) in [1,2,3,4,5]" :key="index">
        <DeckCard :selected="state.selectedCard === index" @click="state.selectedCard = state.selectedCard === index ? undefined : index" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import DeckCard from './DeckCard.vue';

const state = reactive<{ selectedCard?: number; }>({
  selectedCard: undefined,
});

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
  margin-bottom: 20px;
  font-size: 2rem;
}

.game-deck-container .cards {
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
}
</style>
