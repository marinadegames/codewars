let arr = [ 3, 22, 3, 3, 3 ];

function findUniq(arr) {

    arr.sort(function(a, b) { return a - b; });

    if (arr[0] !== arr[1]){
        return arr[0];
    }
    if (arr[0] !== arr[arr.length-1]){
        return arr[arr.length-1]
    }

}


console.log(findUniq(arr))