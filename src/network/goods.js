// 对于图书信息请求的封装
import {request} from './request'

export function getBooks() {
  return request({
    url:'showAllBook'
    // url:'home/multidata'
  });
}

// export function getBook( ) {
//   return request({
//     url:'home/data',
//     params:{
//       type,
//       page
//     }
//   });
// }
