<template>
  <div>
    <!-- 头部导航栏 -->
    <van-nav-bar
      title="登录"
      left-text="返回"
      left-arrow
      @click-left="$router.back(-1)"
    />
  </div>
</template>

<script>
export default {
  name: "searchIndex",
};
</script>

<style></style>
