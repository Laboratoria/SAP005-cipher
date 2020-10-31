import cipher from './cipher.js';

document.getElementById('encode').addEventListener('click', cifrar);
function cifrar() {
  const mensagem = document.getElementById("msg").value;
  const offset = Number(document.getElementById("chave").value);
  if (mensagem == "" || offset == "") {
    alert("Ops... você esqueceu de preencher o campo para CRIPTOGRAFAR a mensagem ou não informou a CHAVE, tente novamente.");
  } else {
    document.getElementById("encode_decode").innerHTML = cipher.encode(offset, mensagem);
  }
}

document.getElementById('decode').addEventListener('click', decifrar);
function decifrar() {
  const mensagem = document.getElementById("msg").value;
  const offset = Number(document.getElementById("chave").value);
  if (mensagem == "" || offset == "") {
    alert("Ops... você esqueceu de preencher o campo para DESCRIPTOGRAFAR a mensagem ou não informou a CHAVE, tente novamente.");
  } else {
    document.getElementById("encode_decode").innerHTML = cipher.decode(offset, mensagem);
  }
}

document.querySelector('h2', efeitoEscrita); //Para passar um classe ou tag
// Efeito de escrita
function efeitoEscrita(elemento) { //Passa o elemento escrita
  const texto = elemento.innerHTML.split(''); //split dividira o texto em partes dentro da array
  elemento.innerHTML = '';
  texto.forEach((letra, i) => {
    setTimeout(() => elemento.innerHTML += letra //Para adicionar as letras
      , 75 * i)//Determinar o tempo para inserir o texto ou frase. Ou seja sera inserido cada letra a 75 milisegundos.
  });
}


