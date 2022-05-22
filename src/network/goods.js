// 对于图书信息请求的封装
import { request } from './request'

// 获取所有书数据
export function getBooks() {
  return request({
    url: 'showAllBook'
    // url:'home/multidata'
  });
}

// 根据id获取相应书数据
// export function getOneBook(bookno) {
//   return request({
//     methods: 'post',
//     params:{
//       bookno,
//     },
//     url: 'showAllBook'
//     // url:'home/multidata'
//   });
// }

// 模糊查询书的数据，传入文字q
export function searchBook(q) {
  return request({
    url: 'searchBook?Bname=' + q
    // url:'home/multidata'
  });
}

