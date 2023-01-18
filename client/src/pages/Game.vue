<template>
  <div class="game-container">
    <GameHeader class="header" />
    <GameTable class="table" />
    <GameDeck class="deck" />
    <GameModal v-if="state.show.userFormModal" @submit="joinGame"/>
  </div>
</template>

<script setup lang="ts">
import { GameHeader, GameModal, GameDeck, GameTable } from '@components/game';
import { reactive } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

const router = useRouter();
const store = useStore();
const state = reactive({
  show: {
    userFormModal: true,
  }
});


const getGame = async () => {
  if (store.getters.gameId) return;
  await store.dispatch('GET_GAME', {
    id: router.currentRoute.value.params.id,
  });
};

const joinGame = async ({ name }: {name: string}) => {
  await store.dispatch('JOIN_GAME', {
    name,
  });
  state.show.userFormModal = false;
};

await getGame();

const isAuthenticated = !!store.getters.user;
if (!isAuthenticated) {
  state.show.userFormModal = true;
}

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
