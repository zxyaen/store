<template>
  <div class="box">
    <!-- <div class="top">提下内容确认购买吗？</div> -->
    <p>购买内容如下：</p>
    <div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">图书</th>
            <th scope="col">数量</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, i) in bookInfo">
            <th scope="row">{{ i + 1 }}</th>
            <td>{{ item.bookName }}</td>
            <!-- <td>{{item.bookPrice}}</td> -->
            <!-- {{item}} -->
            <td>{{ item.bookNum }}</td>
          </tr>
        </tbody>
        <tfoot>
          <td style="font-weight: bold">总价：{{ allPrice | numFilter }}元</td>
        </tfoot>
      </table>

      <!-- <div v-for="item in bookInfo"><div>{{ item.bookName }}</div>{{ item.bookNum }}</div> -->
    </div>
    <div></div>

    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="收货人">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="收货地址">
        <el-input v-model="form.address"></el-input>
      </el-form-item>
      <el-form-item label="电话">
        <el-input v-model="form.phone"></el-input>
      </el-form-item>

      <el-form-item label="其他服务">
        <el-checkbox-group v-model="form.type">
          <el-checkbox label="运费险" name="type"></el-checkbox>
          <el-checkbox label="号码保护" name="type"></el-checkbox>
        </el-checkbox-group>
      </el-form-item>

      <el-form-item label="订单备注">
        <el-input
          type="textarea"
          v-model="form.desc"
          style="resize: none"
        ></el-input>
      </el-form-item>
      <el-form-item class="btn">
        <el-button type="primary" @click="checkout(cartList)">确定</el-button>
        <el-button @click="hiddenConfirm">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import { DBbooks } from "@/network/goods";
import { checkCar } from "@/network/check";

export default {
  name: "confirm",
  data() {
    return {
      form: {
        name: "",
        address: "",
        phone: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
      },
    };
  },
  props: ["bookInfo", "allPrice"],
  computed: {
    ...mapState(["cartList", "isConfirm"]),
  },
  methods: {
    ...mapMutations(["HiddenConfirm"]),

    hiddenConfirm() {
      this.HiddenConfirm();
    },

    onSubmit() {
      console.log("submit!");
    },

    checkout(value) {
      let Books = [];
      for (let i = 0; i < value.length; i++) {
        Books = Books.concat(new DBbooks(value[i]));
      }

      var newWindow = window.open();
      checkCar(Books)
        .then((res) => {
          const div = document.createElement("div");
          div.innerHTML = res; // html code
          newWindow.document.body.appendChild(div);
          newWindow.document.forms.punchout_form.submit();

          // let text = res;
          // this.savePayText(text);
          // console.log(text);
          // let routeUrl = this.$router.resolve({
          //   path: "/check",
          // });
          // sessionStorage.setItem("payText", text);
          // window.open(routeUrl.href, "_blank");
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  filters: {
    // 保留价格后两位
    numFilter(value) {
      // 截取当前数据到小数点后两位
      let realVal = parseFloat(value).toFixed(2);
      return realVal;
    },
  },
};
</script>

<style scoped>
.box {
  /* background-color: aqua; */
}
.bottom {
  display: flex;
}
.btn el-button {
  box-shadow: 5px 5px 10px 5px #ccc;
}
</style>
