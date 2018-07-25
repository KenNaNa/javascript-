var i = 0;
function recursiveFn () {
 	i++;
 	recursiveFn();
}
try {
 	recursiveFn();
} catch (ex) {
 	alert('i = ' + i + ' error: ' + ex);
} 

/**
 * ECMAScript 6有尾调用优化（tail call optimization）。
 * 如果函数内最后一个操作是调用函数（就
 * 像示例中加粗的那行），会通过“跳转指令”（jump）
 * 而不是“子程序调用”（subroutine call）来
 * 控制。也就是说，在ECMAScript 6中，
 * 这里的代码可以一直执行下去。所以，
 * 具有停止递归的边
 * 界条件非常重要。
 */