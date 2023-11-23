import { initState } from "./initState";

export function initMixin(Vue) {
  Vue.prototype._init = function (options) {
    // console.log("options", options);
    let vm = this;
    vm.$options = options;
    initState(vm);
  };
}
