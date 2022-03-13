import modal from './src/Modal.vue';

const Modal ={
    install: (app)=>{
        app.component(modal.name, modal);
    }
}

export default Modal;