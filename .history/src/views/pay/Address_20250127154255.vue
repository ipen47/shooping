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
        <span style="margin-right: 10px">小明</span><span>17695100407</span>
        <div style="margin: 10px 0px">
          宁夏回族自治区 银川市 西夏区 镇北堡镇华西村
        </div>
      </div>

      <div class="address-btn">
        <div class="left">
          <van-checkbox v-model="checked" checked-color="#ee0a24"
            >默认</van-checkbox
          >
        </div>
        <div class="right">
          <span style="margin-right: 10px"
            ><van-icon name="delete-o" />编辑</span
          >
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
      padding: 10px;
      font-size: 14px;
      margin-bottom: 10px;
      border-bottom: 1px solid #efefef;
    }
    .address-btn {
      padding: 0px 10px;
      font-size: 14px;
      display: flex;
      justify-content: space-between;
      align-content: center;
    }
  }
}
</style>
