<!--  -->
<template>
<div class='homeseckill'>
    <div class="seckill-top">
        <div class="image">
            <img src="https://x.dscmall.cn/storage/data/gallery_album/177/original_img/177_P_1597978468241.png?imageView2/2/format/webp" alt="">
        </div>
        <div class="seckill">距离结束还剩: <p>12</p> <span>:</span><p>00</p><span>:</span><p>00</p></div>
    </div>
    <ul class="secdate">
        <li v-for="(secdate,index) in seckilldate" :key="index">
            <h2>{{secdate.date}}</h2>
            <h5>{{secdate.state}}</h5>
        </li>
    </ul>
    <div class="seckill-buttom">
        <h4>查看更多商品 <i class="iconfont icon-jiantou1
"></i></h4>
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
    seckilldate:[
        {
        date:"24:00",
        state:"抢购中"
    },{
        date:"8:00",
        state:"即将开始"
    },{
        date:"10:00",
        state:"即将开始"
    },{
        date:"16:00",
        state:"即将开始"
    }
    ]
};
},
methods: {

},
}
</script>
<style lang="less">
    .homeseckill{
        width:96%;
        height: 16rem;
        margin-left:2%;
        margin-top: 1.5rem;
        border:1px solid #efefef;
        border-radius: 1rem;
        .seckill-top{
            width:100%;
            display:flex;
            justify-content: center;
            margin-top: 1rem;
            .image{
                width:30%;
                img{
                    width:100%;
                }
            }
            .seckill{
                width:70%;
                display: flex;
                flex-direction:row-reverse;
                font-size: 1.6rem;
                // font-weight: 700;
            }
            
        }
        .secdate{
            width:100%;
            display:flex;
            justify-content: center;
            margin-top: 1.5rem;
            li{
                width:25%;
                text-align:center;
                padding-bottom:1.5rem;
                border-bottom: 1px solid #efefef;
            }
        }
        .seckill-buttom{
            width:100%;
            height: 4rem;
            display:flex;
            justify-content: center;
            align-items: center;
        }
    }
</style>