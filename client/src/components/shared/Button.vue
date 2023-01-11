<template>
  <div :class="{
  'button-container': true,
  'button-container--disabled': disabled,
}">
    {{ label }}
  </div>
</template>

<script setup lang="ts">

defineProps({
  label: {
    type: String,
    required: true,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});

</script>

<style scoped>
.button-container {
  background-color: #3993ff;
  width: 100%;
  color: #fff;
  height: 4.8rem;
  align-items: center;
  border-radius: .8rem;
  cursor: pointer;
  display: inline-flex;
  letter-spacing: .02em;
  justify-content: center;
  font-weight: 700;
  font-size: 1.8rem;
}

.button-container:hover {
  background-color: #74b3ff;
}

.button-container:active {
  box-shadow: 0 0 0 2px #fff, 0 0 0 4px #d7e9ff;
  background-color: #0061d6;
}

.button-container--disabled {
  background-color: #b7b4d8;
  cursor: not-allowed;
}
</style>
