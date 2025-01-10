<template>
  <div class="home">
    <!-- 顶部导航 -->
    <van-nav-bar title="智慧商城" fixed />
    <!-- 搜索 -->
    <van-search v-model="value" placeholder="请输入搜索关键词" shape="round"
    background="#f1f1f2" @click="router.push("/searvh")" />
  </div>
</template>

<script>
export default {
  name: "HomeIndex",
  data() {
    return {
      value: "",
    };
  },
  methods: {},
};
</script>

<style lang="less" scoped>
//导航头部
.van-nav-bar {
  z-index: 999;
  background-color: #c21401;
  ::v-deep .van-nav-bar__title {
    color: #fff;
  }
}
//搜索
.van-search {
  position: fixed;
  top: 46px;
  width: 100%;
  z-index: 999;
}
</style>
