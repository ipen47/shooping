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
      <div class="address-info">
        <span class="name">小明</span><span class="phoen">17695100407</span>
      </div>
      <div class="address-info">
        宁夏回族自治区 银川市 西夏区 镇北堡镇华西村
      </div>
      <div class="address-btn">
        <div class="left">
          <van-checkbox v-model="checked" checked-color="#ee0a24"
            >默认</van-checkbox
          >
        </div>
        <div class="right">
          <span><van-icon name="delete-o" />编辑</span>
          <span><van-icon name="delete-o" />删除</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checked: true,
    };
  },
};
</script>

<style lang="less" scoped>
.address {
  padding-top: 46px;
  padding-bottom: 46px;
  background: #fafafa;
  .address-list {
    margin: 10px;

    background: #fff;
    .address-info {
      font-size: 16px;
      margin-bottom: 10px;
    }
    .address-btn {
      border-top: 1px solid #efefef;
    }
  }
}
</style>
