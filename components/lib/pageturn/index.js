import pageturn from './src/PageTurn.vue'

const PageTurn = {
    install(app){
        app.component(pageturn.name,pageturn);
    }
}

export default PageTurn;