<template>
  <div :class="{
    'deck-card-container': true,
    'deck-card-container--selected': selected,
    'deck-card-container--unselected': !selected,
  }">
    <Card :class="{
      'deck-card': true,
      'deck-card--selected': selected,
      'deck-card--unselected': !selected,
    }" @click="$emit('click')"/>
  </div>
</template>

<script setup lang="ts">
import Card from '@components/shared/Card.vue';

defineProps<{
  selected: boolean;
}>();

defineEmits<{
  (e: 'click'): void;
}>();

</script>

<style scoped>
.deck-card-container {
  width: 100%;
  height: 100%;
  margin: 10px;
  transition: all .1s linear;
}

.deck-card-container--unselected:hover {
  margin-top: -0.2rem !important;
}

.deck-card-container--selected {
  margin-top: -1.5rem !important;
}

.deck-card {
  height: 9rem;
  width: 5.4rem;
  border: 2px solid #3993ff;
}

.deck-card--selected {
  background: #3993ff;
  color: #fff;
  border-color: transparent;
}
</style>

