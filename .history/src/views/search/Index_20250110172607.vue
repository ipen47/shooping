<template>
  <div class="search">
    <!-- 头部导航栏 -->
    <van-nav-bar title="商品搜索" left-arrow @click-left="$router.back(-1)" />
    <!-- 搜索框部分 -->
    <van-search
      v-model="value"
      show-action
      label="地址"
      placeholder="请输入搜索关键词"
      @search="onSearch"
    >
      <template #action>
        <div @click="onSearch">搜索</div>
      </template>
    </van-search>
  </div>
</template>

<script>
export default {
  name: "searchIndex",
};
</script>

<style></style>
