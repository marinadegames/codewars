let array = [
    true, true, false, true,
    false, false, true, false,
    true, true, false, true,
    false, false, true, false,
    true, true, false, true,
    false, false, true, false
];

function countSheep (array){
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i]) {
            count++;
        }
    }
    return count;
}
console.log("Successful! " + countSheep(array));