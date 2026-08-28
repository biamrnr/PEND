
const ingredientes = document.querySelectorAll(".ingrediente");
const bebidas = document.querySelectorAll(".bebida");

const prato = document.querySelector("#prato");
const copo = document.querySelector("#copo");

const mensagem = document.querySelector("#mensagem");
const textoPrato = document.querySelector("#textoPrato");

ingredientes.forEach(function(ingrediente) {

    ingrediente.addEventListener("dragstart", function(event) {

        event.dataTransfer.setData("ingrediente", event.target.id);

    });

});

prato.addEventListener("dragover", function(event) {

    event.preventDefault();

});


prato.addEventListener("drop", function(event) {

    event.preventDefault();

    const id = event.dataTransfer.getData("ingrediente");

    const ingrediente = document.querySelector("#" + id);

    if (ingrediente) {

        const copia = ingrediente.cloneNode(true);

        copia.removeAttribute("id");

        copia.removeAttribute("draggable");

        prato.appendChild(copia);

        textoPrato.style.display = "none";

        mensagem.textContent = "Ingrediente adicionado! 😋";

    }

});

bebidas.forEach(function(bebida) {

    bebida.addEventListener("dragstart", function(event) {

        event.dataTransfer.setData("bebida", event.target.id);

    });

});

copo.addEventListener("dragover", function(event) {

    event.preventDefault();

});

copo.addEventListener("drop", function(event) {

    event.preventDefault();

    const id = event.dataTransfer.getData("bebida");

    const bebida = document.querySelector("#" + id);

    if (bebida) {

        copo.innerHTML = "";

        const copia = bebida.cloneNode(true);

        copia.removeAttribute("id");
        copia.removeAttribute("draggable");
        
        copo.appendChild(copia);

        mensagem.textContent = "Bebida adicionada! 🥤";

    }

});
