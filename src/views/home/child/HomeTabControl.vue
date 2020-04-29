<template>
    <div class="tab">
        <div v-for="(item,index) in tabData" class="tabchild"
             :class="{active:index===Clikindex}" @click="tabClik(index)":key="index" >
            <span>{{item}}</span>
        </div>
    </div>
</template>

<script>
    const data={
        Clikindex:0
    }
    export default {
        name: "HomeTabControl",
        props: {
            tabData: {
                type: Array,
                default() {
                    return ['流行', '新款', '精选']
                }
            }

        },
        data(){
           return  data
               // Clikindex:0
        },
        methods: {
            tabClik(index) {
                this.Clikindex=index
                this.$emit("tabClik",index)
            }
        }
    }
</script>

<style scoped>
    .tab {
        width: 100vw;
        height: 44px;
        display: flex;
        text-align: center;
        line-height: 44px;
        color: black;
    }

    .tab .tabchild {
        flex: 1;
    }

    .tab .tabchild span {

        padding: 5px;
    }

    .active span {
        color: palevioletred;
        border-bottom: 3px solid palevioletred;
    }
</style>