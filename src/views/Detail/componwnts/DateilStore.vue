<!-- 旗舰店 -->
<template>
  <div class="dateil-store">
    <div class="details">
      <div class="image">
        <img
          src="https://x.dscmall.cn/storage/images/seller_imgs/seller_logo/logo_thumb/1598316246303568918.jpg"
          alt=""
        />
      </div>
      <div class="detail">
        <h3>创造旗舰店 <i class="iconfont icon-dianpu"></i></h3>
        <p>已有12人关注</p>
      </div>
      <div class="btn">
          <button>未关注</button>
      </div>
    </div>
    <div class="evaluate">
      <ul>
        <li>商品5分<span>高</span></li>
        <li>服务5分<span>高</span></li>
        <li>时效5分<span>高</span></li>
      </ul>
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
.dateil-store {
  width: 100%;
  height: 10rem;
  background: #fff;
  margin-top: 9rem;
  .details {
    width: calc(100% - 2rem);
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    .image {
        flex: 1.1;
        border: 1px solid #efefef;
        text-align: center;
      img {
        width: 5.2rem;
        height: 5.2rem;
      }
    }
    .detail{
        flex:5;
        padding-left: 1rem;
        h3{
            font-size: 1.6rem;
            font-weight: normal;
            i{
                color:red;
            }
        }
        p{
            margin-top:1rem;
            font-size:1.2rem;
            color:#999;
        }
    }
    .btn{
        flex:1;
        button{
            width:5rem;
            margin-top: 1.5rem;
            background:#fff;
            border: 1px solid #f00;
            border-radius: 1rem;
            height:2rem;
            color:#f00;

        }
    }
  }
  .evaluate{
      width:100%;
    //   margin-top: 1rem;
      ul{
          width: calc(100% - 2rem);
          padding:0 1rem;
          display: flex;
          justify-content: space-between;
          li{
              display:flex;
              text-align:center;
              span{
                  display:block;
                  width:1.5rem;
                  height: 1.5rem;
                  background: rgb(0, 255, 0);
                  color: #fff;
                  border-radius: 50%;
                  margin-left:.3rem;
              }
          }
      }
  }
}
</style>