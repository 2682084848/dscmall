<!--  -->
<template>
  <div class="cart">
    <h1>购物车</h1>
    <div class="cart-content" v-if="cartData.length > 0">
      <div class="cartData" v-for="(cart, index) in cartData" :key="index">
        <div class="select" @click="changSelectStatus(cart, index)">
          <i class="iconfont icon-danxuankuang" v-if="!cart.isSelect"></i>
          <i
            class="iconfont icon-danxuankuangxuanzhong"
            v-else
            style="color: #f44"
          ></i>
        </div>
        <div class="cart-cont" @click="toDetail(cart.goods_id)">
          <div class="image">
            <img :src="cart.goods_thumb" alt="" />
          </div>
          <div class="message">
            <h5>
              {{ cart.goods_name }}
            </h5>
            <!-- <h6></h6> -->
            <div class="priceQuantity">
              <div class="cart-price">{{ cart.shop_price }}</div>
              <div class="quantity">
                <button @click.stop="jianCart(index)">-</button>
                <input type="text" v-model="cart.quantity" />
                <button @click.stop="addCart(index)">+</button>
                <i class="iconfont icon-shoucang1"></i>
                <i
                  class="iconfont icon-shanchu"
                  @click.stop="deleCart(index)"
                ></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="iconcart" v-else>
      <i class="iconfont icon-gouwuche"></i>
      <p>购物车空空的去 <span>买些什么</span> 吧？</p>
    </div>
    <div class="cartFooter" v-if="cartData.length > 0">
      <div class="check" @click="changeSelectAllStatus">
        <i class="iconfont icon-danxuankuang" v-if="!selectAll"></i>
        <i class="iconfont icon-danxuankuangxuanzhong" v-else></i>
        <span>全选</span>
      </div>
      <div class="total">
        <div class="totalPrice">
          <p>
            合计：<span>{{ total.toFixed(2) }}</span>
          </p>
          <h6>(不含运费，以节省￥0.00)</h6>
        </div>
        <button>
          去结算<span>({{ count }})</span>
        </button>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import Footer from "../../components/Footer";
import { mapMutations } from "vuex";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    Footer,
  },
  data() {
    //这里存放数据
    return {};
  },
  //监听属性 类似于data概念
  computed: {
    cartData() {
      return this.$store.state.cartDatas;
    },
    selectAll() {
      let selectStatus = this.$store.state.cartDatas.every((item) => {
        return item.isSelect == true;
      });
      // console.log(selectStatus);
      return selectStatus;
    },
    total() {
      let totalPrice = 0;
      this.$store.state.cartDatas.map((item) => {
        if (item.isSelect) {
          totalPrice += item.quantity * item.shop_price;
        }
      });
      return totalPrice;
    },
    count() {
      let count = 0;
      this.$store.state.cartDatas.map((item) => {
        if (item.isSelect) {
          count += item.quantity;
        }
      });
      return count;
    },
  },
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    changSelectStatus(cart, index) {
      // console.log(cart);
      cart.isSelect = !cart.isSelect;
      // console.log(index);
      this.$store.commit("changSelectStatus", { cart, index });
    },
    changeNum() {
      this.$store.commit("changeNum");
    },
    ...mapMutations([
      "addCart",
      "jianCart",
      "deleCart",
      "changeSelectAllStatus",
    ]),
    toDetail(gid) {
      this.$router.push("/goods/show/" + gid);
    },
  },
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
.cart {
  width: 100%;
  h1 {
    width: 100%;
    text-align: center;
  }
  .iconcart {
    height: 30rem;
    background: #fff;
    width: calc(100% - 2rem);
    text-align: center;
    margin-top: 2rem;
    margin-left: 1rem;
    color: #999;
    i {
      font-size: 14rem;
    }
    p {
      font-size: 1.4rem;
      span {
        color: red;
      }
    }
  }
  .cartData {
    width: calc(100% - 3rem);
    display: flex;
    justify-content: center;
    text-align: center;
    height: 7rem;
    margin-left: 1rem;
    margin-top: 2rem;
    background: #fff;
    padding: 1rem 0.5rem;
    border-radius: 1rem;
    .select {
      width: 5%;
      line-height: 7rem;
    }
    .cart-cont {
      width: 90%;
      display: flex;
      justify-content: center;
      margin-left: 1rem;
      .image {
        img {
          width: 7rem;
          height: 7rem;
        }
      }
      .message {
        width: 100%;
        margin-left: 1rem;
        h5 {
          width: 100%;
          height: 3rem;
          overflow: hidden;
          font-size: 1.2rem;
          font-weight: normal;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }
      }
      .priceQuantity {
        width: 100%;
        display: flex;
        margin-top: 1.5rem;
        justify-content: space-between;
        height: 3rem;
        line-height: 3rem;
        .cart-price {
          width: 20%;
          color: red;
          font-size: 1.4rem;
          font-weight: 700;
          &::before {
            content: "￥";
          }
        }
        .quantity {
          width: 60%;
          button {
            width: 2rem;
            height: 2rem;
          }
          input {
            width: 4rem;
            height: 2rem;
            border: 1px solid #efefef;
            text-align: center;
          }
          i {
            margin-left: 1rem;
          }
        }
      }
    }
  }
  .cartFooter {
    width: 100%;
    height: 5rem;
    background: #fff;
    position: fixed;
    left: 0;
    bottom: 5rem;
    display: flex;
    justify-content: space-between;
    .check {
      width: 20%;
      height: 5rem;
    }
    .total {
      width: 80%;
      display: flex;
      justify-content: flex-end;
      // align-items: ;
      .totalPrice {
        font-size: 1.4rem;
        margin-right: 1rem;
        p {
          text-align: right;
          margin-top: 0.5rem;
          span {
            color: red;
            font-weight: 700;
            font-size: 1.6rem;
            &::before {
              content: "￥";
              font-size: 1.2rem;
            }
          }
        }
        h6 {
          margin-top: 0.5rem;
          color: #999;
          font-weight: normal;
        }
      }
      button {
        width: 10rem;
        height: 5rem;
        background: red;
        color: #fff;
        font-size: 1.6rem;
      }
    }
  }
}
</style>