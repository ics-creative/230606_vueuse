<script setup lang="ts">
import Hoge from "../components/hoge.vue";
import { computed, ref } from "vue";
import { computedAsync, promiseTimeout } from "@vueuse/core";

const num = ref(0);

const doublePromise = (num: number) =>
  new Promise<number>((resolve) => setTimeout(() => resolve(num * 2), 1000));
const double = computedAsync(async () => {
  // return await doublePromise(num.value);
  await promiseTimeout(1000);
  return num.value * 2;
});

const doubleCount = async () => {
  await promiseTimeout(1000);
  num.value += 2;
};
</script>

<template>
  <ol>
    <li>
      <router-link to="/count">カウントのデモ</router-link>
    </li>
    <li>
      <router-link to="/mouse">useMouse()のデモ</router-link>
    </li>
    <li>
      <router-link to="/clipboard">useClipboard()のデモ</router-link>
    </li>
    <li>
      <router-link to="/data">doublePromiseのデモ</router-link>
    </li>
    <li>
      <router-link to="/data">郵便番号のデモ</router-link>
    </li>
    <li>
      <router-link to="/data">useWindowSize()のデモ</router-link>
    </li>
    <li>
      <router-link to="/data">useTimeout()のデモ</router-link>
    </li>
    <li>
      <router-link to="/data">useToNumber(), useToString()のデモ</router-link>
    </li>
  </ol>
</template>

<style scoped lang="scss"></style>
