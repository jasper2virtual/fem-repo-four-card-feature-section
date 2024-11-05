import { createApp } from 'vue'
import './style.scss'
import cards from './assets/data/cards'

import App from './App.vue'

const app = createApp(App)

app.provide('cards', cards)

app.mount('#app')
