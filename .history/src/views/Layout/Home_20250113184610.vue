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
      <van-swipe-item v-for="(img, index) in images" :key="index"
        ><van-image width="100%" height="100%" :src="img"
      /></van-swipe-item>
    </van-swipe>
    <!-- 导航 -->
    <van-grid column-num="5" icon-size="40">
      <van-grid-item
        v-for="(item, index) in 10"
        :key="index"
        icon="https://peng12.oss-cn-beijing.aliyuncs.com/shopping/nav1.png"
        text="新品首发"
        to="/category"
      />
    </van-grid>
    <!-- 主会场 -->
    <div class="main">
      <van-image
        width="100%"
        height="100%"
        src="https://peng12.oss-cn-beijing.aliyuncs.com/shopping/main.png
"
      />
    </div>
    <!-- 猜你喜欢 -->
    <div class="guess">
      <p class="guess-title">-- 猜你喜欢 --</p>
      <div class="good-list" v-for="(item, index) in 10" :key="index">
        <GoodsItem :goodData="goods"></GoodsItem>
      </div>
    </div>
  </div>
</template>

<script>
import GoodsItem from "@/components/GoodsItem.vue";
export default {
  name: "HomeIndex",
  components: {
    GoodsItem,
  },
  data() {
    return {
      value: "",
      images: [
        "https://peng12.oss-cn-beijing.aliyuncs.com/shopping/banner1.jpg",
        "https://peng12.oss-cn-beijing.aliyuncs.com/shopping/banner2.jpg",
        "https://peng12.oss-cn-beijing.aliyuncs.com/shopping/banner3.jpg",
      ],
      goods: {
        title: `搜索商品为：${this.querySearch}`,
        count: 456,
        newPrice: 3999.0,
        oldPrice: 6699.0,
      },
    };
  },
  created() {
    this.getHomeData();
  },
  methods: {
    //获取首页数据
    async getHomeData() {
      //调用后台接口
    },
  },
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
//主会场
.main {
}
//猜你喜欢
.guess-title {
  height: 40px;
  line-height: 40px;
  text-align: center;
}
//商品样式
.good-list {
  background-color: #f6f6f6;
}
</style>
