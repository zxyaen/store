<template>
  <div class="booksNew">
    <div class="wrap">
      <div class="book" @click="bookDetail">
        <img :src="goodItem.bookImg" />
        <div class="info">
          <div class="name">{{ goodItem.bookName }}</div>
          <div class="price">{{ goodItem.bookPrice }}¥</div>
        </div>
      </div>

      <!-- 
      <p>
        {{ book.price | factPrice(book.discount) | currency }}
        <span>{{ book.price | currency }}</span>
      </p> -->
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
  created() {

  },
  methods: {
    bookDetail() {
      // console.log(this.goodItem.bookId);
      this.$router.push("/detail/" + this.goodItem.bookId);
    },
  },
};
</script>

<style scoped>
.booksNew {
  /* float: left; */
  margin: 10px;
}
h3 {
  text-align: center;
  margin: 10px;
}
.wrap {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.booksNew .book {
  width: 49%;
  display: flex;
  margin: 15px 0;
  cursor: pointer;
  /* border-right: solid 1px #ccc; */
  /* margin-left: 10px; */
}
.name {
  margin: 8px;
}
.price {
  margin: 8px;
}

.booksNew a:hover {
  color: red;
}
.booksNew img {
  width: 120px;
  height: 100px;
}
.booksNew span {
  color: #cdcdcd;
  text-decoration: line-through;
}
</style>
