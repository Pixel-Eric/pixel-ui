<template  >
  <teleport to="body">
    <div
      v-show="display"
      class="pix-modal-bg animate__animated"
      @click.self="deplayClose()"
      :class="{'close':closeAnimation}"
      :style="{
						backgroundColor:background.bgColor,
            overflow:'hidden',
            display:display ? 'flex' : 'none',
            ...postionConfig
					}"
    >
      <transition
        :enter-active-class="`animate__animated ${animation.enter}`"
        :leave-active-class="`animate__animated ${animation.leave}`"
      >
        <div
          class="pix-modal"
          v-if="animationShow"
          :style="{
							width:width+'px',
							height:height+'px',
              backgroundColor:bgColor,
              margin:`${top}px ${right}px ${bottom}px ${left}px`,
              boxShadow:shadow.show ? `0px 3px 10px ${shadow.color}` : ''
						}"
          :class="{
              'pix-modal-radius':radius
            }"
        >
          <div
            v-if="title.show"
            class="pix-modal-title"
          >
            <template v-if="title.text">
              <p
                class="pix-modal-title-p"
                :style="{...title.fontStyle}"
              >
                {{title.text}}
              </p>
            </template>
            <template v-else>
              <slot name="title"></slot>
            </template>
          </div>
          <div class="pix-modal-content">
            <template v-if="content">
              <p class="iconfont" :class="iconConfig" :style="{...contentStyle}">{{content}}</p>
            </template>
            <template v-else>
              <slot name="content"></slot>
            </template>
          </div>
          <div
            v-if="footer.show"
            class="pix-modal-footer"
          >
            <slot name="footer"></slot>
          </div>
        </div>
      </transition>
    </div>
  </teleport>
</template>

<script>
import RGBA from "../../../hooks/HexToRGBA";
import positionToFlex from "../../../hooks/positionToFlex";
import {
  defineComponent,
  reactive,
  toRefs,
  onBeforeMount,
  ref,
  watchEffect,
} from "vue";
export default defineComponent({
  name: "pix-modal",
  props: {
    display: { type: Boolean, default: false },
    width: { type: Number, default: 300 },
    height: { type: Number, default: 300 },
    radius: { type: Boolean, default: false },
    bgColor: { type: String, default: "#fff" },
    background: {
      type: Object,
      default: () => {},
    },
    animation: {
      type: Object,
      default: () => {},
    },
    title: {
      type: Object,
      default: () => {},
    },
    shadow: {
      type: Object,
      default: () => {},
    },
    footer: {
      type: Object,
      default: () => {},
    },
    content: { type: String, default: "" },
    close: { type: Function },
    position: { type: String, default: "center" },
    top: { type: Number, default: 0 },
    left: { type: Number, default: 0 },
    right: { type: Number, default: 0 },
    bottom: { type: Number, default: 0 },
    contentStyle: { type: Object, default: () => {} },
    icon: { type: String, default: "" },
  },
  setup(props) {
    let config = reactive({
      background: {
        bgColor: "#000000",
        bgOpacity: 0.5,
        show: false,
      },
      animation: {
        enter: "animate__backInDown",
        leave: "animate__backOutDown",
      },
      title: {
        text: "",
        show: false,
        fontStyle: {},
      },
      events: {
        close: () => {},
        open: () => {},
      },
      shadow: {
        show: false,
        color: "#999",
      },
      footer: {
        show: false,
      },
      content: "",
      bgColor: "#fff",
    });
    function processConfig() {
      config.background = Object.assign(config.background, props.background);
      config.animation = Object.assign(config.animation, props.animation);
      config.title = Object.assign(config.title, props.title);
      config.events = Object.assign(config.events, props.events);
      config.footer = Object.assign(config.footer, props.footer);
      config.shadow = Object.assign(config.shadow, props.shadow);
      config.content = props.content;
      config.bgColor = props.bgColor;
      if (!config.background.show) {
        config.background.bgOpacity = 0;
      }
      config.background.bgColor = RGBA(
        config.background.bgColor,
        config.background.bgOpacity
      );
      config.events.open(config.dispaly);
    }
    let closeAnimation = ref(false);
    let animationShow = ref(false);
    let postionConfig = positionToFlex(props.position);
    let iconConfig = {};
    iconConfig[props.icon] = true;
    onBeforeMount(() => {
      processConfig();
    });
    watchEffect(() => {
      animationShow.value = props.display;
    });

    function deplayClose() {
      closeAnimation.value = true;
      animationShow.value = false;
      setTimeout(() => {
        closeAnimation.value = false;
        props.close();
      }, 500);
    }

    return {
      ...toRefs(config),
      postionConfig,
      animationShow,
      closeAnimation,
      deplayClose,
      iconConfig
    };
  },
});
</script>