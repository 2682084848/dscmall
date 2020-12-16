<!-- 分类左边 -->
<template>
  <div class="CategoryLeft">
    <ul>
      <li
        :class="{ active: catId == categoryLeftData.cat_id }"
        v-for="categoryLeftData in categoryLeftDatas"
        :key="categoryLeftData.cat_id"
        @click="changeTad(categoryLeftData.cat_id)"
      >
        {{ categoryLeftData.cat_name }}
      </li>
    </ul>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  props: {
    categoryLeftDatas: Array,
  },
  data() {
    //这里存放数据
    return {};
  },
  methods: {
    changeTad(cat_id) {
      this.$store.state.top_flag = true;
      console.log(cat_id)
      this.cat_id = cat_id;
      this.$store.dispatch("actChangeCategoryRight", cat_id);
      this.$store.state.top_flag = false
    },
  },
  computed: {
    catId() {
      return this.$store.state.cat_id;
    },
  },
  mounted() {
    // console.log(categoryLeftDatas);
  },
};
</script>
<style lang="less">
.CategoryLeft {
  height: 100%;
  background: #efefef;
  ul {
    width: 8.4rem;
    li {
      height: 3.4rem;
      text-align: center;
      line-height: 3.4rem;
      font-size: 1.4rem;
    }
    .active {
      color: red;
      background: #fff;
    }
  }
}
</style>