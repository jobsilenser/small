<template>
  <div id="hrpy16e" class="clearfix">
    <hcm-setting-page :newEvent="refreshPage"
                      :translateDisp="true" />

    <hcm-search-box-table v-show="indexDisp"
                          v-model="searchIndex"
                          :data="index"
                          :nowLang="app.nowLang"
                          :labels="labels[app.nowLang]"
                          :columns="columns[app.nowLang].index"
                          :unLoadBool="true"
                          :receivedStore="receivedHrpy16eIndex"
                          :indexDisp="true"
                          :searchComponentsArray="searchComponentsArray"
                          :headerLabels="labels[app.nowLang]"
                          :headerData="indexHead"
                          :headerComponent="findHeaderComponent()"
                          :headerDisp="true"
                          :addInlineEventBool="true"
                          :deleteInlineEvent="deleteInlineEvent"
                          :deleteInlineEventBool="true"
                          :deleteInlineBtnDisp="false"
                          :editInlineEventBool="false"
                          :addBtnDisp="true"
                          :addEvent="addEvent"
                          :editEvent="editEvent"
                          :saveInlineEvent="deleteEvent"
                          ref="searchBoxTableHrpy16e" />

    <detail v-show="detailDisp"
            :data="detail"
            :nowLang="app.nowLnag"
            :labels="labels[app.nowLang]"
            :labelsButton="app.button[app.nowLang]"
            :columns="columns[app.nowLang].detail"
            :backEvent="backEvent"
	    :detail="detail"
            :indexSelected="indexSelected"
	    :postDetailSave="postDetailSave"
            :searchDetail="searchDetail"
            :detailDisabled="detailDisabled"
            :receivedHrpy16eDetail="receivedHrpy16eDetail"
            :saveDetail="saveDetail"
            ref="hrpy16eDetail" />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import * as types from './store/mutation-types'
import indexHeaderComponent from './components/indexHeader'
import searchComponentsArray from './assets/searchComponentsArray'
import detail from './components/detail'
import swal from 'sweetalert'
import { constLabels } from 'assets/js/constLabels'

export default {
  name: 'hrpy16e',
  data () {
    return {
      app: this.$root.$children[0],
      searchComponentsArray: searchComponentsArray,
      searchIndex: {
        codbrsoc: ''
      },
      paramSearchDetail: {
        codbrsoc: ''
      }
    }
  },
  created () {
    this.receivedColumnsLabels()
  },
  computed: {
    ...mapGetters({
      indexDisp: types.GET_HRPY16E_INDEX_DISP,
      detailDisp: types.GET_HRPY16E_DETAIL_DISP,
      columns: types.GET_HRPY16E_COLUMNS,
      labels: types.GET_HRPY16E_LABELS,
      index: types.GET_HRPY16E_INDEX,
      detail: types.GET_HRPY16E_DETAIL,
      indexHead: types.GET_HRPY16E_INDEX_HEAD,
      searchDetail: types.GET_HRPY16E_SEARCH_DETAIL,
      detailDisabled: types.GET_HRPY16E_DETAIL_DISABLED
    })
  },
  methods: {
    findHeaderComponent () {
      return indexHeaderComponent
    },
    deleteInlineEvent () {
      console.log('deleteInlineEvent')
    },
    refreshPage () {
      if (this.indexDisp) {
        this.$refs.searchBoxTableHrpy16e.refreshPage()
      } else if (this.detailDisp) {
        this.addEvent()
        this.$refs.hrpy16eDetail.refreshPage()
      }
    },
    addEvent () {
      let paramSearchDetail = {
        codbrsoc: this.searchIndex.codbrsoc
      }
      this.receivedHrpy16eDetailCreate(paramSearchDetail)
      this.togglePage('detail')
    },
    editEvent (params) {
      let paramSearchDetail = {
        codcompy: params.codcompy,
        codbrlc: params.codbrlc,
        numbrlvl: params.numbrlvl,
        adrcome1: params.adrcome1,
        zipcode: params.zipcode,
        numtele: params.numtele,
        numfax: params.numfax,
        descod: params.descod,
        codbrsoc: params.codbrsoc
      }
      this.receivedHrpy16eDetail(paramSearchDetail)
      this.togglePage('detail')
    },
    backEvent () {
      let paramSearchDetail = Object.assign({}, this.paramSearchDetail)
      this.receivedHrpy16eDetailCreate(paramSearchDetail)
      this.$refs.hrpy16eDetail.refreshPage()
      this.togglePage('index')
    },
    deleteEvent (dataRowsHasFlg) {
      this.$validator.validateAll().then(result => {
        if (result) {
          this.postHrpy16eDelete({ dataRowsHasFlg: dataRowsHasFlg })
          this.togglePage('index')
        }
      })
    },
    saveDetail (params) {
      let _this = this
      swal({
        title: constLabels('confirmTitle'),
        text: constLabels('msgConfirmSave'),
        showCancelButton: true,
        closeOnConfirm: true,
        confirmButtonText: 'ok',
        cancelButtonText: 'cancel',
        html: true
      },
      function (isConfirm) {
        if (isConfirm) {
          swal({title: '', text: constLabels('msgWaiting'), type: 'info', showConfirmButton: false})
          _this.saveHrpy16eDetail(params)
          this.togglePage('index')
        }
      })
    },
    ...mapActions({
      togglePage: types.TOGGLE_HRPY16E_PAGE,
      receivedHrpy16eIndex: types.RECEIVED_HRPY16E_INDEX,
      receivedColumnsLabels: types.RECEIVED_HRPY16E_COLUMNS_LABELS,
      saveHrpy16eIndex: types.SAVE_HRPY16E_INDEX,
      receivedHrpy16eDetail: types.RECEIVED_HRPY16E_DETAIL,
      receivedHrpy16eDetailCreate: types.RECEIVED_HRPY16E_DETAIL_CREATE,
      saveHrpy16eDetail: types.SAVE_HRPY16E_DETAIL,
      postHrpy16eDelete: types.POST_HRPY16E_DELETE,
      postDetailSave: types.POST_HRPY16E_DETAIL_SAVE,
      indexSelected: types.GET_HRPY16E_INDEX_SELECTED
    })
  },
  components: {
    detail
  }
}
</script>