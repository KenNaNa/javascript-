/**
 *  背包问题：给出一组项目，各自有值和容量，
 * 目标是找出总值最大的项目的集合。这个
 *问题的限制是，总容量必须小于等于“背包”的容量。
 *最长公共子序列：找出一组序列的最长公共子序列
 *（可由另一序列删除元素但不改变余下元素的顺序而得到）。
 *矩阵链相乘：给出一系列矩阵，目标是找到这些矩阵相乘的最高效办法
 *（计算次数尽可能少）。相乘操作不会进行，
 *解决方案是找到这些矩阵各自相乘的顺序。
 * 硬币找零：给出面额为d1…dn的一定数量的硬币和要找零的钱数，
 * 找出有多少种找零的方法。
 * 图的全源最短路径：对所有顶点对(u, v)，
 * 找出从顶点u到顶点v的最短路径。
 */
function MinCoinChange(coins){
	 var coins = coins; //{1}
	 var cache = {}; //{2}
	 this.makeChange = function(amount) {
		 var me = this;
		 if (!amount) { //{3}
		 	return [];
		 }
		 if (cache[amount]) { //{4}
		 	return cache[amount];
		 }
		 var min = [], newMin, newAmount;
		 for (var i=0; i<coins.length; i++){ //{5}
		 	var coin = coins[i];
		 	newAmount = amount - coin; //{6}
			 if (newAmount >= 0){
			 	newMin = me.makeChange(newAmount); //{7}
			 }
			 if (newAmount >= 0 && (newMin.length < min.length-1 || !min.length)&& (newMin.length || !newAmount) ){
			 	min = [coin].concat(newMin); //{11}
			 	console.log('new Min ' + min + ' for ' + amount);
			 }
		 }
		 return (cache[amount] = min); //{12}
	 };
} 