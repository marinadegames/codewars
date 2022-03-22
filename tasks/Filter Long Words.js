// * With input "The quick brown fox jumps over the lazy dog", 4
// * Return ['quick', 'brown', 'jumps']


function filterLongWords(sentence, n) {
    return sentence.split(' ').filter(w => w.length > n)
}
let sentence = "The quick brown fox jumps over the lazy dog"
console.log(filterLongWords(sentence, 3))
