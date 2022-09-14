//Ler 10 números e imprimir quantos são pares e quantos são ímpares. (FOR)
const prompt = require ('prompt-sync')()
let numTxt
let conta=0
let cont1=0

for(i = 0; i < 10; i++) {
let numTxt = prompt ('Digite um número: ')
let num = Number (numTxt)
if ( num %2 == 0){
  conta++
}
else if(num %2 == 1){
    cont1++
}
}

console.log(`São ${conta} pares`)
console.log(`São ${cont1} ímpares`)
    