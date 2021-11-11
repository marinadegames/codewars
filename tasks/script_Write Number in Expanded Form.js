function expandedForm(num) {
  let numToStr = num.toString().split("");
  for (let i = 0; i < numToStr.length; i++) {
    for (let j = numToStr.length - i; j > 1; j--) {
      numToStr[i] += "0";
    }
  }
  numToStr = numToStr.filter((value) => !value.startsWith(0));
  return numToStr.join(" + ");
}
console.log(expandedForm(70305));
