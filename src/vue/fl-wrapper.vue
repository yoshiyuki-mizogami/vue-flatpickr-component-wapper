<template>
  <fl :value="value" @input="update" @wheel.native="wheel" @click.native="init"/>
</template>
<script>
import moment from 'moment'
import fl from 'vue-flatpickr-component'
import 'flatpickr/dist/flatpickr.css';
export default {
  props:{
    value:[Date, String]
  },
  components:{
    fl
  },
  methods:{
    update(v){
      this.$emit('input', v)
    },
    init(){
      if(this.value){
        return
      }
      this.$emit('input', new Date(new Date().toDateString()))
    },
    wheel(ev){
      const n = (0 < ev.deltaY)?1:-1
      let result
      let d = this.value
      const md = moment(d)
      if(!md.isValid()){ 
        result = null
      }else{
        result = md.add(n, 'days').toDate()
      }
      this.$emit('input', result)
    }
  }
}
</script>

