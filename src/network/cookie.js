import { request } from './request'

export function getCookie() {
  return request({
    url: 'sessionId'
    // url:'home/multidata'
  });
}
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

export function getCode(){
  return request({
    method:'get',
    url:'VerCode?'+Math.random(),
    
  })
}

