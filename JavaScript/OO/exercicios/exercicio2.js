class Aluno {

 //Construtor - método especial para criar e inicializar objetos
    constructor(nome, idade, curso, matriculo) {

        // Atributos - características do objeto
        this.nome = nome;
        this.idade = idade;
        this.curso = curso;
        this.matricula = matriculo;
    }
    // métodos - ações que o objeto pode realizar
    aprender() {
        console.log("O aluno está aprendendo.");
    }
    estudar() {
        console.log("O aluno está estudando.");
    }
    apresentar() {
        console.log(`${this.nome} está se apresentando.`);
    }
}
//Objeto - instância da classe Carro
const aluno1 = new Aluno("Beatriz", 17, "Desenvolvimento de Sistemas", 7648364);
console.log("Aluno 1:", aluno1);

const aluno2 = new Aluno("Mariana", 17, "Desenvolvimento de Sistemas", 6324273);
console.log("Aluno 2:", aluno2);

const aluno3 = new Aluno("Gabriela", 17, "Desenvolvimento de Sistemas", 62643628);
console.log("Aluno 3:", aluno3);


console.log("--------------------");
console.log("Atributos do aluno 1:");
console.log("-", aluno1.nome);
console.log("-", aluno1.idade);
console.log("-", aluno1.curso);
console.log("-", aluno1.matricula);

aluno1.aprender();
aluno1.estudar();



console.log("--------------------");
console.log("Atributos do aluno 2:");
console.log("-", aluno2.nome);
console.log("-", aluno2.idade);
console.log("-", aluno2.curso);
console.log("-", aluno2.matricula);

aluno2.aprender();
aluno2.estudar();
aluno2.apresentar();

console.log("--------------------");
console.log("Atributos do aluno 3:");
console.log("-", aluno3.nome);
console.log("-", aluno3.idade);
console.log("-", aluno3.curso);
console.log("-", aluno3.matricula);

aluno3.aprender();
aluno3.estudar();
aluno3.apresentar();


