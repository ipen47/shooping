<template>
  <div class="cart">
    <div v-if="isLogin && cartList.length > 0"></div>
    <div v-else class="empty-cart"></div>
  </div>
</template>

<script>
export default { name: "CartIndex" };
</script>

<style></style>
