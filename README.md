# fl-vue-component-wapper
added events  to vue-flatpikr-component  
move date when mouse wheel  and set today when clicked the form
# install
```sh
npm i git+https://github.com/yoshiyuki-mizogami/vue-flatpickr-component-wapper
```

# Demo build
```sh
npm i
npm run start
```

# How to use on component system (.e.g webpack)
```html
<template>
  <div>
    <fl-vue-wrapper v-model="date"/>
  </div
</template>
```
```js
  import FlVueWrapper from 'vue-flatpickr-component-wapper'
  exports default {
    data(){
      return {
        date:new Date()
      }
    },
    components:{
      FlVueWrapper
    }
  }
```

# How to use as standalone
include script then global variable `FlVueWrapper` is set
```html
  <script src="vue.js"></script>
  <script src="dist/fl-vue-wapper.js"></script>
  <!-- omit -->
  <div id="app">
    <fl-vue-wapper v-model="date"</fl-vue-wapper>
  </div>
```
```js
  new Vue({
    el:'#app',
    data:{
      date:new Date()
    },
    components:{
      FlVueWrapper
    }
  }
```