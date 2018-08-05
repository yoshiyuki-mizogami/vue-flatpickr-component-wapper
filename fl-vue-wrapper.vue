<template>
  <fl :value="value" type="text" @blur.native="validate" @wheel.native.prevent="wheel" :config="myConfig" @click.native="init"/>
</template>
<script>
import fl from 'vue-flatpickr-component'
import 'flatpickr/dist/flatpickr.css'
const day = 1000 * 60 * 60 * 24
const VLID_LENGTH = 10
export default {
  data(){
    const me = this
    return {
      myConfig:{
        onChange(ev){
          me.$emit('change', resetTime(ev[0]))
        }
      }
    }
  },
  props:{
    value:[Date, String],
    config:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  created(){
    Object.assign(this.myConfig, this.config)
  },
  components:{
    fl
  },
  watch:{
    value(v){
      resetTime(v)
    }
  },
  methods:{
    validate(ev){
      const {target} = ev
      const v = target.value
      if(v.length !== VLID_LENGTH){
        target.value =''
        return this.$emit('input', null)
      }
      const d = resetTime(new Date(v))
      if(isNaN(d)){
        target.value =''
        return this.$emit('input', null)
      }
      this.$emit('input', d)
    },
    update(v){
     if(!v && !this.value){
       return
     }
     const updateDate = resetTime(new Date(v))
     if(isNaN(updateDate)){
       return this.input(null)
     }
      if(!this.value){
        return this.input(updateDate)
      }
      const valueTime = this.value.getTime()
      const updateTime = updateDate.getTime()
      if(valueTime !== updateTime){
        this.input(updateDate) 
      }
    },
    init(){
      if(this.value){
        return
      }
      this.input(resetTime(new Date()))
    },
    wheel(ev){
      const n = (0 < ev.deltaY) ? 1 : -1
      let result
      let d = this.value
      const md = new Date(d)
      if(isNaN(md)){ 
        result = null
      }else{
        md.setTime(md.getTime() + (day * n))
        result = md
      }
      this.input( result )
    },
    input(v){
      this.$emit('input', v)
    }
  }
}

function resetTime(v){
  if(!v || v.constructor !== Date){
    return
  }
  v.setHours(0)
  v.setMinutes(0)
  v.setSeconds(0)
  v.setMilliseconds(0)
  return v
}
</script>

