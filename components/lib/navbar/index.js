import navbar from './src/NavBar.vue';
import navbarul from './src/NavBarUl.vue'
import navbarli from './src/NavBarLi.vue'

const NavBar = {
    install(app){
        app.component(navbar.name,navbar);
        app.component(navbarul.name,navbarul);
        app.component(navbarli.name,navbarli);
    }
}

export default NavBar;