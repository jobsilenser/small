<template>
  <div name="hrpy16e-detail" class="body-wrapper">
    <hcm-banner :imgPath="require('@/assets/image/PY/icon-5yx.png')"/>
    
      <div class="header-section">
        <div class="row">
          <div class="col-4">
            <div class="input-group _unmargin-bottom">
              <div class="label">{{ labels['HRPY16E']['90'] }}</div>
              <hcm-lov  v-model="searchDetail.codcompy"
                    lovType="codcompy"
                    :descDisp="false"
                    :nowLang="nowLang"
                    name="codcompy"
                    :disabled="!detailDisabled"
                    :class="{ '-disable': !detailDisabled }"
                    v-validate="'required'"
                    :has-error="errors.has('form-search.codcompy')" />
              <div class="validator-text -error" v-show="errors.has('form-search.codcompy')" >{{errors.first('form-search.codcompy')}}</div>
            </div>
          </div>
          <div class="col-1"></div>
          <div class="col-4">
            <div class="input-group _unmargin-bottom">
              <div class="label">{{ labels['HRPY16E']['30'] }}</div>
              <hcm-lov  v-model="searchDetail.codbrlc"
                            lovType="codbrlc"
                            name="codbrlc"
                            :disabled="!detailDisabled"
                            :class="{ '-disable': !detailDisabled }"
                            :has-error="errors.has('form-search.codbrlc')" />
              <div class="validator-text -error" v-show="errors.has('form-search.codbrlc')">{{errors.first('form-search.codbrlc')}}</div>
            </div>
          </div>
          <div  class="col-1"  style="padding-top: 20px;">
            <div class="input-group _unmargin-bottom">
	      <div class="button-md" :class="[ detailDisabled ? '_bg-blue' : '-disable _bg-blue-disable' ]" @click="detailDisabled && callSearch()" ><i class="fa fa-check-circle"></i>{{ labelsButton['submit'] }}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="underline col-9"  style="margin-top: 20px;"></div>
      <div class="body-section">
        <div class="row">
          <div class="col-5">
            <div class="input-group _unmargin-bottom">
              <div class="label">{{ labels['HRPY16E']['40'] }} <span class="_text-red">*</span></div>
              <input class="normal-input" type="text" name="numbrlvl" 
                           v-model="searchDetail.numbrlvl"
                           />
              <div class="validator-text -error" v-show="errors.has('numbrlvl')" >{{errors.first('numbrlvl')}}</div>
            </div>
          </div>
          <div class="col-4">
            <div class="input-group _unmargin-bottom">
              <div class="label">{{ labels['HRPY16E']['60'] }}</div>
              <input class="normal-input" type="text" name="zipcode" 
                           v-model="searchDetail.zipcode"
                           />
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-5">
            <div class="input-group _unmargin-bottom">
              <div class="label">{{ labels['HRPY16E']['50'] }} <span class="_text-red">*</span></div>
              <textarea  class="normal-textarea" name="adrcome1"  
                           v-model="searchDetail.adrcome1"
                           />
              <div class="validator-text -error" v-show="errors.has('adrcome1')" >{{errors.first('adrcome1')}}</div>
            </div>
          </div>
          <div class="row col-7">
            <div class="col-7">
              <div class="input-group _unmargin-bottom">
                <div class="label">{{ labels['HRPY16E']['70'] }}</div>
                <input class="normal-input" type="text" name="numtele" 
                           v-model="searchDetail.numtele"
                           />
              </div>
            </div>
	    <div class="col-7">
              <div class="input-group _unmargin-bottom">
                <div class="label">{{ labels['HRPY16E']['80'] }}</div>
	        <input v-model="searchDetail.numfax"
		  name="numfax"
                 class="normal-input" type="text"
		  @focusin="setNomalInput()"
                  @focusout="setTeleFormatInput()"
                           />
	      </div>
            </div>
          </div>    
        </div>
        <div class="row ">
          <div class="col-12 " >
            <div> 
              <div class="button-md _bg-grey" @click="back()" value="Back"><i class="fa fa-times-circle"></i>{{ labelsButton['cancel'] }}</div> 
              <div class="button-md _bg-green" @click="callSave(!continueBool)" value="save" ><i class="fa fa-check-circle"></i>{{ labelsButton['save'] }}</div>  
            </div>
          </div>
        </div>
      </div> 
  </div>
</template>

<script>
import assetsUtils from 'assets/js/utils'
import { VueEditor } from 'vue2-editor'
import swal from 'sweetalert'
import { constLabels } from 'assets/js/constLabels'
export default {
  name: 'hrpy16e-detail',
  data () {
    return {
      continueBool: true,
      editable: this.$root.$children[0].getEditPermission()
    }
  },
  components: {
    VueEditor
  },
  methods: {
    refreshPage () {
      this.$nextTick(() => {
        this.errors.clear()
        this.errors.clear('form-search')
        this.$refs.hrpy16eDetailTable.errors.clear()
      })
    },
    setTeleFormatInput () {
      let numDecimal = assetsUtils.setToFixed(this.numfax, this.decimal)
      this.typeInput = 'text'
      this.$emit('input', numDecimal)
      this.$emit('changeCurrencyInput', numDecimal)
      this.numfax = assetsUtils.numberTeleFormat(this.numfax, this.decimal)
    },
    back () {
      this.backEvent()
    },
    setNomalInput () {
      this.numfax = (this.numfax + '').replace(/,/g, '').toString()
      this.typeInput = 'number'
    },
    callSave (flgContinue) {
      let _this = this
      this.$validator.validateAll().then(result => {
        swal({
          title: constLabels('confirmTitle'),
          text: constLabels('msgConfirmSave'),
          showCancelButton: true,
          closeOnConfirm: false,
          confirmButtonText: 'ok',
          cancelButtonText: 'cancel',
          html: true
        },
        function (isConfirm) {
          if (isConfirm) {
            let searchParams = {
              p_codcompy: _this.searchDetail.codcompy,
              p_codbrlc: _this.searchDetail.codbrlc,
              p_numbrlv: _this.searchDetail.numbrlv,
              p_adrcome1: _this.searchDetail.adrcome1,
              p_zipcode: _this.searchDetail.zipcode,
              p_numtele: _this.searchDetail.numtele,
              p_numfax: _this.searchDetail.numfax,
              p_codbrsoc: _this.searchDetail.codbrsoc
            }
            _this.postDetailSave({
              sendParams: {
                detail: _this.searchDetail
              },
              searchParams: searchParams,
              flgContinue: flgContinue
            })
            if (flgContinue) {
              this.backEvent()
            }
          }
        })
      })
    }
  },
  props: [ 'data', 'nowLang', 'labels', 'postDetailSave', 'toggle', 'labelsButton', 'columns', 'backEvent', 'searchDetail', 'detailDisabled', 'receivedHrpy16eDetail', 'saveDetail' ]
}
</script>

