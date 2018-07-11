<template>
  <fl :value="value" type="text" @input="update" @wheel.native.prevent="wheel" :config="config" @click.native="init"/>
</template>
<script>
import fl from 'vue-flatpickr-component'
import 'flatpickr/dist/flatpickr.css'
const day = 1000 * 60 * 60 * 24
export default {
  props:{
    value:Date,
    config:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  components:{
    fl
  },
  methods:{
    update(v){
     const updateDate = new Date(v)
     if(isNaN(updateDate)){
       return this.$emit('input', null)
     }
      if(!this.value){
        return this.$emit('input', updateDate)
      }
      const valueTime = this.value.getTime()
      const updateTime = updateDate.getTime()
      if(valueTime !== updateTime){
        this.$emit('input', updateDate) 
      }
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

