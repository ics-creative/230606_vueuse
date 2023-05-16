<script setup>
import { useCounter } from "../composable/useCounter";

const { state, increment } = useCounter();
</script>

<template>
  <div>
    <button @click="increment">
      {{ state.count }}
    </button>
  </div>
</template>

<style scoped lang="scss"></style>
