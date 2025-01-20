<template>
  <div class="cart">
    <div v-if="isLogin && cartList.length > 0"></div>
    <div v-else class="empty-cart">
      <van-empty description="描述文字">
        <van-button round type="danger" class="bottom-button">按钮</van-button>
      </van-empty>
    </div>
  </div>
</template>

<script>
export default { name: "CartIndex" };
</script>

<style></style>
