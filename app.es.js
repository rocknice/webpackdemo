import Koa from 'koa';
import router from 'koa-simple-router';	   //1、路由
import initController from './controller/initController';
import co from 'co';
import serve from 'koa-static';   //2、静态资源文件
import render from 'koa-swig';	//3、模版引擎
import config from './config/config';	
import bebel_co from 'babel-core/register';
import bebel_po from 'babel-polyfill';
const app = new Koa();
initController.init(app,router);    //1、配置路由

app.context.render = co.wrap(render({     //3、启动swig模版引擎
	root: config.get("viewsDir"),  //引入模版   //等于path.join(__dirname, 'views') 
	autoescape: true,
	cache: 'memory', // disable, set to false 
	ext: 'html',
	writeBody: false
}));
 app.use(serve(config.get("staticDir")));    //2、引入静态资源文件
app.listen(config.get("port"));