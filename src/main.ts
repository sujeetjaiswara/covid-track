import { createApp } from 'vue'
import { createVuetify } from 'vuetify'
import 'vuetify/styles'
import App from './App.vue'
import './assets/main.css'
import vuetifyPlugins from './plugins/vuetify.js'
import router from './router'

const app = createApp(App)
app.use(router)

const vuetify = createVuetify()
app.use(vuetify)
app.use(vuetifyPlugins)
app.mount('#app')
