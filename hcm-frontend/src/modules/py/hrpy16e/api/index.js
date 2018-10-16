import { instance, endpoint, isMock, generator } from 'register/api'
import { mocker } from './mocker'

export default {
  getLabels () {
    if (isMock) return generator(mocker.labels())
    return instance().get(endpoint + '/components/getLabels/HRPY16E')
  },
  getIndex (searchParam) {
    if (isMock) return generator(mocker.index(searchParam))
    if (searchParam) {
      const params = searchParam.codbrsoc
      return instance().get(endpoint + '/hrpy16e/index/' + params)
    } else {
      return generator({ rows: [] })
    }
  },
  saveIndex (params) {
    if (!isMock) return generator(mocker.saveIndex())
    return instance().post(endpoint + '/hrpy16e/saveIndex', params)
  },
  saveDetail (searchDetail, saveParams) {
    if (!isMock) return generator(mocker.saveIndex())
    let params = {
      codcompy: searchDetail.codcompy,
      dteeffec: searchDetail.dteeffec,
      codcalen: searchDetail.codcalen,
      params: saveParams
    }
    return instance().post(endpoint + '/hrpy16e/saveIndex', params)
  },
  getDetail (searchDetail) {
    if (!isMock) return generator(mocker.detail(searchDetail))
    if (searchDetail) {
      const params = searchDetail.codbrsoc
      return instance().get(endpoint + '/hrpy16e/detail/' + params)
    } else {
      return generator({
        detail: {
          codbrsoc: ''
        },
        table: {
          rows: []
        }
      })
    }
  },
  getDetailCreate () {
    return generator(mocker.detailCreate())
  },
  postDetailSave ({ sendParams, searchParams }) {
    let saveParams = {
      param_json: [{
        codcompy: sendParams.detail.codcompy,
        codbrlc: sendParams.detail.codbrlc,
        codbrsoc: sendParams.detail.codbrsoc,
        adrcome1: sendParams.detail.adrcome1,
        zipcode: sendParams.detail.zipcode,
        numfax: sendParams.detail.numfax,
        numtele: sendParams.detail.numtele,
        numbrlvl: sendParams.detail.numbrlvl
      }]
    }
    if (isMock) return generator(mocker.save())
    return instance().post(endpoint + '/hrpy16e/save', saveParams)
  },
  postDelete ({dataRowsHasFlg}) {
    for (var i = 0; i < dataRowsHasFlg.length; i++) {
      dataRowsHasFlg[i] = Object.assign(dataRowsHasFlg[i])
    }
    let sendParams = {
      param_json: dataRowsHasFlg
    }
    if (isMock) return generator(mocker.delete())
    return instance().post(endpoint + '/hrpy16e/postdelete', sendParams)
  }
}
