function calculate (num, operation){
    if (!operation){
        return num
    }else{
        return operation(num);
    }
}

function zero(operation) { return calculate (0, operation)}
function one(operation) {return calculate (1, operation)}
function two(operation) {return calculate (2, operation)}
function three(operation) {return calculate (3, operation)}
function four(operation) {return calculate (4, operation)}
function five(operation) {return calculate (5, operation)}
function six(operation) {return calculate (6, operation)}
function seven(operation) {return calculate (7, operation)}
function eight(operation) {return calculate (8, operation)}
function nine(operation) {return calculate (9, operation)}

function plus(x) {
    return function(y){
        return y + x
    }
}
function minus(x) {
    return function (y){
        return y - x
    }
}
function times(x) {
    return function (y){
        return y * x
    }
}
function dividedBy(x) {
    return function (y){
        return Math.floor(y / x);
    }
}


