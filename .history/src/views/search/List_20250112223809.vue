<template>
  <div>
    <!-- 头部导航栏 -->
    <van-nav-bar title="商品列表" left-arrow @click-left="$router.back(-1)" />
    <!-- 搜索框部分 -->
    <van-search shape="round" show-action :value="querySearch || '商品搜索'">
      <template #action> <van-icon name="apps-o" class="tool" /> </template>
    </van-search>
    <div class="sort">
      <div class="sort-item" @click="loadDataBySort((sort = 'all'))">综合</div>
      <div class="sort-item" @click="loadDataBySort((sort = 'count'))">
        销量
      </div>
      <div class="sort-item" @click="loadDataBySort((sort = 'price'))">
        价格
      </div>
    </div>
    <!-- 商品信息 -->
    <GoodsItem :goods="goods[]"></GoodsItem>
  </div>
</template>

<script>
import GoodsItem from "@/components/GoodsItem.vue";
import { computed } from "vue";
export default {
  components: {
    GoodsItem,
  },
  data() {
    return {
      sort: "",
      goods: [
        {
          title:
            "三星手机SAMSUNG Ga1aXys238GB+256GB超视觉夜拍系统超清夜景悠雾紫5G手机游戏拍照旗舰机s23",
          count: 456,
          newPrice: 3999.0,
          oldPrice: 6699.0,
        },
        {
          title:
            "华为手机SAMSUNG Ga1aXys238GB+256GB超视觉夜拍系统超清夜景悠雾紫5G手机游戏拍照旗舰机s23",
          count: 1004,
          newPrice: 3899.0,
          oldPrice: 6689.0,
        },
        {
          title:
            "苹果手机SAMSUNG Ga1aXys238GB+256GB超视觉夜拍系统超清夜景悠雾紫5G手机游戏拍照旗舰机s23",
          count: 598,
          newPrice: 4999.0,
          oldPrice: 7699.0,
        },
        {
          title:
            "Vivo手机SAMSUNG Ga1aXys238GB+256GB超视觉夜拍系统超清夜景悠雾紫5G手机游戏拍照旗舰机s23",
          count: 104,
          newPrice: 3799.0,
          oldPrice: 6799.0,
        },
      ],
    };
  },
  computed: {
    querySearch() {
      return this.$route.query.search;
    },
  },
  created() {
    console.log(this.$route.query.search);
  },
  methods: {
    loadGoodsData() {
      if(this.querySearch="手机"){
        this.goods={
          title:
            "三星手机SAMSUNG Ga1aXys238GB+256GB超视觉夜拍系统超清夜景悠雾紫5G手机游戏拍照旗舰机s23",
          count: 456,
          newPrice: 3999.0,
          oldPrice: 6699.0,
        },
      }
    },
    //根据排序条件筛选
    loadDataBySort(sort) {
      //调用排序api
    },
  },
};
</script>

<style lang="less" scoped>
.tool {
  font-size: 24px;
  height: 40px;
  line-height: 40px;
}
.sort {
  display: flex;
  height: 36px;
  line-height: 36px;
  .sort-item {
    text-align: center;
    font-size: 16px;
    flex: 1;
  }
}
</style>
