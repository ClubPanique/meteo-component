import Vue from 'vue'
import Meteo from './Meteo.vue'

const Components = {
  Meteo
}

Object.keys(Components).forEach(name => {
  Vue.component(name, Components[name])
})

export default Components