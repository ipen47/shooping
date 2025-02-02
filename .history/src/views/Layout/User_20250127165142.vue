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
    </div>
  </div>
</template>

<script>
export default {
  name: "UserIndex",
};
</script>

<style lang="less" scoped></style>
