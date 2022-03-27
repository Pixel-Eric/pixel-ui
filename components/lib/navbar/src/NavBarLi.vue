<template>
    <li class="pixel-navbar-left-ul-li">
        <span class="iconfont" :class="iconConfig" >{{data?.title?data.title:title}}</span>
        <div v-if="childrens != null" class="pixel-navbar-left-ul-li-script">
            <ul>
                <router-link v-for="c in childrens" :to="c?.href ? c.href : '' " :key="c" >
                    <li>{{c.name}}</li>
                </router-link>
            </ul>
        </div>
    </li>
</template>

<script>
import { defineComponent,inject } from "vue"
export default defineComponent({
    name:'pix-navbar-li',
    props: {
        data:Object,
        title:String,
        icon:{type:String,default:''},
        childrens:Array,
    },
    setup(props){
        if(!props?.data?.title){
            inject('isList')(true);
        }
        let iconConfig = {};
        iconConfig[props.icon] = true;
        return { iconConfig }
    }
})
</script>

<style>

</style>