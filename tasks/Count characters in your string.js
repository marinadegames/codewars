function count(str) {
    let arr = str.split("");
    let obj = {};
    arr.forEach(function(s){
        let count=0;
        for(let j=0;j<arr.length;j++){
            if(s===arr[j]){
                count+=1;
            }
            obj[s]=count;
        }
    });
    return obj;
}