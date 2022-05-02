function duplicateElements(m, n) {
    for (let i = 0; i < m.length; i++) {
        for (let j = 0; j < n.length; j++) {
            if (m[i] === n[j]) {
                return true
            }
        }
    }
    return false;
}
console.log(duplicateElements([0, 2, 3, 4, 5], [1, 6, 7, 8, 9]))