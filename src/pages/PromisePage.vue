<script setup lang="ts">
import { ref, computed } from "vue";
import { computedAsync } from "@vueuse/core";

const num = ref(1);

// ❌computedはPromiseを解決しない！
const doublePromise1 = computed(async () => {
  return await new Promise((resolve) => {
    setTimeout(() => {
      resolve(num.value * 2);
    }, 3000);
  });
});

const evaluating2 = ref(false);

const doublePromise2 = computedAsync(
  async () => {
    return await new Promise((resolve) => {
      setTimeout(() => {
        resolve(num.value * 2);
      }, 3000);
    });
  },
  "計算中...",
  evaluating2
);

/**
 * 郵便番号から住所を取得する例です
 * 株式会社アイビスの郵便番号検索APIを使用しています：
 * https://zipcloud.ibsnet.co.jp/doc/api
 */
const postalCode = ref("");
const evaluating = ref(false);
const ENDPOINT = "https://zipcloud.ibsnet.co.jp/api/search";
const address = computedAsync(
  async () => {
    const url = `${ENDPOINT}?zipcode=${postalCode.value}`;
    if (postalCode.value.length !== 7) {
      return "7桁の郵便番号を入力してください";
    }
    const res = await fetch(url);
    const json = await res.json();
    const results = json.results;
    if (results === null) {
      return "住所が見つかりませんでした";
    }
    const result = results[0];
    return result.address1 + result.address2 + result.address3;
  },
  // 初期値
  "",
  evaluating
);
</script>

<template>
  <div>
    <h1>非同期なリアクティブ値のデモ</h1>
    <!--    <p>num: {{ num }}</p>-->
    <!--    <h2>computedを用いた例</h2>-->
    <!--    <p>doublePromise1: {{ doublePromise1 }}</p>-->
    <!--    <h2>computedAsyncを用いた例</h2>-->
    <!--    <p>-->
    <!--      doublePromise2:-->
    <!--      <span :class="{ evaluating: evaluating2 }">{{ doublePromise2 }}</span>-->
    <!--    </p>-->
    <h2>郵便番号から住所を取得する例</h2>
    <input type="text" v-model="postalCode" placeholder="7桁の郵便番号を入力" />
    <p v-show="evaluating">取得中...</p>
    <p v-show="!evaluating">{{ address }}</p>
  </div>
</template>

<style scoped lang="scss">
.evaluating {
  animation: flash 1s linear infinite;
}
@keyframes flash {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 1;
  }
  51% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}
</style>
