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
          v-model="telphone"
          type="tel"
          required
          label="手机号"
          placeholder="请输入手机号"
          style="margin-bottom: 40px"
        />
        <van-field
          v-model="picCode"
          center
          label="图形验证码"
          placeholder="请输入图形验证码"
          required
          style="margin-bottom: 40px"
        >
          <template #button>
            <div class="img">
              <van-image
                fit="fill"
                width="100%"
                height="100%"
                src="https://peng12.oss-cn-beijing.aliyuncs.com/code.png
"
              />
            </div>
          </template>
        </van-field>
        <van-field
          v-model="magCode"
          center
          clearable
          label="短信验证码"
          placeholder="请输入短信验证码"
          required
          style="margin-bottom: 40px"
        >
          <template #button>
            <van-button
              v-if="totalSecond === second"
              size="small"
              type="primary"
              @click="getMsgCode"
              >发送验证码</van-button
            >
            <sapn v-else>{{ second + "秒后重新发送" }}</sapn>
          </template>
        </van-field>
      </van-cell-group>
      <van-button
        round
        type="info"
        block
        style="margin: 100px 0px"
        color="#ff9e15"
        @click="login"
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
      telphone: "",
      picCode: "",
      magCode: "",
      //倒计时数据
      totalSecond: 60, //总秒数
      second: 60, //倒计时的秒数
      timer: null,
    };
  },
  created() {
    this.$toast.success("欢迎进入登录页面");
  },
  methods: {
    //获取图形验证码
    getPicCode() {
      //调用api接口
    },
    //获取短信验证码
    getMsgCode() {
      if (!this.validFn()) {
        return;
      }
      //调用api接口
      //倒计时
      this.second--;
      this.timer = setInterval(() => {
        this.second--;
        if (this.second <= 0) {
          clearInterval(this.timer);
          this.second = this.totalSecond;
          this.timer = null;
        }
      }, 1000);
    },
    login() {
      if (!this.validFn()) {
        return;
      }
      if (!/^\d{4}$/.test(this.magCode)) {
        this.$toast("请输入正确的手机验证码");
      }
      //调用api接口
    },
    //校验输入框内容
    validFn() {
      if (!/^1[3-9]\d{9}$/.test(this.telphone)) {
        this.$toast("请输入正确手机号");
        return false;
      }
      if (!/^\w{4}$/.test(this.picCode)) {
        this.$toast("请输入正确图形验证码");
        return false;
      }

      return true;
    },
  },
  destroyed() {
    clearInterval(this.timer);
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
  width: 70px;
  height: 35px;
}
</style>
