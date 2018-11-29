import Vue from 'vue'
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
    const trigger_type = message['trigger_type']
    const trigger = message['trigger']
    const {content, content_type, mine_msg} = message
    if (trigger_type === 'friend') {
      if (!state.friend_messages_content[trigger]) {
        Vue.set(state.friend_messages_content,trigger,[])
      }
      state.friend_messages_content[trigger].push({content, content_type, mine_msg})
    }
    else if (trigger_type === 'group') {
      if (!state.group_messages_content[trigger]) {
       Vue.set(state.group_messages_content,trigger,[])
      }
      state.group_messages_content[trigger].push({content, content_type, mine_msg})
    }
  }
}
