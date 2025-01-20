<template>
  <div class="cart">
    <van-nav-bar title="购物车" fixed />
    <div v-if="isLogin && cartList.length > 0"></div>
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
export default {
  name: "CartIndex",
  data() {
    return {
      islogin: false,
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
