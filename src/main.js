import Vue from 'vue'
import Root from './vue/root.vue'
new Vue({
  el:'#app',
  render(cl){
    return cl(Root)
  }
})