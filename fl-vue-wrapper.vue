<template>
  <fl :value="value" @input="update" @wheel.native="wheel" :config="config" @click.native="init"/>
</template>
<script>
import fl from 'vue-flatpickr-component'
import 'flatpickr/dist/flatpickr.css'
const day = 1000 * 60 * 60 * 24
export default {
  props:{
    value:[Date, String],
    config:{
      type:Object,
      default:{}
    }
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
      const md = new Date(d)
      if(isNaN(md)){ 
        result = null
      }else{
        md.setTime(md.getTime() + (day * n))
        result = md
      }
      this.$emit('input', result)
    }
  }
}

</script>

