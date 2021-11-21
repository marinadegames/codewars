function spinWords(string){
    //TODO Have fun :)
    let arr = string.split(' ');

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length >= 5){
            let a = arr[i].split('').reverse().join('')
            arr[i] = a;
        }
    }

    return arr.join(' ');

}


console.log(spinWords('Hey fellow warriors'));