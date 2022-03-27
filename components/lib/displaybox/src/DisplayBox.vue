<template>
  <div
    class="pixel-displaybox"
    :class="{'pixel-displaybox-hover':isHover}"
    :style="{width:width+'px',height:height+'px'}"
  >
    <div
      class="pixel-displaybox-left"
      :style="{width:iconWidth+'%'}"
    >
      <img
        :src="icon"
        alt=""
      >
    </div>
    <div class="pixel-displaybox-rigth">
      <div
        class="pixel-displaybox-rigth-title"
        :style="{...titleStyle}"
      >
        {{title}}
      </div>
      <div
        class="pixel-displaybox-rigth-content"
        :style="{...contentStyle}"
        :class="{'pixel-displaybox-nofooter':hiddenFooter}"
      >
        {{content}}
      </div>
      <div
        v-if="!hiddenFooter"
        class="pixel-displaybox-rigth-footer"
      >
        <div
          v-if="footer"
          :style="{...footerStyle}"
        >
          {{footer}}
        </div>
        <div v-else>
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, reactive, toRefs } from "vue";
export default defineComponent({
  name: "pixel-displaybox",
  props: {
    options: { type: Object, default: () => {} },
  },
  setup(props) {
    let options = reactive({
      width: 300,
      height: 108,
      icon: "",
      title: "默认标题",
      content: "",
      footer: "",
      footerAlign: "",
      iconWidth: 30,
      titleStyle: {},
      contentStyle: {},
      footerStyle: {},
      isHover: false,
      hiddenFooter: true,
      ...props.options,
    });

    return { ...toRefs(options) };
  },
});
</script>