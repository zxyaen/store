import { request } from './request'
import qs from 'qs'
export function checkCar(books) {
  let data = qs.stringify({
    //先将books数组序列化，再新定义对象，最后使用qs序列化新对象
    "books": JSON.stringify(books)
  })
  return request({
    method: 'post',
    url: 'pay',
    data: data,
    // 定义表头为表单提交
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  });
}

