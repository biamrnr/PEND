class Produto {

 //Construtor - método especial para criar e inicializar objetos
    constructor(nome, preco, estoque) {

        // Atributos - características do objeto
        this.nome = nome;
        this.preco = preco;
        this.estoque = estoque;
    }
    // métodos - ações que o objeto pode realizar
    vender() {
        console.log("O produto está sendo vendido.");
    }
    repor() {
        console.log("O produto está sendo reposto.");
    }
    alterarPreco(novoPreco) {
        this.preco = novoPreco;
        console.log(`${this.nome} teve o preço alterado para R$ ${this.preco.toFixed(2)}.`);
    }
}
//Objeto - instância da classe Carro
const produto1 = new Produto("Notebook", 3500.00, 10);
console.log("Produto 1:", produto1);

const produto2 = new Produto("Mouse", 100.00, 50);
console.log("Produto 2:", produto2);

const produto3 = new Produto("Teclado", 200.00, 30);
console.log("Produto 3:", produto3);


console.log("--------------------");
console.log("Atributos do produto 1:");
console.log("-", produto1.nome);
console.log("-", produto1.preco);
console.log("-", produto1.estoque);

produto1.vender();
produto1.repor();



console.log("--------------------");
console.log("Atributos do produto 2:");
console.log("-", produto2.nome);
console.log("-", produto2.preco);
console.log("-", produto2.estoque);

produto2.vender();
produto2.repor();


console.log("--------------------");
console.log("Atributos do produto 3:");
console.log("-", produto3.nome);
console.log("-", produto3.preco);
console.log("-", produto3.estoque);

produto3.vender();
produto3.repor();


