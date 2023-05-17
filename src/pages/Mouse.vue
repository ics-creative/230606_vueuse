<script setup lang="ts">
import { useMouse } from "@vueuse/core";

/**
 * リアクティブにマウスの座標を取得する処理
 */
const { x, y } = useMouse();
</script>

<template>
  <div>
    <h1>useMouse()のデモ</h1>
    <p>マウスの座標は、x: {{ x }}, y: {{ y }}です。</p>
  </div>
</template>
<style scoped lang="scss"></style>
