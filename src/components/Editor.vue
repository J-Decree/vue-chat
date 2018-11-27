<template>
  <div class="editor-container">
    <el-upload style="display: none"
               name="image"
               class="uploader"
               action="#"
               :auto-upload="autoUpload"
               :headers="header"
               :show-file-list="false"
               :http-request="uploadImage">
      <button slot="trigger" ref="image">上传</button>
    </el-upload>


    <el-upload style="display: none"
               name="file"
               class="uploader"
               action="#"
               :auto-upload="autoUpload"
               :headers="header"
               :show-file-list="false"
               :http-request="uploadFile">
      <button slot="trigger" ref="file">上传</button>
    </el-upload>


    <div id="toolbar">
      <!-- Add font size dropdown -->
      <!--<select class="ql-size">-->
      <!--<option value="small"></option>-->
      <!--&lt;!&ndash; Note a missing, thus falsy value, is used to reset to default &ndash;&gt;-->
      <!--<option selected></option>-->
      <!--<option value="large"></option>-->
      <!--<option value="huge"></option>-->
      <!--</select>-->
      <!-- Add a bold button -->
      <button class="ql-emoji"></button>
      <button class="ql-bold"></button>
      <button class="ql-italic"></button>
      <button class="ql-underline"></button>

      <!-- Add subscript and superscript buttons -->
      <button class="ql-image"></button>
      <button style="outline: none" @click="fileHandler()"><span class="glyphicon glyphicon-file"
                                                                 aria-hidden="true"></span></button>
    </div>

    <quill-editor
      class="editor"
      v-model="content"
      ref="newEditor"
      :options="editorOption"
      @blur="onEditorBlur($event)"
      @focus="onEditorFocus($event)"
      @change="onEditorChange($event)">
    </quill-editor>
    <button class="btn btn-primary pull-right" @click="sendMessage()">发送</button>
  </div>

</template>
<script>
  // 工具栏配置
  import {quillEditor} from "vue-quill-editor";
  import "quill/dist/quill.core.css";
  import "quill/dist/quill.snow.css";
  import "quill/dist/quill.bubble.css";
  import 'quill-emoji/dist/quill-emoji'
  import 'quill-emoji/dist/quill-emoji.css'
  // import Delta from 'quill-delta'; //哎
  import Quill from 'quill'
  import {RECEIVE_MESSAGE} from "../store/mutation-type";
  import {reqPostFile, reqPostMessage} from "../api";
  import {mapState} from 'vuex'

  export default {
    components: {
      quillEditor,
    },
    props: ['target', 'target_type',],
    data() {
      return {
        autoUpload: true,
        content: '',
        quillUpdateImg: true, // 根据图片上传状态来确定是否显示loading动画，刚开始是false,不显示
        editorOption: {
          theme: "snow", // or 'bubble'
          placeholder: "您想说点什么？",
          modules: {
            toolbar: '#toolbar',
            "emoji-toolbar": true,
            "emoji-shortname": true,
            // "emoji-textarea": true,
          }
        },
        header: {
          // token: sessionStorage.token
          // 有的图片服务器要求请求头需要有token
        },
      }
    },
    computed: {
      ...mapState(['token', 'userinfo'])
    },
    mounted() {
      // 只复制文本内容
      this.setOnlyTextPaste()
      // 设置上传图片的回调函数
      this.setImageHanlder()
      // 设置回车键发送消息
      this.setEnterSend()
    },

    methods: {
      async imgHandler(state) {
        if (state) {
          //button is clicked
          this.$refs.image.click()
        }
      },
      setImageHanlder() {
        this.$refs.newEditor.quill.getModule("toolbar").addHandler("image", this.imgHandler)
      },
      async fileHandler() {
        this.$refs.file.click()
      },
      setOnlyTextPaste() {
        //  只复制html的文本内容
        let Delta = Quill.import('delta');
        let quill = this.$refs.newEditor.quill
        quill.clipboard.addMatcher(Node.ELEMENT_NODE, function (node, delta) {
          let plaintext = node.innerText
          return new Delta().insert(plaintext)
        })
      },
      setEnterSend() {
        const vm = this
        let quill = this.$refs.newEditor.quill
        quill.keyboard.bindings[13].unshift({
          key: 13,
          handler: function () {
            vm.sendMessage()
            return true
          }
        })
      },
      async uploadImage(content) {
        const {token} = this
        let form = new FormData();
        form.append("file", content.file);
        let s = await reqPostFile(token)
        console.log(s)
      },
      async uploadFile(content) {
        const {token} = this
        let form = new FormData();
        form.append("file", content.file);
        form.append('userinfo_id', this.userinfo.id)
        form.append('target', this.target)
        form.append('target_type', this.target_type)
        let headers = {
          // 'Content-Type': 'application/x-www-form-urlencoded',
          'Content-Disposition': `attachment; filename=${content.file.name}`
        }
        let s = await reqPostFile(token, form, headers)
        console.log(s)
      },
      onEditorBlur() {
        //失去焦点事件
      },
      onEditorFocus() {
        //获得焦点事件
      },
      onEditorChange() {
        //内容改变事件
        this.$emit("input", this.content);
      },
      async sendMessage() {
        const {target, target_type, content} = this
        const content_type = 'text'
        if (!target) {
          alert('请选中发送目标')
          return
        }
        let res = await reqPostMessage({target, target_type, content, content_type})
        console.log(res)
        let message = null
        if (res.code === 1000) {
          message = res.data
          message.isMine = true
        }
        else {
          message = {trigger: target, trigger_type: target_type, content: "发送消息失败", content_type: "system"}
        }
        console.log(message, target_type)
        this.$store.dispatch(RECEIVE_MESSAGE, {target_type, message})
      }
    }
  };
</script>

<style>
  .editor-container {
    position: relative;
  }

  .editor {
    line-height: normal !important;
    height: 112px;
  }

  .btn {
    position: absolute;
    right: 0;
    bottom: 0px;
  }

</style>
