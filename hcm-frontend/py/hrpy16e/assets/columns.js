export let hrpy16eColumns = () => {
  let indexColumns = [{
    key: 'codcompy',
    name: '',
    labelCodapp: 'HRPY16E',
    labelIndex: '20',
    style: 'min-width: 100px;',
    inlineType: 'text'
  }, {
    key: 'descod',
    name: '',
    labelCodapp: 'HRPY16E',
    labelIndex: '30',
    style: 'min-width: 100px;',
    inlineType: 'text'
  }, {
    key: 'numbrlvl',
    name: '',
    labelCodapp: 'HRPY16E',
    labelIndex: '40',
    style: 'min-width: 100px;',
    inlineType: 'text'
  }]

  let detailColumns = [{
    key: 'codcompy',
    name: '',
    inlineType: 'lov',
    lovType: 'codcomp',
    labelCodapp: 'HRPY16E',
    labelIndex: '90',
    style: 'min-width: 100px;'
  }, {
    key: 'codbrlc',
    name: '',
    inlineType: 'lov',
    lovType: 'codbrlc',
    labelCodapp: 'HRPY16E',
    labelIndex: '30',
    style: 'min-width: 100px;'
  }, {
    key: 'numbrlvl',
    name: '',
    labelCodapp: 'HRPY16E',
    labelIndex: '40',
    inlineType: 'lov',
    style: 'min-width: 100px;',
    validateRules: 'required'
  }, {
    key: 'zipcode',
    name: '',
    labelCodapp: 'HRPY16E',
    labelIndex: '60',
    inlineType: 'lov',
    style: 'min-width: 100px;'
  }, {
    key: 'adrcome1',
    name: '',
    labelCodapp: 'HRPY16E',
    labelIndex: '40',
    inlineType: 'text',
    style: 'min-width: 100px;',
    validateRules: 'required'
  }, {
    key: 'numtele',
    name: '',
    labelCodapp: 'HRPY16E',
    labelIndex: '70',
    inlineType: 'lov',
    style: 'min-width: 100px;'
  }, {
    key: 'numfax',
    name: '',
    labelCodapp: 'HRPY16E',
    labelIndex: '80',
    inlineType: 'lov',
    style: 'min-width: 100px;'
  }]

  return {
    en: {
      index: indexColumns,
      detail: detailColumns
    },
    th: {
      index: indexColumns,
      detail: detailColumns
    }
  }
}
