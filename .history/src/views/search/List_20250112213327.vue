<template>
  <div>
    <!-- 头部导航栏 -->
    <van-nav-bar title="商品搜索" left-arrow @click-left="$router.back(-1)" />
    <!-- 搜索框部分 -->
    <van-search
      v-model="searchValue"
      show-action
      placeholder="请输入搜索关键词"
    >
      <template #action>
        <div class="searchBtn" @click="onSearch(searchValue)">搜索</div>
      </template>
    </van-search>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped></style>
