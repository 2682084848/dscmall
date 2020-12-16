<!--  -->
<template>
  <div class="Detail" ref="header">
      <!-- <h1 @click="xia">下</h1> -->
    <DetailHeader />
    <DatailSwipe id="title0" />
    <DateilDateils />
    <DateilIntegear />
    <DateilDelivery />
    <DateulSelected />
    <DateilStore />
    <DateilTab id="title1" />
    <h1>-猜你喜欢-</h1>
    <HomeFalls id="title2" />
    <DateilFooter />
    <div class="fot"></div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import DetailHeader from "./componwnts/DetailHeader";
import DatailSwipe from "./componwnts/DateilSwipe";
import DateilDateils from "./componwnts/DatailDetails";
import DateilIntegear from "./componwnts/DateilIntegear";
import DateilDelivery from "./componwnts/DateilDelivery";
import DateulSelected from "./componwnts/DateilSelected";
import DateilStore from "./componwnts/DateilStore";
import DateilTab from "./componwnts/DateilTab";
import HomeFalls from "../Home/components/HomeFalls";
import DateilFooter from "./componwnts/DateilFooter";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    DetailHeader,
    DatailSwipe,
    DateilDateils,
    DateilIntegear,
    DateilDelivery,
    DateulSelected,
    DateilStore,
    DateilTab,
    HomeFalls,
    DateilFooter,
  },
  data() {
    //这里存放数据
    return {
        DateilTitle:[1,2],
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    //   xia(){
    //      this.$nextTick(() => {
    //   let element = document.querySelector("#title1");
    //      let top = element.offsetTop
    //     console.log(element);
    //   console.log(top);
    //   window.scrollBy({top});
    // });
    //   }
  },
  beforeCreate() {}, //生命周期 - 创建之前
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  beforeMount() {}, //生命周期 - 挂载之前
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    let oTop = document.documentElement || document.body;
    oTop.scrollTop = 0;
    
    
    this.$nextTick(()=>{
        let DateilTitle1 = document.querySelector("#title0").offsetTop;
        let DateilTitle2 = document.querySelector("#title1").offsetTop;
        let DateilTitle3 = document.querySelector("#title2").offsetTop;
        // console.log(DateilTitle3);
        this.$store.state.shareTop.push(DateilTitle3,DateilTitle2,DateilTitle1);
        this.$store.state.shareTop.reverse();
    })
  },
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang="less">
.Detail {
  margin-top: 4.4rem;
}
.fot {
  height: 5rem;
  width: 100%;
}
</style>