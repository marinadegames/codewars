function DNAStrand(dna){
    return dna.split('').map(el => {
        if (el === 'A') return 'T'
        if (el === 'T') return 'A'
        if (el === 'G') return 'C'
        if (el === 'C') return 'G'
    }).join('')

}

console.log(DNAStrand('GTAT'))


// "ATTGC" --> "TAACG"
// "GTAT" --> "CATA"


// A => T
// T => A
// G => C
// C => G
