import { createRouter, createWebHistory } from "vue-router"
import Home from "@/views/Home.vue"

const routes = [
  {
    path: "/login",
    name: "Login",
    meta: {
      title: "登录",
    },
    component: () => import("@/views/Login.vue"),
  },
  {
    path: "/",
    redirect: "/table",
  },
  {
    path: "/",
    name: "Home",
    component: Home,
    children: [
      {
        path: "/tabs",
        name: "Tabs",
        meta: {
          title: "标签",
        },
        component: () => import("@/views/Tabs.vue"),
      },
      {
        path: "/table",
        name: "basetable",
        meta: {
          title: "表格",
        },
        component: () => import("@/views/BaseTable.vue"),
      },
      {
        path: "/form",
        name: "baseform",
        meta: {
          title: "基本表单",
        },
        component: () => import("@/views/BaseForm.vue"),
      },
      {
        path: "/markdown",
        name: "markdown",
        meta: {
          title: "markdown编辑器",
        },
        component: () => import("@/views/Markdown.vue"),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
