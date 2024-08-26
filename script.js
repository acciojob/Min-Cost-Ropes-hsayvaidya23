function mincost(arr)
{ 
//write your code here
	arr.sort((a, b) => a-b);
	let totalCost = 0;

	while(arr.length > 1) {
		const firstRope = arr.shift();
		const secondRope = arr.shift();

		const combine = firstRope + secondRope;
		totalCost += combine;

		 arr.push(combinedRope);

		arr.sort((a, b) => a - b);
	}
	
// return the min cost
	return totalCost;
  
}

module.exports=mincost;
