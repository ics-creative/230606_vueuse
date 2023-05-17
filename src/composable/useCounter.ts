import { ref } from "vue";

/**
 * カウンターをComposite APIで実装したもの
 */
export const useCounter = () => {
  const count = ref(0);
  const increment = () => {
    count.value++;
  };

  return {
    count,
    increment,
  };
};
