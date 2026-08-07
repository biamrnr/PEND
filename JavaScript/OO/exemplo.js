//Classe
class Carro {

    //Construtor - método especial para criar e inicializar objetos
    constructor(marca, modelo, ano, cor) {

        // Atributos - características do objeto
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.cor = cor;
    }
    // métodos - ações que o objeto pode realizar
    ligar() {
        console.log("O carro está ligado.");
    }
    acelerar() {
        console.log("O carro está acelerando.");
    }
    frear() {
        console.log(`${this.modelo} freiou.`);
    }
}
//Objeto - instância da classe Carro
const carro1 = new Carro("Volkswagen", "Gol", 2022, "Branco");
console.log("Carro 1:", carro1);

const carro2 = new Carro("Toyota", "Corolla", 2025, "Preto");
console.log("Carro 2:", carro2);

const carro3 = new Carro("Honda", "Civic", 2023, "Prata");
console.log("Carro 3:", carro3);

console.log("--------------------");
console.log("Atributos do carro 1:");
console.log("-", carro1.marca);
console.log("-", carro1.modelo);
console.log("-", carro1.ano);
console.log("-", carro1.cor);

console.log("--------------------");
console.log("Atributos do carro 2:");
console.log("-", carro2.marca);
console.log("-", carro2.modelo);
console.log("-", carro2.ano);
console.log("-", carro2.cor);

console.log("--------------------");
console.log("Atributos do carro 3:");
console.log("-", carro3.marca);
console.log("-", carro3.modelo);
console.log("-", carro3.ano);
console.log("-", carro3.cor);

// 
carro1.ligar();
carro1.acelerar();
carro1.frear();