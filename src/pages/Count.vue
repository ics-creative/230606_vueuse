<script setup lang="ts">
import { useCounter } from "../composable/useCounter";

const { count, increment } = useCounter();
</script>

<template>
  <div>
    <h1>カウンターのデモ</h1>
    <button @click="increment">Clicked {{ count }} times</button>
  </div>
</template>

<style scoped lang="scss"></style>
