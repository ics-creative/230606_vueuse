import { reactive } from "vue";

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
