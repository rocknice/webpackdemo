'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _indexController = require('./indexController');

var _indexController2 = _interopRequireDefault(_indexController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initController = {
	init: function init(app, router) {
		app.use(router(function (_) {
			_.get('/index/index', _indexController2.default.index()); //建立路由，访问网址，服务器响应一个index函数，此函数可以去给此路由响应一个html文件
			_.get('/index/update', _indexController2.default.update()); //每点击一下大拇指，axios就会访问一次地址，这里给请求的页面响应一个update函数
		}));
	}
};
exports.default = initController;