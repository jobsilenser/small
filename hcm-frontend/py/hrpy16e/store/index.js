import * as types from './mutation-types'
import hrpy16e from '../api'
import hrpy16eLabels from '../assets/labels'
import { hrpy16eColumns } from '../assets/columns'
import assetsUtils from 'assets/js/utils'
import bus from 'assets/js/bus'
import swal from 'sweetalert'
import { constLabels } from 'assets/js/constLabels'

export default {
  state: {
    labels: hrpy16eLabels,
    indexHead: {},
    index: {
      rows: []
    },
    indexSelected: {},
    detail: {},
    searchDetail: {
      codbrsoc: ''
    },
    indexDisp: true,
    detailDisp: false,
    detailDisabled: true,
    columns: hrpy16eColumns()
  },
  getters: {
    [types.GET_HRPY16E_INDEX] (state) {
      return state.index
    },
    [types.GET_HRPY16E_DETAIL] (state) {
      return state.detail
    },
    [types.GET_HRPY16E_DETAIL_DISABLED] (state) {
      return state.detailDisabled
    },
    [types.GET_HRPY16E_COLUMNS] (state) {
      return state.columns
    },
    [types.GET_HRPY16E_LABELS] (state) {
      return state.labels
    },
    [types.GET_HRPY16E_INDEX_HEAD] (state) {
      return state.indexHead
    },
    [types.GET_HRPY16E_INDEX_DISP] (state) {
      return state.indexDisp
    },
    [types.GET_HRPY16E_DETAIL_DISP] (state) {
      return state.detailDisp
    },
    [types.GET_HRPY16E_SEARCH_DETAIL] (state) {
      return state.searchDetail
    },
    [types.GET_HRPY16E_INDEX_SELECTED] (state) {
      return state.indexSelected
    }
  },
  mutations: {
    [types.SET_HRPY16E_INDEX] (state, index) {
      state.index = index
    },
    [types.SET_HRPY16E_COLUMNS] (state, labels) {
      for (var keyLang of assetsUtils.getAppLabels('allLang')) {
        state.columns[keyLang].index = assetsUtils.replaceLabelToColumns(state.columns[keyLang].index, labels[keyLang])
        state.columns[keyLang].detail = assetsUtils.replaceLabelToColumns(state.columns[keyLang].detail, labels[keyLang])
      }
    },
    [types.SET_HRPY16E_LABELS] (state, labels) {
      state.labels.en = labels.en
      state.labels.th = labels.th
    },
    [types.SET_HRPY16E_INDEX_HEAD] (state, searchIndex) {
      state.indexHead = Object.assign({}, searchIndex)
    },
    [types.SET_HRPY16E_INDEX_DISP] (state, indexDisp) {
      state.indexDisp = indexDisp
    },
    [types.SET_HRPY16E_DETAIL_DISP] (state, detailDisp) {
      state.detailDisp = detailDisp
    },
    [types.SET_HRPY16E_INDEX_SELECTED] (state, indexSelected) {
      state.indexSelected = indexSelected
    },
    [types.SET_HRPY16E_DETAIL] (state, detail) {
      state.detail = detail
    },
    [types.SET_HRPY16E_DETAIL_DISABLED] (state, detailDisabled) {
      state.detailDisabled = detailDisabled
    },
    [types.SET_HRPY16E_SEARCH_DETAIL] (state, searchDetail) {
      state.searchDetail = searchDetail
    }
  },
  actions: {
    [types.TOGGLE_HRPY16E_PAGE] ({ commit }, page) {
      let indexDisp = false
      let detailDisp = false
      switch (page) {
        case 'index':
          indexDisp = true
          break

        case 'detail':
          detailDisp = true
          break

        default:
          indexDisp = true
          break
      }
      commit(types.SET_HRPY16E_INDEX_DISP, indexDisp)
      commit(types.SET_HRPY16E_DETAIL_DISP, detailDisp)
    },
    [types.SET_HRPY16E_INDEX_SELECTED] (state, indexSelected) {
      state.indexSelected = indexSelected
    },
    [types.RECEIVED_HRPY16E_INDEX] ({ commit }, params) {
      hrpy16e.getIndex(params)
        .then((response) => {
          const data = JSON.parse(response.request.response)
          commit(types.SET_HRPY16E_INDEX_HEAD, params)
          commit(types.SET_HRPY16E_INDEX, data)
        })
        .catch((error) => {
          bus.$emit('refreshPage')
          assetsUtils.alertApiError(error, 'RECEIVED_HRPY16E_INDEX')
        })
    },
    [types.RECEIVED_HRPY16E_COLUMNS_LABELS] ({ commit }) {
      hrpy16e.getLabels()
        .then((response) => {
          const data = JSON.parse(response.request.response)
          commit(types.SET_HRPY16E_COLUMNS, data)
          commit(types.SET_HRPY16E_LABELS, data)
        })
        .catch((error) => {
          assetsUtils.alertApiError(error, 'RECEIVED_HRPY16E_COLUMNS_LABELS')
        })
    },
    [types.SAVE_HRPY16E_INDEX] ({ dispatch }, { searchParams, params }) {
      hrpy16e.saveIndex(params)
        .then((response) => {
          const data = JSON.parse(response.request.response)
          dispatch(types.RECEIVED_HRPY16E_INDEX, searchParams)
          swal({ title: '', text: data.response, html: true, type: 'success' })
        })
        .catch((error) => {
          assetsUtils.alertApiError(error, 'SAVE_HRPY16E_INDEX')
        })
    },
    [types.SAVE_HRPY16E_DETAIL] ({ dispatch }, { searchDetail, params }) {
      hrpy16e.saveDetail(searchDetail, params)
        .then((response) => {
          const data = JSON.parse(response.request.response)
          dispatch(types.RECEIVED_HRPY16E_DETAIL, searchDetail)
          swal({ title: '', text: data.response, html: true, type: 'success' })
        })
        .catch((error) => {
          assetsUtils.alertApiError(error, 'SAVE_HRPY16E_DETAIL')
        })
    },
    [types.RECEIVED_HRPY16E_DETAIL] ({ commit }, searchDetail) {
      commit(types.SET_HRPY16E_DETAIL_DISABLED, true)
      hrpy16e.getDetail(searchDetail)
        .then((response) => {
          commit(types.SET_HRPY16E_SEARCH_DETAIL, searchDetail)
          const data = JSON.parse(response.request.response)
          commit(types.SET_HRPY16E_DETAIL, data)
          commit(types.SET_HRPY16E_DETAIL_DISABLED, false)
        })
        .catch((error) => {
          assetsUtils.alertApiError(error, 'RECEIVED_HRPY16E_DETAIL')
        })
    },
    [types.RECEIVED_HRPY16E_DETAIL_CREATE] ({ commit }, searchDetail) {
      commit(types.SET_HRPY16E_DETAIL_DISABLED, true)
      hrpy16e.getDetailCreate(searchDetail)
        .then((response) => {
          commit(types.SET_HRPY16E_SEARCH_DETAIL, searchDetail)
          const data = JSON.parse(response.request.response)
          commit(types.SET_HRPY16E_DETAIL, data)
        })
        .catch((error) => {
          assetsUtils.alertApiError(error, 'RECEIVED_HRPY16E_DETAIL_CREATE')
        })
    },
    [types.POST_HRPY16E_DETAIL_SAVE] ({ commit, dispatch }, { detail, dataRowsHasFlg, searchParams, sendParams, flgContinue }) {
      hrpy16e.postDetailSave({ detail, dataRowsHasFlg, sendParams })
        .then((response) => {
          const data = JSON.parse(response.request.response)
          if (!flgContinue) {
            dispatch(types.RECEIVED_HRPY16E_INDEX, {})
          }
          swal({title: '', text: data.response, html: true, type: 'success'})
        })
        .catch((error) => {
          assetsUtils.alertApiError(error, 'POST_HRPY16E_DETAIL_SAVE')
        })
    },
    [types.POST_HRPY16E_DELETE] ({ commit, dispatch }, { dataRowsHasFlg, indexSelected }) {
      swal({
        title: constLabels('confirmTitle'),
        text: constLabels('msgConfirmCancel'),
        showCancelButton: true,
        closeOnConfirm: false,
        confirmButtonText: constLabels('ok'),
        cancelButtonText: constLabels('cancel'),
        html: true
      },
      function (isConfirm) {
        if (isConfirm) {
          swal({title: '', text: constLabels('msgWaiting'), type: 'info', showConfirmButton: false})
          hrpy16e.postDelete({ dataRowsHasFlg, indexSelected })
            .then((response) => {
              const data = JSON.parse(response.request.response)
              dispatch(types.RECEIVED_HRPY16E_INDEX, {})
              swal({title: '', text: data.response, html: true, type: 'success'})
            })
            .catch((error) => {
              assetsUtils.alertApiError(error, 'POST_HRPY16E_DELETE')
            })
        }
      })
    }
  }
}
