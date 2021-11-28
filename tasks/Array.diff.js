let a = [1, 2, 2, 2, 3, 4];
let b = [2, 3];


function arrayDiff(a, b) {

    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < b.length; j++) {
            if (a[i] === b[j]){
                a.splice(i, 1)
            }
        }
    }
    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < b.length; j++) {
            if (a[i] === b[j]){
                a.splice(i, 1)
            }
        }
    }

    return a
}

console.log(arrayDiff(a, b))