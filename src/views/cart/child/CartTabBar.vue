<template>
    <div class="TabBar">
        <div class="left">
            <img src="../../../assets/img/cart/tick.svg" alt="">
            <span>全选</span>
        </div>
        <div class="tatalPrice">合计￥:</div>
        <div class="buy" @click="buyClick">去结算(0)</div>
    </div>
</template>

<script>
    export default {
        name: "CartTabBar",
        components:{
            buyClick(){
                console.log(123)
            }
        }
    }
</script>

<style scoped>
.TabBar{
    width: 100vw;
    height: 40px;

    position: fixed;
    bottom: 49px;
 z-index: 999;
    color: #646464;
    font-size: 14px ;
    display: flex;
}
.left{
    padding-left: 5px;
    width: 24%;
}
    .left img{
        width: 22px;
        height: 22px;
        border-radius: 50%;
        border: 2px solid #999999;
    }
    .left span{
        margin-left: 4px;
    }
    .tatalPrice{
        width: 42%;
    }
    .buy{
        background-color: #fe5200;
        text-align: center;
        width: 34%;
        color: #ffffff;
    }
</style>