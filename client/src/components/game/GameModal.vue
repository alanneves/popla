<template>
  <Modal class="game-modal">
    <h4>Write your name :)</h4>
    <TextInput label="Your name" v-model:value="state.name" />
    <Button label="Continue to game" />
  </Modal>
</template>

<script setup lang="ts">
import { Modal, TextInput, Button } from '@components/shared';
import { ref } from 'vue';

const state = ref({
  name: '',
});

</script>

<style scoped>
.game-modal h4 {
  font-size: 2.4rem;
  font-weight: 700;
  margin-bottom: 30px;
}
</style>
