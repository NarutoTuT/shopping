<template>
<div>
<tab-bar>
<tab-bar-item path="/home">

    <img src="../../assets/img/tabbar/home.svg" slot="item-img">
    <img src="../../assets/img/tabbar/home_active.svg" slot="item-img-active">
    <div slot="item-text">首页</div>
</tab-bar-item>
<tab-bar-item path="/cart">
    <img src="../../assets/img/tabbar/category.svg" slot="item-img">
    <img src="../../assets/img/tabbar/category_active.svg" slot="item-img-active">
    <div slot="item-text">分类</div>
</tab-bar-item>
<tab-bar-item path="/category">
    <img src="../../assets/img/tabbar/cart.svg" slot="item-img">
    <img src="../../assets/img/tabbar/cart_active.svg" slot="item-img-active">
    <div slot="item-text">购物车</div>
</tab-bar-item>
<tab-bar-item path="/user">
    <img src="../../assets/img/tabbar/profile.svg" slot="item-img">
    <img src="../../assets/img/tabbar/profile_active.svg" slot="item-img-active">
    <div slot="item-text">用户</div>
</tab-bar-item>
</tab-bar>
</div>
</template>

<script>
import TabBarItem from "./TabBarItem";
import TabBar from "./TabBar";

export default {
name: "TabBarMain",
components: {
TabBarItem, TabBar
}
}
</script>

<style scoped>

</style>
