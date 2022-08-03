<template>
  <div class="select-container">
    <label :class="isActive ? 'active' : 'not-active'">{{ label }}</label>
    <div class="wrapper" tabindex="0" @focus="setIsActive(true)" @blur="setIsActive(false)">
      <div class="option">
        Sim!!
      </div>
      <div class="icon">
        <svg height="20" width="20" viewBox="0 0 20 20" aria-hidden="true" focusable="false">
          <path
            d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z">
          </path>
        </svg>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps<{
  label: string
  options: Array<{
    label: string
    value: string
  }>
}>();

const isActive = ref(false);

const setIsActive = (newValue: boolean) => {
  console.log(newValue);
  isActive.value = !!(newValue) || true;
};

</script>

<style scoped>
.select-container {
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

div.wrapper {
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
  display: flex;
  flex-wrap: wrap;
  cursor: pointer;
}

div.wrapper:hover {
  border-color: #d1d4d7;
}

div.wrapper:focus {
  border-color: #3993ff;
}

@media screen and (min-width: 920px) {
  div.wrapper {
    height: 4.8rem;
  }
}

div.wrapper .option {
  flex: 1 1 0%;
  display: flex;
  align-items: center;
}

div.wrapper .icon {
  display: flex;
  align-items: center;
  color: rgb(204, 204, 204);
}

div.wrapper .icon:hover {
  color: rgb(153, 153, 153)
}

div.wrapper .icon svg {
  fill: currentcolor;
}
</style>
