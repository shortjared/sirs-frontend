import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import mqttClient from './mqttClient'

import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'

Vue.use(Vuex)
Vue.use(VueMaterial)

Vue.material.theme.register('default', {
  primary: 'indigo',
  accent: 'blue'
})

const state = {
  images: [],
  stats: {
    me: 0,
    group: 0
  }
}

const mutations = {
  pushMessage (data, payload) {
    console.log(payload);
    state.images.push(payload);
    state.stats.group++;
  },
  incrementMe(){
    state.stats.me++;
  }
}

const store = new Vuex.Store({
  state,
  mutations
})



mqttClient.on('connect', () => {
    mqttClient.subscribe('sandbox-sirs');
    console.log('connected to iot mqtt websocket');
});

mqttClient.on('message', (topic, message) => {
  store.commit('pushMessage', message.toString())
});

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
