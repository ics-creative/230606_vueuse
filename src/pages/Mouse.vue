<script setup>
import { useMouse } from "@vueuse/core";

const { x, y } = useMouse();
</script>

<template>
  <div>
    <p>マウスの座標は、x: {{ x }}, y: {{ y }}です。</p>
  </div>
</template>
<style scoped lang="scss"></style>
