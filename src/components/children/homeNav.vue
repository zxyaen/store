<template>
  <div>
    <nav aria-label="breadcrumb ">
      <ol class="breadcrumb nav">
        <!-- <li class="breadcrumb-item"><a href="#">首页</a></li> -->
        <li class="breadcrumb-item"><a href="#hotSell">当季热卖</a></li>
        <li class="breadcrumb-item"><a href="#promotion">促销</a></li>
        <li class="breadcrumb-item"><a href="#new">新品</a></li>
        <!-- <li class="breadcrumb-item active" aria-current="page">Data</li> -->
      </ol>
    </nav>
  </div>
</template>

<script>
export default {
    name:'homeNav'
};
</script>

<style scoped>
nav{
    border-top: 1px solid #efdad5;
    padding: auto 200px;
  }
  nav .nav {
      display: flex;
      justify-content: space-between;
      margin: 0;
  }
  nav .nav a{
      font-size: 0.3em;
  }
</style>
