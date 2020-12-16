<!-- 配送地址 -->
<template>
<div class='dateil-delivery'>
    <div class="delivery" @click="mack = !mack">
        <p>送至：<span>{{province}} {{city}} {{country}}</span></p>
        <i class="iconfont icon-jiantou2
"></i>
    </div>
    <!-- 地址选择 -->
    <div class="delivery-mask" v-if="mack">
        <div class="site">
            <mt-picker :slots="slots" @change="onValuesChange"></mt-picker>
        <button class="mackOk" @click="mack= !mack">确定</button>
    </div>
        </div>
    <div class="freight">
        <p>运费：<span>0.00</span></p>
    </div>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import cityDates from "@/assets/json/city.json"
// console.log(cityDates);
export default {
//import引入的组件需要注入到对象中才能使用
components: {},
data() {
//这里存放数据
return {
    mack:false,
    visibleItemCount:5,
    province:"请选择省",
    city:"请选择市",
    country:"请选择区",
    slots: [
        {
          flex: 1,
          values:Object.keys(cityDates),
          className: 'slot1',
          defaultIndex:6
        }, {
          divider: true,
          content: '-',
          className: 'slot2'
        }, {
          flex: 1,
          values: [],
          className: 'slot3',
          textAlign: 'left'
        }, {
          divider: true,
          content: '-',
          className: 'slot2'
        }, {
          flex: 1,
          values: [],
          className: 'slot3',
          textAlign: 'left'
        }
      ]
};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
 onValuesChange(picker, values) {
    //  console.log(picker);
     picker.setSlotValues(1,Object.keys(cityDates[values[0]]));
     picker.setSlotValues(2,cityDates[values[0]][values[1]])
    //  console.log(values);
    this.province = values[0];
    this.city = values[1];
    this.country=values[2];
    }
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
.dateil-delivery{
    width:100%;
    height:10rem;
    margin-top:2rem;
    background: #fff;
    .delivery,.freight{
        width:calc(100% - 1rem);
        padding-left: 1rem;
        height:5rem;
        line-height: 5rem;
        // display:flex;
        font-size: 1.4rem;
        color:#999;
        span{
            color:#000;
        }
    }
    .delivery{
        display:flex;
        justify-content: space-between;
    }
    .delivery-mask{
        width:100%;
        height:100%;
        position:fixed;
        top:0;
        left:0;
        right:0;
        bottom:0;
        background:rgba(0, 0, 0, 0.5);
        z-index:999;
        .site{
            width:100%;
            height:20rem;
            background:#fff;
            position:absolute;
            bottom:0;
            left:0;
            .picker{
                width:100%;
            }
        .mackOk{
            width:3rem;
            height:2rem;
            position:absolute;
            right:1rem;
            top:1rem;
            color:#000;
        }
        }
    }
}
</style>