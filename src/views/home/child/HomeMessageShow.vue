<template>
<div class="goods">
<div v-for="(item,index) in ShowList" class="item" :key="index">
    <img :src="item.show.img" @load="imgload" @click="itemClik(item.iid)" >
    <div class="bottom">
        <p class="title"> {{item.title}}</p>
        <span class="price">${{item.price}}</span>
        <span class="cfav">{{item.cfav}}</span>c
    </div>
</div>
</div>
</template>

<script>

export default {
name: "HomeMessageShow",
props: {
    ShowList: {
        type: Array,
        default() {
            return []
        }
    },
    bscroll:{
        type:Object,
        default() {
            return [];
        }
    }
},
methods:{
    imgload(){
        this.bscroll.refresh()
    },
    //详情
    itemClik(id){
        console.log(id)
        this.$router.push({
            path:"/productinfo",
            query:{
                iid:id
            }
        })
    }
}
}
</script>

<style scoped>
.goods {
width: 100vw;
display: flex;
flex-wrap: wrap;
justify-content: space-around;
}
.item {
width: 48%;
box-sizing: border-box;
box-shadow: 0 0 3px rgba(100, 100, 100, .8);
padding: 5px;
margin-top: 10px;
position: relative;
padding-bottom: 40px;
overflow-x: hidden;
}
.item img {
width: 100%;
}

.item .title {
white-space: nowrap;
overflow-x: hidden;
text-overflow: ellipsis;

}

.item .price {
font-size: 14px;
color: #ff5777;
margin-left: 35px;
}

.item .cfav {
font-size: 14px;
padding-left: 10px;
}
.item .cfav::before{
content:"";
width: 14px;
height: 14px;
display: inline-block;
background-image: url("../../../assets/img/common/collect.svg") ;
background-size: 14px;
}
.bottom{
width: 100%;
position: absolute;
bottom: 3px;
}

</style>