<!--  -->
<template>
  <div class="home-header">
    <form action="">
      <input type="text" placeholder="搜索商品名称" @click="toSearch"/>
      <span>
        <i class="iconfont icon-sousuo"></i>
      </span>
    </form>
    <div>
      <i class="iconfont icon-xiaoxi"></i>
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
  methods:{
    toSearch(){
      this.$router.push("/search/")
    }
  }
};
</script>
<style lang="less">
    .home-header{
        width:100%;
        height: 5rem;
        background:transparent;
        position: fixed;
        top: 0;
        left:0;
        z-index: 99;
        display: flex;
        justify-content: center;
        align-content: center;
        form{
            width:90%;
            height:5rem;
            position: relative;
            input{
                width:100%;
                height: 3rem;
                border-radius: 1.5rem;
                margin-top: 1rem;
                text-indent:1.5rem;
                margin-left: 1rem;
                width:calc(100% - 1rem);
            }
            span{
                display: inline-block;
                width:5rem;
                height: 5rem;
                position: absolute;
                top: 0;
                right:0;
                text-align:center;
                line-height: 5rem;
                color: #999;
                i{
                    font-size: 2rem;
                }
            }
        }
        div{
            width: 10%;
            height:5rem;
            text-align: center;
            line-height: 5rem;
            i{
                font-size: 2rem;
                color:#fff
            }
        }
    }
</style>