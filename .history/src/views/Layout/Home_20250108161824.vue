<template>
  <div class="home">
    <!-- 顶部导航 -->
    <van-nav-bar title="智慧商城" fixed />
    <!-- 搜索 -->
    <van-search v-model="value" placeholder="请输入搜索关键词" />
  </div>
</template>

<script>
export default {
  name: "HomeIndex",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    onSubmit(values) {
      console.log("submit", values);
    },
  },
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
.van-searc{
  position: fixed;
  top:46px
}
</style>
