<!--  -->
<template>
  <div class="hometour">
    <div class="tour-box">
      <h2>拼团专区</h2>
      <h6>拼着买更实惠</h6>
      <i class="iconfont icon-jiantou2"></i>
    </div>
    <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide v-for="(tourUl, index) in tourUls" :key="index">
        <div class="tour-conte">
          <div class="image">
            <img :src="tourUl.tourUlimg" alt="" />
          </div>
          <p>{{ tourUl.tourTitle }}</p>
          <h3>{{ tourUl.rulingPrice }}</h3>
          <h6>{{ tourUl.originalPrice }}</h6>
        </div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
// import Vue from "vue"
// import Vueswiper from "VueAwesomeSwiper"

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    //   Vueswiper,
  },
  data() {
    //这里存放数据
    return {
      swiperOptions: {
        slidesPerView: 3,
        spaceBetween: 12,
        // Some Swiper option/callback...
      },
      tourUls: [
        {
          tourUlimg:
            "https://img14.360buyimg.com/n1/s300x300_jfs/t1/107620/38/15906/368883/5eaf7085E3cc8d8ef/b2dac719f339e972.jpg?imageView2/2/format/webp",
          tourTitle:
            "摩飞（Morphyrichards）榨汁机 便携式充电迷你无线果汁机料理机随行杯MR9800 蓝色",
          rulingPrice: "￥159.00",
          originalPrice: "￥219.00",
        },
        {
          tourUlimg:
            "https://img14.360buyimg.com/n1/s300x300_jfs/t1/136701/21/7182/185568/5f3a3999Ee1709270/ee7d949e815b844e.jpg?imageView2/2/format/webp",
          tourTitle:
            "小熊（Bear）烤面包机多士炉三明治机电饼铛电热锅电火锅电蒸锅多功能早餐机 DSL-A13F1",
          rulingPrice: "￥299.00",
          originalPrice: "￥349.00",
        },
        {
          tourUlimg:
            "https://img14.360buyimg.com/n1/s300x300_jfs/t1/144172/36/2269/491991/5f02ded8E6f1c9bc1/31abed8d1fa7d815.jpg?imageView2/2/format/webp",
          tourTitle:
            "海氏海诺 75%酒精湿巾 一次性消毒酒精棉片大号 单片独立包装 18*15cm*50片 便携小包装免",
          rulingPrice: "￥19.00",
          originalPrice: "￥25.80",
        },
        {
          tourUlimg:
            "https://x.dscmall.cn/storage/images/201809/thumb_img/0_thumb_G_1536617317847.jpg?imageView2/2/format/webp",
          tourTitle:
            "WMNS Air Jordan 13 aj13 鳄鱼皮纹理 女鞋篮球鞋 - AQ1757 004",
          rulingPrice: "￥1100.00",
          originalPrice: "￥1200.00",
        },
        {
          tourUlimg:
            "https://x.dscmall.cn/storage/data/gallery_album/113/thumb_img/113_thumb_G_1588096566135.jpg?imageView2/2/format/webp",
          tourTitle: "雅漾活泉喷雾*2",
          rulingPrice: "￥50.00",
          originalPrice: "￥150.00",
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
};
</script>
<style lang="less">
.hometour {
  width: 96%;
  height: 25rem;
  margin-top: 1.5rem;
  margin-left: 2%;
  border: 1px solid #efefef;
  border-radius: 1rem;
  .tour-box {
    width: 100%;
    height: 5rem;
    border-bottom: 1px solid #efefee;
    display: flex;
    align-items: center;
    h2 {
      font-size: 1.8rem;
      margin-left: 1rem;
      font-weight: 1000;
    }
    h6 {
      font-size: 1.4rem;
      margin-left: 1rem;
      font-weight: 400;
      color: #999;
    }
    i {
      color: red;
    }
  }
  .tour-conte {
    width: 100%;
    float: left;
    margin-top: 1.5rem;
    .image {
      width: 100%;
      img {
        width: 100%;
      }
    }
    P {
      width: 100%;
      height: 2rem;
      overflow: hidden;
    }
    h3,
    h6 {
      width: 100%;
      text-align: center;
    }
    h3 {
      font-size: 1.6rem;
      color: red;
    }
    h6 {
      font-size: 1.2rem;
      text-decoration: line-through;
      font-weight: 400;
      color: #999;
    }
  }
}
</style>