<script setup lang="ts">
const props = defineProps<{
  value: string;
}>();

const emit = defineEmits<{
  (e: 'select-button', value: string): void
}>()

function selectButton() {
  emit('select-button', props.value);
}
</script>

<template>
  <button class="selection-button" @click="selectButton">
    {{ value }}
  </button>
</template>

<style scoped>
.selection-button {
  width: 5rem;
  color: white;
  cursor: pointer;
  padding: 0.5rem;
  margin: 0.5rem;
  border-radius: 0.5rem;
  display: inline-block;
  background: #0000ff;
  border: 2px solid #0000ff;
}

.selection {
  width: 50px;
  margin: 5px;
  padding: 5px;
  border-radius: 5px;
  display: inline-block;
  border: 2px solid #0000ff;
}

.selection-button:hover {
  background: #8888ff;
  border-color: #8888ff;
}
</style>
