<template>
  <div class="text-input-container">
    <label :class="isActive ? 'active' : 'not-active'">{{ label }}</label>
    <input type="text" @focus="setIsActive(true)" @blur="setIsActive(false)" :value="value"
      @input="($e) => emit('update:value', ($e.target as HTMLInputElement).value)">
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  value: {
    type: String,
    required: true,
  }
});

const emit = defineEmits(['update:value']);


const isActive = ref(false);

const setIsActive = (newValue: boolean) => {
  isActive.value = !!(newValue || props.value);
};

</script>

<style scoped>
.text-input-container {
  position: relative;
  padding: 1rem 0 0;
  width: 100%;
  margin: 10px 0 2.4rem;
}

label {
  align-items: center;
  border-radius: 4px;
  transition: all .2s;
  position: absolute;
  font-weight: 500;
}

label.active {
  top: 0;
  margin: 0;
  padding: 0 0.8rem;
  left: 1.2rem;
  height: 2rem;
  font-size: 1.4rem;
  display: flex;
  color: #1a2935;
  border-radius: 4px;
  align-items: center;
  z-index: 2;
  background-color: #fff;
}

label.not-active {
  transform: translateY(-50%);
  -webkit-transform: translateY(-50%);
  top: 50%;
  padding: 1rem 0 0;
  left: 1.6rem;
  height: auto;
  font-size: 1.6rem;
  color: #a8aeb2;
}

input {
  width: 100%;
  transition: all .1s;
  height: 5.6rem;
  font-size: 1.6rem;
  color: #1a2935;
  border-radius: 0.6rem;
  border: 2px solid #e8e9ea;
  appearance: none;
  -webkit-appearance: none;
  background: transparent;
  padding: 0 1.6rem;
  outline: none;
  z-index: 1;
}

input:hover {
  border-color: #d1d4d7;
}

input:focus {
  border-color: #3993ff;
}

@media screen and (min-width: 920px) {
  input {
    height: 4.8rem;
  }
}
</style>
