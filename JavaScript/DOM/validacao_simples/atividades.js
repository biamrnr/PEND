let nome = document.getElementById("nome");
let senha = document.getElementById("senha");
let validar = document.getElementById("validar");
let mensagem = document.getElementById("mensagem-senha");
let esqueceu = document.getElementById("esqueceu");

validar.addEventListener("click", function() {
    if (nome.value.trim() === "" || !nome.value.includes("@") || !nome.value.includes(".")) {
        alert("Por favor, preencha todos os campos.");      
        return;
    }
    alert("Validação bem-sucedida!");
});

senha.addEventListener("keyup", function() {
    if(senha.value.length < 6) {
        senha.style.borderColor = "red";
        mensagem.textContent = "A senha deve conter pelo menos 8 caracteres.";
        mensagem.style.color = "red";
    }else if(senha.value.length >= 6 && senha.value.length < 10) {
        senha.style.borderColor = "orange";
        mensagem.textContent = "Senha válida.";
        mensagem.style.color = "orange";
    } else {
        senha.style.borderColor = "green";
        mensagem.textContent = "Senha forte.";
        mensagem.style.color = "green";
    }
});



esqueceu.addEventListener("click", function() {
    alert("Recuperação de senha em desenvolvimento 🔒");
});