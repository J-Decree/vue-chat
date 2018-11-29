import axios from 'axios'
import qs from 'qs'
// console.log(data, qs.stringify(data))
// const HEADER = {'Content-Type': 'application/json'}
export default function ajax(url, params = {}, data = {}, method = 'GET', headers = {}) {
  return new Promise(((resolve, reject) => {
    axios({
      url,
      method,
      params,
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
export const comet = (resolve, reject, url, method = 'GET', params = {}, data = {}, headers = {}) => {
  axios({
    method,
    url,
    data,
    headers,
  }).then(function (response) {
    //处理
    resolve(response)
    comet(resolve, reject, url, method, params, data, headers)
  }).catch(function (err) {
    reject(err)
  })
}

