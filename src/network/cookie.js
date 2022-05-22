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

export function getCode(){
  return request({
    method:'get',
    url:'VerCode?'+Math.random(),
    responseType: 'blob',
    
  })
}

