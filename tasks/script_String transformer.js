let str = 'Example string';

function script_StringTransformer(str) {
    const lettersUpper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    return str
        .split('')
        .map(c => lettersUpper.indexOf(c) === -1 ? c.toUpperCase() : c.toLowerCase())
        .join('')
        .split(' ')
        .reverse()
        .join(' ')
}

console.log(script_StringTransformer(str))