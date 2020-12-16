<!--  -->
<template>
  <div class="">
    <HomeHeader v-if="true" />
    <div class="navbar">
      <ly-tab v-model="selectedId" :items="items" :options="options" @change="changeTab"> </ly-tab>
      <div class="category-but">
        <i class="iconfont icon-fenlei"></i>
        <span>分类</span>
      </div>
    </div>
      <div class="mask" v-if="indexMask!='/home/index'||  !tient"></div>
    <div>
        <router-view ></router-view>
    </div>
    <Footer />
    <HomeNav />
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import Footer from "../../components/Footer";
import HomeHeader from "./components/HomeHeader";
import HomeNav from "./components/HomeNav"
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    Footer,
    HomeHeader,
    HomeNav,
  },
  data() {
    //这里存放数据
    return {
      selectedId: 0,
      items: [
        { label: "首页" },
        { label: "家用电器",url:"/visual/visual_second_category",cat_id:858 },
        { label: "男装女装" },
        { label: "鞋靴箱包" },
        { label: "手机数码" },
        { label: "电脑办公" },
        { label: "家居家纺" },
        { label: "个人化妆" },
      ],
      options: {
        activeColor: "#fff",
        // 可在这里指定labelKey为你数据里文字对应的字段名
      },
       routerDatas: [
        "/home/index",
        "/home/household",
        "/home/clothing",
        "/home/shoebag",
        "/home/mobilephones",
        "/home/computer",
        "/home/hometextiles",
        "/home/personalmakeup",
      ],
      indexColor:[{
        background:"red"
      }],
      indexMask:'/home/index',
      tient:true
     
    };
  },

  methods:{
    changeTab(item,index){
      this.$router.push(this.routerDatas[index]);
      this.indexMask = this.$route.path;
    },
  },
  mounted(){
    if(this.$route.path !='/home/index'){
      this.$router.push("/home/index")
    }
  },
  beforeUpdate(){
      this.indexMask = this.$route.path;
  }

 
};
</script>
<style lang="less">
.navbar {
  width: 100%;
  height: 4.4rem;
  position: fixed;
  top: 5rem;
  left: 0;
  z-index: 99;
  display: flex;
  justify-content: center;
  align-items: center;
  .ly-tab {
    width: 85%;
    .ly-tabbar {
      background: transparent;
      border-bottom: 0px solid rgba(0, 0, 0, 0);
      box-shadow: 0 0px 0px 0px rgba(0, 0, 0, 0);
      //   color: #efefef;
      a{
          color:#fff;
      }
    }
  }
  .category-but {
    width: 15%;
    height: 4.8rem;
    background: transparent;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top:.4rem;
    font-size: 1.6rem;
    color:#fff;
    i{
        font-size:2.5rem;
        box-shadow: -6px 0 4px -4px rgba(0, 0, 0, 0.4);
    }

  }
}
.mask{
  width: 100%;
  height:10rem;
  background:red;
  position: fixed;
  top: 0;
  left:0;
  z-index:9;
}
</style>