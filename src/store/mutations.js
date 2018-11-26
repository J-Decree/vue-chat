import {
  RECEIVE_TOKEN,
  RECEIVE_USERINFO,
  RECEIVE_FRIENDS,
  RECEIVE_GROUPS,
  RECEIVE_MESSAGE,
  RESET_TOKEN
} from "./mutation-type";

export default {
  [RECEIVE_TOKEN](state, {token}) {
    state.token = token
  },
  [RESET_TOKEN](state) {
    state.token = ''
  },
  [RECEIVE_USERINFO](state, {userinfo}) {
    state.userinfo = userinfo
  },
  [RECEIVE_FRIENDS](state, {friends}) {
    state.friends = friends
  },
  [RECEIVE_GROUPS](state, {groups}) {
    state.groups = groups
  },
  [RECEIVE_MESSAGE](state, {message}) {
    state.messages.push(message)
  }
}
