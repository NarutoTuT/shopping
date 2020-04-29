<template>
<div class="home">
<!--头部-->
<home-navbar></home-navbar>
<home-tab-control :tabData="['流行','新款','精选']"
                  @tabClik="tabClik" class="control" v-show="tabFlag"></home-tab-control>
<div class="warp" ref="warp">
    <div class="content">
        <!--轮播图-->
        <home-swiper :bannerList="bannerList" @swiperLoad="swiperLoad"></home-swiper>
        <!--流行-->
        <home-recommend :recommendList="recommendList"></home-recommend>
        <!--推荐-->
        <home-pop></home-pop>
        <!--流行-->
        <home-tab-control :tabData="['流行','新款','精选']"
                          @tabClik="tabClik" ref="controlShow"></home-tab-control>
        <!--数据展示-->
        <home-message-show :ShowList="goods[clickType].list"
                           :bscroll="bscroll"></home-message-show>
    </div>
</div>
<!--返回顶部-->
<home-click-top @click.native="backTop" v-show="isBackTop"></home-click-top>
</div>
</template>

<script>
//引用接口
import HomeNavbar from "./child/HomeNavbar"
import HomeSwiper from "./child/HomeSwiper";
import HomeRecommend from "./child/HomeRecommend";
import HomePop from "./child/HomePop";
import HomeTabControl from "./child/HomeTabControl";
import HomeMessageShow from "./child/HomeMessageShow";
import HomeClickTop from "./child/HomeClickTop";
import BScroll from "better-scroll"


export default {
name: "Home",
components: {HomeClickTop, HomeMessageShow, HomePop, HomeRecommend, HomeNavbar, HomeSwiper, HomeTabControl},
data() {
    return {
        //
        taboffsetTop: 0,
        tabFlag: false,
        //返回顶部
        isBackTop: false,
        //让浏览更流动性
        bscroll: null,
        //轮播图
        bannerList: [],
        //推荐
        recommendList: [],
        //商品展示
        goods: {
            pop: {page: 0, list: []},
            new: {page: 0, list: []},
            sell: {page: 0, list: []}
        },
        clickType: "pop"
    }
},
created() {
    this.getAllData(),
        this.getGoodsData("pop")
    this.getGoodsData("new")
    this.getGoodsData("sell")
},

mounted() {
//插件BScroll
    this.bscroll = new BScroll(this.$refs.warp, {
        //让流行导航
        click: true,
        pullUpLoad: true
    })
    this.bscroll.on("pullingUp", () => {
        this.getGoodsData(this.clickType)
    })
    this.bscroll.on("scroll", o => {
        if (-o.y > 1500) {
            this.isBackTop = true
        } else {
            this.isBackTop = false
        }
        // this.tabFlag =-o.y >= this.taboffsetTop - 44


        if (-o.y >= this.taboffsetTop - 44) {
            this.tabFlag = true
        } else {
            this.tabFlag = false
        }
    })
},
methods: {
    //接听轮播图加载完成
    swiperLoad() {
        this.taboffsetTop = this.$refs.controlShow.$el.offsetTop
    },
//接收发射过来$eiml
    tabClik(val) {
        switch (val) {
            case 0:
                this.clickType = 'pop'
                break
            case 1:
                this.clickType = 'new'
                break
            case 2:
                this.clickType = 'sell'
                break
        }
    },
//获取轮播图和推荐数据
    getAllData() {
        this.request({
            url: this.url.multidata,
            methods: 'get'
        }).then(res => {
            // console.log(res)
            this.bannerList = res.data.banner.list
            this.recommendList = res.data.recommend.list
        })
    },
//获取商品数据
    getGoodsData(type) {
        //加载更多的数据
        let page = ++this.goods[type].page
        this.request({
            url: this.url.goodsData,
            methods: 'get',
            params: {
                type: type,
                page: page
            }
        }).then(res => {
            let data = res.data.list;
            data.forEach(itme => {
                this.goods[type].list.push(itme)
            })
            this.bscroll.finishPullUp()
        })
    },
    //返回顶部
    backTop() {
        this.bscroll.scrollTo(0, 0, 400)
    }
}

}
</script>

<style scoped>
.warp {
height: calc(100vh - 44px);
overflow: hidden;
}

.control {
position: fixed;
top: 44px;
left: 0;
right: 0;
z-index: 888;
background-color: #f2f2f2;

}
</style>