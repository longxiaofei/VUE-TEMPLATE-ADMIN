import { createApp } from "vue"
import { createPinia } from "pinia"

import App from "./App.vue"
import router from "./router"

import initElementPlus from "./plugins/element"

import "@/assets/css/main.scss"
import "@/assets/css/color-dark.scss"

const app = createApp(App)

initElementPlus(app)
app.use(createPinia())
app.use(router)

app.mount("#app")
