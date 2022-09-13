const prompt = require  ('prompt-sync')()

const nString = prompt('Digite um número: ');
const n = Number(nString);

    if ( n%2==0 ){
    console.log (`Este número é par, a raiz quadrada dele é ${Math.sqrt(n)}`);

    }
    else  {
        console.log(`Este número é ímpar, e a potência dele ao quadrado é: ${Math.pow(n,2)}`);
    }