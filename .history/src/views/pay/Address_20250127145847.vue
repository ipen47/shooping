<template>
  <div class="address">
    <!-- 头部导航栏 -->
    <van-nav-bar
      title="订单结算台"
      fixed
      left-arrow
      @click-left="$router.go(-1)"
    />
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.address {
  padding-top: 46px;
  padding-bottom: 46px;
  ::v-deep {
    .van-nav-bar__arrow {
      color: #333;
    }
  }
}
</style>
