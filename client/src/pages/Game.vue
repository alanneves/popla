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
import { reactive, onMounted } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

const router = useRouter();
const store = useStore();
const state = reactive({
  show: {
    modal: true,
  }
});


console.log(router.currentRoute.value.params.id);
const getGame = async () => {
  console.log(store.getters.gameId);
  if (store.getters.gameId) return;
  await store.dispatch('GET_GAME', {
    id: router.currentRoute.value.params.id,
  });
  console.log(store.getters.gameId);
};

await getGame();
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
  height: 70%;
}

.game-container .deck {
  height: 20%;
}
</style>
