<template>
  <div class="count"><van-stepper v-model="aaa" /></div>
</template>

<script>
export default {
  props: ["aaa"],
  name: "CountBox",
  data() {
    return {
      aaa: 1,
    };
  },
};
</script>

<style lang="less" scoped></style>
