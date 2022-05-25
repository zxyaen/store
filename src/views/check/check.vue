<template>
  <div>
    <div class="box">
      <h1>总共消费 {{ total }} 元</h1>
    </div>
    <router-link to="/home"> <h1>返回首页</h1></router-link>
  </div>
</template>

<script>
export default {
  name: "check",
  data() {
    return {
      total: null,
    };
  },
  methods: {},
  created() {
    this.total = this.$route.params.total;
  },
};
</script>

<style scoped>
.box {
  display: flex;
  height: 500px;
  justify-content: center;
  align-items: center;
}
</style>
