import { request } from './request'

export function checkCar() {
  return request({
    url: 'sessionId'
    // url:'home/multidata'
  });
}