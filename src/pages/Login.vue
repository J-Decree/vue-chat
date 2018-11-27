<template>
  <section class="loginContainer">
    <div class="loginInner">
      <div class="login_header">
        <h2 class="login_logo">CHAT</h2>
        <div class="login_header_title">
          <!--<a href="javascript:;" class="on">短信登录</a>-->
          <!--<a href="javascript:;">密码登录</a>-->
        </div>
      </div>
      <div class="login_content">
        <form>
          <div class="on">
            <section>
              <section class="login_message">
                <input type="tel" maxlength="11" placeholder="QQ号" v-model="qq">
              </section>
              <section class="login_verification">
                <input type="password" maxlength="8" placeholder="密码" v-model="password">
                <div class="switch_button off">
                  <div class="switch_circle"></div>
                  <span class="switch_text">...</span>
                </div>
              </section>
              <section class="login_message">
                <input type="text" maxlength="11" placeholder="验证码">
                <img class="get_verification"
                     src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543163952355&di=7ff4d5744239c06bd6a965c70bd18079&imgtype=0&src=http%3A%2F%2Fimg22.aspzz.cn%2Fuploads%2Fallimg%2Fc180816%2F15343a435KN0-11923.png"
                     alt="captcha" style="width: 120px;height: 50px;">
              </section>
            </section>
          </div>
          <button class="login_submit" @click="login()">登录</button>
        </form>
        <a href="javascript:;" class="about_us">关于我们</a>
      </div>
      <a href="javascript:" class="go_back">
        <i class="iconfont icon-jiantou2"></i>
      </a>
    </div>
  </section>
</template>

<script>
  import {mapState} from 'vuex'
  import {RECEIVE_TOKEN} from "../store/mutation-type";
  import {reqLogin, reqUserInfo} from "../api";

  export default {
    name: 'Login',
    props: [],
    components: {},
    data() {
      return {
        qq: '',
        password: '',
      }
    },
    computed: {
      ...mapState(['token'])
    },
    methods: {
      async login() {
        const {qq, password} = this
        const result = await reqLogin(qq, password)
        if (result.code === 1000) {
          const token = result.token
          this.$store.dispatch(RECEIVE_TOKEN, {token})
          localStorage.setItem('token', token)
          this.$router.replace('/chat')
        }
        else {
          alert(result.error)
        }
      },
      async autoLogin() {
        let token = localStorage.getItem('token')
        if (token) {
          let res = await reqUserInfo() //测试token有没有过期
          if (res.code === 1000) {
            this.$store.dispatch(RECEIVE_TOKEN, {token})
            this.$router.replace('/chat')
          }
          else {
            //过期了没用，清掉
            localStorage.clear()
          }
        }
      },
    },
    // watch: {
    //   token() {
    //     this.autoLogin()
    //   }
    // },
    mounted() {
      this.autoLogin()
    },
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .loginContainer
    width 100%
    height 100%
    background #fff
    .loginInner
      padding-top 60px
      width 80%
      margin 0 auto
      .login_header
        .login_logo
          font-size 40px
          font-weight bold
          color #02a774
          text-align center
        .login_header_title
          padding-top 40px
          text-align center
          > a
            color #333
            font-size 14px
            padding-bottom 4px
            &:first-child
              margin-right 40px
            &.on
              color #02a774
              font-weight 700
              border-bottom 2px solid #02a774
      .login_content
        > form
          > div
            display none
            &.on
              display block
            input
              width 100%
              height 100%
              padding-left 10px
              box-sizing border-box
              border 1px solid #ddd
              border-radius 4px
              outline 0
              font 400 14px Arial
              &:focus
                border 1px solid #02a774
            .login_message
              position relative
              margin-top 16px
              height 48px
              font-size 14px
              background #fff
              .get_verification
                position absolute
                top 50%
                right 10px
                transform translateY(-50%)
                border 0
                color #ccc
                font-size 14px
                outline none
                background transparent
            .login_verification
              position relative
              margin-top 16px
              height 48px
              font-size 14px
              background #fff
              .switch_button
                font-size 12px
                border 1px solid #ddd
                border-radius 8px
                transition background-color .3s, border-color .3s
                padding 0 6px
                width 30px
                height 16px
                line-height 16px
                color #fff
                position absolute
                top 50%
                right 10px
                transform translateY(-50%)
                &.off
                  background #fff
                  .switch_text
                    float right
                    color #ddd
                &.on
                  background #02a774

                > .switch_circle
                  //transform translateX(27px)
                  position absolute
                  top -1px
                  left -1px
                  width 16px
                  height 16px
                  border 1px solid #ddd
                  border-radius 50%
                  background #fff
                  box-shadow 0 2px 4px 0 rgba(0, 0, 0, .1)
                  transition transform .3s
                  &.right
                    transform translateX(30px)
            .login_hint
              margin-top 12px
              color #999
              font-size 14px
              line-height 20px
              > a
                color #02a774
          .login_submit
            display block
            width 100%
            height 42px
            margin-top 30px
            border-radius 4px
            background #4cd96f
            color #fff
            text-align center
            font-size 16px
            line-height 42px
            border 0
        .about_us
          display block
          font-size 12px
          margin-top 20px
          text-align center
          color #999
      .go_back
        position absolute
        top 5px
        left 5px
        width 30px
        height 30px
        > .iconfont
          font-size 20px
          color #999
</style>
