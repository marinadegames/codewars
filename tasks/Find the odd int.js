
function findOdd(A) {
  //happy coding!
  let res;
  
  for (i = 0; i < A.length; i++){
    let count = 0;
     for (j = 0; j < A.length; j++){
       if (A[i] === A[j]){
         count = count + 1        
       }
       
     }
    if (count % 2 != 0){
           res = A[i]
         }
  }
  return res;
}
