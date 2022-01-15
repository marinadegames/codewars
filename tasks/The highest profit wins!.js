let arr = [2334454,5]

// minMax([1,2,3,4,5])   == [1,5]
// minMax([2334454,5])   == [5, 2334454]
// minMax([1])           == [1, 1]

function minMax(arr) {
    let sortArr = arr.sort(function (a,b){
        if (a < b) {
            return -1
        }
        if (a > b) {
            return 1
        }
        return 0
    })
    let res = []
    res.push(sortArr[0])
    res.push(sortArr[sortArr.length - 1])
    return res;
}

console.log(minMax(arr))
