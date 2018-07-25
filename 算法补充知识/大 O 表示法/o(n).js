function sequentialSearch(array,item){
	for ( var i=0;i<array.length;i++ ){
		if( item === array[i] ){
			return i;
			break;
		}
	}
	return -1;
}