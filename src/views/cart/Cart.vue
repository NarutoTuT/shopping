<template>
<div>
    <!--导航-->
    <cart-nav-bar></cart-nav-bar>
    <!--中间-->
    <div class="content" >
    <cart-main :cart="cart"></cart-main>
    </div>
    <!--底部导航-->
    <cart-tab-bar></cart-tab-bar>
</div>
</template>

<script>
    import CartMain from "./child/CartMain";
    import CartNavBar from "./child/CartNavBar";
    import CartTabBar from "./child/CartTabBar";
    export default {
        name: "Cart",
        components: {CartNavBar,CartMain,CartTabBar},
        data(){
            return{}
            cart:null
        },
        created() {
            this.cart=this.$store.state.cart
        }
    }
</script>

<style scoped>

</style>