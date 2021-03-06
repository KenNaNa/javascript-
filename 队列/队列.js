function Queue(){
	//enqueue(element(s))：向队列尾部添加一个（或多个）新的项。
	//dequeue()：移除队列的第一（即排在队列最前面的）项，并返回被移除的元素。
	//front()：返回队列中第一个元素——最先被添加，也将是最先被移除的元素。队列不
	//做任何变动（不移除元素，只返回元素信息——与Stack类的peek方法非常类似）。
	//isEmpty()：如果队列中不包含任何元素，返回true，否则返回false。
	//size()：返回队列包含的元素个数，与数组的length属性类似。
	this.items = [];
	var self = this;
	this.enqueue = function(ele){
		return self.items.push(ele);
	};
	this.dequeue = function(){
		return self.items.length && self.items.shift();
	};

	this.front = function(){
		return self.items[0];
	};

	this.isEmpty = function(){
		return self.items.length===0;
	};

	this.size = function(){
		return self.items.length;
	};

	this.clear = function(){
		return self.items = [];
	};

	this.print = function(){
		console.log(self.items.toString());
	}
}

//优先队列
var PriorityQueue = function(){
	Queue.bind(PriorityQueue).call();//继承
 	function QueueElement (element, priority){ // {1}
 		this.element = element;
 		this.priority = priority;
 	}
 	this.enqueue = function(element, priority){
	 	var queueElement = new QueueElement(element, priority);
		 if (this.__proto__.constructor.isEmpty()){
		 	this.__proto__.constructor.items.push(queueElement); // {2}
		 } else {
	 		this.added = false;
	 		for (var i=0; i<this.__proto__.constructor.items.length; i++){
	 			if (queueElement.priority < this.__proto__.constructor.items[i].priority){
	 					this.__proto__.constructor.items.splice(i,0,queueElement); // {3}
	 					this.added = true;
	 					break; // {4}
	 			}
	 		}
		 	if (!this.added){ //{5}
		 		this.__proto__.constructor.items.push(queueElement);
		 	}
	 	} 
	}
}