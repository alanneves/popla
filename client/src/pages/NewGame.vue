<template>
  <div style="max-width: 300px;">
    aa{{ value }}
    <TextInput label="aaaaaa" v-model:value="value" />
  </div>
</template>
<script setup lang="ts">
import { TextInput } from '@components';
import { ref } from 'vue';

const value = ref('');
</script>
