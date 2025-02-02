<template>
  <div class="address">
    <!-- 头部导航栏 -->
    <van-nav-bar
      title="收货地址"
      fixed
      left-arrow
      @click-left="$router.go(-1)"
    />
    <div class="address-list">
      <div class="address-info"><span></span></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.address {
  padding-top: 46px;
  padding-bottom: 46px;
}
</style>
