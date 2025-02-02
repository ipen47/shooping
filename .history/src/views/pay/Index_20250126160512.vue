<template>
  <div class="pay">
    <!-- 头部导航栏 -->
    <van-nav-bar
      title="订单结算台"
      fixed
      left-arrow
      @click-left="$router.go(-1)"
    />
    <!-- 地址相关 -->
    <div class="adress">
      <div class="left-icon"><van-icon name="logistics" /></div>
      <div class="address-info">
        <div class="info-userinfo">
          <span>小明</span><span>17695123345</span>
        </div>
        <div class="info-address">
          宁夏回族自治区 银川市 西夏区 镇北堡镇华西村
        </div>
      </div>
      <div class="right-icon"><van-icon name="arrow" /></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "payIndex",
};
</script>

<style lang="less" scoped>
.pay {
  padding-top: 46px;
  padding-bottom: 46px;
  ::v-deep {
    .van-nav-bar__arrow {
      color: #333;
    }
  }
  .address {
    display: flex;
  }
}
</style>
