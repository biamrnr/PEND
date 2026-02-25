console.log("Funções nativas");
let agora = new Date();
console.log(agora);

function mostrarDataHora() {
    let data = new Date();
    console.log("Dia atual: " + data.getDate());
    console.log("Mês: " + (data.getMonth() + 1));
    console.log("Ano:  " + data.getFullYear());
    console.log("Horas: ", data.getHours());
    console.log("Minutos: ", data.getMinutes());
    console.log("Desafio: ", data.getHours() + ":" + data.getMinutes() + ":" + data.getSeconds() + " " + data.getDate() + "/" + (data.getMonth() + 1) + "/" + data.getFullYear()
);
}

mostrarDataHora();

console.log("Funções matemáticas");

console.log(Math.PI)
function calcularOperacoes(numero) {
    console.log("Raiz quadrada: ", Math.sqrt(numero));
    console.log("Número inteiro mais próximo: ", Math.round(numero));
    console.log("Arredondamento para cima: ", Math.ceil(numero));
    console.log("Arredondamento para baixo: ", Math.floor(numero));
    console.log("Quadrado: ", Math.pow(numero, 2));
    console.log("Valor absoluto: ", Math.abs(numero));
}

calcularOperacoes(7.8);

console.log("Função string");
function analisarTexto(texto) {
    console.log("Tamanho do texto: ", texto.length);
    console.log("Maiúsculas: ", texto.toUpperCase());
    console.log("Minúsculas: ", texto.toLowerCase());
}
analisarTexto("JavaScript!");

function VerificarPalavra(frase) {
    console.log(frase.includes("JavaScript"));
}
VerificarPalavra("Eu estudo JavaScript");

function Junta(nome, curso) {
    return "Aluno: " + nome + " | Curso: " + curso;
}
console.log(Junta("Beatriz", "front-end"));