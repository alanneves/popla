<template>
  <Modal class="game-modal">
    <h4>Write your name :)</h4>
    <TextInput id="name-input" @keyup.enter="submit" label="Your name" v-model:value="state.name" />
    <Button label="Continue to game" @click="submit" :disabled="!state.name" />
  </Modal>
</template>

<script setup lang="ts">
import { Modal, TextInput, Button } from '@components/shared';
import { reactive } from 'vue';

const state = reactive({
  name: '',
});

const emit = defineEmits<{
  (event: 'submit', userData: { name: string }): void
}>();

const submit = () => {
  if (!state.name)
    return;

  emit('submit', {
    name: state.name,
  });
};

</script>

<style scoped>
.game-modal h4 {
  font-size: 2.4rem;
  font-weight: 700;
  margin-bottom: 30px;
}
</style>
