import Button from './button'
import DisplayBox from './displaybox'
import Tab from './tab'
import Tabel from './table'
import Sticker from './sticker'
import NavBar from './navbar'
import Roulette from './roulette'
import PageTurn from './pageturn'

//引入图标库
import '../assets/iconfont/iconfont.js'
import '../assets/iconfont/iconfont.css'

const components = {
    Button,DisplayBox,Tab,Tabel,Sticker,NavBar,Roulette,PageTurn
}
const install = (app)=>{
    if(app.installed) return;
    Object.keys(components).forEach(key=>{
        components[key].install(app);
    })
}

const API = {
    install
}
export {
    Button,DisplayBox,Tab,Tabel,Sticker,NavBar,Roulette,PageTurn
}
export default API;
