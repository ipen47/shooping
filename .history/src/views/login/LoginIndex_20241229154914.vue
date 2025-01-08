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
    <van-cell-group>
      <van-field
        v-model="tel"
        required
        label="手机号"
        placeholder="请输入手机号"
        error-message="手机号格式错误"
      />
    </van-cell-group>
  </div>
</template>

<script>
export default {
  name: "LoginIndex",
  data() {
    return {
      tel: "",
    };
  },
};
</script>

<style lang="less">
.title {
  padding: 30px 20px;
  h3 {
    font-size: 25px;
  }

  p {
    margin-top: 10px;
    color: #a4aeb6;
  }
}
</style>
