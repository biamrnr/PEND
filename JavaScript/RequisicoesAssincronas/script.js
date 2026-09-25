const botao = document.getElementById("buscarUsuarios");

const resultado = document.getElementById("resultados");

// botao.addEventListener("click", () => {

//     fetch("https://jsonplaceholder.typicode.com/users")

//         .then(resposta => resposta.json())

//         .then(dados => {

//             resultado.innerHTML = "";

//             dados.forEach(usuario => {

//                 resultado.innerHTML += `
//                     <p>
//                         <strong>${usuario.name}</strong><br>
//                         ${usuario.email}
//                     </p>
//                     <hr>
//                 `;

//             });

//             // console.log(dados);

//         })

//         .catch(erro => {

//             console.error("Erro:", erro);

//         });

// });


// botao.addEventListener("click", async () => {

//     try {

//         const resposta = await fetch(
//             "https://jsonplaceholder.typicode.com/users"
//         );

//         const dados = await resposta.json();

//         resultado.innerHTML = "";

//         dados.forEach(usuario => {

//             resultado.innerHTML += `
//                 <p>
//                     <strong>${usuario.name}</strong><br>
//                     ${usuario.email}
//                 </p>
//                 <hr>
//             `;

//         });

//         // console.log(dados);

//     } catch (erro) {

//         console.error("Erro:", erro);

//     }

// });
botao.addEventListener("click", async () => {

    const id = idUsuario.value;

    if (id === "") {
        resultado.innerHTML = "digite um id";
        return;
    }

    try {
        const resposta = await fetch(
            `https://jsonplaceholder.typicode.com/users/${id}`
        );

        const dados = await resposta.json();

        resultado.innerHTML = `
            <p>
                <strong>${dados.name}</strong><br>
                email: ${dados.email}<br>
                cidade: ${dados.address.city}<br>
                telefone: ${dados.phone}
            </p>
            <hr>
        `;
    } catch (erro) {
        console.error("Erro:", erro);
    }
});