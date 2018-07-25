var recursiveFunction = function(someParam){
 	recursiveFunction(someParam);
}; 

var recursiveFunction1 = function(someParam){
 	recursiveFunction2(someParam);
};
var recursiveFunction2 = function(someParam){
 	recursiveFunction1(someParam);
}; 