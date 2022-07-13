import directive from './random-color'


const plugin = {
  install(Vue) {
    Vue.directive('random-color', directive)
  },
  directive,
}


export default plugin
