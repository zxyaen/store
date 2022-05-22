import { request } from './request'

export function addBook(bookId, bookNum) {
    return request({
        method: 'post',
        url: 'addBook',
        params:{
            bookId,
            bookNum,
        },
        // url:'home/multidata'
    });
}

export function removeBook(bookId, bookNum) {
    console.log(bookId,bookNum);
    return request({
        method: 'post',
        url: 'removeBook',
        params:{
            bookId,
            bookNum,
        },
        
        // url:'home/multidata'
    });
}

export function showCart( ) {
  return request({
    url: 'showCart'
    // url:'home/multidata'
  });
}
