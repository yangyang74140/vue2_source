import {initMixin}from './init.js';

// 入口文件
function Vue(options){
    this._init(options);
}

initMixin(Vue)

export default Vue;