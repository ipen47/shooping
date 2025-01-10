<template>
  <div class="home">
    <!-- 顶部导航 -->
    <van-nav-bar title="智慧商城" fixed />
    <!-- 搜索 -->
    <van-search
      v-model="value"
      placeholder="请输入搜索关键词"
      shape="round"
      background="#f1f1f2"
      @click="$router.push('/search')"
    />
    <!-- 轮播图 -->
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(item, index) in images" :key="index"
        ><van-image
          width="100%"
          height="100%"
          src="https://img01.yzcdn.cn/vant/cat.jpeg"
      /></van-swipe-item>
      <van-swipe-item>2</van-swipe-item>
      <van-swipe-item>3</van-swipe-item>
      <van-swipe-item>4</van-swipe-item>
    </van-swipe>
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
.home {
  padding-top: 100px;
  padding-bottom: 50px;
}
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
//轮播图
.my-swipe .van-swipe-item {
  color: #fff;
  height: 185px;

  background-color: #39a9ed;
}
</style>
