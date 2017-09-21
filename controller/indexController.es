"use strict"
import indexModel from '../models/indexmodel';
const indexController ={
index(){
	return async (ctx,next) =>{
		ctx.body = await ctx.render('index.html',{   //响应：render载入模版
			title: '大拇指点赞'
		})
	}
},
update(){
	return async(ctx,next)=>{
		const indexM = new indexModel();
		const data = await indexM.updateNum();  //await后面必须跟promise对象。这一行是响应给index/update页面的内容，是一个向后台的请求，由于请求是异步的所以必须返回一个promise对象
		ctx.body = data;
	}
}
}
export default indexController;