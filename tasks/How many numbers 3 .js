function findAll(n, k) {
    function minNumber(l) {
        let arr = []
        for (let i = 0; i < l; i++) i === 0 ? arr.push(1) : arr.push(0)
        return arr.join('');
    }
    function maxNumber(l) {
        let arr = []
        for (let i = 0; i < l; i++) arr.push(9)
        return arr.join('');
    }
    function numberGeneration(min, max) {
        let arr = [];
        for (let i = min; i < max + 1; i++)arr.push(i)
        return arr}
    function findNumber(arr, target) {
        let numArr = arr.map(value => String(value)),
            count = 0,
            result = []
        for (let i = 0; i < numArr.length; i++) {
            let array = numArr[i].split(''),
                sum = 0,
                sort = array.slice(0).sort()
            for (let j = 0; j < array.length; j++) sum = sum + Number(array[j])
            if (sum === target && Number(array.join('')) === Number(sort.join(''))) {
                count += 1
                result.push(array.join(''));
            }
        }
        if (count === 0)return result
        return [count, result[0], result[result.length-1]]}
    let max = Number(maxNumber(k)),
        min = Number(minNumber(k)),
        arr = numberGeneration(min, max)
    return findNumber(arr, n)
}
console.log(findAll(10, 3)) // [8, '118', '334']);
