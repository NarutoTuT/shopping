<template>
    <div class="shop">
        <div class="top">
            <img :src="productinfoShop.shopLogo" alt="">
            <span>{{productinfoShop.name}}</span>
        </div>
        <div class="item">
            <div class="left">
                <div class="sell">
                    <div class="count">{{productinfoShop.cSells | formatCount}}</div>
                    <div class="text-count">总销售量</div>
                </div>
                <div class="cGoods">
                    <div class="count">{{productinfoShop.cGoods}}</div>
                    <div>全部宝贝</div>
                </div>
            </div>
            <div class="right">
                <table>
                    <tr v-for="(item,index) in productinfoShop.score">
                        <td>{{item.name}}</td>
                        <td class="score" :class="{redBcak : item.isBetter}">{{item.score}}</td>
                        <td class="isBetter" :class="{lowBack : item.isBetter} ">{{item.isBetter ? "高":"低"}}</td>
                    </tr>
                </table>
            </div>
        </div>
        <div class="bottom">
            <a :href="productinfoShop.shopUrl">进店逛逛</a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ProductinfoShop",
        props: {
            productinfoShop: {
                type: Object,
                default() {
                    return {}
                }
            }
        },
        filters:{
            formatCount(val){
                if (val >= 10000){
                    return (val/10000).toFixed(2)+"万"
                }else {
                    return
                }
            }
        }
    }
</script>

<style scoped>
    .shop {
    }
    .top {
        padding: 0 10px;
    }

    .shop .top span {
        padding: 0 10px;
        font-weight: bold;
    }
    .shop .top img {
        width: 50px;
        height: 50px;
        border: 1px solid rgba(0, 0, 0, .3);
        border-radius: 50%;
        vertical-align: middle;
        margin: 20px 0 20px 0;
    }
    .shop .item {
        display: flex;
        padding: 10px 20px;
    }

    .shop .item .left {
        flex: 1;
        /*background-color: #ff5777;*/
        display: flex;
        border-right: 1px #999999 solid;
        padding-right: 10px;
    }

    .shop .item .left .count {
        color: #999999;
    }

    .shop .item .left .sell, .shop .item .left .cGoods {
        text-align: center;
        flex: 1;
    }

    .shop .item .right {
        flex: 1;
        margin-left: 10px;
    }

    .shop .item .right tr td {
        padding: 0 4px;
    }

    .shop .item .right .score {
        color: yellowgreen;
    }
    .redBcak {
        color: red !important;
    }
    .shop .item .right .isBetter{
        background-color: yellowgreen;
    }
    .lowBack {
        background-color: red !important;
    }
    .shop .bottom{
        margin-top: 10px;
        border-bottom:4px #999999 solid;
        padding-bottom: 20px;
    }
    .shop .bottom a{
        display: block;
        width: 150px;
        height: 30px;
        background-color: #f2f5f8;
        text-align: center;
        margin: auto;
        line-height: 30px;
        border-radius: 10px;
        font-size: 14px;
    }


</style>