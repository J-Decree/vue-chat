<template>
  <div class="friends-list">
    <div class="list-group-item clearfix user-info">
      <a :href="userinfo.avatar" target="_blank"><span class="avatar">
                      <img :src="userinfo.avatar" @click="logout()">
                    </span></a>
      <span class="username">{{userinfo.username}}</span>
      <a class="pull-right" @click="logout()">
        <span class="glyphicon glyphicon-off" aria-hidden="true"></span>
      </a>
    </div>
    <ul class="nav nav-tabs">
      <li :class="{active:target_type==='friend'}">
        <a @click="changeTargetType('friend')">
          <span class="glyphicon glyphicon-piggy-bank" aria-hidden="true"></span>
        </a>
      </li>
      <li :class="{active:target_type==='group'}">
        <a @click="changeTargetType('group')">
          <span class="glyphicon glyphicon-user" aria-hidden="true"></span>
        </a>
      </li>
    </ul>
    <ul class="list-group" v-show="target_type==='friend'">
      <li class="list-group-item clearfix" v-for="(item) in friends"
          :class="{current:setActive(item.id,'friend')}"
          @click="changeTarget(item.id)">
        <a :href="item.avatar" target="_blank"><span class="avatar"><img :src="item.avatar" alt=""></span></a>
        <span class="username">{{item.username}}</span>
        <span class="badge tips" :user_id="item.id">13</span>
      </li>
    </ul>

    <ul class="list-group" v-show="target_type==='group'">
      <li class="list-group-item  clearfix" v-for="(item) in groups"
          :class="{current:setActive(item.id,'group')}" @click="changeTarget(item.id)">
        <a href="item.avatar" target="_blank"><span class="avatar"><img :src="item.avatar" alt=""></span></a>
        <span class="group-name">{{item.title}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import {RECEIVE_USERINFO, RECEIVE_FRIENDS, RECEIVE_GROUPS} from "../store/mutation-type";
  import {reqLogout} from "../api";
  export default {
    name: "FriendsList",
    props: ['target', 'target_type'],
    data() {
      return {}
    },
    computed: {
      ...mapState(['userinfo', 'friends', 'groups']),
    },
    methods: {
      receive_userinfo() {
        // 获得用户信息
        this.$store.dispatch(RECEIVE_USERINFO)
      },
      receive_friends() {
        this.$store.dispatch(RECEIVE_FRIENDS)
      },
      receive_groups() {
        this.$store.dispatch(RECEIVE_GROUPS)
      },
      changeTarget(val) {
        this.$emit('changeTarget', val)
      },
      changeTargetType(val) {
        this.$emit('changeTargetType', val)
      },
      setActive(id, type) {
        // console.log(id, this.target)
        // console.log(type, this.target_type)
        return this.target === id && this.target_type === type
      },
      async logout() {
        let res = await reqLogout()
        if (res.code === 1000) {
          localStorage.clear()
          this.$router.replace('/login')
        }
      }
    },
    mounted() {
      this.receive_userinfo()
      this.receive_friends()
      this.receive_groups()
    }
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

  .current {
    background: #337ab7;
  }
</style>
