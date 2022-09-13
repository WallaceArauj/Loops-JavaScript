const prompt = require ('prompt-sync')()

const idadeString = prompt ('Entre com a sua idade: ');
const i = Number(idadeString)

if  ( i >=10 && i <= 14){
    console.log(`Infantil ${i}`);
}
else if ( i >= 15 && i <= 17 ){
    console.log(`Juvenil ${i}`);
}
else if (i >= 18 && i <= 25){
    console.log(`Adulto ${i}`);
}