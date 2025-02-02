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
      <div class="address-info"><span>小明</span><span>17695100407</span></div>
      <div class="address-info">
        宁夏回族自治区 银川市 西夏区 镇北堡镇华西村
      </div>
      <div class="address-btn">
        <div class="left">
          <van-radio-group v-model="radio">
            <van-radio name="1">单选框 1</van-radio>
            <van-radio name="2">单选框 2</van-radio>
          </van-radio-group>
        </div>
        <div class="right">
          <sapn><van-icon name="delete-o" />编辑</sapn>
          <sapn><van-icon name="delete-o" />删除</sapn>
        </div>
      </div>
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
