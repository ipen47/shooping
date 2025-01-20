<template>
  <div class="cart">
    <van-nav-bar title="购物车" fixed />
    <div v-if="isLogin && cartList.length > 0"></div>
    <div v-else class="empty-cart" style="padding: 80px 30px">
      <van-empty
        class="custom-image"
        image="https://img01.yzcdn.cn/vant/custom-empty-image.png"
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
export default { name: "CartIndex" };
</script>

<style lang="less" scoped>
//空购物车
.custom-image .van-empty__image {
  width: 90px;
  height: 90px;
}
.bottom-button {
  width: 160px;
  height: 40px;
}
</style>
