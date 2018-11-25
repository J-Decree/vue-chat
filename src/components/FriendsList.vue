<template>
  <div class="friends-list">
    <div class="list-group-item clearfix user-info">
                    <span class="avatar"><img
                      src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=534477720,3337262027&fm=26&gp=0.jpg"
                      alt=""></span>
      <span class="username">JDcress</span>
      <a href="" class="pull-right" target="_blank">
        <span class="glyphicon glyphicon-list" aria-hidden="true"></span>
      </a>
    </div>
    <ul class="nav nav-tabs">
      <li :class="{active:now_tab==='friends'}">
        <a @click="now_tab='friends'"><span class="glyphicon glyphicon-piggy-bank" aria-hidden="true"></span></a>
      </li>
      <li :class="{active:now_tab==='groups'}">
        <a @click="now_tab='groups'"><span class="glyphicon glyphicon-user" aria-hidden="true"></span></a>
      </li>
    </ul>
    <ul class="list-group" v-show="now_tab==='friends'">
      <li class="list-group-item active clearfix">
                    <span class="avatar"><img
                      src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=534477720,3337262027&fm=26&gp=0.jpg"
                      alt=""></span>
        <span class="username">JDcress</span>
        <span class="badge">13</span>
      </li>

      <li class="list-group-item  clearfix">
                    <span class="avatar"><img
                      src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=534477720,3337262027&fm=26&gp=0.jpg"
                      alt=""></span>
        <span class="username">JDcress</span>
        <span class="badge">13</span>
      </li>

      <li class="list-group-item clearfix">
                    <span class="avatar"><img
                      src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=534477720,3337262027&fm=26&gp=0.jpg"
                      alt=""></span>
        <span class="username">JDcress</span>
        <span class="badge">13</span>
      </li>

      <li class="list-group-item clearfix">
                    <span class="avatar"><img
                      src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=534477720,3337262027&fm=26&gp=0.jpg"
                      alt=""></span>
        <span class="username">JDcress</span>
        <span class="badge">13</span>
      </li>

    </ul>

    <ul class="list-group" v-show="now_tab==='groups'">
      <li class="list-group-item active clearfix">
                    <span class="avatar"><img
                      src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=534477720,3337262027&fm=26&gp=0.jpg"
                      alt=""></span>
        <span class="group-name">JDcress</span>
      </li>

      <li class="list-group-item  clearfix">
                    <span class="avatar"><img
                      src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=534477720,3337262027&fm=26&gp=0.jpg"
                      alt=""></span>
        <span class="group-name">JDcress</span>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "FriendsList",
    props: [],
    data() {
      return {
        now_tab: 'friends' // friends,groups
      }
    },
  }
</script>


<style scoped>
  .nav-tabs li {
    width: 50%;
    text-align: center;
  }

  .nav a {
    color: white;
  }

  .user-info {
    height: 80px;
    line-height: 60px;
  }

  .user-info img {
    margin-top: 10px;
  }

  .friends-list {
    width: 200px;
    height: 604px;
    float: left;
    background: #2e3238;
    border: 1px solid #282b33;
  }

  .friends-list ul {
    background: #2e3238;
    border: 1px solid #282b33;
  }

  .list-group-item {
    background: #2e3238;
    color: white;
    border: 1px solid #282b33;
  }

  .msg-item img {
    max-height: 250px;
    max-width: 240px;
  }

  .msg-file a:hover {
    text-decoration: none;
  }

  .avatar, .username {
    float: left;
  }

  .avatar {
    margin-right: 5px;
  }

  .avatar img {
    display: block;
    width: 40px;
    height: 40px;
    border-radius: 2px;
  }

  .group-name {
    float: right;
    line-height: 40px;
    margin-right: 10px;
  }
</style>
