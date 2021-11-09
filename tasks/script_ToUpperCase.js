String.prototype.toJadenCase = function () {
    //...
    let newString = '';

    this.split('').forEach(function(str){
        newString = newString + ' ' + str.substring(0,1).toUpperCase() + str.substring(1);
    }) 
    return newString.substr(1);

  };

console.log("How can mirrors be real if our eyes aren't real".toJadenCase());