<template>
    <div>
        <swiper ref="mySwiper" class="swiper" :options="swiperOptions">
            <swiper-slide v-for="(item,index) in bannerList" :key="index">
                    <img :src="item.image" alt="" @load="swiperLoad">
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
    import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
    import 'swiper/css/swiper.css'
    export default {
        name: "HomeSwiper",
        components:{
            Swiper,
            SwiperSlide
        },
        props:{

            bannerList:{
                type:Array,
                default(){
                    return []
                }
            }
        },
        data() {

            return {
                swiperOptions: {
                    pagination: {
                        el: '.swiper-pagination',
                    },
                    loop: true,
                    autoplay: {
                        delay: 2000
                    }

                }
            }
        },
        methods:{
            swiperLoad(){
                this.$emit("swiperLoad")
            }
        }
    }
</script>

<style scoped>
    .swiper img {
        width: 100%;
        height: 100%;
        margin-top: 44px;
    }

    .swiper-container {
        --swiper-theme-color: #fff;
    }
</style>
