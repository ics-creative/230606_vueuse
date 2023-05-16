import { createRouter, createWebHistory } from "vue-router";
import Home from "./pages/Home.vue";
import Count from "./pages/Count.vue";
import DialogPage from "./pages/DialogPage.vue";
import Poke from "./pages/Poke.vue";
import Mouse from "./pages/Mouse.vue";
import Clipboard from "./pages/Clipboard.vue";

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: Home },
    { path: "/count", component: Count },
    { path: "/mouse", component: Mouse },
    { path: "/clipboard", component: Clipboard },
    { path: "/poke", component: Poke },
  ],
});
