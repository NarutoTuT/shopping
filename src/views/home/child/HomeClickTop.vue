<template>
    <div class="backTop">
        <img src="../../../assets/img/common/top.png"alt="">
    </div>
</template>

<script>
    export default {
        name: "HomeClickTop"
    }
</script>

<style scoped>
.backTop{
    position: fixed;
    bottom: 45px;
    right: 8px;
    z-index: 999;
}
.backTop img{
    width: 50px;
    height: 50px;
}

</style>