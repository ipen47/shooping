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
        <div class="custom-indicator">
          {{ current + 1 }}/{{ images.length }}
        </div>
      </template>
    </van-swipe>
    <!-- 商品说明 -->
    <div class="info">
      <div class="title">
        <div class="price">
          <span class="now">￥{{ detail.goods_price_min }}</span>
          <span class="oldprice">￥{{ detail.goods_price_max }}</span>
        </div>
        <div class="sellcount">已售 {{ detail.goods_sales }} 件</div>
      </div>
      <div class="msg text-ellipsis-2">
        {{ detail.goods_name }}
      </div>

      <div class="service">
        <div class="left-words">
          <span><van-icon name="passed" />七天无理由退货</span>
          <span><van-icon name="passed" />48小时发货</span>
        </div>
        <div class="right-icon">
          <van-icon name="arrow" />
        </div>
      </div>
    </div>
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
        "https://peng12.oss-cn-beijing.aliyuncs.com/shopping/O1CN018FmaIG24vzIfa0s72_%21%212217241077454.png",
        "https://peng12.oss-cn-beijing.aliyuncs.com/shopping/O1CN014VNcLO24vzIe2076a_%21%212217241077454.png",
        "https://peng12.oss-cn-beijing.aliyuncs.com/shopping/O1CN011T4b8424vzIduJ3sw_%21%212217241077454.png",
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
