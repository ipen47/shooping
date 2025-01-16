<template>
  <div>
    <!-- 头部导航栏 -->
    <van-nav-bar title="商品列表" left-arrow @click-left="$router.back(-1)" />
    <!-- 搜索框部分 -->
    <van-search
      v-model="searchValue"
      shape="round"
      show-action
      placeholder="请输入搜索关键词"
    >
      <template #action> <van-icon name="apps-o" class="tool" /> </template>
    </van-search>
    <div class="sort">
      <div class="sort-item"></div>
      <div class="sort-item"></div>
      <div class="sort-item"></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.tool {
  font-size: 24px;
  height: 40px;
  line-height: 40px;
}
.sort {
  display: flex;
  height: 36px;
  .sort-item {
    flex: 1;
  }
}
</style>
