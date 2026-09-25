// Pegamos os elementos do HTML que serão utilizados pelo JavaScript.

const noticiasApi =
    document.getElementById("noticias-api");

const botaoBuscar =
    document.getElementById("botaoBuscar");

const campoBusca =
    document.getElementById("campoBusca");


// Esta função cria um novo card de notícia utilizando os dados recebidos pela API.

function criarCard(noticia) {

    const card =
        document.createElement("article");

    card.classList.add("noticia");


    // Verifica se a notícia possui uma imagem, caso não possua, utiliza uma imagem padrão.

    const imagem =
        noticia.image_url ||
        "https://images.unsplash.com/photo-1504711434969-e33886168f5c";


    // Insere no card os dados recebidos pela API, como imagem, título, etc.

   card.innerHTML = `

        <img
            src="${imagem}"
            alt="Imagem da notícia"
            onerror="this.src='https://images.unsplash.com/photo-1504711434969-e33886168f5c'"
        >

        <h2>
            ${noticia.headline || "Sem título"}
        </h2>

        <p>
            ${noticia.description || "Sem descrição disponível."}
        </p>

        <p class="fonte">
            Fonte: ${noticia.source || "Não informada"}
        </p>

        <a
            href="${noticia.url || "#"}"
            target="_blank"
            class="ler-noticia"
        >
            Ler notícia
        </a>

    `;


    return card;
}
// Esta função faz uma requisição para a API da Noozra utilizando o método fetch().

function carregarNoticias() {

    noticiasApi.innerHTML =
        "<p class='mensagem'>Carregando notícias...</p>";


    fetch("https://noozra.com/api/articles")

        .then(function (resposta) {

            // Verifica se a requisição foi realizada corretamente.

            if (!resposta.ok) {

                throw new Error(
                    "Erro ao acessar a API."
                );

            }

            return resposta.json();

        })

        .then(function (dados) {

            // Mostra os dados recebidos no console do navegador.

            console.log(dados);

            noticiasApi.innerHTML = "";


            // Pega a lista de notícias retornada pela API.

            const noticias =
                dados.articles || [];


            // Verifica se existem notícias.

            if (noticias.length === 0) {

                noticiasApi.innerHTML =
                    "<p class='mensagem'>Nenhuma notícia encontrada.</p>";

                return;
            }


            // Percorre todas as notícias recebidas e cria um card para cada uma.

            noticias.forEach(function (noticia) {

                const card =
                    criarCard(noticia);

                noticiasApi.appendChild(card);

            });

        })

        .catch(function (erro) {

            // Caso aconteça algum erro, mostra uma mensagem na página.

            console.log(erro);

            noticiasApi.innerHTML =
                "<p class='mensagem'>Não foi possível carregar as notícias.</p>";

        });
}

// Esta função permite que o usuário pesquise notícias por assunto.

function buscarNoticias() {

    const pesquisa =
        campoBusca.value.trim();


    // Se o campo estiver vazio, carrega novamente todas as notícias.

    if (pesquisa === "") {

        carregarNoticias();

        return;
    }


    noticiasApi.innerHTML =
        "<p class='mensagem'>Pesquisando notícias...</p>";


    // Coloca o termo pesquisado na URL da API.

    const url =
        `https://noozra.com/api/search?q=${encodeURIComponent(pesquisa)}`;


    fetch(url)

        .then(function (resposta) {

            // Verifica se a pesquisa foi realizada corretamente.

            if (!resposta.ok) {

                throw new Error(
                    "Erro ao pesquisar."
                );

            }

            return resposta.json();

        })

        .then(function (dados) {

            console.log(dados);

            noticiasApi.innerHTML = "";


            // Pega os resultados da pesquisa.

            const noticias =
                dados.articles || [];


            // Verifica se encontrou alguma notícia.

            if (noticias.length === 0) {

                noticiasApi.innerHTML =
                    "<p class='mensagem'>Nenhuma notícia encontrada.</p>";

                return;
            }


            // Cria um card para cada resultado encontrado na pesquisa.

            noticias.forEach(function (noticia) {

                const card =
                    criarCard(noticia);

                noticiasApi.appendChild(card);

            });

        })

        .catch(function (erro) {

            // Mostra uma mensagem caso aconteça algum erro.

            console.log(erro);

            noticiasApi.innerHTML =
                "<p class='mensagem'>Erro ao pesquisar notícias.</p>";

        });
}


// Quando o usuário clicar no botão, a função de pesquisa será executada.

botaoBuscar.addEventListener(
    "click",
    buscarNoticias
);

// Permite pesquisar apertando Enter dentro do campo de busca.

campoBusca.addEventListener(
    "keydown",
    function (evento) {

        if (evento.key === "Enter") {

            buscarNoticias();

        }

    }
);

// Quando a página abrir, as notícias da API são carregadas automaticamente.

carregarNoticias();