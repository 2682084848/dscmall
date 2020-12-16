<!-- 购物车选择 -->
<template>
  <div class="dateil-selected">
    <div class="selected" @click="handleClick">
      <p>已选：<span>{{num}}</span></p>
      <i class="iconfont icon-jiantou2"></i>
    </div>
    <mt-popup v-model="popupVisible" position="bottom">
      <div class="selected-mack">
        <div class="image">
          <img
            :src="SelectedData.goods_thumb"
            alt=""
          />
        </div>
        <div class="title">
          <p>
           {{SelectedData.goods_name}}
          </p>
          <h2>{{SelectedData.shop_price}}</h2>
          <h6>库存：<span>500</span></h6>
        </div>
        <div class="quantity">
          <p>数量：</p>
          <div class="quantity-input">
            <button class="left" @click="jia">+</button>
            <input type="text" v-model.number="num">
            <button class="right" @click="jian">-</button>
          </div>
        </div>
        <div class="mack-btm">
          <button class="cancel" @click="cancel">取消</button>
          <button class="ok" @click="ok">确定</button>
        </div>
      </div>
    </mt-popup>
    <div class="discussion">
      <p>网友讨论圈</p>
      <i class="iconfont icon-jiantou2"></i>
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
      popupVisible: false,
      num:1,
    };
  },
  //监听属性 类似于data概念
  computed: {
    SelectedData(){
      return this.$store.state.dateilSwipe
    },
    dateilNum(){
      return this.$store.state.DateilNum
    }
  },
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    jian(){
      console.log(this.SelectedData);
      if(this.num > 1){
        this.num--;
      }else{
        alert("商品不能在少了");
        this.num = 1;
      }
    },
    jia(){
      this.num++;
    },
    handleClick(){
      this.popupVisible = true;
    },
    cancel(){
      this.popupVisible = false;
      // this.num = 1;
    },
    ok(){
      this.popupVisible = false;
      
      var isCart =  this.$store.state.cartDatas.find((item)=>{
        console.log(item);
        if(item.goods_id == this.SelectedData.goods_id){
          item.quantity = item.quantity + this.num;
        }
        return item.goods_id == this.SelectedData.goods_id;
      })
      // console.log(isCart);
     if(!isCart){
       var shoppings = {
        goods_id:this.SelectedData.goods_id,
        goods_thumb:this.SelectedData.goods_thumb,
        goods_name:this.SelectedData.goods_name,
        shop_price:this.SelectedData.shop_price,
        quantity:1,
        isSelect:true
      }
     }
      // console.log(shoppings);
      this.$store.commit("changShoppings",shoppings);
      this.$store.state.DateilNum = this.num;
    }
  },
  beforeCreate() {}, //生命周期 - 创建之前
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  beforeMount() {}, //生命周期 - 挂载之前
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    this.num = this.dateilNum;
  },
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang="less">
.dateil-selected {
  width: 100%;
  height: 5rem;
  background: #fff;
  font-size: 1.4rem;
  padding: 0 1rem;
  width: calc(100% - 2rem);
  line-height: 5rem;
  margin-top: 2rem;
  .selected,.discussion {
    display: flex;
    justify-content: space-between;
    p {
      color: #999;
    }
  }
  .discussion{
    width: calc(100% + 2rem);
    height:5rem;
    margin-top: 2rem;
    background:#fff;
    margin-left:-1rem;

  }
}
.mint-popup-bottom {
  width: 100%;
  border-radius: 3rem 3rem 0 0;
  background: #fff;
  height: 23rem;
  .selected-mack {
    width: calc(100% - 4rem);
    padding: 0 2rem;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    line-height: 2rem;
    .image {
      width: 9.2rem;
      height:9.2rem;
      position: relative;
      img {
        width: 9.2rem;
        position: absolute;
        top: -3rem;
        left: 0;
        border-radius: 1rem;
      }
    }
    .title {
      width: calc(100% - 11.2rem);
      margin-top: 1rem;
      margin-left: 2rem;
      p {
        width: 100%;
        height: 4rem;
        overflow: hidden;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
      }
      h2 {
        color: red;
        font-size: 1.4rem;
        &::before {
          content: "￥";
        }
      }
      h6 {
        font-size: 1.2rem;
        font-weight: normal;
      }
    }
    .quantity{
      height: 5rem;
      display:flex;
      justify-content: space-between;
      padding: 0 1rem;
      width:calc(100% - 2rem);
      margin-top:2rem;
      width: 100%;
      .quantity-input{
        display:flex;
        text-align: center;
        .left,.right{
          width:2rem;
          height: 2rem;
          background:#efefef;
          border:1px solid #efefef;
        }
        input{
          width: 4rem;
          height: 2rem;
          border:1px solid #efefef;
          text-align: center;
        }
      }
    }
    .mack-btm{
      width: 100%;
      height:5rem;
      display:flex;
      button{
        flex:1;
        color:#fff;
        font-size:1.4rem;
      }
      .ok{
        background:red;
      }
      .cancel{
        background:#fba534;
      }
    }
  }
  
}
</style>