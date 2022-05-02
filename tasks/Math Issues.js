Math.round = function(number) {
    return (number - parseInt(number) >= 0.5) ? parseInt(number) + 1 : parseInt(number) ;
};

Math.ceil = function(number) {
    return (parseInt(number) === number) ? number : parseInt(number) + 1;
};

Math.floor = function(number) {
    return parseInt(number);
};


console.log(Math.round(31.000000001))

// Test.assertEquals ( Math.round ( 0.4 ), 0, 'Math.round( 0.4 )');
// Test.assertEquals ( Math.round ( 0.5 ), 1, 'Math.round( 0.5 )');
//
// Test.assertEquals ( Math.ceil( 0.4 ), 1, 'Math.ceil( 0.4 )');
// Test.assertEquals ( Math.ceil( 0.5 ), 1, 'Math.ceil( 0.5 )');
//
// Test.assertEquals ( Math.floor ( 0.4 ), 0, 'Math.floor( 0.4 )');
// Test.assertEquals ( Math.floor ( 0.5 ), 0, 'Math.floor( 0.5 )');