<!--  -->
<template>
  <div class="homefalls">
    <Loading v-if="loadingIf" />
    <ul class="tabs">
      <li
        v-for="(titleDatas, index) in titleData"
        :key="index"
        @click="changeTab(index, titleDatas.type, titleDatas.url)"
      >
        <h2>{{ titleDatas.title }}</h2>
        <h5 :class="{ activat: titleIndex == index }">{{ titleDatas.tips }}</h5>
      </li>
    </ul>
    <ul class="falls" v-infinite-scroll="loadMore">
      <li v-for="(list, index) in listdatas" :key="index">
        <router-link :to="'/goods/show/'+list.goods_id">
          <img :src="list.goods_thumb" alt="" />
          <div>{{list.title}}</div>
          <p>{{ list.shop_price_formated }}</p>
        </router-link>
      </li>
    </ul>
    <div class="falls-loading" v-if="loa">
      <img src="@/assets/5-121204193R5-50.gif" alt="" />
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import Loading from "@/components/Loading";
import { getHomeList } from "@/api/api";

// console.log(getHomeList);
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    Loading,
  },
  data() {
    //这里存放数据
    return {
      loadingIf: false,
      loa: false,
      listdatas: [],
      titleIndex: 0,
      titleData: [
        {
          id: 1,
          title: "精选",
          tips: "为你推荐",
          type: "is_best",
          url: "/goods/type_list",
        },
        {
          id: 2,
          title: "社区",
          tips: "新奇好物",
          type: "",
          url: "/goods/type_list",
        },
        {
          id: 3,
          title: "新品",
          tips: "潮流上心",
          type: "is_new",
          url: "/goods/type_list",
        },
        {
          id: 4,
          title: "热卖",
          tips: "网络爆款",
          type: "is_hot",
          url: "/goods/type_list",
        },
      ],
      flag: false,
      page: 1,
      size: 10,
      type: "is_best",
      url: "/goods/type_list",
    };
  },

  methods: {
    async getBestDatas(url, page, size, type) {
      let result = await getHomeList(url, {
        page: page,
        size: size,
        type: type,
      });
      let resultArr = result.data;
      this.listdatas = this.listdatas.concat(resultArr);
      this.loadingIf = false;
      this.loa = false;
    },
    changeTab(index, type, url) {
      this.listdatas = [];
      this.page = 1;
      this.titleIndex = index;
      this.loadingIf = true;
      this.getBestDatas(url, this.page, this.size, type);
    },
    loadMore() {
      this.loa = true;
      this.getBestDatas(this.url, ++this.page, this.size, this.type);
    },
  },
  mounted() {
    this.loadingIf = true;
    this.getBestDatas(this.url, this.page, this.size, this.type);
  },
};
</script>
<style lang="less">
a{
  color:#999;
}
.homefalls {
  width: 100%;
  .tabs {
    width: 100%;
    height: 6rem;
    display: flex;
    justify-content: center;
    align-items: center;
    li {
      flex: 1;
      text-align: center;
      border-right: 1px solid #efefef;
      &:last-child {
        border-right: 0;
      }
      h2 {
        font-size: 1.6rem;
        margin-bottom: 0.3rem;
      }
      h5 {
        font-weight: 200;
      }
      .activat {
        color: #fff;
        width: 70%;
        margin-left: 15%;
        background: red;
        border-radius: 1rem;
      }
    }
  }
  .falls {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    li {
      width: 50%;
      text-align: center;
      margin-top: 1rem;
      background: #fff;
      img {
        width: 80%;
      }
      div {
        width: 80%;
        margin-left: 10%;
        height: 2rem;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
      p {
        color: red;
        font-weight: 700;
        text-align: left;
        padding-left: 10%;
      }
    }
  }
  .falls-loading {
    width: 100%;
    height: 8rem;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 4rem;
      height: 4rem;
    }
  }
}
</style>