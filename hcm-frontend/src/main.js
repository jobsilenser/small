// import 'babel-polyfill'
import Vue from 'vue'
import VueRouter from 'vue-router'
import VeeValidate from 'register/veeValidate'
import VueTouch from 'vue-touch'
import App from './App'

import { router } from 'register/router'
import store from 'register/stores'
import * as types from 'modules/main/login/store/mutation-types'
import * as appTypes from 'modules/main/app/store/mutation-types'
import { sync } from 'vuex-router-sync'
import swal from 'sweetalert'
import VueObserveVisibility from 'vue-observe-visibility'
sync(store, router)

import 'font-awesome/css/font-awesome.min.css'
import 'sweetalert/dist/sweetalert.css'
import 'animate.css'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import 'prismjs/themes/prism.css'

import simplert from 'vue2-simplert'
import hrmsTable from 'components/hrmsTableTemplate'
import hrmsSearchBox from 'components/hrmsSearchBox'
import hrmsSearchBoxTable from 'components/hrmsSearchBoxTable'
import hcmSearchBoxTable from 'components/hcmSearchBoxTable'
import hrmsDatepicker from 'components/hrmsDatepicker'
import hrmsTimepicker from 'components/hrmsTimepicker'
import hcmDatetimepicker from 'components/hcmDatetimepicker'
import hcmCurrencyInput from 'components/hcmCurrencyInput'
import hcmHourInput from 'components/hcmHourInput'
import hrmsStaappr from 'components/hrmsStaappr'
import hrmsDropdown from 'components/hrmsDropdown'
import hrmsDropdownMonth from 'components/hrmsDropdownMonth'
import hrmsDropdownYear from 'components/hrmsDropdownYear'
import hrmsInfiniteLoading from 'vue-infinite-loading'
import hrmsDropzone from 'components/hrmsDropzone'
import hrmsLogicalStatement from 'components/hrmsLogicalStatement'
import hrmsChangeLabel from 'components/hrmsChangeLabel'
import hcmLovCodcomp from 'components/hcmLovCodcomp'
import hcmSelect from 'components/hcmSelect'
import hcmHral5ou from 'components/hcmHral5ou'
import hcmHral4ke from 'components/hcmHral4ke'
import hcmHral73x from 'components/hcmHral73x'
import hcmHrsc11x from 'components/hcmHrsc11x'
import hcmHral4fx1 from 'components/hcmHral4fx1'
import hcmHral4fx2 from 'components/hcmHral4fx2'
import hcmHral4ix1 from 'components/hcmHral4ix1'
import hcmHral4ix2 from 'components/hcmHral4ix2'
import hcmCalculator from 'components/hcmCalculator'
import hcmLov from 'components/hcmLov'
import hcmSettingPage from 'components/hcmSettingPage'
import hcmBanner from 'components/hcmBanner'
import hcmMessage from 'components/hcmMessage'
import hcmTableNested from 'components/hcmTableNested'
import hcmDropzone from 'components/hcmDropzone'
import hcmSearchBox from 'components/hcmSearchBox'
import higherOrderComponent from 'components/higherOrderComponent'
import * as VueGoogleMaps from 'vue2-google-maps'
import hcmYearInput from 'components/hcmYearInput'
import hrmsDropdownListvalue from 'components/hrmsDropdownListvalue'
import hcmEmpDrilldown from 'components/hcmEmpDrilldown'
import hcmGraphChart from 'components/hcmGraphChart'
import hcmImport from 'components/hcmImport'
import hcmLastId from 'components/hcmLastId'

let _ = require('lodash')
let env = require('@/../env')

// overrided _.isEmpty for check isEmpty of object with command _.isEmpty(obj, true)
_.mixin(function () {
  var _isEmpty = _.isEmpty
  return {
    isEmpty: function (value, defined) {
      if (defined && _.isObject(value)) {
        return !_.some(value, function (value, key) {
          return !_isEmpty(value)
        })
      }
      return _isEmpty(value)
    }
  }
}())

VueTouch.config.swipe = {
  threshold: 200
}
VueTouch.registerCustomEvent('doubletap', {
  type: 'tap',
  taps: 2
})

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(VeeValidate)
Vue.use(VueTouch, { name: 'v-touch' })
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyDnlb02M1OwgsGNoNM2e0c53vkSxk-Q7ro',
    libraries: 'places'
  }
})
Vue.use(VueObserveVisibility)
// require('chart.js')
// require('hchs-vue-charts')
// Vue.use(VueCharts)
// Vue.component('chartjs-line', require('@/../node_modules/hchs-vue-charts/src/components/chartjs-line.vue'))
Vue.component('simplert', simplert)
Vue.component('hrms-table', hrmsTable)
Vue.component('hrms-search-box', hrmsSearchBox)
Vue.component('hrms-search-box-table', hrmsSearchBoxTable)
Vue.component('hcm-search-box-table', hcmSearchBoxTable)
Vue.component('hrms-datepicker', hrmsDatepicker)
Vue.component('hrms-timepicker', hrmsTimepicker)
Vue.component('hcm-datetimepicker', hcmDatetimepicker)
Vue.component('hcm-currency-input', hcmCurrencyInput)
Vue.component('hcm-hour-input', hcmHourInput)
Vue.component('hrms-staappr', hrmsStaappr)
Vue.component('hrms-dropdown', hrmsDropdown)
Vue.component('hrms-dropdown-month', hrmsDropdownMonth)
Vue.component('hrms-dropdown-year', hrmsDropdownYear)
Vue.component('hrms-infinite-loading', hrmsInfiniteLoading)
Vue.component('hrms-dropzone', hrmsDropzone)
Vue.component('hrms-logical-statement', hrmsLogicalStatement)
Vue.component('hrms-change-label', hrmsChangeLabel)
Vue.component('hcm-lov-codcomp', hcmLovCodcomp)
Vue.component('hcm-select', hcmSelect)
Vue.component('hcm-hral5ou', hcmHral5ou)
Vue.component('hcm-hral4ke', hcmHral4ke)
Vue.component('hcm-hral73x', hcmHral73x)
Vue.component('hcm-hrsc11x', hcmHrsc11x)
Vue.component('hcm-hral4fx1', hcmHral4fx1)
Vue.component('hcm-hral4fx2', hcmHral4fx2)
Vue.component('hcm-hral4ix1', hcmHral4ix1)
Vue.component('hcm-hral4ix2', hcmHral4ix2)
Vue.component('hcm-calculator', hcmCalculator)
Vue.component('hcm-lov', hcmLov)
Vue.component('hcm-setting-page', hcmSettingPage)
Vue.component('hcm-banner', hcmBanner)
Vue.component('hcm-message', hcmMessage)
Vue.component('hcm-table-nested', hcmTableNested)
Vue.component('hcm-dropzone', hcmDropzone)
Vue.component('hcm-search-box', hcmSearchBox)
Vue.component('higher-order-component', higherOrderComponent)
Vue.component('hcm-year-input', hcmYearInput)
Vue.component('hcm-emp-drilldown', hcmEmpDrilldown)
Vue.component('hrms-dropdown-listvalue', hrmsDropdownListvalue)
Vue.component('hcm-graph-chart', hcmGraphChart)
Vue.component('hcm-import', hcmImport)
Vue.component('hcm-last-id', hcmLastId)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})

if (store.getters[types.GET_LANG] !== window.localStorage.getItem(env.site + '_lang')) {
  if (window.localStorage.getItem(env.site + '_lang')) {
    store.commit(types.SET_LANG, window.localStorage.getItem(env.site + '_lang'))
  } else {
    store.commit(types.SET_LANG, store.getters[appTypes.GET_TAPPLSCR_DEFAULTLANG])
  }
}

if (JSON.parse(window.localStorage.getItem(env.site + '_currentUser')) === null) {
  window.localStorage.setItem(env.site + '_currentUser', JSON.stringify({}))
}

if (store.getters[types.GET_CURRENT_USER] !== JSON.parse(window.localStorage.getItem(env.site + '_currentUser'))) {
  store.commit(types.SET_CURRENT_USER, JSON.parse(window.localStorage.getItem(env.site + '_currentUser')))
}

let close = swal.close
swal.close = function () {
  close()
  window.onkeydown = null
}
