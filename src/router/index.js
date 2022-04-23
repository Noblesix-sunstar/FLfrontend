import { createRouter, createWebHashHistory } from "vue-router";
import FedLearningShow from "../views/FedLearningShow";
const routes = [
  {
    path: "/",
    name: "FLshow",
    component: FedLearningShow,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
