// 对于图书信息请求的封装
import { request } from './request'

import qs from "qs";

// 获取所有书数据
export function getBooks() {
  return request({
    url: 'showAllBook'
  });
}



// 模糊查询书的数据，传入文字q
export function searchBook(q) {
  return request({
    url: 'searchBook?Bname=' + q
  });
}



// 获取数据库里对应用户的购物车内容
export function getDbCart() {
  return request({
    url: 'showCart'
  });
}

//封装获取到的数据库购物车数据
export class bookInfo {
  constructor(bookInfo) {
    this.name = bookInfo.bookName;
    this.img = bookInfo.bookImg;
    this.id = bookInfo.bookId;
    this.price = bookInfo.bookPrice;
    this.buyNum = bookInfo.bookBuyNum;
  }
};

// 结算提交，向数据库中存储用户购物车数据
export function saveCart(books) {
  let data = qs.stringify(books)
  return request({
    method: 'post',
    url: 'saveCart',
    data: data,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    }
  });
}

// 封装向数据库提交的购物车数据
export class DBbooks {
  constructor(DBbooks) {
    this.bookId = DBbooks.bookId;
    this.bookNum = DBbooks.bookNum;
  }
};
export class books{
  constructor(value){
    this.books = value
  }
}