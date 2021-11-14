//  returns "(123) 456-7890"

function createPhoneNumber(numbers){

    let onePartArr = [];
    let twoPartArr = [];
    let threePartArr = [];

    for (let i = 0; i < numbers.length; i++) {
        if (i <= 2){
            onePartArr.push(numbers[i])
        }else if ( i >= 3 && i <= 5 ){
            twoPartArr.push(numbers[i])
        }else{
            threePartArr.push(numbers[i])
        }
    }
     //et res = onePartArr.join('') + twoPartArr.join('');
    let res = `(${onePartArr.join('')}) ${twoPartArr.join('')}-${threePartArr.join('')}`
    return res
}


let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

console.log(createPhoneNumber(number))
