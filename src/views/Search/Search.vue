<!-- 搜索页面 -->
<template>
  <div class="category-header">
    <header>
      <a
        href="JavaScript:;"
        class="iconfont icon-jiantou3"
        onclick="window.history.back()"
      ></a>
      <form action>
        <input type="text" placeholder="请输入关键字" v-model="keywords" />
        <i class="iconfont icon-sousuo2" @click="searchKeywords"></i>
      </form>
    </header>
    <div class="search-content">
      <div class="search-wrap">
        <div class="search-wrap-title">
          <div class="title">最近搜索</div>
          <div class="iconfont icon-shanchu1" @click="deleKeywords"></div>
        </div>
        <ul class="search-list">
          <li v-if="keywordsDatas.length == 0">暂无</li>
          <li v-for="(keywordsData, index) in keywordsDatas" :key="index">
            <router-link :to="'/searchlist?keywords=' + keywordsData">
              {{ keywordsData }}
            </router-link>
          </li>
        </ul>
      </div>
      <div class="search-wrap">
          <div class="search-wrap-title">
              <div class="title">热门搜索</div>
          </div>
          <ul class="search-list">
              <li>手机</li>
              <li>手机</li>
              <li>手机</li>
              <li>手机</li>
              <li>手机</li>
              <li>手机</li>
              <li>手机</li>
              <li>手机</li>
          </ul>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import Footer from "@/components/Footer"
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
      Footer,
  },
  data() {
    //这里存放数据
    return {
      keywords: "",
    };
  },
  //监听属性 类似于data概念
  computed: {
      keywordsDatas(){
          return this.$store.state.searchKeywords;
      }
  },
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    searchKeywords() {
      if (this.keywords) {
        this.$store.commit("searchKeywords", this.keywords);
        this.$router.push("/searchlist?keywords=" + this.keywords);
      }
    },
    deleKeywords(){
        this.$store.commit("deleKeywords")
    }
  },
  beforeCreate() {}, //生命周期 - 创建之前
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  beforeMount() {}, //生命周期 - 挂载之前
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang="less">
    .search-content{
        margin: 0rem 0 5rem 0;
        .search-wrap{
            width:100%;
            margin: 0 1rem;
            width:calc(100% - 2rem);
            .search-wrap-title{
                height:4.4rem;
                display: flex;
                justify-content: space-between;
                align-items: center;
                font-size: 1.4rem;
            }
            .search-list{
                display:flex;
                flex-wrap: wrap;
                li{
                    width: 20%;
                    border: 1px solid #efefef;
                    background: #fff;
                    height: 3rem;
                    text-align: center;
                    line-height:3rem;
                    margin: 1% 2.5%;
                    box-sizing: border-box;
                }
            }
        }
    }
</style>