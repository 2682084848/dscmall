<!-- 页面底部 -->
<template>
  <div class="dateil-footer">
    <ul>
      <li><i class="iconfont icon-xiaoxi"></i>客服</li>
      <li><i class="iconfont icon-shoucang1"></i>收藏</li>
      <li @click="tocart">
        <i class="iconfont icon-gouwuche"></i>购物车
        <p :class="{ 'daa-num': flag }">{{ dateilNums }}</p>
        <span>{{ dateilNum }}</span>
      </li>
    </ul>
    <button class="gou" @click="ok">加入购物车</button>
    <button class="mai">立即购买</button>
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
      flag: false,
      flagTimer: null,
      dateilNum: 1,
    };
  },
  //监听属性 类似于data概念
  computed: {
    SelectedData() {
      return this.$store.state.dateilSwipe;
    },
    dateilNums(){
      return this.$store.state.DateilNum
    }
  },
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    ok() {
      let num = this.$store.state.DateilNum;
      this.flag = true;
      this.flagTimer = setTimeout(() => {
        this.flag = false;
      }, 1000);
      let DateilNumdates = this.$store.state.cartDatas;
      let gid = this.$route.params.gid;
      for (let h of DateilNumdates) {
        if (h.goods_id == gid) {
          this.dateilNum = h.quantity +1;
        }
      }
      var isCart = this.$store.state.cartDatas.find((item) => {
        // console.log(item);
        if (item.goods_id == this.SelectedData.goods_id) {
          item.quantity = item.quantity + num;
        }
        return item.goods_id == this.SelectedData.goods_id;
      });
      // console.log(isCart);
      if (!isCart) {
        var shoppings = {
          goods_id: this.SelectedData.goods_id,
          goods_thumb: this.SelectedData.goods_thumb,
          goods_name: this.SelectedData.goods_name,
          shop_price: this.SelectedData.shop_price,
          quantity: 1,
          isSelect:true
        };
      }
      // console.log(shoppings);
      this.$store.commit("changShoppings", shoppings);
    },
    tocart() {
      this.$router.push("/carte");
    },
  },
  beforeCreate() {}, //生命周期 - 创建之前
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  beforeMount() {}, //生命周期 - 挂载之前
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    let DateilNumdates = this.$store.state.cartDatas;
    let gid = this.$route.params.gid;
    for (let h of DateilNumdates) {
      if (h.goods_id == gid) {
        this.dateilNum = h.quantity+1;
      }
    }
  },
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang="less">
.dateil-footer {
  width: 100%;
  height: 5rem;
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 99;
  background: #fff;
  display: flex;
  text-align: center;
  font-size: 1.4rem;
  ul {
    flex: 2;
    display: flex;
    li {
      flex: 1;
      color: #999;
      position: relative;
      i {
        font-size: 2rem;
        margin-top: 0.5rem;
        display: block;
      }
      .daa-num {
        position: absolute;
        top: 0;
        right: 50%;
        font-size: 1.6rem;
        font-weight: 700;
        &::before {
          content: "+";
        }
        color: red;
        opacity: 0;
        animation: moveNum 1s linear;
      }
      span {
        background: red;
        color: #fff;
        display: block;
        // width:1.5rem;
        padding: 0 0.3rem;
        height: 1.5rem;
        font-size: 1.2rem;
        position: absolute;
        top: 0;
        right: 1.4rem;
        border-radius: 50%;
      }
    }
  }
  button {
    flex: 1;
    color: #fff;
  }
  .gou {
    background: #f44;
  }
  .mai {
    background: #ff976a;
  }
  @keyframes moveNum {
    0% {
      top: 0;
      opacity: 0;
    }
    50% {
      top: -3rem;
      opacity: 1;
    }
    100% {
      top: -3rem;
      opacity: 0;
    }
  }
}
</style>