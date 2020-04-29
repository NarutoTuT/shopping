<template>
    <div >
        <nav-bar class="nav-bar">
            <div slot="center">购物街</div>
        </nav-bar>
    </div>
</template>

<script>
    import NavBar from "../../../components/navbar/NavBar";
    export default {
        name: "HomeNavbar",
        components: {NavBar}
    }
</script>

<style scoped>
    .nav-bar{
        background-color: red;
        color: #f2f2f2;

    }
</style>