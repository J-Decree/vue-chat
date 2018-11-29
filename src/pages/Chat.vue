<template>
  <div class="container">
    <div class="pull-left">
      <FriendsList :target="target" :target_type="target_type" @changeTarget="changeTarget"
                   @changeTargetType="changeTargetType"></FriendsList>
    </div>
    <div class="pull-left">
      <ChatPanel :target="target" :target_type="target_type"></ChatPanel>
    </div>
  </div>
</template>

<script>
  import ChatPanel from '../components/ChatPanel'
  import FriendsList from '../components/FriendsList'
  import {mapState} from 'vuex'
  import {reqHeartbeat, reqMessage} from "../api";
  import {RECEIVE_MESSAGE} from "../store/mutation-type";

  export default {
    name: "Chat",
    components: {ChatPanel, FriendsList},
    props: [],
    data() {
      return {
        pre_friend_id: null,
        pre_group_id: null,
        target: null,
        target_type: 'friend', //group or friend
      }
    },
    computed: {
      ...mapState(['token'])
    },
    methods: {
      checkLogin() {
        if (!this.token) {
          this.$router.replace('/login')
        }
      },
      changeTarget(val) {
        this.target = val
      },
      changeTargetType(val) {
        // 记录好之前的
        if (this.target_type === 'friend') {
          this.pre_friend_id = this.target
        }
        else if (this.target_type === 'group') {
          this.pre_group_id = this.target
        }
        //切换
        this.target_type = val
        //看看之前有没有记录
        if (val === 'friend') {
          this.target = this.pre_friend_id
        }
        else if (val === 'group') {
          this.target = this.pre_group_id
        }
      },
      resolveMessage(response) {
        // console.log(res)
        const res = response.data
        if (res.code === 1000) {
          console.log(res.data.content)
          const message = res.data
          this.$store.dispatch(RECEIVE_MESSAGE, {message})
        }
      },
      rejectMessage(error) {
        console.log(error)
      },
    },
    mounted() {
      // 检测是否登录
      this.checkLogin()
      // 开启长轮训接收消息
      reqMessage(this.resolveMessage, this.rejectMessage)
    },
  }
</script>

<style scoped>

</style>
