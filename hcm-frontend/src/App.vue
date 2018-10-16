<template>
  <div id="app">
    <router-view />
    <simplert :useRadius="true"
              :useIcon="true"
              ref="simplert">
    </simplert>
  </div>
</template>

<script>
import * as loginTypes from 'modules/main/login/store/mutation-types'
import * as appTypes from 'modules/main/app/store/mutation-types'
import { mapGetters, mapMutations, mapActions } from 'vuex'
import assetsUtils from 'assets/js/utils'
import $ from 'jquery'

export default {
  name: 'app',
  data: function () {
    return assetsUtils.getAppLabels()
  },
  computed: {
    simplert () {
      return this.$refs.simplert
    },
    pcDisp () {
      return (this.windowWidth >= this.allApplscr.pcWidth)
    },
    ...mapGetters({
      currentUser: loginTypes.GET_CURRENT_USER,
      currentUserPermission: loginTypes.GET_CURRENT_USER_PERMISSION,
      nowLang: loginTypes.GET_LANG,
      allApplscr: appTypes.GET_TAPPLSCR
    })
  },
  created () {
    window.addEventListener('resize', this.handleResize)
    this.receivedTapplscr()
    this.handleResize()
    $(document).on('click', '.collapse-group .panel-heading', function (e) {
      let _this = this
      setTimeout(function () {
        var offset = $(_this).offset()
        if (offset) {
          $('html, body').animate({
            scrollTop: offset.top - 60
          }, 300)
        }
      }, 0)
    })
    $(document).on('keydown', 'input[type="number"]', function (event) {
      return !(event.keyCode === 69) && // e and E
             !(event.keyCode === 107) && // + numpad
             !(event.keyCode === 187) && // + keyboard
             !(event.keyCode === 109) && // - numpad
             !(event.keyCode === 189) // - keyboard
    })
  },
  methods: {
    getEditPermission () {
      if (this.$route.name !== 'demo' && this.$route.name !== 'demoPm') {
        return this.currentUserPermission.edit.includes(this.$route.name)
      }
      return true
    },
    handleResize () {
      this.windowWidth = document.documentElement.clientWidth
      this.windowHeight = document.documentElement.clientHeight
    },
    focusLang (value) {
      var focus = (value === this.nowLang) ? '_focus' : ''
      return value + focus
    },
    ...mapMutations({
      setLang: loginTypes.SET_LANG,
      setCurrentUser: loginTypes.SET_CURRENT_USER
    }),
    ...mapActions({
      postLogout: loginTypes.POST_LOGOUT,
      receivedTapplscr: appTypes.RECEIVED_TAPPLSCR
    })
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.handleResize)
  }
}
</script>

<style src="assets/scss/style.scss" lang="scss"></style>
<!-- <style src="assets/scss/custom.scss" lang="scss"></style> -->