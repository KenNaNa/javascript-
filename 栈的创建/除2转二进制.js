function Stack(){
	//push(element(s))：添加一个（或几个）新元素到栈顶。
	//pop()：移除栈顶的元素，同时返回被移除的元素。
	//peek()：返回栈顶的元素，不对栈做任何修改
	//isEmpty()：如果栈里没有任何元素就返回true，否则返回false。
	//clear()：移除栈里的所有元素。
	//size()：返回栈里的元素个数。这个方法和数组的length属性很类似。
	this.items = [];//用来保存元素的
	var self = this;
	this.push = function(ele){
		return self.items.push(ele);//可能添加数组，
	};//类似于数组的push
	this.pop = function(){
		return self.items.length&&self.items.pop();
	};//类似于数组的pop
	this.peek = function(){
		if(!self.items.length) return undefined;
		return self.items[self.items.length-1];
	};//返回栈顶的元素
	this.isEmpty = function(){
		return self.items.length===0;
	};//判断栈是否为空
	this.size = function(){
		return this.items.length;
	};//返回数组的length
	this.clear = function(){
		return self.items = [];
	};//清空数组
	this.print = function(){
		console.log(self.items.toString());
	};//打印栈
}
//除2转二进制
Stack.prototype.divideBy2 = function (decNumber){
	var stack = new Stack(),
		rem,//用来存储二进制数
		binaryString = '';//二进制字符串
	while(decNumber>0){
		rem = Math.floor(decNumber % 2);
		stack.items.push(rem);
		decNumber = Math.floor(decNumber / 2);
	}
	while(!stack.isEmpty()){
		binaryString += stack.items.pop().toString();
	}
	return binaryString;
}

//10 进制转其他进制
Stack.prototype.baseConverter = function(decNumber, base){
	 var remStack = new Stack(),
	 	 rem,
	 	 baseString = '',
	 	 digits = '0123456789ABCDEF'; //{6}
	 while (decNumber > 0){
	 	rem = Math.floor(decNumber % base);
	 	remStack.push(rem);
	 	decNumber = Math.floor(decNumber / base);
	 }
	 while (!remStack.isEmpty()){
	 	baseString += digits[remStack.pop()]; //{7}
	 }
	 return baseString;
} 