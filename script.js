const entrada = document.querySelector(".textocrudo");

const mensaje = document.querySelector(".mensaje");

const copia = document.querySelector(".copiado");


copia.style.display = "none";


function botonencriptar(){
    const textoaencriptar = encriptar(entrada.value);
    if(tieneacento(entrada.value)){
        entrada.value ="";
        return alert("¡¡¡Solo texto sin acentuación!!!")
    }else if(tienenumeros(entrada.value)){
        entrada.value="";
        return alert("¡¡¡No se permiten numeros en el texto!!!")
    }
    if(entrada.value ==""){
        return alert("Por favor ingrese un texto");
    }
    mensaje.value = textoaencriptar;
    mensaje.style.backgroundImage = "none";
    copia.style.display = "block"
}

function botondesencriptar(){
    const textodesencriptado = desencriptar(entrada.value);
    mensaje.value = textodesencriptado;
    mensaje.style.backgroundImage = "none";
}

function copiar(){
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value)
    mensaje.value = "";
    entrada.value ="";
    alert("Mensaje copiado al portapapeles");
    copia.style.display = "none";
    mensaje.style.backgroundImage = "block";
}


function encriptar(textoencriptado){
    let matriztextos = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    textoencriptado = textoencriptado.toLowerCase();
    for(let i = 0; i < matriztextos.length; i++){
        if(textoencriptado.includes(matriztextos[i][0])){
            textoencriptado = textoencriptado.replaceAll(matriztextos[i][0],matriztextos[i][1])
        }
    }
    return textoencriptado;
}

function desencriptar(textodesencriptado){
    let matriztextos = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    textodesencriptado = textodesencriptado.toLowerCase();
    for(let i=0;i<matriztextos.length;i++){
        if(textodesencriptado.includes(matriztextos[i][1])){
            textodesencriptado = textodesencriptado.replaceAll(matriztextos[i][1],matriztextos[i][0])
        }
    }
    return textodesencriptado;
}

function tieneacento(texto) {
    const acento = /[áéíóú]/g;
    return acento.test(texto);
}

function tienenumeros(texto){
    const numeros = /\d/g;
    return numeros.test(texto)
}