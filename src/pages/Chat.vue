<template>
  <div class="container">
    <div class="pull-left">
      <FriendsList></FriendsList>
    </div>
    <div class="pull-left">
      <ChatPanel></ChatPanel>
    </div>
  </div>
</template>

<script>
  import ChatPanel from '../components/ChatPanel'
  import FriendsList from '../components/FriendsList'
  import {mapState} from 'vuex'

  export default {
    name: "Chat",
    components: {ChatPanel, FriendsList},
    props: [],
    data() {
      return {}
    },
    computed: {
      ...mapState(['token'])
    },
    methods: {
      checkLogin() {
        if (!this.token) {
          this.$router.replace('/login')
        }
      }
    },
    mounted() {
      // 检测是否登录
      this.checkLogin()
    },
  }
</script>

<style scoped>

</style>
