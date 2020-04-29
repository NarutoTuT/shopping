<template>
    <div>
        <div class="show">图片展示</div>
        <div v-for="(item,index) in productinfoImges" :key="index" class="Images">
            <img :src="item" alt="">
        </div>
    </div>
</template>

<script>
    export default {
        name: "ProductinfoImage",
        props: {
            productinfoImges: {
                type: Array,
                default() {
                    return []
                }
            }

        }
    }
</script>

<style scoped>
    .show {
        text-align: center;
        padding: 10px;
    }
    .Images{
        border-bottom:1px solid rgba(100,100,100,.8);

    }

    .Images img {
        width: 100%;
    }
</style>