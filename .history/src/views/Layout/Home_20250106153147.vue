<template>
  <div>
    <van-button
      round
      block
      type="info"
      native-type="submit"
      to="/login"
      style="margin: auto"
      >点击登录</van-button
    >
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

<style></style>
