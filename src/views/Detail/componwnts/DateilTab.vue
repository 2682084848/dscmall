<!-- 商品详情 / 规格参数 -->
<template>
<div class='dateil-tab'>
    <mt-navbar v-model="selected">
  <mt-tab-item id="tab1">商品详情</mt-tab-item>
  <mt-tab-item id="tab2">规格参数</mt-tab-item>
</mt-navbar>

<!-- tab-container -->
<mt-tab-container v-model="selected">
  <mt-tab-container-item id="tab1">
    <!-- <mt-cell v-for="n in 10" :title="'内容 ' + n" /> -->
    <div class="dateil-content" v-html="DateilTabDate.goods_desc"></div>
  </mt-tab-container-item>
  <mt-tab-container-item id="tab2">
    <div class="parameter">
        <table>
            <tbody>
                <tr v-for="(attr,index) in DateilTabDate.attr_parameter" :key="index">
                    <td>{{attr.attr_name}}</td>
                    <td>{{attr.attr_value}}</td>
                </tr>
            </tbody>
        </table>
    </div>
  </mt-tab-container-item>
</mt-tab-container>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
//import引入的组件需要注入到对象中才能使用
components: {},
data() {
//这里存放数据
return {
    selected:"tab1",
};
},
//监听属性 类似于data概念
computed: {
    DateilTabDate(){
        return this.$store.state.dateilSwipe
    }
},
//监控data中的数据变化
watch: {},
//方法集合
methods: {

},
beforeCreate() {}, //生命周期 - 创建之前
//生命周期 - 创建完成（可以访问当前this实例）
created() {

},
beforeMount() {}, //生命周期 - 挂载之前
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {

},
beforeUpdate() {}, //生命周期 - 更新之前
updated() {}, //生命周期 - 更新之后
beforeDestroy() {}, //生命周期 - 销毁之前
destroyed() {}, //生命周期 - 销毁完成
activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style lang="less">
.dateil-tab{
    width:100%;
    margin-top:2rem;
    .dateil-content{
        width: 100%;
        // height:10rem;
        // background:red;
        margin-top:1rem;
        img{
            width:100%;
        }
    }
    .parameter{
        width: 100%;
       table{
           width:96%;
           margin-left:2%;
           border-collapse: collapse;
           background:#fff;
           margin-top: 1rem;
           td{
               border:1px solid #efefef;
               height: 3rem;
               line-height: 3rem;
               padding-left:1rem;
               &:first-child{
                   width:20%;
               }
           }
       }
    }
.mint-navbar{
    .is-selected{
        color:#f44;
        border-bottom:0px solid #f44;
        &::after{
            content:"";
            width:5rem;
            height: 0.1rem;
            display:block;
            background:#f44;
            margin: 1.2rem auto 0;
        }
    }
    }
}
</style>