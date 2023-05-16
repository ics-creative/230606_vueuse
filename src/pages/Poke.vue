<script setup lang="ts">
import { computedAsync } from "@vueuse/core";
import { ref } from "vue";
const id = ref(1);
const poke = computedAsync(async () => {
  const result = await fetch(`https://pokeapi.co/api/v2/pokemon/${id.value}/`);
  return result.json();
});
</script>

<template>
  <div>
    <button @click="id--">-1</button>
    <input type="number" v-model="id" />
    <button @click="id++">+1</button>
  </div>
  <div>
    <button
      @click="
        () => {
          id = Math.floor(Math.random() * 1000);
        }
      "
    >
      らんだむ
    </button>
  </div>
  <img v-if="poke" :src="poke.sprites.front_default" :alt="poke.name" />
</template>

<style scoped lang="scss"></style>
