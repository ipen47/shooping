<template>
  <div class="user">
    <div class="head-page" v-if="isLogin">
      <div class="hear-avatar">
        <van-image
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
  background: url("http://cba.itlike.com/public/mweb/static/background/user-header2.png");
  background-size: cover;
  display: flex;
  align-content: center;
  padding: 0px 10px;
  .hear-avatar {
    width: 69px;
  }
  .head-info {
    flex: 1;
  }
}
</style>
