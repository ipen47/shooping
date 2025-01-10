<template>
  <div class="search">
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
    <!-- 搜索历史 -->
    <div class="search-history">
      <div class="title">
        <span>最近搜索</span>
        <van-icon @click="clearHistory" name="delete-o" />
      </div>

      <div class="list">
        <div
          class="list-item"
          v-for="(item, index) in history"
          :key="index"
          @click="onSearch(item)"
        >
          {{ item }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getHistory } from "@/utils/storage";
export default {
  name: "searchIndex",
  data() {
    return {
      searchValue: "", //输入框的值
      history: getHistory(), //历史记录
    };
  },
  methods: {
    onSearch(value) {
      const index = this.history.indexOf(value);
      if (index !== -1) {
        //存在相同值，将原有关键字移除
        this.history.splice(index, 1);
      }
      //将新的值添加到历史记录头部
      this.history.unshift(value);
    },
    //清空历史记录
    clearHistory() {
      this.history = [];
    },
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
  height: 40px;
  line-height: 40px;
  font-size: 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;
}
.list {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  padding: 0 18px;

  .list-item {
    width: 30%;
    text-align: center;
    padding: 7px;
    line-height: 15px;
    border-radius: 50px;
    background: #fff;
    font-size: 13px;
    border: 1px solid #efefef;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin-bottom: 10px;
  }
}
</style>
