//Solicitar a idade de várias pessoas e imprimir: Total de pessoas com menos de 21 anos. 
// Total de pessoas com mais de 50 anos. O programa termina quando idade for =-99. (WHILE)

const prompt = require ('prompt-sync')()


let cont1 = 0;
let cont2 = 0;
let idade = 0;

while(idade != -99){
    
    let idadeTxt = prompt ('Infome sua idade: ');
    idade = Number(idadeTxt)
   if (idade < 21 && idade != -99){
    cont1++;
   }
   else if (idade > 50){
    cont2++;
   }

    }
    console.log(`A idade menor que 21 é: ${cont1}`);
    console.log(`A idade acima de 50 anos é: ${cont2}`);
        


    
        
    
