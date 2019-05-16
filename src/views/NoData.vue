<template>
    <div class="noData">
        <span>没有更多数据了</span>
    </div>
</template>

<script>
export default {
  name: 'noData'
}
</script>

<style lang="less" scoped>
    .noData {
        width: 300px;
        height: 30px;
        line-height: 30px;
        background-color: red;
        position: fixed;
        top: 3px;
        left: 50%;
        transform: translateX(-50%);
        border-radius: 5px;
        span {
            color: white;
        }
    }
</style>
