<template>
  <div class="booksNew">
    <hr />
    <h3>新书上市</h3>
    <div class="wrap">
      <div class="book" v-for="book in res" :key="book.id">
        <img :src="book.bookimg" />
        <div class="info">
          <div class="name">{{ book.bookname }}</div>
          <div class="price">{{ book.bookprice }}¥</div>
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
import { getBooks } from "@/network/goods";

export default {
  name: "",

  data() {
    return {
      books: [],
      res: null,
    };
  },
  created() {
    getBooks().then((res) => {
      console.log(res);
      this.res = res;
    });
    //   this.axios.get("/book/new")
    //   .then(response => {
    //     if(response.status == 200){
    //       this.loading = false;
    //       this.books = response.data;
    //     }
    //   })
    //   .catch(error => alert(error));
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
