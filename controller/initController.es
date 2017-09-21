import index from './indexController'
const initController ={
	init(app,router){
		app.use(router(_ => {
			_.get('/index/index', index.index())   //建立路由，访问网址，服务器响应一个index函数，此函数可以去给此路由响应一个html文件
			_.get('/index/update', index.update())   //每点击一下大拇指，axios就会访问一次地址，这里给请求的页面响应一个update函数
		}))
	}
}
export default initController;

