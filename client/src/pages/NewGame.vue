<template>
  <div style="max-width: 500px; margin-left: 10px;">
    aa{{ value }}
    <TextInput label="Game's name" v-model:value="value" />
    <Select label="Voting system" :options="votingSystemOptions" v-model:value="selectedVotingSystem" />
    a
  </div>
</template>
<script setup lang="ts">
import { TextInput, Select } from '@components';
import { ref } from 'vue';

const votingSystemOptions = [{
  label: 'Fibonacci ( 0, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ? )',
  value: 'fibonacci'
}, {
  label: 'Sequential ( 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13 )',
  value: 'sequencial'
}];
const selectedVotingSystem = ref('fibonacci');
const value = ref('');
</script>
