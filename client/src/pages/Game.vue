<template>
  <GameModal v-if="state.show.modal" @close="state.show.modal = false" />
</template>

<script setup lang="ts">
import GameModal from '@components/game/GameModal.vue';
import { reactive } from 'vue';

const state = reactive({
  show: {
    modal: true,
  }
});

</script>

<style scoped>
</style>
