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
    <div class="container">
      <van-cell-group>
        <van-field
          v-model="tel"
          type="tel"
          required
          label="手机号"
          placeholder="请输入手机号"
          error-message="手机号格式错误"
        />
        <van-field
          v-model="sms"
          center
          clearable
          label="图形验证码"
          placeholder="请输入图形验证码"
          required
          error-message="请输入图形验证码"
        >
          <template #button>
            <van-button size="small" type="primary">发送验证码</van-button>
          </template>
        </van-field>
        <van-field
          v-model="sms"
          center
          clearable
          label="短信验证码"
          placeholder="请输入短信验证码"
          required
          error-message="请输入短信验证码"
        >
          <template #button>
            <van-image
                fit="contain"
                class="imag"
                src="https://img01.yzcdn.cn/vant/cat.jpeg"
              />
          </template>
        </van-field>
      </van-cell-group>
      <van-button
        round
        type="info"
        block
        style="margin: 100px 0px"
        color="#ff9e15"
        >登录</van-button
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginIndex",
  data() {
    return {
      tel: "",
      sms: "",
    };
  },
};
</script>

<style lang="less">
.title {
  padding: 10px 20px;
  margin: 40px 0;
  h3 {
    font-size: 25px;
  }

  p {
    margin-top: 10px;
    color: #a4aeb6;
    font-size: 15px;
  }
}
.img {
  width: 300px;
  height: 50px;
}
</style>
