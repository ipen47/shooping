<template>
  <div class="order">
    <van-nav-bar title="我的订单" left-arrow @click-left="$router.go(-1)" />

    <van-tabs v-model="active" sticky>
      <van-tab name="all" title="全部"></van-tab>
      <van-tab name="payment" title="待支付"></van-tab>
      <van-tab name="delivery" title="待发货"></van-tab>
      <van-tab name="received" title="待收货"></van-tab>
      <van-tab name="comment" title="待评价"></van-tab>
    </van-tabs>
    <OrderListItem
      v-for="item in list"
      :key="item.order_id"
      :item="item"
    ></OrderListItem>
  </div>
</template>

<script>
import OrderListItem from "@/components/OrderListItem.vue";
export default {
  name: "OrderPage",
  components: { OrderListItem },
  data() {
    return {
      active: this.$route.query.dataType || "all",
      page: 1,
      list: [],
    };
  },
  created() {},
  methods: {
    getOrderData(active) {
      //发送api请求获取后台数据（此时使用假数据）
      const data = [
        {
          orderId: 1,
          create_time: "2023-07-03 04:43:06",
          state_text: "待评价",
          goods_image:
            "https://peng12.oss-cn-beijing.aliyuncs.com/shopping/product.jpg",
          goods_name: "Apple iPhone 14 ProMax 265G 银色 移动通信sfsdfsdf",
          total_pay_price: 39595.0,
          total_num: 4,
          total_price: 1004556.0,
          order_status: 30,
          pay_status: 0,
          delivery_status: 0,
        },
        {
          orderId: 2,
          create_time: "2023-07-03 04:43:06",
          state_text: "待支付",
          goods_image:
            "https://peng12.oss-cn-beijing.aliyuncs.com/shopping/product.jpg",
          goods_name: "Apple iPhone 14 ProMax 265G 银色 移动通信sfsdfsdf",
          total_pay_price: 39595.0,
          total_num: 4,
          total_price: 1004556.0,
          order_status: 10,
          pay_status: 10,
          delivery_status: 10,
        },
        {
          orderId: 3,
          create_time: "2023-07-03 04:43:06",
          state_text: "待收货",
          goods_image:
            "https://peng12.oss-cn-beijing.aliyuncs.com/shopping/product.jpg",
          goods_name: "Apple iPhone 14 ProMax 265G 银色 移动通信sfsdfsdf",
          total_pay_price: 39595.0,
          total_num: 4,
          total_price: 1004556.0,
          order_status: 10,
          pay_status: 0,
          delivery_status: 20,
        },
        {
          orderId: 4,
          create_time: "2023-07-03 04:43:06",
          state_text: "待发货",
          goods_image:
            "https://peng12.oss-cn-beijing.aliyuncs.com/shopping/product.jpg",
          goods_name: "Apple iPhone 14 ProMax 265G 银色 移动通信sfsdfsdf",
          total_pay_price: 39595.0,
          total_num: 4,
          total_price: 1004556.0,
          order_status: 10,
          pay_status: 0,
          delivery_status: 10,
        },
      ];
      if (active === "payment") {
        this.list = data.filter((item) => item.state_text === "待支付");
      } else if (active === "delivery") {
        this.list = data.filter((item) => item.state_text === "待发货");
      } else if (active === "received") {
        this.list = data.filter((item) => item.state_text === "待收货");
      } else if (active === "comment") {
        this.list = data.filter((item) => item.state_text === "待评价");
      } else {
        this.list = data;
      }
    },
  },
  watch: {
    active: {
      immediate: true,
      handler() {
        this.getOrderData(this.active);
      },
    },
  },
};
</script>

<style lang="less" scoped>
.order {
  background-color: #fafafa;
}
.van-tabs {
  position: sticky;
  top: 0;
}
</style>
