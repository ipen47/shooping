<template>
  <div class="prodetail">
    <!-- 头部导航栏 -->
    <van-nav-bar
      title="商品详情页"
      fixed
      left-arrow
      @click-left="$router.go(-1)"
    />
    <!-- 商品详情轮播图 -->
    <van-swipe :autoplay="4000" @change="onChange">
      <van-swipe-item v-for="(img, index) in images" :key="index"
        ><van-image width="100%" height="100%" :src="img"
      /></van-swipe-item>

      <template #indicator>
        <div class="custom-indicator">{{ current + 1 }}/4</div>
      </template>
    </van-swipe>
  </div>
</template>

<script>
export default {
  name: "prodetailIndex",
  data() {
    return {
      current: 0,
      images: [
        "https://peng12.oss-cn-beijing.aliyuncs.com/shopping/O1CN01QApVo423opQ73vd1M_%21%21883737303.jpg",
        "https://peng12.oss-cn-beijing.aliyuncs.com/shopping/banner2.jpg",
        "https://peng12.oss-cn-beijing.aliyuncs.com/shopping/banner3.jpg",
      ],
    };
  },
  methods: {
    onChange(index) {
      this.current = index;
    },
  },
};
</script>

<style lang="less" scoped>
.prodetail {
  padding-top: 46px;
  ::v-deep .van-icon-arrow-left {
    color: #333;
  }
  .custom-indicator {
    position: absolute;
    right: 5px;
    bottom: 5px;
    padding: 2px 5px;
    font-size: 12px;
    background: rgba(0, 0, 0, 0.1);
  }
}
</style>
