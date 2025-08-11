console.log('Programa iniciado');
const prompt = require('prompt-sync')();

let name = prompt("Digite o nome do Herói: ");

let experience = prompt("Digite a quantidade de XP atual do herói (use ponto para milhar):  ");

experience = Number(experience.replace(/\./g, ''));

if (experience < 1000) {
    console.log(`O Herói de nome: ${name}, está no nível de Ferro`)
}else if (experience >= 1001 && experience <= 2000) {
    console.log(`O Herói de nome: ${name}, está no nível de Bronze`)
} else if (experience >= 2001 && experience <= 5000) {
    console.log(`O Herói de nome: ${name}, está no nível de Prata`)
} else if (experience >= 5001 && experience <= 7000) {
    console.log(`O Herói de nome: ${name}, está no nível de Ouro`)
} else if (experience >= 7001 && experience <= 8000) {
    console.log(`O Herói de nome: ${name}, está no nível de Platina`)
} else if (experience >= 8001 && experience <= 9000) {
    console.log(`O Herói de nome: ${name}, está no nível de Ascendente`)
} else if (experience >= 9001 && experience <= 10000) {
    console.log(`O Herói de nome: ${name}, está no nível de Imortal`)
    }   else {
    console.log(`O Herói de nome: ${name}, está no nível de Radiante`)
}


