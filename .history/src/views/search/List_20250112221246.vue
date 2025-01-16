<template>
  <div>
    <!-- 头部导航栏 -->
    <van-nav-bar title="商品列表" left-arrow @click-left="$router.back(-1)" />
    <!-- 搜索框部分 -->
    <van-search shape="round" show-action :value="querySearch">
      <template #action> <van-icon name="apps-o" class="tool" /> </template>
    </van-search>
    <div class="sort">
      <div class="sort-item" @click="loadDataBySort((sort = 'all'))">综合</div>
      <div class="sort-item" @click="loadDataBySort((sort = 'count'))">
        销量
      </div>
      <div class="sort-item" @click="loadDataBySort((sort = 'price'))">
        价格
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
export default {
  data() {
    return {
      sort: "",
    };
  },
  computed: {
    querySearch() {
      return this.$route.params.search;
    },
  },
  methods: {
    //根据排序条件筛选
    loadDataBySort(sort) {
      //调用排序api
    },
  },
};
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
  line-height: 36px;
  .sort-item {
    text-align: center;
    font-size: 16px;
    flex: 1;
  }
}
</style>
