import { request } from './request'

export function getCookie() {
  return request({
    url: 'sessionId'
    // url:'home/multidata'
  });
}
// 对于登录的封装
export function checkLogin(a, b, c) {
  return request({
    method: 'post',
    url: 'checkLogin',
    params: {
      loginName: a,
      loginPwd: b,
      Check: c,
    }
  });
}
// 对于注册的封装
export function login(a, b, c) {
  return request({
    method: 'post',
    url: 'logIn',
    params: {
      name: a,
      pwd: b,
      Check: c,
    }
  });
}
// 获取验证码
export function getCode(){
  return request({
    method:'get',
    url:'VerCode?'+Math.random(),
    responseType: 'blob',
    
  })
}
// 获取session状态
export function getSession(){
  return request({
    method:'get',
    url:'sessionId'
  })
}

// 退出登录
export function loginOut(){
  return request({
    method:'get',
    url:'logout'
  })
}