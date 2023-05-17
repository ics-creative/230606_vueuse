import { createRouter, createWebHashHistory } from "vue-router";
import Home from "./pages/Home.vue";
import Count from "./pages/Count.vue";
import Mouse from "./pages/Mouse.vue";
import Clipboard from "./pages/Clipboard.vue";
import PromisePage from "./pages/PromisePage.vue";
import Utils from "./pages/Utils.vue";

const base = import.meta.env.BASE_URL;

export const router = createRouter({
  history: createWebHashHistory(base),
  routes: [
    { path: "/", component: Home },
    { path: "/count", component: Count },
    { path: "/mouse", component: Mouse },
    { path: "/clipboard", component: Clipboard },
    { path: "/promise", component: PromisePage },
    { path: "/utils", component: Utils },
  ],
});
