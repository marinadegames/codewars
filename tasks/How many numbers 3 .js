


function findAll(n, k) {

    let max = Number(maxNumber(k))
    let min = Number(minNumber(k))
    let arr = numberGeneration(min, max)
    
		let res = findNumber(arr, n);
    return res
    
}

function minNumber (l){
	let arr = []
  
  for (let i = 0; i < l; i++){
  	if (i == 0) { arr.push(1) }
    else { arr.push(0) }
}
return arr.join('');
}
function maxNumber (l){
	let arr = []
  
  for (let i = 0; i < l; i++){
  	arr.push(9);
}
return arr.join('');
}
function numberGeneration (min, max){
	let arr = [];
  for(let i = min; i < max+1; i++){
  	arr.push(i)
  }
  return arr;
}

function findNumber (arr, target){
	
  let resArray = []
  let count = 0
  
	for (let i = 0; i < arr.length; i++){
  	let a = String(arr[i]);
    let b = a.split('');
    let sum = 0
    
    for (let j = 0; j < b.length; j++){
      sum = sum + Number(b[j]);
    }
    
    if (sum === target){
    	resArray.push(arr[i]);
      count = count + 1
    }
  }
  
  let max = resArray[resArray.length - 1]
  let min = resArray[0]
  return [count, min, max]
  
  
}

console.log(findAll(27, 3)) // [8, '118', '334']);
