class Produto {

    constructor(nome, preco, categoria, desconto) {

        this.nome = nome;

        this.precoOriginal = Number(preco);

        this.preco = Number(preco);

        this.categoria = categoria;

        this.desconto = Number(desconto);

    }

    aplicarDesconto() {

        const valorDesconto =
            this.precoOriginal * (this.desconto / 100);

        this.preco =
            this.precoOriginal - valorDesconto;

    }

    exibir() {

        console.log(
            `${this.nome} - R$ ${this.preco} - ${this.categoria}`
        );

    }

}


class Estoque {

    constructor() {

        this.produtos = [];

    }


    adicionarProduto(produto) {

        this.produtos.push(produto);

        // Salvar produtos no LocalStorage
        localStorage.setItem(
            "produto",
            JSON.stringify(this.produtos)
        );

    }


    excluirProduto(indice) {

        // Excluir produto
        this.produtos.splice(indice, 1);

        // Atualizar o LocalStorage
        localStorage.setItem(
            "produto",
            JSON.stringify(this.produtos)
        );

        // Atualizar a tela
        this.exibirNaTela();

    }


    exibirNaTela() {

        const resultado =
            document.querySelector("#resultado");

        resultado.innerHTML = "";

        resultado.style.display = "block";


        if (this.produtos.length === 0) {

            resultado.innerHTML =
                "<p>Nenhum produto cadastrado.</p>";

            return;

        }


        this.produtos.forEach((produto, indice) => {

            const valorDesconto =
                produto.precoOriginal *
                (produto.desconto / 100);


            resultado.innerHTML += `

                <div class="produto">

                    <p>
                        <strong>Nome:</strong>
                        ${produto.nome}
                    </p>

                    <p>
                        <strong>Preço original:</strong>
                        R$ ${produto.precoOriginal.toFixed(2)}
                    </p>

                    <p>
                        <strong>Categoria:</strong>
                        ${produto.categoria}
                    </p>

                    <p>
                        <strong>Desconto:</strong>
                        ${produto.desconto}%
                    </p>

                    <p>
                        <strong>Valor do desconto:</strong>
                        R$ ${valorDesconto.toFixed(2)}
                    </p>

                    <p>
                        <strong>Preço final:</strong>
                        R$ ${produto.preco.toFixed(2)}
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


const nome =
    document.querySelector("#nome");

const preco =
    document.querySelector("#preco");

const categoria =
    document.querySelector("#categoria");

const desconto =
    document.querySelector("#desconto");

const botaoCadastrar =
    document.querySelector("#botaoCadastrar");


// Cadastrar produto

botaoCadastrar.addEventListener("click", function() {

    if (
        nome.value.trim() === "" ||
        preco.value === "" ||
        categoria.value.trim() === "" ||
        desconto.value === ""
    ) {

        alert("Preencha todos os campos!");

        return;

    }


    const valorDesconto =
        Number(desconto.value);


    // Limitar desconto entre 0% e 100%

    if (
        valorDesconto < 0 ||
        valorDesconto > 100
    ) {

        alert("O desconto deve ser entre 0% e 100%!");

        return;

    }


    const produto = new Produto(

        nome.value,

        preco.value,

        categoria.value,

        desconto.value

    );


    // Aplicar desconto

    produto.aplicarDesconto();


    // Adicionar ao estoque

    estoque.adicionarProduto(produto);


    // Mostrar na tela

    estoque.exibirNaTela();


    // Limpar campos

    nome.value = "";

    preco.value = "";

    categoria.value = "";

    desconto.value = "";

});


// Recuperar produtos do LocalStorage

const dados =
    localStorage.getItem("produto");


if (dados) {

    const produtosSalvos =
        JSON.parse(dados);


    produtosSalvos.forEach(function(produtoSalvo) {

        const produto =
            new Produto(

                produtoSalvo.nome,

                produtoSalvo.precoOriginal,

                produtoSalvo.categoria,

                produtoSalvo.desconto

            );


        // Recalcular usando o preço original

        produto.aplicarDesconto();


        estoque.produtos.push(produto);

    });

}


// Mostrar produtos recuperados

estoque.exibirNaTela();