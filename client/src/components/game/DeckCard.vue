<template>
  <div class="deck-card-container">
    <Card class="deck-card" />
  </div>
</template>

<script setup lang="ts">
import Card from '@components/shared/Card.vue';

</script>

<style scoped>
.deck-card-container {
  width: 100%;
  height: 100%;
  margin: 10px;
  transition: all .1s linear;
}

.deck-card-container:hover {
  margin-top: -0.10rem !important;
}

.deck-card {
  height: 8rem;
  width: 4.8rem;
  border: 2px solid #3993ff;
}
</style>

