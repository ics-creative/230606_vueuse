<script setup lang="ts">
import { useMouse } from "@vueuse/core";

const { x, y } = useMouse();
</script>

<template>
  <div>
    <h1>useMouse()のデモ</h1>
    <p>マウスの座標は、x: {{ x }}, y: {{ y }}です。</p>
  </div>
</template>
<style scoped lang="scss"></style>
