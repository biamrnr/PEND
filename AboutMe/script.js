

const botoes = document.querySelectorAll(".btn");

botoes.forEach(botao => {

    botao.addEventListener("mouseenter", () => {
        botao.style.transform = "translateY(-5px)";
    });

    botao.addEventListener("mouseleave", () => {
        botao.style.transform = "translateY(0)";
    });

});

const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {
    threshold: 0.2
});

cards.forEach(card => observer.observe(card));



const foto = document.querySelector(".foto-perfil");

foto.addEventListener("mouseenter", () => {

    foto.style.transform = "scale(1.06) rotate(2deg)";

});

foto.addEventListener("mouseleave", () => {

    foto.style.transform = "scale(1) rotate(0deg)";

});

cards.forEach(card => {

    card.addEventListener("mousemove", (e) => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;

        const y = e.clientY - rect.top;

        const rotateX = -(y - rect.height / 2) / 25;
        const rotateY = (x - rect.width / 2) / 25;

        card.style.transform =
            `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =
            "perspective(1000px) rotateX(0) rotateY(0)";

    });

});


document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (e) {

        e.preventDefault();

        document.querySelector(this.getAttribute("href"))
            .scrollIntoView({

                behavior: "smooth"

            });

    });

});

const formulario = document.getElementById("formContato");

formulario.addEventListener("submit", function(e){

    e.preventDefault();

    let nome = document.getElementById("nome").value.trim();
    let email = document.getElementById("email").value.trim();
    let telefone = document.getElementById("telefone").value.trim();
    let mensagem = document.getElementById("mensagem").value.trim();

    if(nome === "" || email === "" || telefone === "" || mensagem === ""){

        alert("Preencha todos os campos!");

        return;

    }

    alert("Mensagem enviada com sucesso!");

    formulario.reset();

});