<template>
  <div class="home">
    <!-- 顶部导航 -->
    <van-nav-bar title="智慧商城" fixed />
    <!-- 搜索 -->
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
.van-nav-bar {
  background-color: #c21401;
  ::v-deep .van-nav-bar__title {
    color: #fff;
  }
}
</style>
