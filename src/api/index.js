import ajax from './ajax'
import {BASE_URL} from "../setting";
// 用户注册。
// 参数:username,password
export const reqRegister = (username, password) => ajax(BASE_URL + '/register/', {username, password}, 'POST')
// 用户登录
// 参数:qq,password
export const reqLogin = (qq, password) => ajax(BASE_URL + '/login/', {qq, password}, 'POST')
// 用户登出
export const reqLogout = () => {
  const token = localStorage.getItem('token')
  return ajax(`${BASE_URL}/logout/?token=${token}`)
}

//获得用户自己的信息
export const reqUserInfo = () => {
  const token = localStorage.getItem('token')
  return ajax(`${BASE_URL}/userinfo/?token=${token}`)
}
//获得朋友列表
export const reqFriends = () => {
  const token = localStorage.getItem('token')
  return ajax(`${BASE_URL}/friends/?token=${token}`)
}
//获得群列表
export const reqGroups = () => {
  const token = localStorage.getItem('token')
  return ajax(`${BASE_URL}/groups/?token=${token}`)
}

//发送消息
//参数:userinfo_id,content,content_type,target,target_type
export const reqPostMessage = ({target, target_type, content, content_type}) => {
  const token = localStorage.getItem('token')
  return ajax(`${BASE_URL}/message/?token=${token}`, {
    content,
    content_type,
    target,
    target_type
  }, 'POST')
}

//发送消息
export const reqMessage = () => {
  const token = localStorage.getItem('token')
  return ajax(`${BASE_URL}/message/?token=${token}`)
}

//发送心跳信息
export const reqHeartbeat = () => {
  const token = localStorage.getItem('token')
  return ajax(`${BASE_URL}/heartbeat/?token=${token}`)
}


//发送文件
export const reqPostFile = (data, headers) => {
  const token = localStorage.getItem('token')
  return ajax(`${BASE_URL}/file/?token=${token}`, data, 'POST', headers)
}
