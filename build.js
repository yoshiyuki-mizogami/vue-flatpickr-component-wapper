const w = require('webpack')
const wc = require('./webpack.config')
const comp = w(wc)
comp.run((er, stat)=>console.log(stat.toString({colors:true})))