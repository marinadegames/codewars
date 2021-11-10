let arr = [17, 71, 17, 17, 17, 17];

function stray(numbers) {
    numbers.sort();
    console.log(numbers);
    if (numbers[0] != numbers[1]) {
        return numbers[0];
    } else {
        return numbers.pop();
    }
}
stray(arr);


//SUCCESSFUL!!!!