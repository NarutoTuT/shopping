<template>
    <div>
        <swiper ref="mySwiper" class="swiper" :options="swiperOptions">
            <swiper-slide v-for="(item,index) in bannerList" :key="index" >
                    <img :src="item" @load="loadswiper">
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
    import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
    import 'swiper/css/swiper.css'
    export default {
        name: "ProductinfoSwiper",
        components:{Swiper, SwiperSlide},
        props:{
            bannerList:{
                type:Array,
                default(){
                    return[]
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
            loadswiper(){
                this.$emit("loadswiperEnd")
            }
        }
    }
</script>

<style scoped>
    .swiper{
        width: 100vw;
        height: 300px;
    }
    .swiper img {
        width: 100%;
        /*margin-top: 44px;*/

    }
    .swiper-container {
        --swiper-theme-color: #fff;
    }
</style>