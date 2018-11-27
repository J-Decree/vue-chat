import axios from 'axios'
// import qs from 'qs'
// console.log(data, qs.stringify(data))
// const HEADER = {'Content-Type': 'application/json'}
export default function ajax(url, data = {}, method = 'GET', headers = {}) {
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
