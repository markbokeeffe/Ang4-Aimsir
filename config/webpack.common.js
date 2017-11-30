var webpack=require('webpack');
var HtmlWebpackPlugin=require('html-webpacl-plugin');
var ExtractTextPlugin=require('extract-text-webpack-plugin');
var helpers=require('/helpers');

module.export={
  entry:{
    polyfill:'./src/polyfills',
    vendor:'./src/vendor',
    app:'./src/main'
  },

  resolve:{
    extension:['.ts','.js']
  },

  module:{
    rule:[
      {
        test:/\.ts$/,
        loader:[
          'babel-loader',
          {
            loader: 'awesome-typscript-loader',
            options:{
              configFileName: helpers.root('tsconfig.json')
            }
          },
          'angular2-template-loader'
        ],
        exclude:[/node_modules/]
      },
      {
        test:/\.js$/,
        loader:'babel-loader',
        exclude:/node_modules/,
        query:{
          presets:['es2015']
        }
      },
      {
        test:/\.html$/,
        loader:'html-loader'
      },
      {
        test:/\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        loader:'file-loader?name=assets/[name].[hash].[ext]'
      },
      {
        test:/\.css$/,
        exclude: helpers.root('src','app'),
        loader:ExtractTextPlugin.extract({
          fallbackLoader:'style-loader',
          loader: 'css-loader?sourceMap'
        })
      },
      {
        test:/\.css$/,
        include: helpers.root('src','app'),
        loader:'raw-loader'
      },
    ]
  },

  plugins:[
    
  ]
}
