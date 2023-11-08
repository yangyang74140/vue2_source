// 配置打包文件

import babel from 'rollup-plugin-babel';
import serve from 'rollup-plugin-serve';

export default {
    input: './src/index.js',//打包入口文件
    // 打包出口文件
    output: {
        file: 'dist/index.js',//打包出口文件
        format: 'umd',//打包格式  在window 上的Vue         new Vue
        name: 'Vue',//打包后的模块名称
        sourcemap:true
    },
    plugins: [
        babel({
            exclude:'node_modules/**',//忽略node_modules下所有文件
        }),
        serve({
            port:3000,
            contentBase:'',// 如果是空字符串,当前目录
            openPage:'./index.html'
        })
    ]
      
}

