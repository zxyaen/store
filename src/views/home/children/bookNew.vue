<template>
  <div class="booksNew" id="booksNew">
    <div class="wrap">
      <div class="book" @click="bookDetail">
        <img :src="goodItem.bookImg" />
        <div class="info">
          <div class="name">{{ goodItem.bookName }}</div>
          <!-- <div class="price">{{ goodItem.bookPrice }}¥</div> -->
        </div>
      </div>
    </div>
    <div class="price">{{ goodItem.bookPrice }} 元</div>
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
  .info {
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
  position: relative;
}
h3 {
  text-align: center;
  margin: 10px;
}
.wrap {
}
.booksNew .book {
  display: flex;
  flex-flow: column;
  margin: 20px;
  cursor: pointer;

  align-items: center;
  justify-content: center;
}
.price {
  position: absolute;

  margin-left: 0.1rem;
  text-align: center;
  bottom: 0.6rem;
  right: 42%;
}
.name {

  margin-left: 0.1rem;
  text-align: center;

}

.info div {
  font-size: 0.4rem;
  /* margin: 0 0.2rem; */
}

.booksNew a:hover {
  color: red;
}
.booksNew img {
  width: 10rem;
  height: 8rem;
}
.booksNew span {
  color: #cdcdcd;
  text-decoration: line-through;
}
</style>
