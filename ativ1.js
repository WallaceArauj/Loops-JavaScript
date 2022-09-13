const prompt = require ('prompt-sync')()

const n1String = prompt ('Diga um número inteiro: ')
const n1 = Number(n1String)

const n2String = prompt ('Diga um número inteiro: ')
const n2 = Number(n2String)

const n3String = prompt ('Diga um número inteiro: ')
const n3 = Number(n3String)

if (n1 > n2 && n1>n3 ){
     console.log(`${n1} O maior número`)
}
 else if (n2 > n1 && n2>n3){
    console.log(`${n2} O maior número`)
 }
 else{
    console.log(`${n3} O maior número`)
 }
 
      



