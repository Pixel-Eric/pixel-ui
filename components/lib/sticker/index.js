import sticker from './src/Sticker.vue';

const Sticker = {
    install: (app)=>{
        app.component(sticker.name, sticker);
    }
}

export default Sticker;