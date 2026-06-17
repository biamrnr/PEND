// Seleção dos elementos do DOM // 
let validar = document.getElementById("validar");
let nome = document.getElementById("nome");
let email = document.getElementById("email");
let telefone = document.getElementById("telefone");
let endereco = document.getElementById("endereco");
let senha = document.getElementById("senha");
let mensagem = document.getElementById("mensagem");
let mensagemSenha = document.getElementById("mensagem-senha");
let addtelefone = document.getElementById("addtelefone");
let removertelefone = document.getElementById("removertelefone");

// Validação do formulário //

validar.addEventListener("click", function() {
    if (nome.value.trim() === "" || email.value.trim() === "" || telefone.value.trim() === "" || endereco.value.trim() === "" || senha.value.trim() === "") {
        mensagem.textContent = "Por favor, preencha todos os campos.";
        mensagem.style.color = "red";
        return;
    } else if (!email.value.includes("@") || !email.value.includes(".")) {
        mensagem.textContent = "Email inválido!";
        mensagem.style.color = "red";
        return;
    } else if (!/^\d{10,11}$/.test(telefone.value.trim())) {
        mensagem.textContent = "Preencha um telefone válido (10 ou 11 dígitos)!";
        mensagem.style.color = "red";
        return;
    }else if (endereco.value.length < 5) {
        mensagem.textContent = "Preencha o endereço corretamente!";
        mensagem.style.color = "red";
        return;
    }
    mensagem.textContent = "Cadastro realizado com sucesso!";
    mensagem.style.color = "green";
});
// Validação da senha //

senha.addEventListener("input", function() {
    if (senha.value.length < 6) {
        mensagemSenha.textContent = "A senha deve conter pelo menos 6 caracteres.";
        mensagemSenha.style.color = "red";
    } else if (senha.value.length >= 6 && senha.value.length < 10) {
        mensagemSenha.textContent = "Senha válida.";
        mensagemSenha.style.color = "orange";
    }   else {
        mensagemSenha.textContent = "Senha forte.";
        mensagemSenha.style.color = "green";
    }   
});
// Adicionar e remover campos de telefone //
addtelefone.addEventListener("click", function() {
    let novoTelefone = document.createElement("input");
    novoTelefone.type = "text";
    novoTelefone.placeholder = "Telefone adicional";
    novoTelefone.classList.add("telefone");
    addtelefone.insertAdjacentElement("beforebegin", novoTelefone);

});
// Remove o último campo de telefone adicionado, se existir //

removertelefone.addEventListener("click", function() {
    let telefones = document.querySelectorAll(".telefone");
    if (telefones.length > 0) {
        telefones[telefones.length - 1].remove();
    } 
});
// Mostrar e ocultar a senha //

let input = document.querySelector("#senha");
let botao = document.querySelector("#botaoSenha");
// Alterna o tipo do input entre "password" e "text" para mostrar ou ocultar a senha, e também troca o ícone do botão //
botao.addEventListener("click", function() {
    if (input.type === "password") {
        input.setAttribute('type', 'text');
        botao.classList.replace('bi-eye-fill', 'bi-eye-slash-fill');
    } else {
        input.setAttribute('type', 'password');
        botao.classList.replace('bi-eye-slash-fill', 'bi-eye-fill');
    }
});
