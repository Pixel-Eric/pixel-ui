<template>
    <th :style="{textAlign:align}">{{getName()}}</th>
</template>

<script>
import { defineComponent,inject } from "vue";
export default defineComponent({
    name:'pixel-table-col',
    props:{
        width:{type:Number,default:100},
        name:String,
        value:String,
        align:{type:String,default:'left'},
        color:{type:String,default:"#000"}
    },
    setup(props){
        //传递渲染信息
        let dataRender = inject('dataRender');
        dataRender(props);
        function getName(){
            if(props.value){
                return props.value;
            }else{
                return props.name;
            }
        }
        function getSlotName(){
            return props.name;
        }
        return {getName,getSlotName}
    },
    beforeCreate() {
        //向父组件提供信息
        let isColComponent = inject('isColComponent');
        isColComponent(true);
    },
})
</script>
<style lang="scss">
@import 'table';
</style>