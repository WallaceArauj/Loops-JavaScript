const prompt = require('prompt-sync')();

let x = 0;
let qtdCalmas = 0;
let qtdMNervosas = 0;
let qtdHAgressivos = 0;
let qtdOCalmos = 0;
let qtdNervosos40 = 0;
let qtdCalmos18 = 0;


while (x < 170) {
  const idadeText = prompt('Digite a idade: ');
  const idade = Number(idadeText);
  console.log('Escolha o Sexo entre:\n\n');
  console.log('1 - Homem\n');
  console.log('2 - Mulher\n');
  console.log('3 - Outros\n');
  const sexoText = prompt('Escolha a opção do sexo: ');
  const sexo = Number(sexoText);
  console.log('Escolha um humor entre:\n\n');
  console.log('1 - Calmo\n');
  console.log('2 - Nervoso\n');
  console.log('3 - Agressivo\n');
  const humorText = prompt('Escolha a opção do humor: ');
  const humor = Number(humorText);

  if (humor == 1) {
    qtdCalmas++;
  }

  if (sexo == 2 && humor == 2) {
    qtdMNervosas++;
  }

  if (sexo == 1 && humor == 3) {
    qtdHAgressivos++;
  }

  if (sexo == 3 && humor == 1) {
    qtdOCalmos++;
}

if (humor == 2 && idade > 40) {
  qtdNervosos40++;
}

if (humor == 1 && idade < 18) {
  qtdCalmos18++;
}

i++;
}
console.log(`\nO total de pessoas calmas é ${qtdCalmas}`);
console.log(`\nO total de mulheres nervosas é ${qtdMNervosas}`);
console.log(`\nO total de homens agressivos é ${qtdHAgressivos}`);
console.log(`\nO total de outros calmos é ${qtdOCalmos}`);
console.log(`\nO total de nervosos com mais de 40 anos é ${qtdNervosos40}`);
console.log(`\nO total de calmos até 18 anos é ${qtdCalmos18}`);