var webpack = require('webpack');
var path = require("path");

var fileUrl = {
	"sj" : "./src/js/", //js的源文件
	"gj" : "../../js/new/", //生成js的目录 小心
};

module.exports = {
	entry:{
		test:['./src/js/test.js'],
		bb:['./src/js/bb.js']
	},
	output:{
		path:fileUrl.gj,
		filename:'[name].js'
	},
	module:{
		loaders:[
			{ test: /\.js$/, exclude: /node_modules/, loader: "babel?presets[]=es2015"}
		]
	}
};
