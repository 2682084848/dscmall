
<template>
  <div class="index-content">
    <div
      class="rem"
      :style="indexColor[IndColor]"
      v-if="indexMask == '/home/index' && !conceal"
    ></div>
    <div class="mask2" v-if="conceal"></div>
    <Swipe @swipebroad="broad" />
    <QuckNav />
    <HomeNews />
    <div class="kai">
      <img src="@/assets/CPvH5WHHbF0EoG9XjRQbbT3knMVCeEt9DlYGQhJM.png" alt="" />
    </div>
    <HomeSeckill />
    <!-- 拼团 -->
    <HomeTour />
    <Recommend />
    <Boutique />
    <HomeStore />
    <HomeFalls />
    <div class="box"></div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import Swipe from "../../../components/Swipe";
import QuckNav from "../components/QuckNav";
import HomeNews from "../components/HomeNews";
import HomeFalls from "../components/HomeFalls";
import HomeSeckill from "../components/HomeSeckill";
import HomeTour from "../components/HomeTour";
import Recommend from "../components/Recommend";
import Boutique from "../components/Boutique";
import HomeStore from "../components/HomeStore";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    Swipe,
    QuckNav,
    HomeNews,
    HomeFalls,
    HomeSeckill,
    HomeTour,
    Recommend,
    Boutique,
    HomeStore,
    // ajxa,
  },
  data() {
    //这里存放数据
    return {
      indexColor: [
        {
          background: "#F34646",
        },
        {
          background: "#E43124",
        },
        {
          background: "#3C81FF",
        },
        {
          background: "#028379",
        },
        {
          background: "#4091FF",
        },
      ],
      IndColor: 0,
      indexMask: "",
      conceal: false,
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    broad(data) {
      this.IndColor = data;
    },

    rollingheight: function () {
      // console.log(e);
      var topoff = window.pageYOffset;
      if (topoff >= 300) {
        this.conceal = true;
      }
      if (topoff < 300) {
        this.conceal = false;
      }
    },
  },
  mounted() {
    this.indexMask = this.$route.path;
    window.addEventListener("scroll", this.rollingheight, true);
  },
};
</script>
<style lang="less">
.index-content {
  margin-top: 11rem;
  .rem,
  .mask2 {
    width: 100%;
    height: 14rem;
    position: fixed;
    top: 0;
    left: 0;
    z-index: -1;
    border-radius: 0 0 2rem 2rem;
  }
  .mask2 {
    height: 10rem;
    border-radius: 0;
    background: red;
    z-index: 2;
  }
  .kai {
    width: 96%;
    margin-left: 2%;
    margin-top: 1.5rem;
    img {
      width: 100%;
    }
  }
  .box {
    width: 100%;
    height: 5rem;
  }
}
</style>