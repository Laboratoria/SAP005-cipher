import cipher from './cipher.js';
console.log(cipher);

// Manipulação dos botões de opções do menu

let menu1 = document.getElementById("option1")
let menu2 = document.getElementById("option2")
let menu3 = document.getElementById("option3")
let menu4 = document.getElementById("option4")

let botao1 = document.getElementById("click1")
let botao2 = document.getElementById("click2")
let botao3 = document.getElementById("click3")
let botao4 = document.getElementById("click4")

botao1.addEventListener("click", show1)
botao2.addEventListener("click", show2)
botao3.addEventListener("click", show3)
botao4.addEventListener("click", show4)

function show1(){
 
   menu1.style.display = "block"
   menu2.style.display = "none"
   menu3.style.display = "none"
   menu4.style.display = "none"
 } 

  function show2(){
   menu1.style.display = "none"
   menu2.style.display = "block"
   menu3.style.display = "none"
   menu4.style.display = "none"
 }
  function show3(){
   menu1.style.display = "none"
   menu2.style.display = "none"
   menu3.style.display = "block"
   menu4.style.display = "none"
  
 } 
 function show4(){
 
  menu1.style.display = "none"
  menu2.style.display = "none"
  menu3.style.display = "none"
  menu4.style.display = "block"
}
           
// Manipulação dos dados recebidos

// Input e botão Criptofgrafar
let inserirFrase = document.getElementById("capturar")
inserirFrase.addEventListener("click", capturar)

function capturar(event){
  event.preventDefault()

    let string = ""
    let frase = document.getElementById("phrase").value
    string = frase.toUpperCase()

    // select do Offset
    let obterDeslocamento = document.getElementById("offset").value
    let offset = Number(obterDeslocamento)

   //imprimir na tela
    document.getElementById("valorFinal").innerHTML = cipher.encode(offset, string)
}   

// Input e botão Descriptografar

let inserirCodigo = document.getElementById("capturarCipher")
inserirCodigo.addEventListener("click", capturarCipher)

function capturarCipher(event){
  event.preventDefault()

    let stringCipher = document.getElementById("phraseCipher").value

    // select do Offset
    let obterOffsetCipher = document.getElementById("offsetCipher").value
    let offsetCipher = Number(obterOffsetCipher)

   //imprimir na tela
    document.getElementById("valorFinal").innerHTML = cipher.decode(offsetCipher, stringCipher)
}   

//botão de dica Opção 4

let dica = document.getElementById("dica")
dica.addEventListener("click", help)

function help(event){
  event.preventDefault()

  let helpOption = document.getElementById("dica").innerHTML = "J = A"

}



