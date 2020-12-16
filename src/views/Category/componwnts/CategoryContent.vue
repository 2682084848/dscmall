<!-- 分类内容 -->
<template>
  <div class="category-content">
    <CategoryLeft :categoryLeftDatas="categoryLeftDatas" />
    <div v-if="showloading">
    <Loading />
    </div>
    <CategoryRight v-else :categoryRightDatas="categoryRightDatas" />
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import CategoryLeft from "./CategoryLeft";
import CategoryRight from "./CategoryRight";
import Loading from "@/components/Loading"
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    CategoryLeft,
    CategoryRight,
    Loading,
  },
  data() {
    //这里存放数据
    return {};
  },
  //监听属性 类似于data概念
  computed: {
    categoryLeftDatas() {
    //   console.log(this.$store.state.categoryLeftDatas);
    //   console.log(this.$store.state);
      return this.$store.state.categoryLeftDatas;
    },
    categoryRightDatas() {
      return this.$store.state.categoryRightDatas;
    },
    showloading(){
      return this.$store.state.showloading;
    }
  },
  created() {

  },
  mounted() {
    this.$store.dispatch("actChangeCategoryLeft");
    this.$store.dispatch("actChangeCategoryRight", "858");
  },
};
</script>
<style lang="less">
.category-content {
  margin: 4.4rem 0 5rem 0;
  display: flex;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: calc(100% - 9.3rem);
  overflow: hidden;
}
</style>