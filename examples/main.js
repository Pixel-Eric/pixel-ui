import { createApp } from 'vue'
import App from './App.vue'
import '../dist/css/pixelCss.css'
import PixelUI from '../components/lib'

createApp(App).use(PixelUI).mount('#app')
