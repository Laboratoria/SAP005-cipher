import cipher from './cipher.js';

let message = document.querySelector("#mensagemUsuario")
let offset = document.querySelector("#offset")
let criptografar = document.querySelector("#criptografar")
let descriptografar = document.querySelector("#descriptografar")
let resultadoP = document.querySelector("#resultadoP")
let resultadoFinal = document.querySelector("#resultadoFinal")
let btn_sorteio = document.querySelector("#btnSorteio");
let cls = document.querySelector("#cls");
let botaocopiar = document.querySelector("#copiar");

const codif = () => {
    if (message.value == "" || offset.value == "") {
        alert("CARO USUÁRIO, PREENCHA OS CAMPOS REQUERIDOS")
    } else {
        resultadoFinal.innerHTML = cipher.encode(offset.value, message.value)
        resultadoP.style.display = "block"
    }
}

criptografar.addEventListener('click', codif)

const descif = () => {
    if (message.value == "" || offset.value == "") {
        alert("CARO USUÁRIO, PREENCHA OS CAMPOS REQUERIDOS")
    } else {
        resultadoFinal.innerHTML = cipher.decode(offset.value, message.value)
        resultadoP.style.display = "block"
    }
}

descriptografar.addEventListener('click', descif)

btn_sorteio.addEventListener('click', cipher.sorteio)

cls.addEventListener('click', cipher.clear)

