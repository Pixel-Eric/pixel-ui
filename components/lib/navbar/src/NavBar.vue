<template>
  <transition enter-active-class="animate__animated animate__fadeInDown"
  leave-active-class="animate__animated animate__fadeOutUp">
    <div
      v-if="test"
      class="pixel-navbar"
      :class="{'pixel-navbar-shadow':shadow,'pixel-navbar-float':float}"
      :style="{height:height+'px',backgroundColor:bgColor}"
    >
      <img
        class="pixel-navbar-logo"
        :src="logo"
        alt="logo"
      >
      <!-- 导航插槽区域 -->
      <slot
        v-if="isSlot"
        class="pixe-nvabar-slot"
      ></slot>
      <div
        v-else
        class="pixel-navbar-defult"
      >
        <pixel-navbar-ul
          v-for="ul in ul_data"
          :key="ul"
          :data="ul"
        />
      </div>
    </div>
  </transition>
</template>

<script>
import { defineComponent, reactive, toRefs, provide, nextTick } from "vue";
import navbar from "../../../hooks/navbar";
export default defineComponent({
  name: "pixel-navbar",
  props: {
    logo: String,
    height: { type: Number, default: 60 },
    shadow: { type: Boolean, default: false },
    bgColor: { type: String, default: "#fff" },
    mode: { type: String, default: "fixed" },
    data: { type: Array },
  },
  setup(props) {
    let config = reactive({
      ul_data: [],
      isSlot: false,
      float: false,
      test: true,
      zk: false,
    });

    config.isSlot = navbar(props.data, config, register());

    function register() {
      //向子组件中注入构建函数
      provide("build", build);
    }

    provide("sendConfig", sendParentConfig);

    function sendParentConfig() {
      let param = {
        height: props.height,
      };
      return param;
    }

    function build(component_config) {
      // {titile,width,href,children}
      let ul = {
        title: component_config.title,
        href: component_config.href,
        children: component_config.children,
      };
      config.ul_data.push(ul);
    }

    setInterval(() => {
      if (document.documentElement.scrollTop > props.height+10) {
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

    return { ...toRefs(config) };
  },
});
</script>