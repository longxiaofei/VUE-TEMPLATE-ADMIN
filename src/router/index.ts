import { createRouter, createWebHistory } from "vue-router";


const routes = [
  {
    path: "/login",
    name: "Login",
    meta: {
        title: '登录'
    },
    component: () => import ("../views/LoginView.vue")
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
