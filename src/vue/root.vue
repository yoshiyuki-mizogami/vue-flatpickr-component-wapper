<template>
  <div class="main">
    <fl v-model="date" @change="changeHook" :config="{allowInput:true}"/>
    <fl v-model="date2" @change="changeHook" :config="{locale:ja}"/>
  </div>
</template>
<style>
</style>
<script>
import fl from '../../fl-vue-wrapper.vue'
import lang from 'flatpickr/dist/l10n'
export default {
  data(){
    return {
      date:null,
      date2:null,
      ja:lang.ja
    }
  },
  created(){
    setTimeout(()=>{ 
      this.date = new Date()
    }, 3000)
  },
  components:{
    fl
  },
  methods:{
    changeHook(newValue){
      console.log('fire change hoook', newValue)
    }
  }
}

</script>
