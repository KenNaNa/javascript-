function ArrayList(){
	var array = [];
	var swap = function(index1,index2){
		var temp=array[index1];
		array[index1] = array[index2];
		array[index2] = temp;
	}
	this.insert = function(item){
		array.push(item);
	};

	this.toString = function(){
		return array.join();
	}

	//冒泡排序
	this.bubbleSort = function(){
		var length = array.length;
		for( var i=0;i<length;i++ ){
			for( var j=i+1;j<length;j++ ){
				if( array[i]>array[j] ){
					swap(i,j);
				}
			}
		}
		return array;
	}

	//选择排序
	this.selectSort = function(){
		var length = array.length;
		var indexMin;
		for( var i=0;i<length;i++ ){
			indexMin = i;
			for( var j=i+1;j<length;j++ ){
				if( array[indexMin]>array[j] ){
					indexMin = j;
				}
			}
			if(i!==indexMin){
				swap(i,indexMin);
			}
		}
		return array;
	}

	//插入排序
	this.insertSort = function(){
		var length = array.length;
		var j,temp;
		for( var i=1;i<length;i++ ){
			j = i;
			temp = array[i];
			for( ;j>0 && array[j-1]>temp;j-- ){
				array[j] = array[j-1];
			}
			array[j] = temp;
		}
		return array;
	}


	//归并排序是第一个可以被实际使用的排序算法。
	//你在本书中学到的前三个排序算法性能不
	//好，但归并排序性能不错，其复杂度为O(nlogn)。
	//归并排序
	//就是从 数组的长度的中间分成两个数组
	//在进行处理
	//最后合并处理完的数组
	var mergeSortRec = function(array){
		 var length = array.length;
		 if(length === 1) { //{1}
		 	return array; //{2}
		 }
		 var mid = Math.floor(length / 2), //{3}
		 left = array.slice(0, mid), //{4}
		 right = array.slice(mid, length); //{5}
		 return merge(mergeSortRec(left), mergeSortRec(right)); //{6}
	}; 
	var merge = function(left, right){
		 var result = [], // {7}
		 il = 0,
		 ir = 0;
		 while(il < left.length && ir < right.length) { // {8}
			 if(left[il] < right[ir]) {
			 	result.push(left[il++]); // {9}
			 } else{
			 	result.push(right[ir++]); // {10}
			 }
		 }
		 while (il < left.length){ // {11}
		 	result.push(left[il++]);
		 }
		 while (ir < right.length){ // {12}
		 	result.push(right[ir++]);
		 }
		 return result; // {13}
	}; 
	this.mergeSort = function(){
		return array = mergeSortRec(array);
	}


	//快速排序
	/**
	 * (1) 首先，从数组中选择中间一项作为主元
	 * (2) 创建两个指针，左边一个指向数组第一个项，
	 * 右边一个指向数组最后一个项
	 * 移动左指针直到我们找到一个比主元大的元素，
	 * 接着，移动右指针直到找到一个比主元小的元素，
	 * 然后交换它们，重复这个过程，直到左指针超过了右指针
	 * (3) 接着，算法对划分后的小数组（较主元小的值组成的子数组，
	 * 以及较主元大的值组成的子数组）
	 * 重复之前的两个步骤，直至数组已完全排序。
	 */
	var swapQuickStort = function(array, index1, index2){
	 	var aux = array[index1];
	 	array[index1] = array[index2];
	 	array[index2] = aux;
	}; 
	var partition = function(array, left, right) {
		 var pivot = array[Math.floor((right + left) / 2)], //{8}
		 i = left, //{9}
		 j = right; //{10}
		 while (i <= j) { //{11}
			 while (array[i] < pivot) { //{12}
			 	i++;
			 }
			 while (array[j] > pivot) { //{13}
			 	j--;
			 }
			 if (i <= j) { //{14}
			 	swapQuickStort(array, i, j); //{15}
			 	i++;
			 	j--;
			 }
		 }
		 return i; //{16}
	}; 
	var quick = function(array, left, right){
		 var index; //{1}
		 if (array.length > 1) { //{2}
		 	index = partition(array, left, right); //{3}
			 if (left < index - 1) { //{4}
			 	quick(array, left, index - 1); //{5}
			 }
			 if (index < right) { //{6}
			 	quick(array, index, right); //{7}
			 }
		 }
	}; 
	this.quickSort = function(){
	 	quick(array, 0, array.length - 1);
	}; 


	//搜索算法
	//1顺序查找
	this.sequentialSearch = function(item){
		for( var i=0;i<array.length;i++ ){
			if( item===array[i] ){
				return i;
			}
		}
		return -1;
	}


	//2二分搜索
	/**
	 * 
	 * @param  {[type]} item [description]
	 * @return {[type]}      [description]
	 * (1) 选择数组的中间值。
	 * (2) 如果选中值是待搜索值，那么算法执行完毕（值找到了）。
	 * (3) 如果待搜索值比选中值要小，则返回步骤1并在选中值左边的子数组中寻找。
	 * (4) 如果待搜索值比选中值要大，则返回步骤1并在选种值右边的子数组中寻找。
	 */
	this.binarySearch = function(item){
		this.quickSort(); //{1}
		var low = 0, //{2}
		high = array.length - 1, //{3}
		mid, element;
		while (low <= high){ //{4}
			mid = Math.floor((low + high) / 2); //{5}
			element = array[mid]; //{6}
			if (element < item) { //{7}
				low = mid + 1; //{8}
			} else if (element > item) { //{9}
				high = mid - 1; //{10}
			} else {
				return mid; //{11}
			}
		}
	    return -1; //{12} 
	}
}