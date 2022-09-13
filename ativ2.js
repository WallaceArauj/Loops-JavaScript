const prompt = require ('prompt-sync')()

const numTxt = prompt ('Entre com o primeiro número: ')
const num1 = Number(numTxt)

const numTxt2 = prompt ('Entre com segundo número: ')
const num2 = Number(numTxt2)

const numTxt3 = prompt ('Entre com terceiro número: ')
const num3 = Number(numTxt3)

if (num1 < num2 && num2 < num3){
    console.log(`${num1}, ${num2} , ${num3}`)
}
else if (num2 < num1 && num1 < num3){
    console.log(`${num2}, ${num3}, ${num1}`)
}
else if (num3 < num1 && num2 < num3){
    console.log(`${num3}, ${num1}, ${num2}`)
}
else if (num1 < num2 && num1 < num3){
    console.log(`${num2}, ${num3}, ${num1}`)
}
else if(num2 < num1 && num3 < num1){
    console.log(`${num2}, ${num1}, ${num3}`)
}
else if (num1 < num3 && num2 < num3){
    console.log(`${num1}, ${num3}, ${num2}`)
}
else if  (num2 < num3 && num1 < num2){
    console.log(`${num2}, ${num1}, ${num3}`)
}



