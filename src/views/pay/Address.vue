<template>
  <div class="address">
    <!-- 头部导航栏 -->
    <van-nav-bar
      title="收货地址"
      fixed
      left-arrow
      @click-left="$router.go(-1)"
    />
    <div class="address-list" v-for="item in addressList" :key="item.id">
      <div class="address-info">
        <span style="margin-right: 10px">{{ item.userName }}</span
        ><span>{{ item.phone }}</span>
        <div style="margin: 10px 0px">{{ item.addressInfo }}</div>
      </div>

      <div class="address-btn">
        <div class="left">
          <van-checkbox
            v-model="item.isChecked"
            checked-color="#ee0a24"
            v-if="item.id === 1"
            >默认</van-checkbox
          >
          <van-checkbox v-model="item.isChecked" checked-color="#ee0a24" v-else
            >选择</van-checkbox
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
    <van-button round color="linear-gradient(to right, #ff6034, #ee0a24)" block
      >添加新地址</van-button
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      addressList: [
        {
          id: 1,
          userName: "小明",
          phone: "17695100407",
          addressInfo: "宁夏回族自治区 银川市 西夏区 镇北堡镇华西村",
          isChecked: true,
        },
        {
          id: 2,
          userName: "小明",
          phone: "17695100407",
          addressInfo: "宁夏回族自治区 银川市 西夏区 镇北堡镇华西村",
          isChecked: false,
        },
        {
          id: 3,
          userName: "小明",
          phone: "17695100407",
          addressInfo: "宁夏回族自治区 银川市 西夏区 镇北堡镇华西村",
          isChecked: false,
        },
        {
          id: 4,
          userName: "小明",
          phone: "17695100407",
          addressInfo: "宁夏回族自治区 银川市 西夏区 镇北堡镇华西村",
          isChecked: false,
        },
      ],
    };
  },
  methods: {},
};
</script>

<style lang="less" scoped>
.address {
  padding-top: 46px;
  padding-bottom: 46px;
  background: #fafafa;
  .address-list {
    padding: 10px;
    margin: 10px;

    background: #fff;
    .address-info {
      padding: 10px;
      font-size: 14px;

      border-bottom: 1px solid #efefef;
    }
    .address-btn {
      padding: 10px;
      font-size: 14px;
      display: flex;
      justify-content: space-between;
      align-content: center;
    }
  }
}
</style>
