<template>
  <div class="game-container">
    <GameHeader class="header" />
    <GameModal v-if="false" @close="state.show.modal = false" />
    <GameTable class="table" />
    <GameDeck class="deck" />
  </div>
</template>

<script setup lang="ts">
import { GameHeader, GameModal, GameDeck, GameTable } from '@components/game';

import { reactive } from 'vue';

const state = reactive({
  show: {
    modal: true,
  }
});

</script>

<style scoped>
.game-container {
  background-color: #f9f9f9;
  width: 100vw;
  height: 100vh;
  padding: 0 2%;
}

.game-container .header {
  height: 10%;
}

.game-container .table {
  height: 75%;
}

.game-container .deck {
  height: 15%;
}
</style>
