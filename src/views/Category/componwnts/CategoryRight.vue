<!-- 分类右边 -->
<template>
  <div class="category-right" id="wrapper">
    <div class="content"  :class="{top:this.$store.state.top_flag}">
      <div class="image">
        <img :src="this.$store.state.ad" alt="" />
      </div>
      <ul>
        <li v-for="categoryRightData in categoryRightDatas" :key="categoryRightData.cat_id">
          <h2>-{{ categoryRightData.cat_name }}-</h2>
          <ul>
            <li v-for="category in categoryRightData.child" :key="category.cat_id">
             <router-link :to="'/categorylist/'+category.cat_id">
              <img :src="category.touch_icon" alt="" />
              <p>{{ category.cat_name }}</p>
             </router-link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import BScroll from "better-scroll";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  props: {
    categoryRightDatas: Array,
  },
  data() {
    //这里存放数据
    return {
      rightScroll: null,
      scrollTop: 0,
      oHeight: 0,
      arr: ["858", "6", "8", "3", "4", "5", "860"],
      index: 0,
      // flag:false,
    };
  },
  watch:{
    
  },
  methods: {
    scrollPage() {
      this.rightScroll = new BScroll("#wrapper", {
        pullUpLoad: true,
        scrollbar: false,
        pullDownRefresh: true,
        click:true
      });
      // console.log(this.rightScroll.on)
      // this.rightScroll.on("scroll", (obj) => {
      //   this.scrollTop = Math.abs(obj.y);
      //   let dom = document.querySelector(".content");
      //   if (dom) {
      //     this.oHeight = dom.scrollHeight - document.querySelector("#wrapper").offsetHeight;
      //   }
        // if (this.scrollTop > this.oHeight + 100) {
        //   let index = this.arr.findIndex((val) => {
        //     return val == this.$store.state.cat_id;
        //   });
        //   this.$store.dispatch("actChangeCategoryRight", this.arr[index]);
        //   console.log(this.$store.state.cat_id);
        // }
      // });
    },
  },
  mounted(){
    this.$store.state.top_flag
  },
  updated() {
    this.$nextTick(() => {
      // console.log(123456);
      this.scrollPage();
    });
  },
};
</script>
<style lang="less">
.category-right {
  width: 80%;
  background: #fff;
  padding-top: 0.5rem;
  .top{
    transform:translateY(0) !important;
  }
  .image {
    width: 90%;
    margin-left: 5%;
    img {
      width: 100%;
    }
  }
  ul {
    width: 100%;
    li {
      text-align: center;
      h2 {
        font-size: 1.4rem;
        font-weight: 400;
      }
      ul {
        width: 92%;
        margin-left: 4%;
        display: flex;
        flex-wrap: wrap;
        margin-top: 1rem;
        li {
          width: 33%;
          height: 8.2rem;
          margin-bottom: 1rem;
        a{
          color: #999;
            img {
          width: 8.9rem;
            width: 5.3rem;
          }
          p {
            width: 100%;
            margin-top: 0.5rem;
          }
        }
        }
      }
    }
  }
}
</style>
