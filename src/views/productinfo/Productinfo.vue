<template>


<div class="productinfo">
<!--导航-->
<productinfo-nav-bar class="navbar"></productinfo-nav-bar>
<div class="warp" ref="warp">
<div class="content">
    <!--轮播图-->
    <productinfo-swiper @loadswiperEnd="loadswiperEnd" :bannerList="bannerList"></productinfo-swiper>
    <!--商品信息-->
    <productinfo-message-show :productinfo="productinfo"></productinfo-message-show>
    <!--商家信息-->
    <productinfo-shop :productinfoShop="productinfoShop"></productinfo-shop>
    <!--商品展示区域-->
    <productinfo-image :productinfoImges="productinfoImges"></productinfo-image>
    <!--商品尺码展示-->
    <productinfo-params :productinfoParams="productinfoParams"></productinfo-params>
    <!--底部购物标签-->
    <productinfo-tab-bar @addCart="addCart"></productinfo-tab-bar>
</div>
</div>
</div>

</template>

<script>
import ProductinfoNavBar from "./child/ProductinfoNavBar";
import ProductinfoSwiper from "./child/ProductinfoSwiper";
import ProductinfoMessageShow from "./child/ProductinfoMessageShow";
import ProductinfoShop from "./child/ProductinfoShop";
import ProductinfoImage from "./child/ProductinfoImage";
import ProductinfoParams from "./child/ProductinfoParams";
import BScroll from "better-scroll";
import ProductinfoTabBar from "./child/ProductinfoTabBar";

export default {
name: "Productinfo",
components: {
ProductinfoNavBar,
ProductinfoSwiper,
ProductinfoMessageShow,
ProductinfoShop,
ProductinfoImage,
ProductinfoParams,
ProductinfoTabBar
},
data() {
return {
    productinfoId: null,/*商品id*/
    bannerList: [],/*轮播图*/
    productinfo: {
        title: '',
        price: '',
        oldPrice: '',
        discountDesc: '',
        columns: '',
        services: '',
        lowNowPrice: ''
    },/*商品信息*/
    productinfoShop: {
        shopLogo: '',
        cSells: '',
        cGoods: '',
        name: '',
        score: '',
        shopUrl: '',
        desc: ''
    },/*商家信息*/
    productinfoImges: [],/*商品图片*/
    productinfoParams: {
        info: [],
        rule: []

    },/*商品尺码*/
    bscroll: null,
}
},
created() {
this.productinfoId = this.$route.query.iid
this.getProductinfo()
},
mounted() {
this.bscroll = new BScroll(this.$refs.warp, {
    click: true,
    pullUpLoad: true
})
},
methods: {
//接收加入购物车
addCart() {
    this.$toast("加入购物车成功")
    //加入购物车
    let obj = {
        iid: this.productinfoId,
        img: this.bannerList[0],
        title: this.productinfo.title,
        lowNowPrice: this.productinfo.lowNowPrice,
        des: this.productinfo.desc,
        checked: true,
        count: 1
    }
    this.$store.commit("addCartData",obj)
},
getProductinfo() {
    this.request({
        url: this.url.productinfoData,
        method: 'get',
        params: {
            iid: this.productinfoId
        }
    }).then(res => {
        console.log(res)
        /*轮播:数组*/
        this.bannerList = res.result.itemInfo.topImages;
        /*商品信息:用对象*/
        this.productinfo.title = res.result.itemInfo.title/*商品标题*/
        this.productinfo.price = res.result.itemInfo.price/*商品价格*/
        this.productinfo.oldPrice = res.result.itemInfo.oldPrice/*商品新价格*/
        this.productinfo.discountDesc = res.result.itemInfo.discountDesc/*商品折扣*/
        this.productinfo.columns = res.result.columns/*商品销量*/
        this.productinfo.services = res.result.shopInfo.services/*商品服务*/
        this.productinfo.lowNowPrice = res.result.itemInfo.lowNowPrice
        this.productinfo.des = res.result.itemInfo.desc
        /*给商家赋值*/
        this.productinfoShop.shopLogo = res.result.shopInfo.shopLogo
        this.productinfoShop.cSells = res.result.shopInfo.cSells
        this.productinfoShop.name = res.result.shopInfo.name
        this.productinfoShop.score = res.result.shopInfo.score
        this.productinfoShop.cGoods = res.result.shopInfo.cGoods
        this.productinfoShop.shopUrl = res.result.shopInfo.shopUrl

        //图片展示区
        this.productinfoImges = res.result.detailInfo.detailImage[0].list
        //商品尺码展示
        console.log(res.result.itemParams.info.set)
        this.productinfoParams.info = res.result.itemParams.info.set
        this.productinfoParams.rule = res.result.itemParams.rule.tables[0]

    })
},
loadswiperEnd() {
    this.bscroll.refresh()
}
}
}
</script>

<style scoped>
.warp {
height: calc(100vh - 44px - 58px);
background-color: #ffffff;
margin-top: 44px;
}

.productinfo {
position: relative;
z-index: 999;
background-color: #ffffff;
}
</style>