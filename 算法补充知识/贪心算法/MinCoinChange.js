function MinCoinChange(coins){
	 var coins = coins; //{1}
	 this.makeChange = function(amount) {
		 var change = [],
		 total = 0;
		 for (var i=coins.length; i>=0; i--){ //{2}
			 var coin = coins[i];
			 while (total + coin <= amount) { //{3}
				 change.push(coin); //{4}
				 total += coin; //{5}
			 }
		 }
		 return change;
	 };
} 