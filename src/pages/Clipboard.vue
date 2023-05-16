<script setup>
import { useClipboard } from "@vueuse/core";
import { ref } from "vue";

const source = ref("");
const { text, copy, copied } = useClipboard({ source });
</script>

<template>
  <div>
    <input v-model="text" />
    <button @click="copy">コピー</button>
    <p v-if="copied">コピーしました</p>
  </div>
</template>

<style scoped lang="scss"></style>
