<template>
  <div class="cart">
    <van-nav-bar title="购物车" fixed />
    <div v-if="isLogin">
      <!-- 购物车开头 -->
      <div class="cart-title">
        <span class="all"
          >共<i>{{ cartTotals }}</i
          >件商品</span
        >
        <span v-if="isEdit" class="edit" @click="isEdit = !isEdit">
          <van-icon name="gold-coin-o" />
          结算
        </span>
        <span v-else class="edit" @click="isEdit = !isEdit">
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
          <van-checkbox
            :value="item.isChecked"
            @click="changCheck(item.goods_id)"
          ></van-checkbox>
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
                ￥<span>{{ item.goods_price }}</span>
              </div>
              <CountBox
                :value="item.goods_num"
                @input="(value) => changeCount(item.goods_id, value)"
              ></CountBox>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-fixed">
        <div class="all-check" @click="changeAllCheck">
          <van-checkbox :value="isAllChecked" icon-size="24"></van-checkbox>
          全选
        </div>
        <div class="all_total">
          <div class="price">
            <span>合计：</span>
            <span
              >¥ <i class="totalPrice">{{ selPrice }}</i></span
            >
          </div>
          <div
            v-if="!isEdit"
            class="goPay"
            @click="goPay"
            :class="{ disabled: selCount === 0 }"
          >
            结算({{ selCount }})
          </div>
          <div
            v-else
            class="delete"
            :class="{ disabled: selCount === 0 }"
            @click="handelDel"
          >
            删除
          </div>
        </div>
      </div>
    </div>
    <div v-else class="empty-cart" style="padding: 80px 30px">
      <van-empty
        class="custom-image"
        image="https://peng12.oss-cn-beijing.aliyuncs.com/shopping/empty.png"
        description=" 您的购物车是空的, 快去逛逛吧"
      >
        <van-button
          round
          color="#fa2c20"
          class="bottom-button"
          @click="$router.push('/')"
          >去逛逛</van-button
        >
      </van-empty>
    </div>
  </div>
</template>

<script>
import CountBox from "@/components/CountBox.vue";
import { mapState, mapGetters } from "vuex";
export default {
  name: "CartIndex",
  components: {
    CountBox,
  },
  data() {
    return {
      isLogin: true,

      isEdit: false,
    };
  },
  created() {
    this.getCartList();
  },
  computed: {
    ...mapState("cart", ["cartList"]),
    ...mapGetters("cart", [
      "selectedCartList",
      "cartTotals",
      "selCount",
      "selPrice",
      "isAllChecked",
    ]),
  },
  watch: {
    isEdit(value) {
      if (value) {
        this.$store.commit("cart/CHANGE_AllCHECK", false);
      } else {
        this.$store.commit("cart/CHANGE_AllCHECK", true);
      }
    },
  },
  methods: {
    getCartList() {
      //获取购物车列表数据
      if (!this.$store.getters.token) {
        this.isLogin = false;
        return;
      }
      this.$store.dispatch("cart/getCartList");
    },
    //改变商品选择状态
    changCheck(id) {
      this.$store.commit("cart/CHANGE_CHECK", id);
    },
    //改变商品全选状态
    changeAllCheck() {
      this.$store.commit("cart/CHANGE_AllCHECK", !this.isAllChecked);
    },
    //改变商品数量
    changeCount(goods_id, goods_num) {
      this.$store.commit("cart/CHANGE_COUNT", { goods_id, goods_num });
    },
    //订单结算
    goPay() {
      //判断有无选中商品
      console.log(this.selCount);
      if (this.selCount > 0) {
        this.$router.push({
          path: "/pay",
          query: {
            mode: "cart", //模式：购物车下单传cart,商品详情立即购买下单传递buyNow
            cartIds: this.selectedCartList
              .map((item) => item.goods_id)
              .join(","),
          },
        });
      }
    },
    handelDel() {
      this.$toast.fail("暂时不可操作");
    },
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
  .footer-fixed {
    position: fixed;
    width: 100%;
    height: 60px;
    bottom: 50px;
    padding: 0 10px;
    line-height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;
    background-color: #fff;
    border-bottom: 1px solid #ccc;
    .all-check {
      display: flex;
      align-items: center;
      .van-checkbox {
        margin-right: 5px;
      }
    }
    .all_total {
      display: flex;
      line-height: 36px;
      .price {
        margin-right: 10px;
        font-size: 14px;
        i {
          color: #fa2209;
          font-size: 18px;
          font-style: normal;
        }
      }
      .goPay,
      .delete {
        min-width: 100px;
        height: 36px;
        line-height: 36px;
        text-align: center;
        border-radius: 18px;
        background-color: #fa2f21;
        font-size: 14;
        color: #fff;
        &.disabled {
          background-color: #ff9779;
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
