import Button from './button'
import DisplayBox from './displaybox'
import Tab from './tab'
import Tabel from './table'
import Sticker from './sticker'
import NavBar from './navbar'
import Roulette from './roulette'
import PageTurn from './pageturn'
import Modal from './modal'
import 'animate.css'
import '../assets/iconfont/iconfont.css'


const components = {
    Button,DisplayBox,Tab,Tabel,Sticker,NavBar,Roulette,PageTurn,
    Modal
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
    Button,DisplayBox,Tab,Tabel,Sticker,NavBar,Roulette,PageTurn,
    Modal
}
export default API;
