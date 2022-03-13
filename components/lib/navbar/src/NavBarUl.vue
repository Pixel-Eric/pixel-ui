<template>
  <div class="pixel-navbar-left-ul">
    <router-link :to="data?.href?data.href:href">
      <p
        class="pixel-navbar-left-ul-title"
        :style="{height:getConfig.height+'px'}"
        :class="{'pixel-navbar-left-ul-list':isList}"
      >{{data?.title?data.title:title}}</p>
    </router-link>
    <ul
      class="pixel-navbar-left-ul-menu"
      :style="{backgroundColor:bgColor}"
    >
      <template v-if="data?.children">
        <pixel-navbar-li
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
  name: "pixel-navbar-ul",
  props: {
    data: { type: Object },
    title: String,
    href: String,
    bgColor: { type: String, default: "#fff" },
  },
  setup(props) {
    let config = reactive({
      isList: false,
    });
    let getConfig = inject("sendConfig")();
    console.log(props.href);
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
    });

    return { getConfig, ...toRefs(config) };
  },
});
</script>
