<template>
  <div class="zj">
      <div class="left">
          <van-icon name="wap-nav" />
          <van-icon name="home-o" />
      </div>
      <div class="center">
          <slot>标题</slot>
      </div>
      <div class="right">
          <van-icon name="search" />
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.zj{
    display: flex;
    height: 30px;
    line-height: 30px;
    .left{
        margin-top: 15px;
    }
    .center{
        flex:1;
        text-align:center

    }
}

</style>
