let array = [0, -10, 23];

function oddOrEven(array) {
   //enter code here
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
      sum = sum + array[i];
  }

  if (sum % 2 == 0){
     return console.log('even');
  }else{
     return console.log('odd');
  }
}

oddOrEven(array);

