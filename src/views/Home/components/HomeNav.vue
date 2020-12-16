<!--  -->
<template>
  <div class="home-nav">
    <ul class="nav-ul">
      <li>
        <img
          src="https://x.dscmall.cn/storage/assets/admin/images/custom_jump_logo.png"
          alt=""
        />
          <span class="spa"></span>
      </li>
      <li>
        <img
          src="https://x.dscmall.cn/storage/assets/admin/images/kefu_logo.png"
          alt=""
        />
      </li>
      <li>
        <img src="https://x.dscmall.cn/static/dist/img/03-share.png" alt="" />
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
  data() {
    //这里存放数据
    return {};
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
  mounted() {},
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang="less">

.home-nav {
  width: 5.8rem;
  height: 17rem;
  position: fixed;
  bottom: 15rem;
  right: 1rem;
  z-index: 999;
  .nav-ul {
    width: 100%;
    .spa {
      display: block;
      width: 5.2rem;
      height: 5.2rem;
      position: absolute;
      top: 0;
      left: 0.3rem;
      background: rgba(255, 100, 0, 0.3);
      z-index: -1;
      border-radius: 50%;
      animation: myfames 2s infinite;
    }
    img {
      width: 100%;
    }
  }
}
@keyframes myfames {
    0%{
       transform: scale(1);
    }
    100%{
        transform: scale(1.3);
    }
}
</style>