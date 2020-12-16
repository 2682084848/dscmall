<!-- 商品详情头部 -->
<template>
  <div class="detail-header">
    <header>
      <a href="#" class="return" onclick="window.history.back()"
        ><i class="iconfont icon-jiantou3"></i
      ></a>
      <div
        class="dity"
        @click="titleTab(index)"
        :class="{ active: listsindex == index }"
        v-for="(list, index) in lists"
        :key="index"
      >
        {{ list.title }}
      </div>
      <a href="#" @click="share"><i class="iconfont icon-fenxiang"></i></a>
    </header>
    <DateilShare v-if="this.$store.state.shareMask" />
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import DateilShare from "./DateilShare";

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    DateilShare,
  },
  data() {
    //这里存放数据
    return {
      lists: [
        {
          id: 1,
          title: "商品",
        },
        {
          id: 2,
          title: "详情",
        },
        {
          id: 3,
          title: "推荐",
        },
      ],
      listsindex: 0,
      flag: true,
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    titleTab(index) {
      this.listsindex = index;
      // console.log(index);
      let SharescrollBy = this.$store.state.shareTop;
      // let he = document.querySelector(".Detail");
      let top = SharescrollBy[index] - window.scrollY;
      window.scrollBy({ top: top });
      console.log(window.scrollY);
    },
    share() {
      return (this.$store.state.shareMask = true);
    },
  },
  beforeCreate() {}, //生命周期 - 创建之前
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  beforeMount() {}, //生命周期 - 挂载之前
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    // console.log(this.DateilTitle);
  },
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang="less">
header {
  width: 100%;
  display: flex;
  height: 4.4rem;
  background: rgba(255, 255, 255, 0.4);
  text-align: center;
  line-height: 4.4rem;
  border-bottom: 1px solid #efefef;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  a {
    flex: 1;
    color: #999;
    font-size: 1.8rem;
  }
  div {
    flex: 2;
    font-size: 1.4rem;
  }
}
.active {
  color: red;
}
</style>