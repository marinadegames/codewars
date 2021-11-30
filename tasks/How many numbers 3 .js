function findAll(n, k) {
    let max = Number(maxNumber(k))
    let min = Number(minNumber(k))
    let arr = numberGeneration(min, max)
    return findNumber(arr, n)
}

function minNumber(l) {
    let arr = []

    for (let i = 0; i < l; i++) {
        if (i === 0) {
            arr.push(1)
        } else {
            arr.push(0)
        }
    }
    return arr.join('');
}

function maxNumber(l) {
    let arr = []

    for (let i = 0; i < l; i++) {
        arr.push(9);
    }
    return arr.join('');
}

function numberGeneration(min, max) {
    let arr = [];
    for (let i = min; i < max + 1; i++) {
        arr.push(i)
    }
    return arr;
}

function findNumber(arr, target) {

    let numArr = arr.map(value => String(value));
    let count = 0;
    let result = [];
    for (let i = 0; i < numArr.length; i++) {

        let array = numArr[i].split(''); // разделили на массив
        let sum = 0; // сумма чисел массива
        let sort = array.slice(0).sort();
        let res = [];

        for (let j = 0; j < array.length; j++) { // сумма чисел в массиве
            sum = sum + Number(array[j]);
        }

        if (sum === target && Number(array.join('')) === Number(sort.join(''))) {
            count = count + 1
            //console.log(`Сумма ${array} равна ${target}. Кол-во: ${count}`)
            result.push(array.join(''));
        }

    }
    if (count === 0){
        return result
    }
    //console.log([count, result[0], result[result.length-1]])
    return [count, result[0], result[result.length-1]]
}


console.log(findAll(10, 3)) // [8, '118', '334']);
