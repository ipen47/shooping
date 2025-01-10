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
        <div class="searchBtn" @click="onSearch">搜索</div>
      </template>
    </van-search>
    <!-- 搜索历史 -->
    <div class="search-history">
      <div class="title">
        <span>最近搜索</span>
        <van-icon name="delete-o" size="16" />
      </div>
    </div>
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
  background-color: #c21401;
  color: #fff;
  padding: 0 20px;
  border-radius: 0 5px 5px 0;
  margin-right: 10px;
}
.title {
  display: flex;
  justify-content: space-between;
}
</style>
