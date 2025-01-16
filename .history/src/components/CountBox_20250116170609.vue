<template>
  <div class="count"><van-stepper v-model="value" /></div>
</template>

<script>
export default {
  props: ["value"],
  name: "CountBox",
  data() {
    return {};
  },
};
</script>

<style lang="less" scoped></style>
