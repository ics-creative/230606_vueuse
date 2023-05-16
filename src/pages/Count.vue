<script setup lang="ts">
import { useCounter } from "../composable/useCounter";

const { state, increment } = useCounter();
</script>

<template>
  <button @click="increment">
    {{ state.count }}
  </button>
</template>

<style scoped lang="scss"></style>
