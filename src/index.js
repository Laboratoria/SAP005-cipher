import cipher from './cipher.js';

document.getElementById('encode').addEventListener('click', cifrar);
function cifrar() {
  const mensagem = document.getElementById("msg").value;
  const offset = Number(document.getElementById("chave").value);

  if (mensagem == "" || offset == "") {
    alert("Campo 1)Chave ou 2) Texto da mensagem esta em branco");
  } else {
    document.getElementById("encode_decode").innerHTML = cipher.encode(offset, mensagem);
  }
}

document.getElementById('decode').addEventListener('click', decifrar);
function decifrar() {
  const mensagem = document.getElementById("msg").value;
  const offset = Number(document.getElementById("chave").value);

  if (mensagem == "" || offset == "") {
    alert("Campo 1) Chave ou 2) Texto da mensagem esta em branco");
  } else {
    document.getElementById("encode_decode").innerHTML = cipher.decode(offset, mensagem);
  }
}



