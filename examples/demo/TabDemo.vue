<template>
  <pix-tab :options="{
    indexs:config,
    position:'bottom',
    hiddenHeader:true,
    textColor:'red',
    lineColor:'red',
    cur:cur
    }">
    <template v-slot:new>
      最新消息列表
    </template>
    <template v-slot:hot>
      热门热门列表
    </template>
    <template v-slot:publish>
      公告列表
    </template>
  </pix-tab>
  <pix-btn
    @click="test()"
    :options="{
      value:'切换到热门'
  }"
  />
</template>

<script>
import { defineComponent, reactive, toRefs } from "vue";
export default defineComponent({
  setup() {
    let state = reactive({
      cur: "new",
    });
    let config = [
      { name: "new", value: "最新" },
      { name: "hot", value: "热门" },
      { name: "publish", value: "公告" },
    ];
    function test() {
      state.cur = "hot";
    }
    return { config, ...toRefs(state), test };
  },
});
</script>
