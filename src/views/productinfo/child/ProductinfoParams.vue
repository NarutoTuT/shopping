<template>

    <div class="params">
        <table class="rule">
            <tr class="rule-item" v-for="(item,index) in productinfoParams.rule" :key="index">
                <td v-for="(newItem,indexId) in item">{{newItem}}</td>
            </tr>
        </table>
        <table class="info">
            <tr class="info-item" v-for="(item,index) in productinfoParams.info" :key="index">
                <td class="key">{{item.key}}</td>
                <td class="value">{{item.value}}</td>
            </tr>
        </table>
    </div>
</template>

<script>
    export default {
        name: "ProductinfoParams",
        props: {
            productinfoParams: {
                type: Object,
                default() {
                    return {}
                }
            }
        }
    }
</script>

<style scoped>
    .params{

        box-sizing: border-box;
        font-size: 14px;
        padding: 20px 15px;
    }
    .params tr{
        height: 40px;
    }
    .params td{
        border-bottom: 1px solid rgba(100,100,100,.3);
    }
    .params .rule{
        width: 100%;
    }
    .params .rule tr{
        line-height: 40px;
    }
    .params .rule .rule-item{
        display: flex
    }
    .params .rule .rule-item td{
        flex: 1;
    }
    .key{
        width: 95px;
    }
    .value{
        color: #ff5777;
    }
</style>