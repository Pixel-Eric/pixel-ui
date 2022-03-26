<template>
  <div
    class="pixel-tab"
    :style="{
      width:width+'px',
      height:height+'px',
      flexDirection:position == 'bottom' ? 'column-reverse' : 'column'}"
  >
    <div v-if="!hiddenHeader" class="pixel-tab-indexs" :style="{...tabAlignConfig.container}">
      <div
        class="pixel-tab-indexs-btn"
        :style="{...tabAlignConfig.tab,color:textColor}"
        v-for="index in indexs"
        :key="index"
        @click="change(index.name)"
      >
        <div class="pixel-tab-indexs-btn-content">
          <i
            v-if="index.icon"
            class="iconfont"
            :class="[index.icon]"
          ></i>
          {{index.value}}
        </div>
        <transition
          enter-active-class="animate__animated  animate__fadeInLeft"
          leave-active-class="animate__animated animate__fadeOutLeft"
        >
          <div
            class="btn-line-checked"
            v-show="state[index.name]"
            :style="{backgroundColor:lineColor,color:textColor}"
          ></div>
        </transition>
      </div>
    </div>
    <div class="pixel-tab-content">
      <slot :name="soltName">
      </slot>
    </div>
  </div>
</template>

<script>
import {
  defineComponent,
  reactive,
  ref,
  onBeforeMount,
  watchEffect,
  toRefs,
} from "vue";
import AlignToFlex from '../../../hooks/AlignToFlex'
export default defineComponent({
  name: "pix-tab",
  props: {
    options: { type: Object, default: () => {} },
  },
  setup(props) {
    let options = reactive({
      indexs: [
        { name: "tab1", value: "选项卡1" },
        { name: "tab2", value: "选项卡2" },
      ],
      cur: null,
      width: 300,
      height: 300,
      position: "top",
      lineColor: "rgb(113, 171, 104)",
      textColor: "#000",
      tabAlign: "uniform",
      hiddenHeader:false,
      ...props.options,
    });
    let state = reactive({});
    let soltName = ref("");
    let tabAlignConfig = AlignToFlex(options.tabAlign);

    let now = ref(options.cur != null ? options.cur : options.indexs[0].name);
    function change(tabName) {
      now.value = tabName;
    }
    watchEffect(() => {
      options.indexs.forEach((cur) => {
        state[cur.name] = now.value == cur.name ? true : false;
      });
      Object.keys(state).forEach((key) => {
        if (state[key]) soltName.value = key;
      });
    });
    watchEffect(()=>{
      now.value = props.options.cur;
    })

    onBeforeMount(() => {
      change(options.cur ? options.cur : options.indexs[0].name);
    });
    return { state, soltName, change, now, ...toRefs(options), tabAlignConfig };
  },
});
</script>

