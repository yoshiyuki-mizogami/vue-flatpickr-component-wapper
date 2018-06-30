const {join} = require('path')
const VueLoader = require('vue-loader/lib/plugin')
module.exports = [{
  target:'web',
  mode:'development',
  entry:{
    main:join(__dirname, 'src', 'main.js')
  },
  output:{
    path:join(__dirname, 'demo', 'bundle'),
    filename:'bundle.js'
  },
  resolve:{
    extensions:['.js', '.json', '.vue']
  },
  module:{
    rules:[
      {
        test:/\.vue$/,
        loader:'vue-loader'
      },
      {
        test:/\.css/,
        use:[
          'vue-style-loader',
          'css-loader'
        ]
      }
    ]
  },
  plugins:[
    new VueLoader()
  ],
  devtool:'cheap-eval-sourcemap'
},
{
  target:'web',
    mode:'production',
    entry:{
      main:join(__dirname, 'fl-vue-wrapper.vue')
    },
    output:{
      path:join(__dirname, 'dist'),
      filename:'fl-vue-wrapper.js',
      library:'FlVueWrapper',
      libraryTarget:'var',
      libraryExport:'default'
    },
    resolve:{
      extensions:['.js', '.json', '.vue']
    },
    module:{
      rules:[
        {
          test:/\.vue$/,
          loader:'vue-loader'
        },
        {
          test:/\.css/,
          use:[
            'vue-style-loader',
            'css-loader'
          ]
        }
      ]
    },
    plugins:[
      new VueLoader()
    ],
    devtool:false
},
]