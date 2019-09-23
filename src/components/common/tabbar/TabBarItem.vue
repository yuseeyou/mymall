<template>
    <div class="tab-bar-item">
        <router-link :to="item.href">
            <span class="iconfont" v-html="item.icon"></span>
            <span>{{item.text}}</span>
        </router-link>
    </div>
</template>

<script>
    export default {
        props: ['item']
    }

</script>

<style lang="less" scoped>
    @import "../../../assets/fontIcon/iconfont.css";

    .tab-bar-item {
        flex: 1;
        text-align: center;
        height: 49px;
        a {
            display: block;
            span {
                display: block;
                width: 100%;
                height: 50%;
                line-height: 24.5px;
                font-size: 12px;
                color: #333;

                &:first-child {
                    box-sizing: border-box;
                    padding-top: 3px;
                    font-size: 20px;
                }
            }
            &.router-link-active{
                span{
                    color:#d63031;
                }
            }
        }
    }
</style>
