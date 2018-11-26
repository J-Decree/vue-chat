import ajax from './ajax'
import {BASE_URL} from "../setting";

// 用户注册。
// 参数:username,password
export const reqRegister = (username, password) => ajax(BASE_URL + '/register/', {username, password}, 'POST')
// 用户登录
// 参数:qq,password
export const reqLogin = (qq, password) => ajax(BASE_URL + '/login/', {qq, password}, 'POST')
// 用户登出
// 参数:token
export const reqLogout = (token) => ajax(`${BASE_URL}/logout/?token=${token}`)

//获得用户自己的信息
export const reqUserInfo = (token) => ajax(`${BASE_URL}/userinfo/?token=${token}`)
//获得朋友列表
export const reqFriends = (token) => ajax(`${BASE_URL}/friends/?token=${token}`)
//获得群列表
export const reqGroups = (token) => ajax(`${BASE_URL}/groups/?token=${token}`)

//发送消息
//参数:userinfo_id,content,content_type,target,target_type
export const reqPostMessage = (token, {userinfo_id, content, content_type, target, target_type}) => ajax(`${BASE_URL}/message/?token=${token}`, {
  userinfo_id,
  content,
  content_type,
  target,
  target_type
}, 'POST')

//发送消息
export const reqMessage = (token) => ajax(`${BASE_URL}/message/?token=${token}`)

//发送心跳信息
export const reqHeartbeat = (token) => ajax(`${BASE_URL}/heartbeat/?token=${token}`)


//发送文件
export const reqPostFile = (token) => ajax(`${BASE_URL}/file/?token=${token}`)
