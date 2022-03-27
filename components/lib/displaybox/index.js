import displaybox from './src/DisplayBox.vue'

const DisplayBox = {
    install(app){
        app.component('pix-displaybox',displaybox);
    }
}
export default DisplayBox;