<template>
    <div class="productinfoNavBar">
        <nav-bar class="Nav">
            <div slot="left" class="Nav-img">
                <img src="../../../assets/img/common/back.svg" @click="$router.back()">
            </div>
            <div slot="center">详情页</div>
        </nav-bar>
    </div>

</template>

<script>
    import NavBar from "../../../components/navbar/NavBar";

    export default {
        name: "ProductinfoNavBar",
        components: {NavBar}
    }
</script>

<style scoped>
    .Nav{
        background-color: #ffffff;
    }
    .productinfoNavBar .Nav-img img {
        margin-top: 10px;
    }
</style>