import axios from 'axios'
import qs from 'qs'
// console.log(data, qs.stringify(data))
// const HEADER = {'Content-Type': 'application/json'}
export default function ajax(url, data = {}, method = 'GET', headers = {}) {
  // data对get请求无效，需要自己拼接
  if (method === 'GET' && qs.stringify(data)) {
    data = '?' + qs.stringify(data)
    url = url + data
  }
  return new Promise(((resolve, reject) => {
    axios({
      method,
      url,
      data,
      headers,
    }).then(function (response) {
      resolve(response.data)
    }).catch(function (err) {
      reject(err)
    })
  }))
}

//长轮训
export const comet = (resolve, reject, url, data = {}, method = 'GET', headers = {}) => {
  axios({
    method,
    url,
    data,
    headers,
  }).then(function (response) {
    //处理
    resolve(response)
  }).catch(function (err) {
    reject(err)
  })
}

