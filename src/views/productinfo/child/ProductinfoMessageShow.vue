<template>
    <div class="info">
        <h3 class="title">{{productinfo.title}}</h3>
        <div class="price">
            <span class="nprice">{{productinfo.price}}</span>
            <span class="oprice">{{productinfo.oldPrice}}</span>
            <span class="desc">{{productinfo.discountDesc}}</span>
        </div>
        <div class="columns">
            <span v-for="(item,index) in productinfo.columns" :key="index">
                {{item}}
            </span>
        </div>
        <div class="services">
           <div class="itme" v-for="(item,index) in productinfo.services" :key="index">
               <img :src="item.icon" alt="">
               <span>{{item.name}}</span>
           </div>

        </div>
    </div>
</template>

<script>
    export default {
        name: "ProductinfoMessageShow",
        props: {
            productinfo: {
                type: Object,
                default() {
                    return {}
                }
            }
        }
    }
</script>

<style scoped>
    .info {
        padding: 0 5px;
        box-sizing: border-box;
    }

    .info .title {
        font-size: 18px;
        color: palevioletred;
    }
    .price {
        padding: 10px 0;
    }
    .price .nprice {
        color: #ff5777;
    }
    .price .oprice {
        color: #999;
        font-size: 13px;
        text-decoration: line-through;
        margin:0 8px;
    }
    .price .desc{
        background-color: #ff5777;
        color: #ffffff;
        font-size: 13px;
        border-radius: 3px;
        padding: 3px;
    }
    .columns{
        display: flex;
        border-bottom: 1px solid rgba(0,0,0,.6);
        padding-bottom: 10px;
    }
    .columns span{
        flex: 1;
        font-size: 13px;
        color: #999;
    }
    .services{
        display: flex;
        flex-wrap: wrap;
        padding-top: 5px;
        justify-content: space-between;
        border-bottom: 5px solid rgba(100,100,100,.1);
        padding-bottom: 10px;
        font-size: 14px;
    }
    .services .itme{
        width: 33.33%;
        line-height: 30px;
    }

    .services img{
        width: 13px;
        height: 13px;
        vertical-align: middle;
    }
</style>