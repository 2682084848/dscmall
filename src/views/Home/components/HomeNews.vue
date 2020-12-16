<!--  -->
<template>
  <div class="homenews">
    <div class="homenews-cont">
      <div class="image">
        <img src="@/assets/redian.png" alt="" />
      </div>
      <div class="news">
        <ul ref="news" :class="{ trans: flag }">
          <li v-for="(titles,index) in newsData" :key="index">
            <h3>{{ titles.title }}</h3>
          </li>
        </ul>
      </div>
      <div class="iconf">
        <i class="iconfont icon-jiantou2"></i>
      </div>
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
      newsData: [
        {
          id: 1,
          title: "服务店突破2000多家",
        },
        {
          id: 1,
          title: "我们成为中国最大家电零售B2B2C系统",
        },
        {
          id: 1,
          title: "三大国际腕表品牌签约",
        },
      ],
      timer: null,
      flag: true,
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    UpDown() {
      var oUl = this.$refs.news;
      oUl.style.top = "-2rem";
      this.flag = !this.flag;
      setTimeout(() => {
        this.newsData.push(this.newsData[0]);
        this.newsData.shift();
        oUl.style.top = "0rem";
        this.flag = !this.flag;
      }, 0);
    },
  },
  mounted() {
    this.timer = setInterval(this.UpDown, 5000);
  },
  destroyed() {
      clearInterval(this.timer);
  },
};
</script>
<style lang="less">
.homenews {
  width: 100%;
  margin: 0 8px;
  width: calc(100% - 25px);
  height: 4rem;
  border: 1px solid #efefef;
  border-top: 0;
  border-radius: 0 0 1rem 1rem;
  padding: 0.5rem;
  .homenews-cont {
    width: 100%;
    border-top: 1px solid #efefee;
    display: flex;
    .image {
      width: 20%;
      img {
        width: 100%;
      }
    }
    .news {
      width: 70%;
      height: 1.8rem;
      overflow: hidden;
      margin: 1.2rem 0 0 1.5rem;
      width: calc(70% - 1.5rem);
      ul {
        position: relative;
        // font-size: 1rem;
        li {
          height: 100%;
        }
      }
      .trans {
        transition: all 0.5s linear;
      }
    }
    .iconf {
      width: 10%;
      line-height: 4rem;
      text-align: right;
    }
  }
  
}
</style>