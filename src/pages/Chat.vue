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

  export default {
    name: "Chat",
    components: {ChatPanel, FriendsList},
    props: [],
    data() {
      return {}
    },
    methods: {}
  }
</script>

<style scoped>

</style>
