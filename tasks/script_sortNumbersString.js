

function SortNumbers(n){
    n = String(n);
    n = n.split('').sort((a, b) => b-a).join('');
    n = Number(n);
    return n;
}


console.log(SortNumbers(34234234));


