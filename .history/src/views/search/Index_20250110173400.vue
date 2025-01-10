<template>
  <div class="search">
    <!-- 头部导航栏 -->
    <van-nav-bar title="商品搜索" left-arrow @click-left="$router.back(-1)" />
    <!-- 搜索框部分 -->
    <van-search
      v-model="searchValue"
      placeholder="请输入搜索关键词"
      @search="onSearch"
    >
      <template #action>
        <van-button type="info" @click="onSearch">搜索</van-button>
      </template>
    </van-search>
  </div>
</template>

<script>
export default {
  name: "searchIndex",
  data() {
    return {
      searchValue: "",
    };
  },
  methods: {
    onSearch() {},
  },
};
</script>

<style></style>
