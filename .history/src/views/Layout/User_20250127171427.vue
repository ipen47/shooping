<template>
  <div class="user">
    <div class="head-page" v-if="isLogin">
      <div class="hear-avatar">
        <van-image
          round
          width="100%"
          height="100%"
          src="https://peng12.oss-cn-beijing.aliyuncs.com/shopping/default-avatar.png"
        />
      </div>
      <div class="head-info">
        <div class="phone">176xxxx0407</div>
        <div class="vip"><van-icon name="diamond-o" /> 普通会员</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserIndex",
  data() {
    return {
      isLogin: true,
    };
  },
};
</script>

<style lang="less" scoped>
.user {
  min-height: 100vh;
  background-color: #f7f7f7;
  padding-bottom: 50px;
}
.head-page {
  height: 130px;
  background: url("https://peng12.oss-cn-beijing.aliyuncs.com/Blog/%E6%96%87%E7%AB%A0%E5%B0%81%E9%9D%A2/article07.png");
  background-size: cover;
  display: flex;
  align-content: center;

  .hear-avatar {
    margin: 0 10px;
    width: 50px;
    height: 50px;
  }
  .head-info {
    .phone {
      margin-bottom: 5px;
      color: #c59a46;
      font-size: 18px;
      font-weight: bold;
    }
    .vip {
      display: inline-block;
      background-color: #3c3c3c;
      padding: 3px 5px;
      border-radius: 5px;
      color: #e0d3b6;
      font-size: 14px;
      .van-icon {
        font-weight: bold;
        color: #ffb632;
      }
    }
  }
}
</style>
