/**
 * 1和2的斐波那契数是 1；
 * n（n>2）的斐波那契数是(n1)的斐波那契数加上(n2)的斐波那契数。
 */

// var fibon = function(num){
// 	if( num===1||num===2 ){
// 		return 1
// 	}else{
// 		return fibon(num-1) + fibon(num-2);
// 	}
// }

// var fibon_1 = function(num){
// 	var n1 = 1,
// 		n2 = 1,
// 		n = 1;
// 	for( var i=3;i<num;i++ ){
// 		n = n1 + n2;
// 		n1 = n2;
// 		n2 = n;
// 	}
// 	return n
// }

function Fibon(){
	//运用递归的斐波那契函数
	var self = this;
	this.fibon = function(num){
		if( num===1||num===2 ){
			return 1
		}else{
			return this.fibon(num-1) + this.fibon(num-2);
			// return fibon.bind(self).call(num-1) + fibon.bind(self).call(num-2)
		}
	}
	//没有运用递归的斐波那契函数
	this.fibon_1 = function(num){
		var n1 = 1,
			n2 = 1,
			n3 = 1;
		for( var i=3;i<num;i++ ){
			n3 = n1 + n2;
			n1 = n2;
			n2 = n3;
		}
		return n3;
	}
}