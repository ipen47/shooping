<template>
  <div class="cart">
    <van-nav-bar title="购物车" fixed />
    <div v-if="isLogin">
      <!-- 购物车开头 -->
      <div class="cart-title">
        <span class="all"
          >共<i>{{ cartTotal }}</i
          >件商品</span
        >
        <span class="edit" @click="isEdit = !isEdit">
          <van-icon name="edit" />
          编辑
        </span>
      </div>
      <!-- 购物车列表 -->
      <div class="cart-list">
        <div
          class="cart-list-item"
          v-for="item in cartList"
          :key="item.goods_id"
        >
          <div class="item-left">
            <van-image
              width="100%"
              height="100%"
              src="https://peng12.oss-cn-beijing.aliyuncs.com/shopping/product.jpg"
            />
          </div>
          <div class="item-right">
            <div class="title text-ellipsis-2">{{ item.goods_name }}</div>
            <div class="bottom">
              <div class="price">
                ￥<span>{{ item.goods_pricr }}</span>
              </div>
              <CountBox v-model="addCount"></CountBox>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-fixed"></div>
    </div>
    <div v-else class="empty-cart" style="padding: 80px 30px">
      <van-empty
        class="custom-image"
        image="https://peng12.oss-cn-beijing.aliyuncs.com/shopping/empty.png"
        description=" 您的购物车是空的, 快去逛逛吧"
      >
        <van-button round color="#fa2c20" class="bottom-button"
          >去逛逛</van-button
        >
      </van-empty>
    </div>
  </div>
</template>

<script>
import CountBox from "@/components/CountBox.vue";
export default {
  name: "CartIndex",
  components: {
    CountBox,
  },
  data() {
    return {
      isLogin: true,
      cartTotal: 5,
      isEdit: false,
      addCount: 4,
      cartList: [
        {
          goods_id: 1,
          goods_name:
            "新Pad14英寸12+128远峰蓝 M6平板电脑智能安卓娱乐十分有趣哈哈哈",
          goods_pricr: 1083.0,
        },
        {
          goods_id: 2,
          goods_name:
            "新Pad14英寸12+128远峰蓝 M6平板电脑智能安卓娱乐十分有趣哈哈哈",
          goods_pricr: 1086.08,
        },
        {
          goods_id: 3,
          goods_name:
            "新Pad14英寸12+128远峰蓝 M6平板电脑智能安卓娱乐十分有趣哈哈哈",
          goods_pricr: 1247.04,
        },
        {
          goods_id: 4,
          goods_name:
            "新Pad14英寸12+128远峰蓝 M6平板电脑智能安卓娱乐十分有趣哈哈哈",
          goods_pricr: 2443.8,
        },
        {
          goods_id: 5,
          goods_name:
            "新Pad14英寸12+128远峰蓝 M6平板电脑智能安卓娱乐十分有趣哈哈哈",
          goods_pricr: 99.99,
        },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
// 主题 padding
.cart {
  padding-top: 46px;
  padding-bottom: 100px;
  background-color: #f5f5f5;
  min-height: 100vh;
  .cart-title {
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
    font-size: 14px;
    .all {
      i {
        font-style: normal;
        margin: 0 2px;
        color: #fa2209;
        font-size: 16px;
      }
    }
    .edit {
      .van-icon {
        font-size: 18px;
      }
    }
  }
  .cart-list-item {
    margin: 0 10px 10px 10px;
    padding: 10px;
    display: flex;

    background-color: #ffffff;
    border-radius: 5px;
    .item-left {
      width: 100px;
      height: 100px;
    }
    .item-right {
      flex: 1;
      width: 210px;
      padding: 10px 10px;
      font-size: 14px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .bottom {
        display: flex;
        justify-content: space-between;
        .price {
          display: flex;
          align-items: flex-end;
          color: #fa2209;
          font-size: 12px;
          span {
            font-size: 16px;
          }
        }
      }
    }
  }
}
//空购物车
.custom-image ::v-deep .van-empty__image {
  width: 140px;
  height: 120px;
}
.bottom-button {
  width: 160px;
  height: 40px;
}
</style>
