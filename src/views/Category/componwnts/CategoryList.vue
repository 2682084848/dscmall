<!-- 商品详情 -->
<template>
  <div class="category-list" :style="{height:oH}" v-infinite-scroll="loadMore">
      <CategoryHeader :showhide="showhide" />
    <div class="category-list-top">
      <ul :class="{ listtop: flag }">
        <li @click="sortZonghe" :class="{ active: activetab0 }">
          综合
          <i
            class="iconfont"
            :class="activetab00 ? 'icon-iconfontjiantou' : 'icon - jiantou'"
          ></i>
        </li>
        <li @click="sortNew" :class="{ active: activetab1 }">新品</li>
        <li @click="sortSale" :class="{ active: activetab2 }">销量</li>
        <li @click="sortPrice" :class="{ active: activetab3 }">
          价格
          <i
            class="iconfont"
            :class="activetab11 ? 'icon-iconfontjiantou' : 'icon-jiantou'"
          ></i>
        </li>
        <div @click="showMask = !showMask">筛选</div>
         <transition name="hg" v-if="showMask">
            <div class="sizer-mack">
            <h3>自营产品</h3>
            <h2>
              <div>仅看有货</div>
              <div>促销</div>
            </h2>
            <div>
              <p>价格区间</p>
              <form action="">
                <input type="text" v-model="min" placeholder="最低价">
                -
                <input type="text" v-model="max" placeholder="最高价">
              </form>
            </div>
            <p>
              <span>品牌</span>
              <i class="iconfont icon-jiantou2"></i>
            </p>
            <div class="mack-btn">
              <button class="close" @click="showMask = !showMask">关闭</button>
              <button class="confirm" @click="koFn">确定</button>
            </div>
          </div>
          </transition>
      </ul>
    </div>
    <div
      :class="
        this.$store.state.toggleStyle ? 'category-list-content' : 'content2'
      "
    >
      <ul ref="listwrap">
        <li v-for="(CategoryList, index) in actChangeCategoryList" :key="index">
         <router-link :to="'/goods/show/'+CategoryList.goods_id">
            <img :src="CategoryList.goods_thumb" alt="" />
          <div>
            <p>{{ CategoryList.goods_name }}</p>
            <h4>{{ CategoryList.shop_price }}</h4>
            <div>
              <span>进店</span>
              <h6>{{ CategoryList.sales_volume }}人已购买</h6>
              <i class="iconfont icon-gouwuche"></i>
            </div>
          </div>
         </router-link>
        </li>
      </ul>
      <!-- <div v-if="nomore">真的没有了</div> -->
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import CategoryHeader from "./CategoryHeader";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    CategoryHeader,
  },
  data() {
    //这里存放数据
    return {
      cid: 1131,
      size: 10,
      page: 1,
      sort: "goods_id",
      order: "desc",
      min: "",
      max: "",
      flag: false,
      activetab0: true,
      activetab1: false,
      activetab2: false,
      activetab3: false,
      activetab00: true,
      activetab11: true,
      showhide: true,
      showMask:false,
      oH:0,
    };
  },
  //监听属性 类似于data概念
  computed: {
    actChangeCategoryList() {
      return this.$store.state.categoryListDatas;
    },
    // nomore(){
    //   // return this.$store.state.nomore
    // }
  },
  //监控data中的数据变化
  watch: {
    cid:function(){
      this.$store.state.categoryListDatas = [];
    }
  },
  //方法集合
  methods: {
    reqDatas() {
      let params = {
        url: "/catalog/goodslist",
        params: {
          cat_id: this.cid,
          size: this.size,
          page: this.page,
          sort: this.sort,
          order: this.order,
          min: this.min,
          max: this.max,
        },
        type: "post",
      };
      this.$store.dispatch("actChangeCategoryList", params);
    },
    sortZonghe() {
      this.activetab0 = true;
      this.activetab1 = false;
      this.activetab2 = false;
      this.activetab3 = false;
      this.activetab11 = true;
      this.activetab00 = !this.activetab00;
      if (!this.activetab00) {
        this.order = "asc";
        this.reqDatas();
      } else {
        this.order = "desc";
        this.reqDatas();
      }
    },
    sortNew() {
      this.activetab0 = false;
      this.activetab1 = true;
      this.activetab2 = false;
      this.activetab3 = false;
      this.activetab00 = true;
      this.activetab11 = true;
      this.sort = "last_update";
      this.order = "desc";
      this.reqDatas();
    },
    sortSale() {
      this.activetab0 = false;
      this.activetab1 = false;
      this.activetab2 = true;
      this.activetab3 = false;
      this.activetab00 = true;
      this.activetab11 = true;
      this.sort = "sales_volume";
      this.order = "desc";
      this.reqDatas();
    },
    sortPrice() {
      this.activetab0 = false;
      this.activetab1 = false;
      this.activetab2 = false;
      this.activetab3 = true;
      this.activetab11 = !this.activetab11;
      this.activetab00 = false;
      if (!this.activetab11) {
        this.sort = "shop_price";
        this.order = "desc";
        this.reqDatas();
      } else {
        this.sort = "shop_price";
        this.order = "asc";
        this.reqDatas();
      }
    },
    koFn(){
       this.reqDatas();
       this.showMask = !this.showMask
    },
    loadMore(){
      console.log(11);
      this.reqDatas();
      this.page++;
    }
  },
  beforeCreate() {}, //生命周期 - 创建之前
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  beforeMount() {}, //生命周期 - 挂载之前
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    let cid = this.$route.params.cid;
    this.cid = cid;
  },
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {
    this.oH = this.$refs.listwrap.offsetHeight+"px"
  }, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang="less">
a{
  color:#999;
}
.hg-enter-active,
.hg-leave-active{
  transition: all 0.5s linear;
}
.hg-enter,
.hg-leave-to{
  transform: translateX(100%);
}
.category-list {
  width: 100%;
  // background: #efefef;
  .active {
    color: red;
  }
  .category-list-top {
    margin-top: 4.5rem;
    .listtop {
      position: fixed;
      top: 4.4rem;
      left: 0;
    }
    .sizer-mack{
      width:100%;
      height:100%;
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: #efefef;
      h3{
        width:100%;
        height:5rem;
        background:#fff;
        font-size:1.8rem;
        font-weight: normal;
        text-align: left;
      }
      h2{
        width:100%;
        height:5rem;
        margin-top:2rem;
        background: #fff;
        div{
          width:10rem;
          height:3rem;
          background:#efefef;
          float: left;
          line-height: 3rem;
          margin-left: 2rem;
          margin-top:1rem;
          font-size: 1rem;
          font-weight: normal;
        }
      }
      div{
        background:#fff;
        height:13rem;
        margin-top:2rem;
        p{
          width:100%;
          padding-left: 1rem;
          font-size: 1.6rem;
          height:5rem;
          border-bottom: 1px solid #efefef;
          text-align: left;
          line-height:5rem;
        }
        form{
          width:100%;
          margin-top:2rem;
          input{
            width:12rem;
            height:5rem;
            background:#efefef;
            text-align: center;
          }
        }
      }
      p{
        width:100%;
        height:5rem;
        background:#fff;
        margin-top:2rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 1.4rem;
        padding: 0 1rem;
        width:calc(100% - 2rem);
      }
      .mack-btn{
        width:100%;
        height:5rem;
        background:#fff;
        position: absolute;
        bottom:0;
        left: 0;
        display: flex;
        button{
          flex: 1;
          font-size: 1.6rem;
        }
        .close{
          background:#fff;
        }
        .confirm{
          background: #e93b3d;
          color: #fff;
        }
      }
    }
    ul {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 3.6rem;
      li,
      div {
        flex: 1;
        text-align: center;
        height: 3.6rem;
        line-height: 3.6rem;
        background: #fff;
      }
    }
  }
  .category-list-content {
    width: 100%;
    ul {
      width: 94%;
      margin-left: 3%;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      margin-top: 1rem;
      li {
        width: 48%;
        border: 1px solid #efefef;
        border-radius: 1rem;
        background: #fff;
        text-align: center;
        overflow: hidden;
        margin-top: 0.5rem;
        img {
          width: 17.8rem;
        }
        div {
          p {
            width: 90%;
            margin-left: 5%;
            height: 4rem;
            line-height: 2rem;
            overflow: hidden;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
          }
          h4 {
            color: red;
            text-align: left;
            padding-left: 7%;
            margin-top: 0.5rem;
            &::before {
              content: "￥";
            }
          }
          div {
            width: 90%;
            margin: 0.5rem 0;
            margin-left: 5%;
            display: flex;
            justify-content: space-between;
            span {
              display: block;
              width: 3.5rem;
              height: 2rem;
              border-radius: 0.5rem;
              background: rgba(255, 0, 0, 0.2);
              color: red;
            }
            h6 {
              font-weight: normal;
              color: #999;
              font-size: 1.2rem;
            }
            i {
              color: red;
            }
          }
        }
      }
    }
  }
  .content2 {
    width: 100%;
    ul {
      width: 94%;
      margin-left: 3%;
      li {
        width: 100%;
        background: #fff;
        margin-top: 1rem;
        border: 1px solid #efefef;
        border-radius: 1rem;
        overflow: hidden;
        display: flex;
        justify-content: space-between;
        img {
          flex: 1.5;
          width: 9rem;
          float: left;
          margin-right: 1rem;
        }
        div {
          flex: 3.5;
          margin-top: 0.5rem;
          p {
            width: 100%;
            font-size: 1.4rem;
            height: 4rem;
            line-height: 2rem;
            overflow: hidden;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
          }
          h4 {
            margin-top: 1rem;
            color: red;
            font-size: 1.4rem;
            &::before {
              content: "￥";
            }
          }
          div {
            width: 100%;
            margin-top: 1.5rem;
            display: flex;
            justify-content: space-between;
            span {
              display: block;
              width: 3.5rem;
              height: 2rem;
              border-radius: 0.5rem;
              background: rgba(255, 0, 0, 0.2);
              color: red;
              text-align: center;
            }
            h6 {
              font-weight: normal;
              color: #999;
              font-size: 1.2rem;
            }
            i {
              color: red;
              margin-right: 1rem;
            }
          }
        }
      }
    }
  }
}
</style>
