<script setup lang="ts">
import { useClipboard } from "@vueuse/core";
import { ref } from "vue";

const source = ref("");
const { text, copy, copied } = useClipboard({ source });
</script>

<template>
  <div>
    <input v-model="source" />
    <button @click="copy(source)">コピー</button>
    <p>コピーしたテキスト: {{ text }}</p>
    <p v-if="copied">コピーしました</p>
  </div>
</template>

<style scoped lang="scss"></style>
