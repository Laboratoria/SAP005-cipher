import cipher from './cipher.js';

document.getElementById('encode').addEventListener('click', cifrar);
function cifrar() {
  const message = document.getElementById("msg").value;
  const offset = Number(document.getElementById("key").value);

  if (message == "" || offset == "") {
    alert("Campo 1) Chave ou 2) Texto da mensagem esta em branco");
  } else {
    document.getElementById("encode_decode").innerHTML = cipher.encode(offset, message);
  }
}

document.getElementById('decode').addEventListener('click', decifrar);
function decifrar() {
  const message = document.getElementById("msg").value;
  const offset = Number(document.getElementById("key").value);

  if (message == "" || offset == "") {
    alert("Campo 1) Chave ou 2) Texto da mensagem esta em branco");
  } else {
    document.getElementById("encode_decode").innerHTML = cipher.decode(offset, message);
  }
}





