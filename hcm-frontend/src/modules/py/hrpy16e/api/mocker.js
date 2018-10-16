import hral19eLabels from '../assets/labels'
import faker from 'faker'
import assetsUtils from 'assets/js/utils'

export const mocker = {
  labels () {
    return hral19eLabels
  },
  index (searchParam) {
    let mockRows = []
    const mockTotal = 3
    mockRows.push({
      codcompy: 'PPS',
      desc_codbrlc: 'สำนักงานใหญ่',
      numbrlvl: '000000'
    })
    mockRows.push({
      codcompy: 'FIX',
      desc_codbrlc: 'Edward Ford',
      numbrlvl: '000001'
    })
    mockRows.push({
      codcompy: 'BMK',
      desc_codbrlc: 'Edward Ford',
      numbrlvl: '000002'
    })
    return {
      total: mockTotal,
      rows: mockRows
    }
  },
  saveIndex () {
    return assetsUtils.getAppLabels('mockPostMessage')['th']
  },
  detail (searchParam) {
    let mockRows = []
    const mockTotal = 3
    for (var i = 0; i < mockTotal; i++) {
      mockRows.push({
        codincom: faker.lorem.word(),
        codbank: faker.lorem.word(),
        bankno: faker.lorem.word()
      })
    }
    return {
      detail: {
        codempid: searchParam.codempid
      },
      table: {
        total: mockTotal,
        rows: mockRows
      }
    }
  },
  detailCreate () {
    return {
      detail: {
        codempid: ''
      },
      table: {
        rows: []
      }
    }
  }
}
