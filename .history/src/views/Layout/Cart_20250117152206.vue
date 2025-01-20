<template>
  <div class="cart">
    <div v-if="isLogin && cartList.length > 0"></div>
    <div v-else class="empty-cart">
      <van-empty description=" 您的购物车是空的, 快去逛逛吧">
        <van-button round type="danger" class="bottom-button"
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
.bottom-button {
  width: 160px;
  height: 40px;
}
</style>
