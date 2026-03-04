document.getElementById("conteudo").innerHTML = "<p>Olá, mundo DOM!(Código HTML = innerHTML)</p>";
document.getElementById("mensagem").textContent = "Texto simples, sem HTML.(textContent)";
document.getElementById("foto").setAttribute("src", "https://i.pinimg.com/474x/b7/37/90/b73790bf5789bc123ed0be07567b685f.jpg");
let url = document.getElementById("link").getAttribute("href");
console.log(url); //https://br.pinterest.com/
document.getElementById("caixa").style.backgroundColor = "lightblue";
document.getElementById("alerta").classList.add("destaque");
document.getElementById("alert").classList.remove("oculto");
let novoParagrafo = document.createElement("p");
novoParagrafo.textContent = "Este elemento foi criado pelo JavaScript.";
document.getElementById("container").appendChild(novoParagrafo);
let novoItem = document.createElement("li");
novoItem.textContent = "Item novo";
document.getElementById("lista").appendChild(novoItem);
let item = document.getElementById("item1");
document.getElementById("list").removeChild(item);