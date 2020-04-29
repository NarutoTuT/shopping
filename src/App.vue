<template>
    <div id="app">
        <keep-alive include="Home">
            <router-view></router-view>
        </keep-alive>
        <!--底部导航-->
        <tab-bar-main></tab-bar-main>

    </div>

</template>
<script>

    import TabBarMain from "./components/tabbar/TabBarMain";
    export default {
        name: 'App',
        components: {
         TabBarMain
        }
    }
</script>
<style>
    @import "assets/css/base.css";
</style>
