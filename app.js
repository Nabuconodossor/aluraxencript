const letra = [];

var roseta = {"a": "ai", "e": "enter", "i": "imes", "o":"ober", "u":"ufet"};

// console.log(roseta);

function encriptar(){

    document.getElementById("my-image").style.visibility = "hidden";
    document.getElementById("frame5").style.visibility = "hidden";
    document.getElementById("texto-salida").style.visibility = "visible";
    document.getElementById("btn-copiar").style.visibility = "visible";

    var nuevoTexto = [];

    const patron = /[a-z ]/

    var texto = document.getElementById("texto-entrada").value;

    var letra = texto.split("");

    for (let i = 0; i < letra.length; i++) {

        if(patron.test(texto)){
            
            if(roseta[letra[i]]){
                nuevoTexto.push(roseta[letra[i]]);
            }else{

                nuevoTexto.push(letra[i]);

            }
            
            
        }else {

            window.alert("El texto ingresado tiene caracteres especiales o acentos")
            setInterval("location.reload()",1000);

        };
            
    };
        
        
    document.getElementById("texto-salida").value = nuevoTexto.join("");


        
}

function desencriptar() {


    document.getElementById("my-image").style.visibility = "hidden";
    document.getElementById("frame5").style.visibility = "hidden";
    document.getElementById("texto-salida").style.visibility = "visible";
    document.getElementById("btn-copiar").style.visibility = "visible";

    var texto = document.getElementById("texto-entrada").value;
    // var text = texto.split(" ")

    let roseta = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufet"]];

    for (let i = 0; i < roseta.length; i++) {
        
        if(texto.includes(roseta[i][0])){

            texto  = texto.replaceAll(roseta[i][1], roseta[i][0])

        }
        
    }
    console.log(texto);
    document.getElementById("texto-salida").value = texto
};

function copiar(){

    var texto = document.getElementById("texto-salida");

    navigator.clipboard.writeText(texto.value)
    .then(() => {
        console.log("Text copied to clipboard...")
    })
        .catch(err => {
        console.log('Something went wrong', err);
    })

}