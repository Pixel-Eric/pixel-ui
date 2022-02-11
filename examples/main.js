import { createApp } from 'vue'
import App from './App.vue'
import '../dist/css/pixelCss.css'
import {Demo} from '../components/lib'

createApp(App).use(Demo).mount('#app')
