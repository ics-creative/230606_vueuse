<script setup lang="ts">
import { computedAsync, useAsyncState } from "@vueuse/core";
import { ref } from "vue";

const { state, isReady, isLoading } = useAsyncState<{ id: number }>(
  async () => {
    return await Promise.resolve({ id: 1 });
  },
  { id: 0 }
);
const add = () => {
  state.value = { id: state.value.id + 1 };
};

const id = ref(0);
const picture = computedAsync(async () => {
  const res = await fetch(`https://picsum.photos/id/${id.value}/info`);
  return res.json();
}, null);
</script>

<template>
  <h2>useAsyncDataを使ったデモ</h2>
  <div>
    {{ state.id }}
    <button @click="add">+1</button>
  </div>

  <h2>computedAsyncを使ったデモ</h2>
  <img v-if="picture" :src="picture.download_url" alt="" width="200" />
  <button @click="id++">change</button>
</template>

<style scoped lang="scss"></style>
