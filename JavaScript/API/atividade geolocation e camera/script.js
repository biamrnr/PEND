
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


navigator.mediaDevices.getUserMedia({

    video: true

})

.then(function(stream) {

    const video = document.getElementById("camera");

    video.srcObject = stream;

})

.catch(function(erro) {

    console.log("Não foi possível acessar a câmera.");

    console.log(erro);

});

