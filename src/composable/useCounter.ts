import { reactive } from "vue";

/**
 * カウンターをComposite APIで実装したもの
 */
export const useCounter = () => {
  const state = reactive({ count: 0 });

  const increment = () => {
    state.count++;
  };

  return {
    state,
    increment,
  };
};
