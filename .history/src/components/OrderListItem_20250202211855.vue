<template>
  <div class="order-list-item">
    <div class="item-head">
      <div class="time">2023-07-03 04:43:06</div>
      <div class="status">待发货</div>
    </div>
    <div class="goods">
      <div class="goods-img">
        <van-image
          width="100%"
          height="100%"
          src="https://peng12.oss-cn-beijing.aliyuncs.com/shopping/product.jpg"
        />
      </div>
      <div class="goods-content text-ellipsis-2">
        Apple iPhone 14 ProMax 265G 银色 移动通信
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.order-list-item {
  margin: 10px auto;
  width: 94%;
  padding: 15px;
  background-color: #ffffff;
  box-shadow: 0 0.5px 2px 0 rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  color: #333;
  font-size: 13px;
  .item-head {
    height: 24px;
    line-height: 24px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    .status {
      color: #fa2209;
    }
  }
}
</style>
