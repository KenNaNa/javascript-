function Set(){
	//有一个非常重要的细节，我们使用对象而不是数组来表示集合
	var items = {};

	//add(value)：向集合添加一个新的项
	
	this.add = function(value){
		if(!this.has(value)){
			items[value] = value;
			return true;
		}else{
			return false;
		}
	}

	//remove(value)：从集合移除一个值
	
	this.remove = function(value){
		if(this.has(value)){
			delete items[value];
			return true;
		}else{
			return false;
		}
	}

	//has(value)：如果值在集合中，返回true，否则返回false
	
	this.has = function(value){
		return value in items;
		//return items.hasOwnProperty(value);
		//所有JavaScript对象都有hasOwnProperty方法。
		//这个方法返回一个表明对象是否具有特定属性的布尔值
	}

	//clear()：移除集合中的所有项
	
	this.clear = function(){
		items = {};
	}


	//size()：返回集合所包含元素的数量。与数组的length属性类似
	
	this.size = function(){
		return Object.keys(items).length;
	}

	this.sizeLegacy = function(){
		 var count = 0;
		 for(var prop in items) { //{5}
		 	if(items.hasOwnProperty(prop)) //{6}
		 		++count; //{7}
		 }
		 return count;
	}; 

	//values()：返回一个包含集合中所有值的数组
	this.values = function(){
		return Object.keys(items);
	}

	this.valuesLegacy = function(){
		 var keys = [];
		 for(var key in items){ //{7}
			 keys.push(key); //{8}
		 }
		return keys;
	}; 

	//求并集
	this.union = function(otherSet){
		var unionSet = new Set();
		//当前集合
		var thisValue = this.values();//[]
		var thisValueLength = thisValue.length;
		console.log(thisValue);

		//传进来的集合
		var otherValue = otherSet.values();
		var otherValueLength = otherValue.length;
		console.log(otherValue);

		//自身查重
		for( var i=0;i<thisValueLength;i++ ){
			for( var j=i+1;j<thisValueLength;j++ ){
				if(thisValue[i]!==thisValue[j]){
					continue;
				}else{
					thisValue.splice(i,1);
					thisValueLength = thisValueLength-1;
				}
			}
		}
		for( var i=0;i<otherValueLength;i++ ){
			for( var j=i+1;j<otherValueLength;j++ ){
				if(otherValue[i]!==otherValue[j]){
					continue;
				}else{
					otherValue.splice(i,1);
					otherValueLength = otherValueLength-1;
				}
			}
		}
		//循环比较，去重复的元素
		for( var i=0;i<thisValueLength;i++ ){
			for( var j=0;j<otherValueLength;j++ ){
				if( thisValue[i]!==otherValue[j] ){
					unionSet.add(thisValue[i]);
					unionSet.add(otherValue[j]);
				}else{
					unionSet.add(thisValue[i]);
				}
			}
		}
		return unionSet;
	}

	//求交集
	this.intersection = function(otherSet){
		var interSet = new Set();
		var interSetValue = interSet.values();
		var otherSetValue = otherSet.values();
		var otherSetValueLength = otherSetValue.length;
		var interSetValueLength = interSetValue.length;
		for( var i=0;i<interSetValueLength;i++ ){
			if( otherSet.has(interSetValue[i]) ){
				interSet.add(interSetValue[i]);
			}
		}

		return interSet;
	}

	//求差集
	this.diff = function(otherSet){
		var diffSet = new Set();
		var thisValue = this.values();
		var thisValueLength = thisValue.length;

		var otherValue = otherSet.values();

		for( var i=0;i<thisValueLength;i++ ){
			if( !otherSet.has(thisValue[i]) ){
				diffSet.add(thisValue[i]);
			}
		}
		return diffSet;
	}


	//求子集
	this.subset = function(otherSet){
		if(this.size()>otherSet.size()){
			return null;//
		}else{
			var thisValue = this.values();
			var thisValueLength = thisValue.length;
			var b = true;
			// var thisArr = [];
			for( var i=0;i<thisValueLength;i++ ){
				if( !otherSet.has(thisValue[i]) ){
					b = b && false;
					// thisArr.push(false);
				}else{
					b = b && true;
					// thisArr.push(true);
				}
			}
			if( b ){
				return this;
			}else{
				return null;
			}
			// for( var i=0;i<thisValueLength;i++ ){
			// 	if(!thisArr[i]){
			// 		return null;
			// 		break;
			// 	}

			// }
		}
	}
}