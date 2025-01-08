<template>
  <div>
    <!-- 头部导航栏 -->
    <van-nav-bar
      title="登录"
      left-text="返回"
      left-arrow
      @click-left="$router.back(-1)"
    />
    <div class="title">
      <h3>手机号登录</h3>
      <p>未注册的手机号登录后会自动注册</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginIndex",
};
</script>

<style lang="less">
.title {
  p {
    color: #666;
  }
}
</style>
