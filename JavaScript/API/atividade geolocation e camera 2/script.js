navigator.geolocation.getCurrentPosition(

    function(posicao) {

        console.log("Latitude:", posicao.coords.latitude);

        console.log("Longitude:", posicao.coords.longitude);

        console.log("Precisão:", posicao.coords.accuracy);

        document.getElementById("latitude").innerHTML =
            "Latitude: " + posicao.coords.latitude;

        document.getElementById("longitude").innerHTML =
            "Longitude: " + posicao.coords.longitude;

        document.getElementById("precisao").innerHTML =
            "Precisão: " + posicao.coords.accuracy + " metros";

        document.getElementById("localizacaoPermitida").style.display = "block";

        document.getElementById("localizacaoNegada").style.display = "none";

    },

    function(erro) {

        console.log("Não foi possível obter a localização.");

        document.getElementById("localizacaoPermitida").style.display = "none";

        document.getElementById("localizacaoNegada").style.display = "block";

    }

);


const video = document.querySelector("#camera");

const canvas = document.querySelector("#canvas");

const botao = document.querySelector("#botao");

navigator.mediaDevices.getUserMedia({

    video: true, audio: true

})

.then(function(stream) {

    video.srcObject = stream;

})

.catch(function(erro) {

    console.log("Erro ao acessar a câmera: ", erro);

});

botao.addEventListener("click", function() {

    canvas.width = video.clientWidth;

    canvas.height = video.clientHeight;

    const contexto = canvas.getContext("2d");

    contexto.drawImage(

        video,

        0,

        0,

        canvas.width,

        canvas.height

    );

    foto.src = canvas.toDataURL("image/png");

});