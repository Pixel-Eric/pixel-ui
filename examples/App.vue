<template>
<div id="app">
    <pixel-tab  >
        <template v-slot:tab1>
            <div>
                这里是选项卡1的内容
            </div>
        </template>
        <template v-slot:tab2>
            <div>
                这里是选项卡2的内容
            </div>
        </template>
    </pixel-tab>
</div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style lang='scss'>

</style>
