import {request} from './request'

export function getCookie() {
    return request({
      url:'sessionId'
      // url:'home/multidata'
    });
  }