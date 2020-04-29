<template>
    <div class="recommendList">
        <div  v-for="(item,index) in recommendList" class="item">
            <img :src="item.image">
            <div>{{item.title}}</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "HomeRecommend",
        props:{
            recommendList:{
                type:Array,
                default() {
                    return [];
                }
            }
        }
    }
</script>

<style scoped>
    .recommendList{
        width: 100vw;
        display: flex;
        text-align: center;
        border-bottom: 8px solid rgba(100,100,100,.2);
        padding: 10px 0;
    }
    .recommendList .item{
        flex: 1;
    }
    .recommendList img{
        width: 80px;
        height: 80px;

    }
    .recommend .title{
        font-size: 13px;
        color: #666;
    }
</style>