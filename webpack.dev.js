var webpack = require('webpack')
var htmlWebpackPlugin = require('html-webpack-plugin')
var cleanWebpackPlugin = require('clean-webpack-plugin')
var openBrowserWebpackPlugin = require('open-browser-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var precss = require('precss')
var autoprefixer = require('autoprefixer')


var entry = {},plugins=[]
for(var i=1;i<11;i++){
	entry['lesson'+i] = './src/entry/lesson'+i+'.js'
	plugins.push(new htmlWebpackPlugin({ template:'./src/template/index.html',filename:'./lesson'+i+'.html',chunks:['common','lesson'+i] }))
}
entry['index'] = './src/index.js'
plugins.push(new htmlWebpackPlugin({ template:'./src/template/index.html',filename:'./index.html',chunks:['common','index'] }))
module.exports = {
	entry:entry,
	output:{
	    path:'./dist',
	    filename:'[name]-bundle.js',
	    publicPath:'/'
	},
	module:{
		loaders:[
			{ test:/\.css$/,loader:ExtractTextPlugin.extract('style','css!postcss') },
			{ test:/\.less$/,loader:ExtractTextPlugin.extract('style','css!postcss!less') },
			{ test:/\.(js|jsx)$/,loader:'babel',exclude:/nodex_modules/ },
			{ test:/\.(png|jpg|jpeg|gif)$/,loader:'url-loader?limit=10000' }
		]
	},
	postcss:function(){
		return [ precss,autoprefixer({ browsers:['>5%'] }) ]
	},
	resolve:{
		extensions:['','.js','.jsx','.css','.less']
	},
	devtool:'eval-sourcemap',
	plugins:[
		new ExtractTextPlugin('[name]-[contenthash].css'),
		new webpack.optimize.CommonsChunkPlugin('common','common-bundle.js'),
		new webpack.optimize.OccurenceOrderPlugin(),
		new openBrowserWebpackPlugin({
			url:'http://localhost:8082'
		})
	].concat(plugins)
}