<template>
  <div class="chat-panel">
    <div class="chat-box-title">
      朋友名字
    </div>
    <div class="chat-box-window">
      <div class="msg-item clearfix">
        <div class="mine-msg">
          <div class="msg-datetime">2018-4-13 12:23:23</div>
          <div class="msg-content">JDcress对冯绍峰颠三倒四丰富的</div>
        </div>
      </div>

      <div class="msg-item clearfix">
        <div class="others-msg">
          <div class="msg-datetime">2018-4-13 12:23:23</div>
          <div class="msg-content">JDcress对冯绍峰颠三倒四丰富的</div>
        </div>
      </div>

      <div class="msg-item clearfix">
        <div class="mine-msg">
          <div class="msg-datetime">2018-4-13 12:23:23</div>
          <div class="msg-content">JDcress对冯绍峰颠三倒四丰富的</div>
        </div>
      </div>

      <div class="msg-item clearfix">
        <div class="mine-msg">
          <div class="msg-datetime">2018-4-13 12:23:23</div>
          <a href="https://pic.wenwen.soso.com/p/20101216/20101216172440-1727154787.jpg"
             target="_blank">
            <img src="https://pic.wenwen.soso.com/p/20101216/20101216172440-1727154787.jpg">
          </a>
        </div>
      </div>

      <div class="msg-item clearfix">
        <div class="others-msg">
          <div class="msg-datetime">2018-4-13 12:23:23</div>
          <div class="msg-content">JDcress对冯绍峰颠三倒四丰富的</div>
        </div>


        <div class="msg-item clearfix">
          <div class="others-msg">
            <div class="msg-datetime">2018-4-13 12:23:23</div>
            <a href="https://pic.wenwen.soso.com/p/20101216/20101216172440-1727154787.jpg"
               target="_blank">
              <img src="https://pic.wenwen.soso.com/p/20101216/20101216172440-1727154787.jpg">
            </a>
          </div>
        </div>

        <div class="msg-item clearfix">
          <div class="others-msg">
            <div class="msg-datetime">2018-4-13 12:23:23</div>
            <div class="msg-file">
              <a href="">
                <p class="title">五轮书.pdf.pdf</p>
                <div class="opr">
                  <span class="ng-binding">6.9MB</span>
                  <span class="sep">|</span>
                  <span class="ng-scope">发送失败</span>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div class="msg-item clearfix">
          <div class="system-msg"><span>你 撤回了一条消息 重新编辑</span></div>
        </div>
      </div>
    </div>
    <div class="chat-box-msg">
      <Editor></Editor>
    </div>
  </div>
</template>

<script>
  import Editor from '../components/Editor'

  export default {
    name: "ChatPanel",
    components: {Editor},
    props: [],
    data() {
      return {}
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

  .system-msg span{
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
    margin: 2px;
    position: relative;
    border: 2px solid #b2e281;
  }

  .msg-file a:hover {
    text-decoration: none;
  }
</style>
