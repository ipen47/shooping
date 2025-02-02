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
        <div class="flow-num-box">
          <span>共 1 件商品，合计：</span>
          <span class="money">￥ 1620.00</span>
        </div>
        <div class="pay-detail">
          <div class="pay-total">
            <span>订单总金额</span>
            <span class="total">￥1620.00</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "payIndex",
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
  .list {
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
      padding: 10px;
      .pay-total {
        display: flex;
        justify-content: space-between;
        .total {
        }
      }
    }
  }
}
</style>
