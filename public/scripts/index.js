"use strict"
let f=""
//编译前的es6源代码
//父类PraiseButton
class PraiseButton{
	constructor(count,element){
		//实例属性
		this.count = count;
		this.element = element;

	};
	//原型方法（对象）。
	// add(){
	// 	this.count++;
	// 	var count = this.count;
	// 	return count;
	// };
}
//子类Thumb
class Thumb extends PraiseButton{
	constructor(count,element){
		super(count,element);
	}
	//由于super指向父类的原型对象，所以定义在父类实例上的方法或属性，是无法通过super调用的。
	//ES6 规定，通过super调用父类的方法时，super会绑定子类的this。
	clickAction() {
		this.element.click(() => {
			if(f){
				clearTimeout(f);
			}
			f = setTimeout(() => {
				if (this.count < 10) {
					this.element.css('-webkit-filter', 'grayscale(0)');
					this.count = add(this.count);
					let num = this.count;
					let praise = this.element;
					$("#praise").css({
						"opacity": "1",
						"position": "relative",
						"top": "10px"
					}).text("+" + num);
					setTimeout(() => {
						$("#praise").css({
							"opacity": "0",
							"position": "relative",
							"top": "40px"
						});
					}, 700);
				} else {
					this.element.css('-webkit-filter', 'grayscale(1)');
					this.count = 0;
				}
				console.log(this.count);
			}, 500)
		})
	}
}
 export
 default{
 	Thumb
 }
// let praisebutton = new Thumb(0,$("#container"));
// 	$("#container").click(function(){
// 		praisebutton.Praise();
// 	})
