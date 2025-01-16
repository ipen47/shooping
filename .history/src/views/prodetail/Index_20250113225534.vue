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
          <span class="now">￥0.01</span>
          <span class="oldprice">￥6600.00</span>
        </div>
        <div class="sellcount">已售 1001 件</div>
      </div>
      <div class="msg text-ellipsis-2">
        三星手机SAMSUNG Galaxy S238GB+256GB超
        视觉夜拍系统超清夜景悠雾紫5G手机游戏拍照购物
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
    <!-- 商品评价 -->
    <div class="comment">
      <div class="comment-title">
        <div class="left">商品评价 ({{ 5 }}条)</div>
        <div class="right">查看更多 <van-icon name="arrow" /></div>
      </div>
      <div class="comment-list">
        <div
          class="comment-item"
          v-for="item in commentList"
          :key="item.comment_id"
        >
          <div class="top">
            <img :src="item.user.avatar_url || defaultImg" alt="" />
            <div class="name">{{ item.user.nick_name }}</div>
            <van-rate
              :size="16"
              :value="item.score / 2"
              color="#ffd21e"
              void-icon="star"
              void-color="#eee"
            />
          </div>
          <div class="content">
            {{ item.content }}
          </div>
          <div class="time">
            {{ item.create_time }}
          </div>
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
      commentList: [
        {
          comment_id: 1,
          user: {
            avatar_url: "",
            nick_name: "李鹏",
          },
          score: 5,
          content: "质量挺不错的，挺喜欢的",
          create_time: "2023-03-21 15:01:35",
        },
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
  .info {
    padding: 10px;
  }
  .title {
    display: flex;
    justify-content: space-between;
    .now {
      color: #fa2209;
      font-size: 20px;
    }
    .oldprice {
      color: #959595;
      font-size: 16px;
      text-decoration: line-through;
      margin-left: 5px;
    }
    .sellcount {
      color: #959595;
      font-size: 16px;
      position: relative;
      top: 4px;
    }
  }
  .msg {
    font-size: 16px;
    line-height: 24px;
    margin-top: 5px;
  }
  .service {
    display: flex;
    justify-content: space-between;
    line-height: 40px;
    margin-top: 10px;
    font-size: 16px;
    background-color: #fafafa;
    .left-words {
      span {
        margin-right: 10px;
      }
      .van-icon {
        margin-right: 4px;
        color: #fa2209;
      }
    }
  }
}
</style>
