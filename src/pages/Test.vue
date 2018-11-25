<template>
  <div>
    <!--<FriendList></FriendList>-->
    <ChatPanel></ChatPanel>
  </div>
</template>

<script>
  import FriendList from '../components/FriendsList'
  import ChatPanel from '../components/ChatPanel'

  export default {
    name: 'hello',
    components: {FriendList, ChatPanel},
    data() {
      return {
        editorText: '',
        items: [
          'image', 'emoticons', 'insertfile'
        ],
        resizeType: 0, //不能改变大小
        themeType: 'simple',
        uploadJson: 'XXXXXXXXXXXXX',
        filePostName: 'upload_img',//自定制文件名,request.FILES.get('upload_img')
        extraFileUploadParams: {
          // 'csrfmiddlewaretoken': $("[name='csrfmiddlewaretoken']").val()
        },
      }
    },
    created() {
    },
    methods: {
      onContentChange(val) {
        this.editorText = val
      },
      afterChange() {
      }
    }
  }
</script>

