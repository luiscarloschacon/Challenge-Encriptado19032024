function encriptarTexto() {
    let texto = document.getElementById("textOne").value;


    let textoCifrado = texto
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat");


    if (texto.length != 0) {

        document.getElementById("textOne").value = textoCifrado;


    } else {

        swal("Ooops!", "Debes ingresar un texto", "warning");
    }
}
function copiar() {
    let duplicado = document.getElementById("textOne").value;
    if (duplicado===duplicado){
    document.getElementById("textTwo").value=duplicado;
    document.getElementById("textOne").value="";
    }else{
        
    }


}

function reiniciar(){
    document.getElementById("textOne").value="";
    document.getElementById("textTwo").value="";
}




function desencriptarTexto() {
    let texto = document.getElementById("textTwo").value;


    let textoCifrado = texto
        .replace(/enter/gi, "e")
        .replace(/imes/gi, "i")
        .replace(/ai/gi, "a")
        .replace(/ober/gi, "o")
        .replace(/ufat/gi, "u");

    if (texto.length != 0) {
        document.getElementById("textTwo").value = textoCifrado;

    } else {

        swal("Ooops!", "Debes ingresar un texto", "warning");
    }
}