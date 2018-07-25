function Dictionary(){

	var items = {};
	//set(key,value)：向字典中添加新元素
	
	this.set = function(key,value){
		items[key] = value;
	}

	//remove(key)：通过使用键值来从字典中移除键值对应的数据值
	
	this.remove = function(key){
		if(this.has(key)){
			delete items[key];
			return true;
		}
		return false;
	}
	
	//has(key)：如果某个键值存在于这个字典中，则返回true，反之则返回false
	
	this.has = function(key){
		return key in items;
	}

	//get(key)：通过键值查找特定的数值并返回
	
	this.get = function(key){
		return this.has(key) ? items[key] : undefined;
	}

	//clear()：将这个字典中的所有元素全部删除
	
	this.clear = function(){
		items = {};
	}

	//size()：返回字典所包含元素的数量。与数组的length属性类似
	
	this.size = function(){
		return this.keys().length;
	}
	this.sizeLegacy = function(){
		 var count = 0;
		 for(var prop in items) { //{5}
		 	if(items.hasOwnProperty(prop)) //{6}
		 		++count; //{7}
		 }
		 return count;
	}; 

	//keys()：将字典所包含的所有键名以数组形式返回
	
	this.keys = function(){
		return Object.keys(items);

		/**
		 * var arr = [];
		 * 
		 */
	}

	//values()：将字典所包含的所有数值以数组形式返回
	this.values = function(){
		var values = [];
		for( var key in items ){
			if( this.has(key) ){
				values.push(items[key])
			}
		}
		return values;
	}
	this.valuesLegacy = function(){
		 var keys = [];
		 for(var key in items){ //{7}
			 keys.push(key); //{8}
		 }
		return keys;
	};


	//getItems
	this.getItems = function() {
	 	return items;
	} 
}