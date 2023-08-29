var jogador1 = 0;
var jogador2 = 0;
var placar;

jogador1 != -1 && jogador2 != -1 ? console.log('Os jogadores são válidos') : console.log('Os jogadores não são válidos');

if (jogador1 > 0 && jogador2 == 0) {
    console.log('Jogador 1 marcou um ponto.');
    placar = jogador1 > jogador2;
} else if (jogador2 > 0 && jogador1 == 0) {
    console.log('Jogador 2 marcou um ponto.');
    placar = jogador2 > jogador1;
} else {
    console.log('Ninguém marcou ponto.');
}

switch (placar) {
    case placar = jogador1 > jogador2:
        console.log('jogador 1 ganhou');
        break;
    
    caso placar = jogador2 > jogador1:
        console.log('jogador 2 ganhou');
        break;

    default:
        console.log('Ninguém ganhou.');
}

let array = ['valor1', 'valor2', 'valor3', 'valor4'];

let object = { propriedade1: 'valor1', propriedade2: 'valor2'};

//for
for (let indice = 0; indice < array.length; indice++) {
    console.log(indice);
}

//for in
for (let i in array) {
    console.log(i);
}

for (i in object) {
    console.log(i);
}

//for of
for (i of array) {
    console.log(i);
}

for (i of object.propriedade1) {
    console.log(i);
}

//while
var a = 0;

while (a < 10) {
    a++;
    console.log(a);
}

//do while
var b = 0;

do {
    b++;
    console.log(b);
} while (a < 10)