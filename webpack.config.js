var webpack = require('webpack')
var htmlWebpackPlugin = require('html-webpack-plugin')
var cleanWebpackPlugin = require('clean-webpack-plugin')
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
			{ test:/\.css$/,loader:'style!css' },
			{ test:/\.less$/,loader:'style!css!less' },
			{ test:/\.(js|jsx)$/,loader:'babel',exclude:/nodex_modules/ },
			{ test:/\.(png|jpg|jpeg|gif)$/,loader:'url-loader?limit=10000' },
			{ test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,loader: 'url-loader?limit=10000&minetype=application/font-woff' },
			{ test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?|(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,loader: 'file-loader' }
		]
	},
	resolve:{
		extensions:['','.js','.jsx','.css','.less']
	},
	plugins:[
		new cleanWebpackPlugin(['dist'],{
			'root':__dirname
		}),
		new webpack.optimize.CommonsChunkPlugin('common','common-bundle.js'),
	].concat(plugins)
}