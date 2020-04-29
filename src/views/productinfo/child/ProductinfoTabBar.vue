<template>
    <div class="bottom">
        <div class="left">
            <div class="sever">
                <div class="img"></div>
                <div class="text">客服</div>
            </div>
            <div class="sever2">
                <div class="img"></div>
                <div class="text">客服</div>
            </div>
            <div class="sever3">
                <div class="img"></div>
                <div class="text">客服</div>
            </div>
        </div>
        <div class="right">
            <div class="cart" @click="addCart">加入购物车</div>
            <div class="buy">立即购买</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ProductinfoTabBar",
        methods:{

            //加入购物车
            addCart(){
                this.$emit("addCart")
            }
        }
    }
</script>

<style scoped>
.bottom{
    width: 100vw;
    height: 58px;
    display: flex;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #ffffff;

}
.bottom .left{
    flex: 1.6;
    display: flex;
    margin-top: 10px;
    line-height: 30px;
}
.bottom .left > div{
    flex: 1;
    text-align: center;
}

.bottom .img{
    width: 20px;
    height: 20px;
    background-image: url("../../../assets/img/detail/detail_bottom.png");
    background-repeat: no-repeat;
    background-size:22px 150px;
    margin: auto;


}
.bottom .left .sever .img{
   background-position:0 -53px;
}
.bottom .left .sever2 .img{
    background-position:0 -98px;
}
.bottom .left .sever3 .img{
    background-position:0 0px;
}
.bottom .right{
    flex: 1.4;
    display: flex;
    font-size: 13px;
    text-align: center;
    line-height: 30px;


  }
.right .cart{
    height: 30px;
    flex: 1;
    background-color: #FF8A00;
    border-radius: 8px 0 0 8px;
    margin-top: 18px;

}
.right .buy{
    height: 30px;
    flex: 1;
    background-color: #FF4400;
    border-radius:0 8px 8px 0;
    margin-top: 18px;
}

</style>