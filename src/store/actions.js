import {
  RECEIVE_TOKEN,
  RECEIVE_USERINFO,
  RECEIVE_FRIENDS,
  RECEIVE_GROUPS,
  RECEIVE_MESSAGE,
  RESET_TOKEN,
} from "./mutation-type";
import {reqUserInfo, reqFriends, reqGroups} from "../api";

export default {
  async [RECEIVE_TOKEN]({commit}, {token}) {
    commit(RECEIVE_TOKEN, {token})
  },
  async [RESET_TOKEN]({commit}) {
    commit(RESET_TOKEN)
  },
  async [RECEIVE_USERINFO]({commit}) {
    const result = await reqUserInfo()
    if (result.code === 1000) {
      const userinfo = result.data
      commit(RECEIVE_USERINFO, {userinfo})
    }
  },
  async [RECEIVE_FRIENDS]({commit}) {
    const result = await reqFriends()
    if (result.code === 1000) {
      const friends = result.data
      commit(RECEIVE_FRIENDS, {friends})
    }
  },
  async [RECEIVE_GROUPS]({commit}) {
    const result = await reqGroups()
    if (result.code === 1000) {
      const groups = result.data
      commit(RECEIVE_GROUPS, {groups})
    }
  },
  async [RECEIVE_MESSAGE]({commit}, {message}) {
    commit(RECEIVE_MESSAGE, {message})
  }
}

