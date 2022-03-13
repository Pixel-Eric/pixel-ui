import { createApp } from 'vue'
import App from './App.vue'
import route from './route'
import '../dist/css/pixelCss.css'
import PixelUI from '../components/lib/index'
import '../dist/css/commons/animation.css'

createApp(App).use(route).use(PixelUI).mount('#app')
