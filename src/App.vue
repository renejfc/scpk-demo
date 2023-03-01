<script setup lang="ts">
import { ref } from "vue";
import MyButton from "@/components/MyButton.vue";

const SELECTED_BUTTON_DEFAULT = "1";
const selectedButton = ref<string>(SELECTED_BUTTON_DEFAULT);

function selectValue(value: string) {
  selectedButton.value = value;
}
</script>

<template>
  <main id="app">
    <header class="app-header">
      <h1>Scrum Poker</h1>
    </header>
    <section class="app-main">
      <h2 class="heading">What is your estimate?</h2>
      <MyButton value="1" @select-button="selectValue" />
      <MyButton value="2" @select-button="selectValue" />
      <MyButton value="3" @select-button="selectValue" />
      <MyButton value="5" @select-button="selectValue" />
      <MyButton value="8" @select-button="selectValue" />
      <MyButton value="13" @select-button="selectValue" />
      <h3 class="heading">Selection</h3>
      <p class="selection">{{ selectedButton }}</p>
    </section>
  </main>
</template>

<style scoped>
#app {
  height: 100vh;
  width: 100vw;
  display: grid;
  place-content: center;
}
.app-header,
.app-main {
  text-align: center;
}

.app-header {
  font-size: 3.6rem;
  text-transform: uppercase;
}

.selection {
  display: inline-block;
  width: 5rem;
  margin: 0.5rem;
  padding: 0.5rem;
  border: 2px solid #0000ff;
  border-radius: 0.5rem;
}

.heading {
  font-size: 2.4rem;
  font-weight: bold;
  margin: 3.6rem 0 1.2rem 0;
}
</style>
