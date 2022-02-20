<template>
    <li class="pixel-navbar-ul-li">
        {{data?.title?data.title:title}}
    </li>
</template>

<script>
import { defineComponent,inject } from "vue"
export default defineComponent({
    name:'pixel-navbar-li',
    props: {
        data:Object,
        title:String
    },
    setup(props){
        if(!props?.data?.title){
            inject('isList')(true);
        }
    }
})
</script>

<style>

</style>