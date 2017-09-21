const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin'); //提取出less文件并编译成css文件，括号内是地址

module.exports = {
	entry: {
		"index": "./src/scripts/thumb.js" //唯一入口文件
	},
	output: {
		path: __dirname + "/build", //所有文件的输出路径
		publicPath: "http://localhost:3000/",
		filename: "scripts/bundle.js"
	},
	devServer: {
		contentBase: "/", //本地服务器所加载的页面所在的目录
		historyApiFallback: true, //不跳转
		inline: true //实时刷新
	},
	module: {
		rules: [{
			//导入jquery$
			test: require.resolve("jquery"),
			loader: "expose-loader?$!expose-loader?jQuery"
		}, {
			//导入axios
			test: require.resolve("axios"),
			loader: "expose-loader?axios"
		}, {
			//编译es6或es7文件或es文件
			test: /\.js$/,
			use: [{
				loader: "babel-loader",
				options: {
					"presets": [
						"es2015", "stage-0"
					]
				}
			}]
		}, {
			test: /\.css$/i, //i是全局不区分大小写。
			use: ExtractTextPlugin.extract({
				fallback: "style-loader", //若之后的失败了，就用fallback的loader执行
				use: [{
					loader: "css-loader"
				}]
			})
		}]
	},
	plugins: [
		//提取出less文件并编译成css文件，括号内是地址
		new ExtractTextPlugin("styles/[name].css"),
		new webpack.optimize.CommonsChunkPlugin({ //提取公共代码
			name: 'common', //公共文件名,无扩展名
			filename: 'scripts/[name].js', // 地址
			minChunks: 2 //被引用两次以上就生成
		}),
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: 'views/index.html',
			inject: true,
		}),
		new HtmlWebpackPlugin({
			filename: 'layout.html',
			template: 'views/layout.html',
			inject: true,
			chunks: ['common']
		}),
		new webpack.optimize.UglifyJsPlugin({ //压缩代码，同时可以做到将没有用到的代码删除。tree shaking
			compress: {
				warnings: true
			},
			output: {
				comments: false
			},
			sourceMap: false
		}),
		new webpack.optimize.ModuleConcatenationPlugin() //8、进一步将代码的重复冗余部分合并或移除

	],
	resolve: {
		extensions: ['.js', '.css', ' ']
	}
}