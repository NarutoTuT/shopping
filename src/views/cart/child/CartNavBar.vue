<template>
<div class="cart-nav">
    <nav-bar class="nav" v-if="$store.state.length">
        <div slot="center">购物车{{$store.state.length}}</div>
    </nav-bar>
    <nav-bar class="nav" v-else>
        <div slot="center">购物车</div>
    </nav-bar>
</div>
</template>

<script>
import NavBar from "../../../components/navbar/NavBar";

export default {
    name: "CartNavBar",
    components: {NavBar}

}
</script>

<style scoped>
.nav {
    background-color: #ff5777;
    color: #ffffff;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
}
</style>