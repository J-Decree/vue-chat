<template>
  <div class="chat-panel">
    <div class="chat-box-title">
      {{currentTitle}}
    </div>
    <div class="chat-box-window">
      <div class="msg-item clearfix" v-for="(item) in currentMessage">
        <!--system 消息-->
        <div class="system-msg" v-if="item.content_type==='system'"><span>{{item.content}}</span></div>
        <div v-else :class="item.mine_msg===true?'mine-msg':'others-msg'">
          <div class="msg-datetime">2018-4-13 12:23:23</div>
          <!-- text 消息-->
          <div class="msg-content" v-if="item.content_type==='text'"><span v-html="item.content"></span></div>
          <!-- image 消息-->
          <a v-if="item.content_type==='image'" :href="item.content.url" target="_blank">
            <img :src="item.content.url">
          </a>
          <!--file 消息-->
          <div v-if="item.content_type==='file'" class="msg-file">
            <a :href="item.content.url" target="_blank">
              <p class="title">{{item.content.filename}}</p>
              <div class="opr">
                <span class="ng-binding">{{item.content.size}}</span>
                <span class="sep">|</span>
                <span class="ng-scope">{{item.content.status}}</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="chat-box-msg">
      <Editor :target="target" :target_type="target_type"></Editor>
    </div>
  </div>
</template>

<script>
  import Editor from '../components/Editor'
  import {mapState} from 'vuex'

  export default {
    name: "ChatPanel",
    components: {Editor},
    props: ['target', 'target_type'],
    data() {
      return {}
    },
    computed: {
      ...mapState(['friends', 'groups', 'friend_messages_content', 'group_messages_content']),
      currentTitle() {
        if (!this.target)
          return ''

        const id = this.target
        if (this.target_type === 'friend') {
          let obj = this.friends.find((item, index) => {
            if (item.id === id)
              return true
          })
          return obj.username
        }
        else if (this.target_type === 'group') {
          let obj = this.groups.find((item, index) => {
            if (item.id === id)
              return true
          })
          return obj.title + ' (群)'
        }
      },
      currentMessage() {
        const {target, target_type, friend_messages_content, group_messages_content} = this
        if (!target) {
          return ''
        }
        if (target_type === 'friend') {
          return friend_messages_content[target]
        }
        else if (target_type === 'group') {
          return group_messages_content[target]
        }
      },
    },
  }
</script>

<style scoped>
  .chat-panel {
    width: 750px;
    height: 100%;
    float: left;
  }

  .chat-box-title {
    height: 50px;
    background: #2e3238;
    font-size: 32px;
    text-align: center;
    color: white;
    line-height: 50px;
    border: 1px solid #282b33;
  }

  .chat-box-window {
    height: 400px;
    background: #eeeeee;
    width: 100%;
    overflow-y: auto;
    overflow-x: hidden;
  }

  .chat-box-msg {
    height: 120px;
  }

  .mine-msg {
    display: block;
    max-width: 250px;
    min-height: 50px;
    float: right;
    margin: 15px 0;
  }

  .others-msg {
    display: block;
    max-width: 250px;
    min-height: 50px;
    margin: 15px 0;
  }

  .mine-msg img {
    float: right;
    margin: 10px 15px 0px 0px;
  }

  .others-msg img {
    float: left;
    margin: 10px 0px 0px 15px
  }

  .mine-msg .msg-content {
    background: #7cad3a;
    border-radius: 20%;
    padding: 10px;
  }

  .others-msg .msg-content {
    background: #beaa8e;
    border-radius: 20%;
    padding: 10px;
  }

  .msg-item {
    width: 100%;
  }

  .msg-content {
    color: black;
  }

  .msg-datetime {
    color: black;
  }

  .system-msg {
    text-align: center;
    font-size: 15px;
    margin: 15px 0;
  }

  .system-msg span {
    background: #f9f9f9;
    padding: 3px 3px;
  }

  .mine-msg .msg-datetime {
    text-align: right;
  }

  .others-msg .msg-datetime {
    text-align: left;
  }

  .msg-item img {
    max-height: 250px;
    max-width: 240px;
  }

  .msg-file {
    padding: 10px;
    background-color: #fff;
    min-height: 75px;
    border-radius: 4px;
    -moz-border-radius: 4px;
    -webkit-border-radius: 4px;
    min-width: 250px;
    max-width: 300px;
    position: relative;
    border: 2px solid #b2e281;
  }

  .msg-file a:hover {
    text-decoration: none;
  }
</style>
