import { observer } from "./observe/index";

export function initState(vm) {
  //   console.log("vm", vm);
  let opts = vm.$options;
  if (opts.data) {
    initData(vm);
  }
}

function initData(vm) {
  let data = vm.$options.data;

  data = vm._data = typeof data === "function" ? data.call(vm) : data;
  // data = typeof data === "function" ? data() : data;
  // console.log(data);
  observer(data);
}
