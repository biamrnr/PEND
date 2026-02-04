console.log("Olá, JavaScript!");

let a = 10;
let b = 3;

console.log("Operação de adição", a + b);
console.log("Operação de subtração", a - b);
console.log("Operação de multiplicação", a * b);
console.log("Operação de divisão", a / b);
console.log("Operação de resto de divisão", a % b);
console.log("Operação de potência", a ** b);

let contador = 5;
contador++;
console.log(contador);

let d = 2;
let e = 5;
let f = 9;
console.log((d + e + f) / 3);

let m = 50;
let t = 2;
console.log(m % t);

let x = 10;
let y = "10"

console.log("igual",x == y);
console.log("Identico",x === y);
console.log("diferente",x != y);
console.log("não identico",x !== y);
/*exercicio 3*/
let idade = 17;
if (idade >= 18) {
    console.log("Você é maior de idade");
} else {
    console.log("Você é menor de idade");
}
/*exercicio 4*/
let num = 5;
let num2 = 7;
if (num > num2) {
    console.log("num é maior que num2");
} else if (num < num2) {
    console.log("num é menor que num2");
} else {
    console.log("num é igual a num2");
}

console.log("Operadores lógicos");
let idd = 20;
let temCarteira = true;
console.log(idd >= 18 && temCarteira);

let chovendo = false;
let guardaChuva = true;
console.log(chovendo || guardaChuva);

let ligado = false;
console.log(!ligado); //true

/*exercicio 5*/
let nota1 = 6
let nota2 = 8
let nota3 = 7
let media = (nota1 + nota2 + nota3) / 3
if (media >= 7) {
    console.log("Aprovado");
} else {
    console.log("Reprovado");
}
let frequencia = 75
if (frequencia >= 75) {
    console.log("Frequência suficiente");
} else {
    console.log("Frequência insuficiente");
}
/*exercicio 6*/
let login = true;
let token = false;
console.log(login || token);
























































































