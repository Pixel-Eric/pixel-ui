import displaybox from './src/DisplayBox.vue'

const DisplayBox = {
    install(app){
        app.component('pixel-displaybox',displaybox);
    }
}
export default DisplayBox;