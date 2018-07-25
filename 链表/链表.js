function LinkList(){
	var Node = function(element){ // Node类表示要加入列表的项
	 	this.element = element;//它包含一个element属性，即要添加到列表的值，
	 	this.next = null;//以及一个next属性，即指向列表中下一个节点项的指针。
	 };
	 this.length = 0; // {2}
	 this.head = null; // 链表的第一个节点
	 const self = this;
	 this.append = function(element){
	 	/**
	 	 * 1. 当链表为空时，添加的时第一个元素
	 	 * 2. 当链表不为空时，向后面(尾部)添加元素
	 	 */
	 	const node = new Node(element);//创建要添加的链表项
	 	const current = null;
	 	if(self.head===null){
	 		self.head = node;
	 	}else{
	 		current = self.head;
	 		while(current.next){
	 			current = current.next;
	 		}
	 		current.next = node; 
	 	}
	 	self.length ++ ;

	 };
	 this.insert = function(position, element){

	 };
	 this.removeAt = function(position){
	 	/**
	 	 * 1.第一种是移除第一个元素，
	 	 * 2.第二种是移除第一个以外的任一元素
	 	 */
	 };
	 this.remove = function(element){};
	 this.indexOf = function(element){};
	 this.isEmpty = function() {};
	 this.size = function() {};
	 this.toString = function(){};
	 this.print = function(){};
}