<template>
      <div class="shortcut">
      <nav aria-label="breadcrumb">
        <p>您好！欢迎光临本商城</p>

        <ol class="breadcrumb headerTop">
          <li class="breadcrumb-item"><a href="#">｜ 门店查询 </a></li>
          <li class="breadcrumb-item"><a href="#">｜ 帮助中心 </a></li>
          <li class="breadcrumb-item"><a href="#">在线客服 </a></li>
          <li class="breadcrumb-item login">
            <!-- <a href="/page/login.html">登录/ </a> -->
            <router-link to="/login">登录/注册</router-link>
            <!-- <a href="/page/login.html">注册</a> -->
          </li>
        </ol>
      </nav>
    </div>
</template>

<script>
export default {
name:'shortCar'
}
</script>

<style scoped>
/* shortcut  start*/
  .shortcut{
      line-height: 0;
  }
  .shortcut .headerTop {
    flex-direction: row-reverse;
    background-color: none;
    margin-bottom: 0;
  }
  .shortcut .login {
    margin-right: 20px;
  }
  .shortcut nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* background-color: #FAECE8; */
    border-bottom: 1px solid #efdad5;
    font-size: 12px;
  }
  .shortcut p {
    margin: 1em;
  }
  .shortcut .shopCar{
      font-family:'icomoon' ;
  }
  .icon-cart:before {
      content: "\e93a";
    }
  /* end */
</style>