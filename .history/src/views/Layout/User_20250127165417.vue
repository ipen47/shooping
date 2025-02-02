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
};
</script>

<style lang="less" scoped>
.head-page {
  display: flex;
  .hear-avatar {
    width: 69px;
  }
}
</style>
