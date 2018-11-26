// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index'
import ElUpload from 'element-upload'

Vue.component('el-upload', ElUpload)
import 'bootstrap/dist/css/bootstrap.min.css'


// import 'kindeditor/kindeditor-all-min.js'
// import 'kindeditor/themes/default/default.css'
// import VueKindEditor from 'vue-kindeditor'
// Vue.use(VueKindEditor)


// import VueQuillEditor from 'vue-quill-editor'
// import 'quill/dist/quill.core.css'
// import 'quill/dist/quill.snow.css'
// import 'quill/dist/quill.bubble.css'
//
// Vue.use(VueQuillEditor)


Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  render: h => h(App)
})
