import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')


// axios({
//   url: 'http://123.207.32.32:8000/home/multidata',
// }).then(res => {
//   console.log(res);
// })


axios({
  url: 'http://123.207.32.32:8000/home/data?type=sell&page=1'
}).then(res => {
  console.log(res);
})