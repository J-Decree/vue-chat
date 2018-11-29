<template>
  <div>
    <editor ref='fuck' id="editor_id" height="100%" width="100%" :content="editorText"
            :afterChange="afterChange()"
            pluginsPath="/static/kindeditor/plugins/"
            :loadStyleMode="false"
            :items="items"
            :resizeType="resizeType"
            :themeType="themeType"
            :uploadJson="uploadJson"
            :filePostName="filePostName"
            :extraFileUploadParams="extraFileUploadParams"
            :filterMode="filterMode"
            :htmlTags="htmlTags"
            @on-content-change="onContentChange">
    </editor>

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
</template>

<script>
  export default {
    name: 'KindEditor',
    data() {
      return {
        editorText: '',
        items: [
          'emoticons', 'image', 'insertfile'
        ],
        resizeType: 0, //不能改变大小
        themeType: 'simple',
        uploadJson: 'XXXXXXXXXXXXX',
        filePostName: 'upload_img',//自定制文件名,request.FILES.get('upload_img')
        extraFileUploadParams: {
          // 'csrfmiddlewaretoken': $("[name='csrfmiddlewaretoken']").val()
        },
        pasteType: 2,
        filterMode: false,
        htmlTags: {
          font: ['color'],
          span: [
            '.color',
          ],
          img: [],
        }
      }
    },
    methods: {
      onContentChange(val) {
        console.log(this.$refs.fuck)
        // this.editorText = val
        var reg = /<img src=(".+?").*?>/g
        console.log(val)
        // this.editorText = this.editorText.replace(reg, 'fuck');
        let content = val.replace(reg, function (m, $1) {
          let s = '/static/kindeditor/plugins/emoticons/images/'
          console.log($1.indexOf(s), m, $1)
          if ($1.indexOf(s) === -1) {
            return ''
          }
          else {
            return m
          }
        })
        this.editorText = content
      }
      ,
      afterChange() {

      }
    }
  }
</script>

<style scoped>

</style>
