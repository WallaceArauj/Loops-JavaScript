const prompt = require('prompt-sync')()

let acres = 0
let number = 0



do {
    number = parseInt(prompt('Digite um número: '));
    acres += number

} while (number != 0);

console.log(`A soma dos números digitados é: ${acres}`);