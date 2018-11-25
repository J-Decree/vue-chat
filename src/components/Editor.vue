<template>
  <div class="editor-container">
    <el-upload style="display: none"
               name="image"
               class="uploader"
               :auto-upload="autoUpload"
               :action="serverUrl"
               :headers="header"
               :show-file-list="false"
               :on-success="uploadSuccess"
               :on-error="uploadError"
               :http-request="myUpload"
               :before-upload="beforeUpload">
      <button slot="trigger" ref="image">上传</button>
    </el-upload>


    <el-upload style="display: none"
               name="file"
               class="uploader"
               :auto-upload="autoUpload"
               :action="serverUrl"
               :headers="header"
               :show-file-list="false"
               :on-success="uploadSuccess"
               :on-error="uploadError"
               :http-request="myUpload"
               :before-upload="beforeUpload">
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
      <button style="outline: none" @click="fileHandler()"><span class="glyphicon glyphicon-file" aria-hidden="true"></span></button>
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
    <button class="btn btn-primary pull-right" @click="test()">发送</button>
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

  let Delta = Quill.import('delta');

  export default {
    props: {
      /*编辑器的内容*/
      value: {
        type: String
      },
      /*图片大小*/
      maxSize: {
        type: Number,
        default: 4000 //kb
      }
    },

    components: {
      quillEditor,
    },

    data() {
      return {
        autoUpload: true,
        content: this.value,
        quillUpdateImg: false, // 根据图片上传状态来确定是否显示loading动画，刚开始是false,不显示
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
        serverUrl: "/v1/blog/imgUpload", // 这里写你要上传的图片服务器地址
        header: {
          // token: sessionStorage.token
        }, // 有的图片服务器要求请求头需要有token
      }
    },
    mounted() {
      // 只复制文本内容
      this.setOnlyTextPaste()
      // 设置上传图片的回调函数
      this.setImageHanlder()

    },
    methods: {
      test() {
        console.log(this.$refs.newEditor.quill);
      },
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
        let quill = this.$refs.newEditor.quill
        quill.clipboard.addMatcher(Node.ELEMENT_NODE, function (node, delta) {
          let plaintext = node.innerText
          return new Delta().insert(plaintext)
        })
      },
      myUpload(content) {
        var form = new FormData();
        form.append("file", content.file);
        console.log(content)
        alert('upload')
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

      // 富文本图片上传前
      beforeUpload() {
        // 显示loading动画
        this.quillUpdateImg = true;
      },

      uploadSuccess(res, file) {
        // res为图片服务器返回的数据
        // 获取富文本组件实例
      },
      // 富文本图片上传失败
      uploadError() {
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
