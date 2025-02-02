<template>
  <div class="pay">
    <!-- 头部导航栏 -->
    <van-nav-bar
      title="商品详情页"
      fixed
      left-arrow
      @click-left="$router.go(-1)"
    />
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
}
</style>
