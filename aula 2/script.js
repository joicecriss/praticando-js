//tipos primitivos

//boolean
var vOuF = false;
console.log(typeof(vOuF));

//number
var number = 1;
console.log(typeof(number));

//string 
var nome = 'joice';
console.log(typeof(nome));

//function
var funcao = function() {}
console.log(typeof(funcao));

//como declarar
var variavel = 'joice';
variavel = 'cristina';
console.log(variavel);

let variavel2 = 'joice';
variavel2 = 'cristina';
console.log(variavel2);

const constante = 'joice';
constante = 'cristina';
console.log(constante);

//escopo global e local
var escopoGlobal = 'global';
console.log(escopoGlobal);

funcao escopoLocal() {
    let escopoLocalInterno = 'local';
    console.log(escopoLocalInterno);
}

escopoLocal();

//atribuição
var atribuicao = 'joice';

//comparação
var comparacao = '0' == 0;
console.log(comparacao);

//comparação idêntica
var comparcaoIdentica = '0' === 0;
console.log(comparcaoIdentica);

//adição
var adicao = 1 + 1;
console.log(adicao);

//subtração
var subtracao = 2 - 1;
console.log(subtracao);

//multiplicação
var multiplicacao = 2 * 3;
console.log(multiplicacao);

//divisão real
var divisaoReal = 6 / 2;
console.log(divisaoReal);

//divisão inteira ou resto da divisão
var divisaoInteira = 5 % 2;
console.log(divisaoInteira);

//potenciação
var potenciacao = 2 ** 10;
console.log(potenciacao);

//maior que
var maiorQue = 5 > 2;
console.log(maiorQue);

//menor que
var menorQue = 5 < 2;
console.log(menorQue);

//maior ou igual a
var maiorOuIgual = 5 >= 2;
console.log(maiorOuIgual);

//menor ou igual a
var menorOuIgual = 5 <= 2;
console.log(menorOuIgual);

//&&
var e = true && false;
console.log(e);

// ||
var ou = true || false;
console.log(ou);

// !
var nao = !true;
console.log(nao);