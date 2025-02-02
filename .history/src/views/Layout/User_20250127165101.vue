<template>
  <div class="user">
    <div class="head-page" v-if="isLogin">
      <div class="hear-avatar">
        <van-image width="100%" height="100%" :src="item.goods_image" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserIndex",
};
</script>

<style></style>
