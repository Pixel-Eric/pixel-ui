<template>
  <transition
    enter-active-class="animate__animated animate__fadeInDown"
    leave-active-class="animate__animated animate__fadeOutUp"
  >
    <div
      v-if="test"
      class="pixel-navbar"
      :class="{'pixel-navbar-shadow':shadow,'pixel-navbar-float':float}"
      :style="{height:height+'px',backgroundColor:bgColor,top:top+'px'}"
    >
      <div class="pixel-navbar-left">
        <img
          class="pixel-navbar-left-logo"
          :src="logo"
          alt="logo"
        >
        <!-- 导航插槽区域 -->
        <slot
          v-if="isSlot"
          class="pixe-nvabar-left-slot"
        >
        </slot>
        <div
          v-else
          class="pixel-navbar-left-defult"
        >
          <pix-navbar-ul
            v-for="ul in ul_data"
            :key="ul"
            :data="ul"
            :icon="ul.icon"
          />
        </div>
      </div>
      <div class="pixel-navbar-right">
        <slot name="rigth"></slot>
      </div>
    </div>
  </transition>
</template>

<script>
import { defineComponent, reactive, toRefs, provide, nextTick } from "vue";
import navbar from "../../../hooks/navbar";
export default defineComponent({
  name: "pix-navbar",
  props: {
    options: { type: Object, default: () => {} },
  },
  setup(props) {
    let config = reactive({
      ul_data: [],
      isSlot: false,
      float: false,
      test: true,
      zk: false,
    });
    let options = reactive({
      logo: '',
      height: 60 ,
      shadow:false,
      bgColor: "#fff",
      data:[],
      top:0,
      ...props.options
    });
    config.isSlot = navbar(options.data, config);

    // function register() {
    //   //向子组件中注入构建函数
    //   provide("build", build);
    // }

    provide("sendConfig", sendParentConfig);

    function sendParentConfig() {
      let param = {
        height: options.height,
      };
      return param;
    }

    // function build(component_config) {
    //   // {titile,width,href,children}
    //   let ul = {
    //     title: component_config.title,
    //     href: component_config.href,
    //     children: component_config.children,
    //   };
    //   config.ul_data.push(ul);
    // }

    setInterval(() => {
      if (document.documentElement.scrollTop > options.height - 20) {
        config.float = true;
        if (!config.zk) {
          config.zk = true;
          config.test = false;
          nextTick(() => {
            config.test = true;
          });
        }
      } else {
        config.zk = false;
        config.float = false;
      }
    }, 100);

    return { ...toRefs(config),...toRefs(options) };
  },
});
</script>