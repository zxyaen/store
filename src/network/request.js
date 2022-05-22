import axios from 'axios'

export function request(config) {
  // 创建axios实例
  const instance = new axios.create({
    // baseURL:'http://172.20.208.1:8080/examWeb_war_exploded/',
    baseURL:'/examWeb_war_exploded',

    timeout: 5000
  });

  // 请求拦截器
  instance.interceptors.request.use(config => {
    config.headers['Access-Control-Allow-Credentials'] = true
    // 拦截后需要将拦截下来的请求数据返回发送
    // 判断是否存在token,如果存在将每个页面header添加token
    //  if (sessionStorage.getItem("token")) {
    //   config.headers.common['Authorization'] = sessionStorage.getItem("token");
    // }
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
