<template>
<div class="main" >
<div class="item" v-for="(item,index) in cart" :key="item.iid">
    <div class="select">
        <img :class="{active:item.checked}" @click="selectClick(item.iid)"
             src="../../../assets/img/cart/tick.svg">
    </div>
    <div class="img">
        <img :src="item.img" alt="">
    </div>
    <div class="info">
        <div class="title">{{item.title}}</div>
        <div class="desc">{{item.desc}}</div>
        <div class="bottom">
            <div class="price">￥{{item.price}}</div>
            <div class="count">X{{item.count}}</div>
        </div>
    </div>
</div>
</div>
</template>

<script>
export default {
name: "CartMain",
components: {
    selectClick(id) {
        this.$store.commit("changselectClick")
    }
},
props: {
    cart: {
        type: Array,
        default() {
            return []
        }
    }
}
}
</script>

<style scoped>
.item {
display: flex;
padding: 5px;
border-bottom: 1px solid rgba(0, 0, 0, .5);
    margin-top: 44px;
}

.item .select {
width: 14%;
background-color: #ff5777;
justify-content: center;
align-items: center;
}

.item .select img {
width: 22px;
height: 22px;
border-radius: 50%;
border: 2px solid #999999;
}

.active {
background-color: #ff5777;
}

.item .img img {
width: 80px;
height: 100px;
border-radius: 5px;
display: block;
vertical-align: middle;
}

.info {
padding: 0 10px;
overflow: hidden;
}

.info .title, .info .desc {
white-space: nowrap;
overflow: hidden;
text-overflow: ellipsis;
}

.info .title {
margin-top: 4px;

}

info .desc {
margin-top: 15px;
font-size: 13px;
}

.info .bottom {
display: flex;
margin-top: 15px;
justify-content: space-between;
font-size: 14px;
}

.info .bottom div:first-child {
color: #FF4400;
}

</style>