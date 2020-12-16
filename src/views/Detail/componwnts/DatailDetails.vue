<!-- 商品标题 -->
<template>
<div class='dateil-dateils'>
    <h3><h1>{{Dateils.shop_price}}</h1><h5>{{Dateils.market_price}}</h5></h3>
    <div class="viplock">
        <img src="https://x.dscmall.cn/static/dist/img/icon-vip.png" alt="">
        <p>高级VIP享超值优惠价<span>{{Dateils.shop_price}}</span></p>
        <button>立即开通 <i class="iconfont icon-jiantou2"></i></button>
    </div>
    <h2 class="title">{{Dateils.goods_name}}</h2>
    <div class="sales">
        <p>积累销量0</p>
        <p>库存500</p>
        <p>上海市</p>
    </div>
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

};
},
//监听属性 类似于data概念
computed: {
    Dateils(){
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
// console.log(this.Dateils());
},
beforeUpdate() {}, //生命周期 - 更新之前
updated() {}, //生命周期 - 更新之后
beforeDestroy() {}, //生命周期 - 销毁之前
destroyed() {}, //生命周期 - 销毁完成
activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style lang="less">
    .dateil-dateils{
        width:100%;
        padding: 1rem;
        width:calc(100% - 2rem);
        height:15rem;
        background:#fff;
    h3{
        width:100%;
        display:flex;
        height: 3rem;
        line-height: 3rem;
        h1{
            color:red;
            margin-right: 1rem;
            &::before{
                content:"￥";
            }
        }
        h5{
            color:#999;
            font-weight: normal;
            text-decoration: line-through;
            &::before{
                content:"￥";
            }
        }
    }
    .viplock{
        width:100%;
        height: 3rem;
        padding: 0 1rem;
        width:calc(100% - 2rem);
        margin: 1rem 0;
        background:#efefef;
        border-radius: 1.5rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size:1.4rem;
        img{
            width:2rem;
            height:2rem;
        }
        p{
            span{
                &::before{
                    content:"￥";
                }
            }
        }
        button{
            width: 9rem;
            height: 2rem;
            background: #000;
            color:#e3c49e;
            text-align: center;
            border-radius: 1rem;
        }
    }
    h2{
        font-weight: normal;
        margin-top: 1rem;
        height:4rem;
        overflow: hidden;
        display:-webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }
    .sales{
        width:100%;
        display:flex;
        margin-top: 2rem;
        justify-content: space-between;
    }
    }
</style>