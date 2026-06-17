/*atividade 1*/
let vermelho = document.getElementById("vermelho");
let azul = document.getElementById("azul");

vermelho.addEventListener("click", function() {
    titulo.classList.toggle("destaque");
    titulo.style.color = "red";
});

azul.addEventListener("click", function() {
    titulo.classList.toggle("destaque");
    titulo.style.color = "blue";
});
/*atividade 2*/
let mostrar = document.getElementById("mostrar");
let paragrafo = document.getElementById("paragrafo");

mostrar.addEventListener("click", function() {
    paragrafo.classList.toggle("oculto");
});
/*atividade 3*/
let input = document.getElementById("entrada");

input.addEventListener("input", function() {
    let contador = document.getElementById("contador");
    contador.textContent = "caracteres digitados: " + input.value.length;
});
/*atividade 4*/
let clique = document.getElementById("Cliques");
let contadorCliques = document.getElementById("contadorCliques");
let contador = 0;

clique.addEventListener("click", function() {
    contador++;
    contadorCliques.textContent = "Número de cliques: " + contador;
});
/*atividade 5 e 6*/
let adicionar = document.getElementById("adicionar");
let lista = document.getElementById("lista");
let novoItem = document.getElementById("novoItem");

adicionar.addEventListener("click", function() {
    if (novoItem.value.trim() ==="") {
        alert("por favor, digite um item.");
        return;
        }
        let item = document.createElement("li");
        item.textContent = novoItem.value;
        lista.appendChild(item);
        novoItem.value = "";
        item.addEventListener("click", function() {
            if (confirm("Deseja remover este item?")) {
                lista.removeChild(item);
            }
});
});

/*atividade hard - validação de campo*/
let validar = document.getElementById("validar");
let nome = document.getElementById("nome");
let resultado = document.getElementById("resultado");

validar.addEventListener("click", function() {
    if (nome.value.trim() === "") {
        resultado.textContent = "Por favor, preencha o campo nome.";
        resultado.style.color = "red";
        resultado.addEventListener("click", function() {
        });
    } else {
        resultado.textContent = "Campo nome preenchido com sucesso!";
        resultado.style.color = "green";
        resultado.addEventListener("click", function() {
        });
    }   
});

