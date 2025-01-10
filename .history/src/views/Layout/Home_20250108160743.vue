<template>
  <div class="home">
    <van-nav-bar title="智慧商城" fixed />
  </div>
</template>

<script>
export default {
  name: "HomeIndex",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    onSubmit(values) {
      console.log("submit", values);
    },
  },
};
</script>

<style lang="less" scoped>
.van-nav-bar {
  background-color: #c21401;
}
.van-nav-bar__title {
  color: #fff;
}
</style>
