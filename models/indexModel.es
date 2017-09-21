import rp from 'request-promise';   //把异步请求变为同步
//后端接口全部封装在models里面,indexModel类就封装了这个接口
class indexModel{
	constructor(ctx){
		this.ctx = ctx;
	}
	updateNum(){
		const options = { 
			method: 'GET',
			uri: "http://localhost/php/index.php"
		}
		return new Promise((resolve,reject)=>{      //给index/update页面响应一个请求，地址指向数据库
			//发送请求
			rp(options).then(function (result) {
				const info = result;
				if(info){
					resolve({ data: info });
				}else{
					reject({});
				}
    			});
		});
		console.log(info);
	}
}
export default indexModel;