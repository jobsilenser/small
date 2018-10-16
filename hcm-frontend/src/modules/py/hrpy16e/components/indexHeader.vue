<template>
  <div class="index-header-box">
    <div class="index-col col-md-6">
      <div class="index-set">
        <div class="index-label">{{ higherOrderLabels['HRPY16E']['10'] }} :</div>
        <div class="index-data">{{ descCodbrsoc }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import * as lovTypes from 'components/hcmLov/store/mutation-types'
import assetsUtils from 'assets/js/utils'

export default {
  name: 'hrpy16e-index-header',
  data () {
    return {
      assetsUtils: assetsUtils
    }
  },
  props: {
    higherOrderLabels: {
      type: Object
    },
    higherOrderEvent: {
      type: Object
    },
    higherOrderData: {
      type: Object
    }
  },
  computed: {
    descCodbrsoc () {
      return this.higherOrderData.codbrsoc
    },
    ...mapGetters({
      lovCurrentDesc: lovTypes.GET_HCM_LOV_CURRENT_DESC
    })
  }
}
</script>