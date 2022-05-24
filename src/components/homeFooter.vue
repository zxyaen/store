<template>
  <div class="footer">
    <hr />
    <!-- <div class="container"> -->
      <div class="row">
        <div class="col-sm">
          <ul>
            <li class="mod_help_one">
              <ul>
                <li class="title">购物指南</li>
                <li><a href="#">购物流程</a></li>
                <li><a href="#">会员介绍</a></li>
                <li><a href="#">常见问题</a></li>
                <li><a href="#">联系客服</a></li>
              </ul>
            </li>
          </ul>
        </div>
        <div class="col-sm">
          <ul>
            <li class="mod_help_one">
              <ul>
                <li class="title">配送方式</li>
                <li><a href="#">上门自提</a></li>
                <li><a href="#">配送查询</a></li>
                <li><a href="#">配送费</a></li>
                <li><a href="#">海外配送</a></li>
              </ul>
            </li>
          </ul>
        </div>
        <div class="col-sm">
          <ul>
            <li class="mod_help_one">
              <ul>
                <li class="title">支付方式</li>
                <li><a href="#">货到付款</a></li>
                <li><a href="#">在线支付</a></li>
                <li><a href="#">分期付款</a></li>
                <li><a href="#">公司转账</a></li>
              </ul>
            </li>
          </ul>
        </div>
        <div class="col-sm">
          <ul>
            <li class="mod_help_one">
              <ul>
                <li class="title">售后服务</li>
                <li><a href="#">售后政策</a></li>
                <li><a href="#">价格保护</a></li>
                <li><a href="#">退款说明</a></li>
                <li><a href="#">取消订单</a></li>
              </ul>
            </li>
          </ul>
        </div>
      <!-- </div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "homeFooter",
};
</script>

<style scoped>
.footer{
  padding: 1rem 0;
  margin-bottom: 1rem;
}
.container{
  padding: 1rem ;
  margin: 1rem;
}
.row{
  justify-content: space-between;
}
a {
  font-size: 0.5rem;
}
li{
  text-align: center;

}
.title {
  font-size: 0.8rem;
}
.col-sm {
  width: 25%;
  padding: 1rem;
}
</style>
