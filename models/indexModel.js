'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _requestPromise = require('request-promise');

var _requestPromise2 = _interopRequireDefault(_requestPromise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//把异步请求变为同步
//后端接口全部封装在models里面,indexModel类就封装了这个接口
var indexModel = function () {
	function indexModel(ctx) {
		_classCallCheck(this, indexModel);

		this.ctx = ctx;
	}

	_createClass(indexModel, [{
		key: 'updateNum',
		value: function updateNum() {
			var options = {
				method: 'GET',
				uri: "http://localhost/php/index.php"
			};
			return new Promise(function (resolve, reject) {
				//给index/update页面响应一个请求，地址指向数据库
				//发送请求
				(0, _requestPromise2.default)(options).then(function (result) {
					var info = result;
					if (info) {
						resolve({ data: info });
					} else {
						reject({});
					}
				});
			});
			console.log(info);
		}
	}]);

	return indexModel;
}();

exports.default = indexModel;