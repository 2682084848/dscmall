<!-- 商品分享 -->
<template>
  <div class="dateil-share">
    <div class="share-mask">
      <div class="wechat" @click="wechat">
        <i class="iconfont icon-weixin"></i>
        <p>分享给好友</p>
      </div>
      <div class="wechat-mask" v-if="wechatMask">
        <img src="@/assets/share-bg.png" alt="">
      </div>
      <div class="poster" @click="poster">
        <i class="iconfont icon-haibaofenxiang"></i>
        <p>生成海报</p>
      </div>
      <div class="poster-mask" v-if="postermask">
        <div class="mask-cont">
          <canvas ref="mycanvas"></canvas>
        </div>
      </div>
    </div>
    <div class="off" @click="off">
      <i class="iconfont icon-round_delete"></i>
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
      wechatMask:false,
      postermask:false
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    off() {
      this.wechatMask = false;
      this.postermask = false;
      this.$store.state.shareMask = false;
    },
    wechat(){
      this.wechatMask = true;
    },
    poster(){
      this.postermask = true;
    },
  },
  beforeCreate() {}, //生命周期 - 创建之前
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  beforeMount() {}, //生命周期 - 挂载之前
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    // console.log(window.scrollY);
  },
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang="less">
.dateil-share {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
  background: rgba(0, 0, 0, 0.6);
  .off {
    position: absolute;
    right: 2rem;
    top: 2rem;
    color: #fff;
    i {
      font-size: 2rem;
    }
  }
  .share-mask {
    width: 100%;
    height: 10rem;
    background: #fff;
    position: fixed;
    left: 0;
    bottom: 0;
    display: flex;
    text-align: center;
    justify-content: space-between;
    align-items: center;
    font-size: 1.6rem;
    .wechat-mask{
      width:100%;
      height:100%;
      position:fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 999;
      img{
        width: 100%;
      }
    }
    .poster-mask{
      width:100%;
      height:100%;
      position: fixed;
      top: 0;
      left:0;
      right:0;
      bottom:0;
      background:rgba(0, 0, 0, 0.6);
      z-index:999;
      // display: flex;
      // justify-content: center;
      // align-items: center;
      .mask-cont{
        width:80%;
        height:80%;
        background:#fff;
        margin: 20% 0 0 10%;
      }
    }
    div {
      flex: 1;
      i {
        font-size: 3rem;
        background: #0f0;
        color: #fff;
      }
    }
  }
}
</style>