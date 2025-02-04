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
    <div class="head-page" v-else @click="$router.push('/login')">
      <div class="hear-avatar">
        <van-image
          round
          width="100%"
          height="100%"
          src="https://peng12.oss-cn-beijing.aliyuncs.com/shopping/default-avatar.png"
        />
      </div>
      <div class="head-info">
        <div class="phone">未登录</div>
        <div class="words">点击登录账号</div>
      </div>
    </div>
    <div class="my-account">
      <div class="my-account-item" style="margin-left: 20px">
        <span>4784295.12</span> <span>账户余额</span>
      </div>
      <div class="my-account-item"><span>0</span> <span>积分</span></div>
      <div class="my-account-item"><span>0</span> <span>积分</span></div>
      <div class="my-account-item">
        <van-icon name="balance-pay" /> <span>我的钱包</span>
      </div>
    </div>
    <div class="order-navbar">
      <div
        class="order-navbar-item"
        @click="$router.push('/myorder?dataType=all')"
      >
        <van-icon name="balance-list-o" />
        <span>全部订单</span>
      </div>
      <div
        class="order-navbar-item"
        @click="$router.push('/myorder?dataType=payment')"
      >
        <van-icon name="clock-o" />
        <span>待支付</span>
      </div>
      <div
        class="order-navbar-item"
        @click="$router.push('/myorder?dataType=delivery')"
      >
        <van-icon name="logistics" />
        <span>待发货</span>
      </div>
      <div
        class="order-navbar-item"
        @click="$router.push('/myorder?dataType=received')"
      >
        <van-icon name="send-gift-o" />
        <span>待收货</span>
      </div>
    </div>
    <div class="service">
      <div class="title">我的服务</div>
      <div class="content">
        <div class="content-item" @click="$router.push('/address')">
          <van-icon name="records" />
          <span>收货地址</span>
        </div>
        <div class="content-item">
          <van-icon name="gift-o" />
          <span>领券中心</span>
        </div>
        <div class="content-item">
          <van-icon name="gift-card-o" />
          <span>优惠券</span>
        </div>
        <div class="content-item">
          <van-icon name="question-o" />
          <span>我的帮助</span>
        </div>
        <div class="content-item">
          <van-icon name="balance-o" />
          <span>我的积分</span>
        </div>
        <div class="content-item">
          <van-icon name="refund-o" />
          <span>退换/售后</span>
        </div>
      </div>
    </div>
    <div class="logout-btn">
      <van-button type="default" round block @click="logout"
        >退出登录</van-button
      >
    </div>
    <div class="log">
      <p>客服电话 789-677-6757 工作时间 9:00-18:00</p>
      <p>关爱未成年举报热线 400-886-8980 工作时间 9:00-18:00</p>
      <p>推荐算法举报与老年人举报渠道同上</p>
      <p>人力资源服务许可证 | 营业执照 | 朝阳区人社局监督电话</p>
    </div>
  </div>
</template>

<script>
import { removeInfo } from "@/utils/storage";
export default {
  name: "UserIndex",
  data() {
    return {
      isLogin: this.$store.getters.token,
    };
  },
  created() {
    this.getAccountData();
  },
  methods: {
    getAccountData() {},
    logout() {
      // 弹确认框
      this.$dialog
        .confirm({
          title: "温馨提示",
          message: "此时需要先登录才能继续操作哦",
          confirmButtonText: "去登陆",
          cancelButtonText: "再逛逛",
        })
        .then(() => {
          this.$router.replace({
            path: "/login",
            query: {
              backUrl: this.$route.fullPath,
            },
          });
        })
        .catch(() => {});
      removeInfo();
    },
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
  background: #3c3c3c;
  background-size: cover;
  display: flex;
  align-items: center;

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
    .words {
      font-size: 14px;
    }
  }
}
.my-account {
  display: flex;
  background-color: #fff;
  padding: 20px 0;
  font-size: 14px;
  .my-account-item {
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    span:first-child {
      margin-bottom: 5px;
      color: #ff0000;
      font-size: 16px;
    }
    .van-icon {
      font-size: 24px;
      margin-bottom: 5px;
    }
  }
}
.order-navbar {
  display: flex;
  padding: 15px 0;
  margin: 10px;
  font-size: 14px;
  background-color: #fff;
  border-radius: 5px;
  .order-navbar-item {
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .van-icon {
      font-size: 24px;
      margin-bottom: 5px;
    }
  }
}
.service {
  font-size: 14px;
  background-color: #fff;
  border-radius: 5px;
  margin: 10px;
  .title {
    height: 50px;
    line-height: 50px;
    padding: 0 15px;
    font-size: 16px;
  }
  .content {
    display: flex;
    flex-wrap: wrap;
    font-size: 14px;
    background-color: #fff;
    border-radius: 5px;
    .content-item {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 25%;
      margin-bottom: 20px;

      .van-icon {
        font-size: 24px;
        margin-bottom: 5px;
        color: #ff3800;
      }
    }
  }
}
.logout-btn {
  padding: 10px;
}
.log {
  margin-top: 20px;
  text-align: center;
  font-size: 10px;
  color: rgb(190, 193, 195);
  p {
    margin: 5px 0px;
  }
}
</style>
