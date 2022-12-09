import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Create from "../views/Create.vue";
import DocumentsList from "../views/DocumentsList.vue";
import DocumentInfo from "../views/DocumentInfo.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component:DocumentsList,
  },
  {
    path: "/create",
    name: "create",
    component:Create,
  },
  {
    path: "/document/:id",
    name: "document-id",
    component:DocumentInfo,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
