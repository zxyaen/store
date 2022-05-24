<template>
  <div class="booksNew">
    <div class="wrap">
      <div class="book" @click="bookDetail">
        <img :src="goodItem.bookImg" />
        <div class="info">
          <div class="name">{{ goodItem.bookName }}</div>
          <!-- <div class="price">{{ goodItem.bookPrice }}¥</div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    goodItem: {
      type: Object,
      default() {
        return {};
      },
    },
  },

  data() {
    return {
      books: [],
      res: null,
    };
  },
  created() {},
  methods: {
    bookDetail() {
      // console.log(this.goodItem.bookId);
      this.$router.push("/detail/" + this.goodItem.bookId);
    },
  },
};
</script>

<style scoped>
@media screen and (min-width: 600px) {
  .info{
    width: 100%;
  }
  .info .name {
  font-size: 1.3rem;
  padding-left: 1.4rem;
  padding-top: 0.8rem;
  width: 90%;
  line-height: 2rem;
  }
}
.booksNew {
  /* float: left; */
  margin: 10px;
}
h3 {
  text-align: center;
  margin: 10px;
}
/* .wrap {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
} */
.booksNew .book {
  display: flex;
  margin: 10px;
  cursor: pointer;
  /* border-right: solid 1px #ccc; */
  /* margin-left: 10px; */
}
.name {
  width: 110%;
  margin-left: 0.1rem;
}
.info div {
  font-size: 0.4rem;
  /* margin: 0 0.2rem; */
}

.booksNew a:hover {
  color: red;
}
.booksNew img {
  width: 35%;
  height: 30%;
}
.booksNew span {
  color: #cdcdcd;
  text-decoration: line-through;
}
</style>
