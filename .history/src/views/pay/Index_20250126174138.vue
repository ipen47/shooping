<template>
  <div class="pay">
    <!-- 头部导航栏 -->
    <van-nav-bar
      title="订单结算台"
      fixed
      left-arrow
      @click-left="$router.go(-1)"
    />
    <!-- 地址相关 -->
    <div class="address">
      <div class="left-icon"><van-icon name="logistics" /></div>
      <div class="address-info" v-if="true">
        <div class="info-userinfo">
          <span class="name">小明</span><span class="mobile">17695123345</span>
        </div>
        <div class="info-address">
          宁夏回族自治区 银川市 西夏区 镇北堡镇华西村
        </div>
      </div>
      <div class="address-info" v-else>请选择配送地址</div>
      <div class="right-icon"><van-icon name="arrow" /></div>
    </div>
    <!-- 订单明细 -->
    <div class="pay-list">
      <div class="list">
        <div class="goods-item">
          <div class="item-left">
            <van-image
              width="100%"
              height="100%"
              src="https://peng12.oss-cn-beijing.aliyuncs.com/shopping/product.jpg"
            />
          </div>
          <div class="item-right">
            <div class="title text-ellipsis-2">
              新Pad14英寸12+128远峰蓝 M6平板电脑智能安卓娱乐十分有趣哈哈哈
            </div>
            <div class="info">
              <span class="num">x1</span>
              <span class="price">￥1620.00</span>
            </div>
          </div>
        </div>
      </div>
      <div class="flow-num-box">
        <span>共 1 件商品，合计：</span>
        <span class="money">￥ 1620.00</span>
      </div>
      <div class="pay-detail">
        <div class="pay-cell">
          <span>订单总金额:</span>
          <span class="red">￥1620.00</span>
        </div>
        <div class="pay-cell">
          <span>优惠券:</span>
          <span>无优惠券可用</span>
        </div>
        <div class="pay-cell">
          <span>配送费用:</span>
          <span v-if="false">请先选择配送地址</span>
          <span v-else class="red">+￥0.00</span>
        </div>
      </div>
      <!-- 支付方式 -->
      <div class="pay-way">
        <span class="title">支付方式</span>
        <div class="pay-cell">
          <span
            ><van-icon name="balance-o" />余额支付（可用 ¥ 6257687 元）</span
          >

          <span class="red"><van-icon name="passed" /></span>
        </div>
      </div>
      <!-- 买家留言 -->
      <div class="buytips">
        <textarea
          v-model="remark"
          placeholder="选填：买家留言（50字内）"
          cols="30"
          rows="10"
        ></textarea>
      </div>
    </div>
    <!-- 底部提交 -->
    <div class="footer-fixed">
      <div class="left">实付款：<span>￥ 1620.00</span></div>

      <div class="tipsbtn" @click="submitOrder">
        <van-button color="linear-gradient(to right, #ff6034, #ee0a24)">
          提交订单
        </van-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "payIndex",
  data() {
    return {
      remark: "",
    };
  },
};
</script>

<style lang="less" scoped>
.pay {
  padding-top: 46px;
  padding-bottom: 46px;
  ::v-deep {
    .van-nav-bar__arrow {
      color: #333;
    }
  }
  .address {
    display: flex;
    align-items: center;
    padding: 20px;
    font-size: 14px;
    color: #666;
    background: url(https://peng12.oss-cn-beijing.aliyuncs.com/shopping/border-line.png)
      bottom repeat-x;
    background-size: 60px auto;
    position: relative;
    .left-icon {
      margin-right: 20px;
    }
    .address-info {
      margin-right: 20px;
    }
    .right-icon {
      position: absolute;
      right: 20px;
      margin-left: 20px;
    }
  }
  .goods-item {
    height: 100px;
    padding: 10px;
    margin-bottom: 6px;
    background-color: #fff;
    display: flex;
    .item-left {
      width: 100px;
    }
    .item-right {
      flex: 1;
      font-size: 14px;
      line-height: 1.3;

      display: flex;
      margin-left: 20px;
      flex-direction: column;
      justify-content: space-evenly;
      color: #333;
      .info {
        display: flex;
        justify-content: space-between;
        margin-top: 10px;
        .price {
          color: #fa2209;
        }
      }
    }
  }
  .flow-num-box {
    display: flex;
    justify-content: flex-end;
    padding: 10px;
    font-size: 14px;
    border-bottom: 1px solid #efefef;
    .money {
      color: #fa2209;
    }
  }
  .pay-detail {
    border-bottom: 1px solid #efefef;
    .pay-cell {
      padding: 10px 12px;
      font-size: 14px;

      color: #333;
      display: flex;
      justify-content: space-between;
      .red {
        color: #fa2209;
      }
    }
  }
  .pay-way {
    font-size: 14px;
    padding: 10px 12px;
    border-bottom: 1px solid #efefef;
    color: #333;
    .title {
      line-height: 30px;
    }
    .pay-cell {
      padding: 10px 0px;
      font-size: 14px;

      color: #333;
      display: flex;
      justify-content: space-between;
      .red {
        color: #fa2209;
      }
    }
    .van-icon {
      font-size: 20px;
      margin-right: 5px;
    }
  }
  .buytips {
    display: block;
    textarea {
      display: block;
      width: 100%;
      border: none;
      font-size: 14px;
      padding: 12px;
      height: 100px;
    }
  }
  .footer-fixed {
    position: fixed;
    background-color: #fff;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 46px;
    line-height: 46px;
    border-top: 1px solid #efefef;
    font-size: 14px;
    display: flex;
    .left {
    }
  }
}
</style>
