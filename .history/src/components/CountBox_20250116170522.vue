<template>
  <div class="count"><van-stepper v-model="aaa" /></div>
</template>

<script>
export default {
  props: [aaa],
  name: "CountBox",
  data() {
    return {};
  },
};
</script>

<style lang="less" scoped></style>
