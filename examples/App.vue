<template>
  <div id="app">
    <!-- <pix-navbar :data="navbar" :shadow="true" /> -->
    <pix-navbar :options="{
        shadow:'true',
        logo:require('./assets/logo.png')
    }">
      <pix-navbar-ul
        title="首页"
        href="/Home"
      >
      </pix-navbar-ul>
      <pix-navbar-ul
        title="指南"
        icon="icon-faxian"
        href="/Guide"
        :fontStyle="{fontWeight:'bold'}"
      >
        <pix-navbar-li
          title="安装123123123"
          icon="icon-tianbaobiao"
          href="/Home"
          :childrens="[
            {name:'选项1123123123',href:'/Home'},
            {name:'选项2'},
            {name:'选项3',href:'/Home'},
            {name:'选项4',href:'/Home'}
          ]"
        />
        <pix-navbar-li
          title="说明"
          href="/Home"
          :childrens="[
            {name:'选项1',href:'/Home'},
            {name:'选项2',href:'/Home'}
          ]"
        />
      </pix-navbar-ul>
      <pix-navbar-ul
        title="组件"
        href="/Components"
      >
      </pix-navbar-ul>
      <template v-slot:rigth>
        <pix-navbar-ul
          href=""
          title="123"
        />
      </template>
    </pix-navbar>
    <router-view></router-view>
  </div>
</template>

<script>
import { defineComponent, reactive } from "vue";

export default defineComponent({
  name: "App",
  setup() {
    let navbar = reactive([
      {
        title: "Home",
      },
      {
        title: "About",
        children: [{ title: "Test" }, { title: "Test2" }],
      },
      {
        title: "Other",
        children: [{ title: "捐赠我们" }, { title: "意见反馈" }],
      },
    ]);
    return { navbar };
  },
});
</script>

<style lang='scss'>
#app {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}
</style>
