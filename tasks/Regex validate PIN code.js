function validatePIN(pin) {

    let reg = /^(\d{4}|\d{6})$/
    return reg.test(pin)

}

console.log(validatePIN('1234.0'))