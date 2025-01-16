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
              :value="item.score"
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

    <!-- 商品描述 -->
    <div class="desc">
      <img :src="item" v-for="(item, index) in desc" :key="index" />
    </div>
    <!-- 底部 -->
    <div class="footer">
      <div @click="$router.push('/')" class="icon-home">
        <van-icon name="wap-home-o" />
        <span>首页</span>
      </div>
      <div @click="$router.push('/cart')" class="icon-cart">
        <span class="num" v-if="cartTotal > 0">{{ cartTotal }}</span>
        <van-icon name="shopping-cart-o" />
        <span>购物车</span>
      </div>
      <div @click="addFn" class="btn-add">加入购物车</div>
      <div @click="buyNow" class="btn-buy">立刻购买</div>
    </div>
    <!-- 加入购物车/立即购买 公用的弹层 -->
    <van-action-sheet
      v-model="showPannel"
      :title="mode === 'cart' ? '加入购物车' : '立刻购买'"
    >
      <div class="product">
        <div class="product-title">
          <div class="left">
            <img :src="detail.goods_image" alt="" />
          </div>
          <div class="right">
            <div class="price">
              <span>¥</span>
              <span class="nowprice">{{ detail.goods_price_min }}</span>
            </div>
            <div class="count">
              <span>库存</span>
              <span>{{ detail.stock_total }}</span>
            </div>
          </div>
        </div>
        <div class="num-box">
          <span>数量</span>
          <!-- v-model 本质上 :value 和 @input 的简写 -->
          <CountBox v-model="addCount"></CountBox>
        </div>

        <!-- 有库存才显示提交按钮 -->
        <div class="showbtn" v-if="detail.stock_total > 0">
          <div class="btn" v-if="mode === 'cart'" @click="addCart">
            加入购物车
          </div>
          <div class="btn now" v-else @click="goBuyNow">立刻购买</div>
        </div>

        <div class="btn-none" v-else>该商品已抢完</div>
      </div>
    </van-action-sheet>
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
      //评论列表
      commentList: [
        {
          comment_id: 1,
          user: {
            avatar_url:
              "https://peng12.oss-cn-beijing.aliyuncs.com/Blog/%E5%A4%B4%E5%83%8F/%E5%A4%B4%E5%83%8F%20%282%29.png",
            nick_name: "李鹏",
          },
          score: 5,
          content: "质量挺不错的，挺喜欢的",
          create_time: "2023-03-21 15:01:35",
        },
        {
          comment_id: 2,
          user: {
            avatar_url:
              "https://peng12.oss-cn-beijing.aliyuncs.com/Blog/%E5%A4%B4%E5%83%8F/%E5%A4%B4%E5%83%8F%20%282%29.png",
            nick_name: "李鹏",
          },
          score: 4,
          content: "质量挺不错的，挺喜欢的",
          create_time: "2023-03-21 15:01:35",
        },
        {
          comment_id: 3,
          user: {
            avatar_url:
              "https://peng12.oss-cn-beijing.aliyuncs.com/Blog/%E5%A4%B4%E5%83%8F/%E5%A4%B4%E5%83%8F%20%282%29.png",
            nick_name: "李鹏",
          },
          score: 1,
          content: "质量挺不错的，挺喜欢的",
          create_time: "2023-03-21 15:01:35",
        },
      ],
      desc: [
        "https://img.alicdn.com/imgextra/i3/2217241077454/O1CN01hp8Zbm24vzIcvFbFA_!!2217241077454.jpg",
        "https://img.alicdn.com/imgextra/i2/2217241077454/O1CN015CV7Pb24vzId3Q0WF_!!2217241077454.jpg",
        "https://img.alicdn.com/imgextra/i4/2217241077454/O1CN01DcXbHE24vzIceyZhJ_!!2217241077454.jpg",
        "https://img.alicdn.com/imgextra/i1/2217241077454/O1CN01WtrNdw24vzIcf1nH5_!!2217241077454.jpg",
        "https://img.alicdn.com/imgextra/i3/2217241077454/O1CN01k0XrMH24vzIdUVh01_!!2217241077454.jpg",
        "	https://img.alicdn.com/imgextra/i3/2217241077454/O1CN01IIPOlv24vzId3UVB1_!!2217241077454.jpg",
      ],
      //商品详情
      detail: {
        goods_image:
          "https://peng12.oss-cn-beijing.aliyuncs.com/shopping/O1CN01QApVo423opQ73vd1M_%21%21883737303.jpg",
        goods_price_min: 6520,
        stock_total: 0,
      },
      cartTotal: 0,
      showPannel: false, // 控制弹层的显示隐藏
      mode: "cart", // 标记弹层状态
      addCount: 1, // 数字框绑定的数据
    };
  },
  methods: {
    onChange(index) {
      this.current = index;
    },
    addFn() {
      this.mode = "cart";
      this.showPannel = true;
    },
    buyNow() {
      this.mode = "buyNow";
      this.showPannel = true;
    },
    //获取商品详情数据
    getShopDetails() {
      //发送请求
    },
    //获取商品评论数据
    getComments() {
      //发送请求
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
  .comment {
    padding: 10px;
  }
  .comment-title {
    display: flex;
    justify-content: space-between;
    .right {
      color: #959595;
    }
  }

  .comment-item {
    font-size: 16px;
    line-height: 30px;
    .top {
      height: 30px;
      display: flex;
      align-items: center;
      margin-top: 20px;
      img {
        width: 20px;
        height: 20px;
      }
      .name {
        margin: 0 10px;
      }
    }
    .time {
      color: #999;
    }
  }
  .desc {
    width: 100%;
    overflow: scroll;
    ::v-deep img {
      display: block;
      width: 100% !important;
    }
  }
  .footer {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 55px;
    background-color: #fff;
    border-top: 1px solid #ccc;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .icon-home,
    .icon-cart {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      font-size: 14px;
      .van-icon {
        font-size: 24px;
      }
    }
    .btn-add,
    .btn-buy {
      height: 36px;
      line-height: 36px;
      width: 120px;
      border-radius: 18px;
      background-color: #ffa900;
      text-align: center;
      color: #fff;
      font-size: 14px;
    }
    .btn-buy {
      background-color: #fe5630;
    }
  }
}
.tips {
  padding: 10px;
}

// 弹层的样式
.product {
  .product-title {
    display: flex;
    .left {
      img {
        width: 90px;
        height: 90px;
      }
      margin: 10px;
    }
    .right {
      flex: 1;
      padding: 10px;
      .price {
        font-size: 14px;
        color: #fe560a;
        .nowprice {
          font-size: 24px;
          margin: 0 5px;
        }
      }
    }
  }

  .num-box {
    display: flex;
    justify-content: space-between;
    padding: 10px;
    align-items: center;
  }

  .btn,
  .btn-none {
    height: 40px;
    line-height: 40px;
    margin: 20px;
    border-radius: 20px;
    text-align: center;
    color: rgb(255, 255, 255);
    background-color: rgb(255, 148, 2);
  }
  .btn.now {
    background-color: #fe5630;
  }
  .btn-none {
    background-color: #cccccc;
  }
}

.footer .icon-cart {
  position: relative;
  padding: 0 6px;
  .num {
    z-index: 999;
    position: absolute;
    top: -2px;
    right: 0;
    min-width: 16px;
    padding: 0 4px;
    color: #fff;
    text-align: center;
    background-color: #ee0a24;
    border-radius: 50%;
  }
}
</style>
