<template>
  <button
    class="pixel-btn"
    :style="{width:width+'px',height:height+'px'}"
    :class="{radius, ...config}"
  >
    <i v-if="iconPosition === 'name' && icon !== '' " :class="{...iconConfig}"></i>
    <span :style="{...fontStyle}">{{value}}</span>
    <div v-if="iconPosition !== 'name'" :style="{...initial}" :class="{...test}">
      <p :class="iconConfig"></p>
    </div>
  </button>
</template>

<script>
import { defineComponent, reactive, toRefs } from "vue";
export default defineComponent({
  name: "pixel-btn",
  props: {
    options: { type: Object, default: () => {} },
  },
  setup(props) {
    let options = reactive({
      value: "默认按钮",
      icon: "",
      type: "normal",
      radius: false,
      mode: "fill",
      iconPosition: "name",
      width: 110,
      height: 48,
      fontStyle:{},
      ...props.options,
    });
    //按钮样式处理
    const config = {};
    const test = {};
    const iconConfig = {};
    const initial = {};

    test[`pixel-btn-hidden-${options.type} `] = true;
    config[`${options.mode}-${options.type}`] = true;
    if (options.icon !== null) {
      iconConfig[`iconfont ${options.icon}`] = true;
    }
    if(options.iconPosition !== 'name'){
        config[`test-${options.iconPosition}`] = true;
        initial[options.iconPosition] = '-40%';
    }
    return { config, ...toRefs(options), iconConfig ,test  , initial };
  },
});
</script>
