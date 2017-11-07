import A from "./A.vue";
import B from "./B.vue";
import Vue from 'vue'

const components = [
  A, B
]

export default {
  install(){
    components.map(component => {
      Vue.component(component.name, component);
    });
  }
}


