function swap(array,index1,index2){
	var temp = array[index1];
	array[index1] = array[index2];
	array[index2] = temp;
}

function bubleSort(array){
	var length = array.length;
	for( var i=0;i<length;i++ ){
		for( var j=i+1;j<length;j++ ){
			if( array[i]>array[j] ){
				swap(array,i,j);
			}
		}
	}
	return array;
}