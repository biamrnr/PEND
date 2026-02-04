function saudacao() {
    console.log("Olá, JavaScript!");
}
saudacao();

function saudacaoNome(nome) {
    console.log("Olá, " + nome);
}

saudacaoNome("Beatriz");

function somar(a, b) {
    return a + b;
}

console.log(somar(5, 3));

/*exercicio 7*/
function imc(peso, altura) {
    return peso / (altura * altura);
}
let peso = 53;
let altura = 1.65;
console.log("IMC: " + imc(peso, altura));

/*exercicio 8*/

function ParOuImpar(numero) {
    if (numero % 2 === 0) {
        return "Par";
    } else {
        return "Ímpar";
    }
}
let numero = 5;
console.log(ParOuImpar(numero));
