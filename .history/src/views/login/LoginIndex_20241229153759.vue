<template>
  <div>
    <!-- 头部导航栏 -->
    <van-nav-bar
      title="登录"
      left-text="返回"
      left-arrow
      @click-left="$router.back(-1)"
    />
    <h3>手机号登录</h3>
    <p></p>
  </div>
</template>

<script>
export default {
  name: "LoginIndex",
};
</script>

<style></style>
