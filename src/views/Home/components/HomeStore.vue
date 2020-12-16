<!--  -->
<template>
  <div class="HomeStore">
    <div class="store-top">
      <h2>店铺推荐</h2>
      <h6>更多品质好店</h6>
      <i class="iconfont"></i>
    </div>
    <div class="swiper">
      <swiper ref="mySwiper" :options="swiperOptions">
        <swiper-slide v-for="(arrtitle, index) in teamgoodsArr" :key="index">
          <div class="swiper-box">
            <div class="image">
              <img :src="arrtitle.imgurl" alt="" />
            </div>
            <div class="swiper-cont">
              <div class="icon">
                <img :src="arrtitle.iconimgurl" alt="" />
              </div>
              <h3>{{ arrtitle.shopname }}</h3>
              <p>{{ arrtitle.goodsnum }}</p>
            </div>
          </div>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>

    <div class="store-bottom">
      <img
        src="https://x.dscmall.cn/storage/data/gallery_album/177/original_img/177_P_1597978468372.png"
        alt=""
      />
      <img
        src="https://x.dscmall.cn/storage/data/gallery_album/177/original_img/177_P_1597978469174.png"
        alt=""
      />
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
      swiperOptions: {
        slidesPerView: 3,
        spaceBetween: 10,
        // Some Swiper option/callback...
      },
      teamgoodsArr: [
        {
          imgurl:
            "https://x.dscmall.cn/storage/data/store_street/street_thumb/1595180901830760018.jpg?imageView2/2/format/webp",
          shopname: "普陀区 - 万卓旗舰店",
          goodsnum: "共计13件商品",
          iconimgurl:
            "https://x.dscmall.cn/storage/images/seller_imgs/seller_logo/logo_thumb/1536872208964241423.jpg?imageView2/2/format/webp",
        },
        {
          imgurl:
            "https://x.dscmall.cn/storage/data/store_street/street_thumb/1598316246456357634.jpg?imageView2/2/format/webp",
          shopname: "创造旗舰店",
          goodsnum: "共计62件商品",
          iconimgurl:
            "https://x.dscmall.cn/storage/images/seller_imgs/seller_logo/logo_thumb/1598316246303568918.jpg?imageView2/2/format/webp",
        },
        {
          imgurl:
            "https://x.dscmall.cn/storage/data/store_street/street_thumb/1598569068574637464.png?imageView2/2/format/webp",
          shopname: "大商创旗舰店",
          goodsnum: "共计32件商品",
          iconimgurl:
            "https://x.dscmall.cn/storage/images/seller_imgs/seller_logo/logo_thumb/1598552978820058889.jpg?imageView2/2/format/webp",
        },
        {
          imgurl:
            "https://x.dscmall.cn/storage/data/store_street/street_thumb/1490153973561051484.jpg?imageView2/2/format/webp",
          shopname: "绿联",
          goodsnum: "共计8件商品",
          iconimgurl:
            "https://x.dscmall.cn/storage/seller_imgs/seller_logo/logo_thumb/1490153973737916372.jpg?imageView2/2/format/webp",
        },
        {
          imgurl:
            "https://x.dscmall.cn/storage/data/store_street/street_thumb/1490159042324590344.jpg?imageView2/2/format/webp",
          shopname: "火影旗舰店",
          goodsnum: "共计9件商品",
          iconimgurl:
            "https://x.dscmall.cn/storage/images/seller_imgs/seller_logo/logo_thumb/1536715853568369409.jpg?imageView2/2/format/webp",
        },
        {
          imgurl:
            "https://x.dscmall.cn/storage/data/store_street/street_thumb/1490160857982584904.jpg?imageView2/2/format/webp",
          shopname: "全友家私",
          goodsnum: "共计10件商品",
          iconimgurl:
            "https://x.dscmall.cn/storage/seller_imgs/seller_logo/logo_thumb/1490160857517730247.jpg?imageView2/2/format/webp",
        },
        {
          imgurl:
            "https://x.dscmall.cn/storage/data/store_street/street_thumb/1490164131840670339.jpg?imageView2/2/format/webp",
          shopname: "三只松鼠",
          goodsnum: "共计18件商品",
          iconimgurl:
            "https://x.dscmall.cn/storage/seller_imgs/seller_logo/logo_thumb/1490164131319796209.jpg?imageView2/2/format/webp",
        },
        {
          imgurl:
            "https://x.dscmall.cn/storage/data/store_street/street_thumb/1490223011111438424.jpg?imageView2/2/format/webp",
          shopname: "美宝莲",
          goodsnum: "共计10件商品",
          iconimgurl:
            "https://x.dscmall.cn/storage/seller_imgs/seller_logo/logo_thumb/1490223011757388045.jpg?imageView2/2/format/webp",
        },
        {
          imgurl:
            "https://x.dscmall.cn/storage/data/store_street/street_thumb/1490223410708601451.jpg?imageView2/2/format/webp",
          shopname: "成人旗舰店",
          goodsnum: "共计9件商品",
          iconimgurl:
            "https://x.dscmall.cn/storage/seller_imgs/seller_logo/logo_thumb/1490223410993487191.jpg?imageView2/2/format/webp",
        },
        {
          imgurl:
            "https://x.dscmall.cn/storage/data/store_street/street_thumb/1490168617959840802.jpg?imageView2/2/format/webp",
          shopname: "韩都衣舍",
          goodsnum: "共计9件商品",
          iconimgurl:
            "https://x.dscmall.cn/storage/seller_imgs/seller_logo/logo_thumb/1490168617009737267.jpg?imageView2/2/format/webp",
        },
      ],
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
  mounted() {},
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang="less">
.HomeStore {
  width: 96%;
  height: 36rem;
  margin-left: 2%;
  border: 1px solid #efefef;
  border-radius: 1rem;
  margin-top: 1.5rem;
  background: #fff;
  .store-top {
    width: 100%;
    display: flex;
    height: 5rem;
    align-items: center;
    h2 {
      font-size: 1.8rem;
      font-weight: 700;
    }
    h6 {
      font-size: 1.2rem;
      font-weight: 400;
      color: #999;
      margin-left: 1rem;
    }
  }
  .swiper {
    width: 100%;
    height: 17rem;
    .swiper-box {
      width: 100%;
      .image {
        width: 100%;
        img {
          width: 100%;
          height: 8rem;
          border-radius: 1rem 1rem 0 0;
        }
      }
    }
    .swiper-cont {
      width: 100%;
      height: 9rem;
      position: relative;
      border: 1px solid #efefef;
      border-radius: 0 0 1rem 1rem;
      text-align: center;
      .icon {
        width: 3rem;
        height: 3rem;
        border-radius: 50%;
        overflow: hidden;
        position: absolute;
        top: -1.5rem;
        left: 50%;
        margin-left: -1.5rem;
        img {
          width: 100%;
        }
      }
      h3{
          width:100%;
          height: 2rem;
          margin-top: 2.5rem;
          font-size: 1.6rem;
          overflow: hidden;
      }
      p{
          font-size: 1.2rem;
          margin-top: 1rem;
      }

    }
  }
  .store-bottom {
    width: 100%;
    display: flex;
    margin-top: 1.5rem;
    img {
      width: 50%;
      margin-right: 1rem;
      width: calc(50% - 1rem);
    }
  }
}
</style>