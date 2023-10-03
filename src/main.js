import { createApp } from 'vue'
import App from './app/App.vue'
import router from './app/router/router'
import store from './app/store'

const app = createApp(App)

app.use(router).use(store).mount('#app')
