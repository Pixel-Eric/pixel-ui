import roulette from './src/Roulette.vue'

const Roulette = {
    install(app){
        app.component(roulette.name,roulette)
    }
}
export default Roulette;