<script setup lang="ts">
import {
  promiseTimeout,
  useToNumber,
  useToString,
  useWindowSize,
} from "@vueuse/core";
import { ref } from "vue";

const { width, height } = useWindowSize();
const isReady = ref(false);
const timeout = async () => {
  isReady.value = true;
  await promiseTimeout(1000);
  isReady.value = false;
};
</script>

<template>
  <h1>汎用関数のデモ</h1>
  <div>
    <h2>ウィンドウサイズを取得する例</h2>
    <p>width: {{ width }}</p>
    <p>height: {{ height }}</p>
  </div>
  <div>
    <h2>promiseTimeout()の例</h2>
    <button @click="timeout">Ready</button>
    <p>ready: {{ isReady }}</p>
  </div>
</template>

<style scoped lang="scss"></style>
