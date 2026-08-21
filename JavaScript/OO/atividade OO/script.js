class Produto {

    constructor(nome, preco, categoria, desconto) {

        this.nome = nome;
        this.preco = preco;
        this.categoria = categoria;
        this.desconto = desconto;

    }

    aplicarDesconto() {

        this.preco -= this.preco * this.desconto;

    }

    exibir() {

        console.log(`${this.nome} - R$ ${this.preco} - ${this.categoria}`);

    }

}


class Estoque {

    constructor() {

        this.produtos = [];

    }

    adicionarProduto(produto) {

        this.produtos.push(produto);

    }

    excluirProduto(indice) {

        this.produtos.splice(indice, 1);

        this.exibirNaTela();

    }

    exibirNaTela() {

        const resultado = document.querySelector("#resultado");

        resultado.innerHTML = "";

        resultado.style.display = "block";

        this.produtos.forEach((produto, indice) => {

            resultado.innerHTML += `
                <div class="produto">

                    <p>
                        <strong>Nome:</strong>
                        ${produto.nome}
                    </p>

                    <p>
                        <strong>Preço:</strong>
                        R$ ${produto.preco}
                    </p>

                    <p>
                        <strong>Categoria:</strong>
                        ${produto.categoria}
                    </p>

                    <p>
                        <strong>Desconto:</strong>
                        ${produto.desconto}
                    </p>

                    <button onclick="estoque.excluirProduto(${indice})">
                        Excluir
                    </button>

                </div>
            `;

        });

    }

}


const estoque = new Estoque();


const nome = document.querySelector("#nome");

const preco = document.querySelector("#preco");

const categoria = document.querySelector("#categoria");

const desconto = document.querySelector("#desconto");

const botaoCadastrar = document.querySelector("#botaoCadastrar");


botaoCadastrar.addEventListener("click", function() {

    const produto = new Produto(

        nome.value,

        preco.value,

        categoria.value,

        desconto.value

    );

    estoque.adicionarProduto(produto);

    console.log(estoque.produtos);

    estoque.exibirNaTela();

});