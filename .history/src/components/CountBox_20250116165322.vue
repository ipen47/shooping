<template>
  <div class="count"><van-stepper v-model="value" /></div>
</template>

<script>
export default {
  name: "CountBox",
  data() {
    return {
      value: "",
    };
  },
};
</script>

<style lang="less" scoped></style>
