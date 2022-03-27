<template>
  <div class="pixel-navbar-left-ul">
    <router-link :to="data?.href?data.href:href">
      <p
        class="pixel-navbar-left-ul-title iconfont"
        :style="{height:getConfig.height+'px',...fontStyle}"
        :class="{'pixel-navbar-left-ul-list':isList,...iconConfig}"
      >{{data?.title?data.title:title}}</p>
    </router-link>
    <ul
      class="pixel-navbar-left-ul-menu"
      :style="{backgroundColor:bgColor}"
    >
      <template v-if="data?.children">
        <pix-navbar-li
          v-for="child in data.children"
          :data="child"
          :key="child"
        />
      </template>
      <!-- 插槽 -->
      <slot v-else></slot>
    </ul>

  </div>
</template>

<script>
import {
  defineComponent,
  inject,
  reactive,
  toRefs,
  onBeforeMount,
  provide,
} from "vue";
export default defineComponent({
  name: "pix-navbar-ul",
  props: {
    data: { type: Object },
    title: String,
    fontStyle:{type:Object,default:()=>{}},
    href: {type:String,default:''},
    bgColor: { type: String, default: "#fff" },
    icon:{type: String, default:''}
  },
  setup(props) {
    let config = reactive({
      isList: false,
      iconConfig:{}
    });
    let getConfig = inject("sendConfig")();
    function init() {
      if (props?.data?.children) {
        config.isList = true;
      } else {
        provide("isList", (flag) => {
          if (flag) {
            config.isList = true;
          }
        });
      }
    }

    onBeforeMount(() => {
      init();
      config.iconConfig[props.icon] = true;
    });

    return { getConfig, ...toRefs(config) };
  },
});
</script>
