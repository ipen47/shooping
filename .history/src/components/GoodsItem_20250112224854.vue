<template>
  <div class="goods-item" @click="$router.push('/prodetail')">
    <div class="item-left">
      <van-image
        width="100%"
        height="100%"
        src="https://peng12.oss-cn-beijing.aliyuncs.com/shopping/product.jpg"
      />
    </div>
    <div class="item-right">
      <div class="title text-ellipsis-2">
        {{ goodData.title }}
      </div>
      <div class="count">已售{{ goodData.count }}件</div>
      <div class="price">
        <span class="new">￥{{ goodData.newPrice }}</span
        ><span class="old">￥{{ goodData.oldPrice }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsItem",
  props: ["goodData"],
  created() {
    console.log("goods", this.goodData);
  },
};
</script>

<style lang="less" scoped>
.goods-item {
  display: flex;
  height: 148px;
  margin-bottom: 6px;
  padding: 10px;
  background-color: #fff;
  .item-left {
    width: 127px;
  }
  .item-right {
    flex: 1;
    font-size: 14px;
    line-height: 1.3;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    .count {
      color: #999;
      font-size: 12px;
    }
    .price {
      color: #999;
      font-size: 16px;
      .new {
        color: #f03c3c;
        margin-right: 10px;
      }
      .old {
        text-decoration: line-through;
        font-size: 12px;
      }
    }
  }
}
</style>
