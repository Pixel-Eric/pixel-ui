import Button from './button'
import DisplayBox from './displaybox'
import Tab from './tab'
const components = {
    Button,DisplayBox,Tab
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
    Button,DisplayBox,Tab
}
export default API;
