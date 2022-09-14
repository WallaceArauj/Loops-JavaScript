const prompt = require('prompt-sync')()

let acres = 0
let number = 0
let count = 0



do {
    number = parseInt(prompt('Digite um número: '))

    if (number % 3 == 0) {
        acres += number
        if (number == 0) {
            break;
        }
        count++
    }


} while (number != 0)

console.log(`A a média dos números é : ${acres / count}`)