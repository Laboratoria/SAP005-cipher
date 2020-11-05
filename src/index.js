import cipher from './cipher.js';


let mensagemUsuario = document.querySelector("#msg")
let offset = document.querySelector("#offset")
let choice = document.querySelector("#choice")
let choice2 = document.querySelector("#choice2")
let result = document.querySelector("#result")
let result_name = document.querySelector("#result-name")
let btn_sorteio = document.querySelector("#btnSorteio");



const showErrorEncode = () => {
    if (mensagemUsuario.value == "" || offset.value == "") {
        alert("CARO USUÁRIO, PREENCHA OS CAMPOS REQUERIDOS")
    } else {
        result_name.innerHTML = cipher.encode(offset.value, mensagemUsuario.value)
        result.style.display = "block"
    }
}

choice.addEventListener('click', showErrorEncode)

const showErrorDecode = () => {
    if (mensagemUsuario.value == "" || offset.value == "") {
        alert("CARO USUÁRIO, PREENCHA OS CAMPOS REQUERIDOS")
    } else {
        result_name.innerHTML = cipher.decode(offset.value, mensagemUsuario.value)
        result.style.display = "block"
    }
}

choice2.addEventListener('click', showErrorDecode)

btn_sorteio.addEventListener('click', cipher.sorteio);