<template>
  <div class="search">
    <!-- 头部导航栏 -->
    <van-nav-bar title="商品搜索" left-arrow @click-left="$router.back(-1)" />
    <!-- 搜索框部分 -->
    <van-search
      v-model="searchValue"
      show-action
      placeholder="请输入搜索关键词"
      @search="onSearch"
    >
      <template #action>
        <van-button type="info" size="small" @click="onSearch">搜索</van-button>
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

<style lang="less" scoped>
::v-deep .van-search__action {
  width: 100px;
  padding: 0 20px;
  border-radius: 0 5px 5px 0;
  margin-right: 10px;
}
</style>
