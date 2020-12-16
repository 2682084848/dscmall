<!--  -->
<template>
<div class='loading'>
    <img src="../assets/5-121204193R5-50.gif" alt="">
    <span>卡住了卸载吧？</span>
</div>
</template>

<style lang="less">
.loading{
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 999;
    background: rgba(255, 255, 255, .8);
    display:flex;
    justify-content: center;
    align-items: center;
    img{
        width: 4rem;
        opacity: 0.5;

    }
    span{
        font-size: 1.8rem;
        color: #999;
    }
}
</style>