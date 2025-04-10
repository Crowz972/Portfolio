import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import fadeInOnScroll from './directives/fadeInOnScroll.ts'

import './index.css'
import './assets/base.css'

const app = createApp(App)

app.use(router)
app.directive('fade-in-on-scroll', fadeInOnScroll)
app.mount('#app')
