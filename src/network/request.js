import axios from 'axios'

export function request(config) {
  // 创建axios实例
  const instance = new axios.create({
    // baseURL:'http://172.20.208.1:8080/examWeb_war_exploded/',
    baseURL:'http://172.16.3.161:8080/examWeb_war_exploded/',
    // baseURL:'http://152.136.185.210:7878/api/hy66',
    timeout:5000
  });

  // 请求拦截器
  instance.interceptors.request.use(config => {
    //拦截后需要将拦截下来的请求数据返回发送
    return config;
  }, err => {

  })

  // 响应拦截器
  instance.interceptors.response.use(res => {
    // 拦截后需要将拦截下来处理成的结果返回
    return res.data
  }, err => {
    console.log(err)
  })

  // 返回真正的网络请求
  return instance(config)
}
