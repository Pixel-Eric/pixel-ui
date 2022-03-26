<template>
<div id="app">
        <!-- <pixel-navbar :data="navbar" :shadow="true" /> -->
    <pixel-navbar :shadow="true" 
                  :logo="require('./assets/logo.png')"
        >
        <pixel-navbar-ul title="首页" href="/Home">
        </pixel-navbar-ul>
        <pixel-navbar-ul title="指南" href="/Guide">
            <pixel-navbar-li title="安装" href="/Home" />
            <pixel-navbar-li title="说明" href="/Home" />
        </pixel-navbar-ul>
        <pixel-navbar-ul title="组件" href="/Components">
        </pixel-navbar-ul>
        <template v-slot:rigth>
          <pixel-navbar-ul href="" title="123" />
        </template>
    </pixel-navbar>
    <router-view></router-view>
</div>
</template>

<script>
import { defineComponent,reactive} from 'vue'


export default defineComponent({
  name: "App",
  setup(){
      let navbar = reactive([
          {
            title: "Home"
          },
          {
              title:'About',
              children: [
                  {title:'Test'},
                  {title:'Test2'}
              ]
          },
          {
              title:'Other',
              children: [
                  {title:'捐赠我们'},
                  {title:'意见反馈'}
              ]
          }
      ])
      return {navbar}
  }
})
</script>

<style lang='scss'>
#app{
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
}
</style>
