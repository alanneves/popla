<template>
  <div class="modal-wrapper">
    <div class="modal">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.modal-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(26,41,53,.8);
  z-index: 10;
}

.modal {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  max-width: 500px;
  background-color: #fff;
  border-radius: 1.6rem;
  padding: 4.8rem 4.8rem;
}
</style>
