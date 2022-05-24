// 对于图书信息请求的封装
import { request } from './request'

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