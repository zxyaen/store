// 对于图书信息请求的封装
import { request } from './request'

export function getBooks() {
  return request({
    url: 'showAllBook'
    // url:'home/multidata'
  });
}

export function searchBook(q) {
  return request({
    url: 'searchBook?Bname=' + q
    // url:'home/multidata'
  });
}

