import Button from './button'
import DisplayBox from './displaybox'
import Tab from './tab'
import Tabel from './table'
import Sticker from './sticker'

const components = {
    Button,DisplayBox,Tab,Tabel,Sticker
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
    Button,DisplayBox,Tab,Tabel,Sticker
}
export default API;
