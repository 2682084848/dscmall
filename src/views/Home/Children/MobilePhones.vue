<!--  -->
<template>
  <div class="MobilePhones-content">
    <ul class="house-category">
      <li v-for="(CategoryList, index) in CategoryLists" :key="index">
        <div class="image">
          <img :src="CategoryList.touch_icon" alt="" />
        </div>
        <p>{{ CategoryList.cat_name }}</p>
      </li>
    </ul>
    <div class="house-brand">
      <h2>品牌精选</h2>
      <ul>
        <li v-for="(BrandLsit, index) in BrandLsits" :key="index">
          <img :src="BrandLsit.brand_logo" alt="" />
          <p>{{ BrandLsit.brand_name }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
// 手机数码
// /api/visual/visual_second_category?cat_id=3
import { getHomeList1 } from "@/api/api";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      BrandLsits: [],
      CategoryLists: [],
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {},
  beforeCreate() {}, //生命周期 - 创建之前
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  beforeMount() {}, //生命周期 - 挂载之前
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    getHomeList1({ cat_id: 3 }).then((res) => {
      this.BrandLsits = res.data.brand;
      this.CategoryLists = res.data.category;
    });
  },
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang="less">
.MobilePhones-content {
  margin-top: 12rem;
  .house-category {
    width: 94%;
    margin-left: 3%;
    // height: 12rem;
    display: flex;
    // justify-content: center;
    background: #fff;
    border-radius: 1rem;
    overflow: hidden;
    li {
      .image {
        width: 100%;
        img {
          width: 7rem;
        }
      }
      P {
        text-align: center;
        margin-top: 1rem;
      }
    }
  }
  .house-brand {
    width: 94%;
    margin-left: 3%;
    // height: 30rem;
    background: #fff;
    margin-top: 1.5rem;
    border-radius: 1rem;
    h2 {
      width: 100%;
      margin-left: 1rem;
      font-size: 1.6rem;
      margin-top: 1rem;
    }
    ul {
      width: 100%;
      display: flex;
    //   justify-content: center;
      flex-wrap: wrap;
      margin-top: 1rem;
      li {
        width: 25%;
        height: 9rem;
        img {
          width: 100%;
        }
        p {
          text-align: center;
        }
      }
    }
  }
}
</style>