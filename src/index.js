import cipher from './cipher.js';

let mensagemUsuario = document.querySelector("#mensagemUsuario")
let offset = document.querySelector("#offset")
let criptografar = document.querySelector("#criptografar")
let descriptografar = document.querySelector("#descriptografar")
let resultadoP = document.querySelector("#resultadoP")
let resultadoFinal = document.querySelector("#resultadoFinal")
let btn_sorteio = document.querySelector("#btnSorteio");

const showErrorEncode = () => {
    if (mensagemUsuario.value == "" || offset.value == "") {
        alert("CARO USUÁRIO, PREENCHA OS CAMPOS REQUERIDOS")
    } else {
        resultadoFinal.innerHTML = cipher.encode(offset.value, mensagemUsuario.value)
        resultadoP.style.display = "block"
    }
}

criptografar.addEventListener('click', showErrorEncode)

const showErrorDecode = () => {
    if (mensagemUsuario.value == "" || offset.value == "") {
        alert("CARO USUÁRIO, PREENCHA OS CAMPOS REQUERIDOS")
    } else {
        resultadoFinal.innerHTML = cipher.decode(offset.value, mensagemUsuario.value)
        resultadoP.style.display = "block"
    }
}

descriptografar.addEventListener('click', showErrorDecode)

btn_sorteio.addEventListener('click', cipher.sorteio);