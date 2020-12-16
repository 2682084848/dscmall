<!-- 分类头部 -->
<template>
<div class='category-header'>
    <header>
        <a href="javascript:;"><i class="iconfont icon-jiantou3" onclick="window.history.back()"></i></a>
        <form action="">
            <input type="text" placeholder="请输入关键字">
            <i class="iconfont icon-sousuo2"></i>
        </form>
        <a href="javascript:;" v-if="showhide"><i @click="toggle" class="iconfont" :class="togglestyle?'icon-leimupinleifenleileibie':'icon-leimupinleifenleileibie2'"></i></a>
    </header>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
//import引入的组件需要注入到对象中才能使用
components: {},
props:["showhide"],
computed:{
    togglestyle(){
        return this.$store.state.toggleStyle;
    }
},
data() {
//这里存放数据
return {};
},
methods:{
    gotoSearch(){
        this.$router.push("/search");
    },
    toggle(){
        this.$store.commit("changeToggleStyle",!this.$store.state.toggleStyle)
    }
}
}
</script>
<style lang="less">
.category-header{
    width: 100%;
    height: 4.4rem;
    position: fixed;
    top: 0;
    left: 0;
    background: #fff;
    border-bottom: #efefef;
    z-index:99;
    header{
        width: 100%;
        display: flex;
        a{
            display: block;
            width: 10%;
            height: 4.4rem;
            text-align: center;
            line-height: 4.4rem;
            color:#999;
            i{
                   font-size: 1.8rem;
            }
        }
        form{
            width: 85%;
            height: 3rem;
            position: relative;
            margin-top: 0.7rem;
            input{
                width: 100%;
                height: 3rem;
                border: 1px solid #ccc;
                border-radius: 1.5rem;
                text-indent: 1rem;
            }
            i{
                position: absolute;
                top: 0;
                right: 0;
                width: 3rem;
                height:3rem;
                text-align: center;
                line-height: 3rem;
                color: #cfcfcf;
            }
        }
    }
}
</style>