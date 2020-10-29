import cipher from './cipher.js';

document.getElementById('encode').addEventListener('click', cifrar);
    function cifrar() {
    const string = document.getElementById("msg").value;
    const offset = Number(document.getElementById("chave").value);
    if (string == "" || offset == "" ) {
      alert("Ops... você esqueceu de preencher o campo para CRIPTOGRAFAR a mensagem ou não informou a CHAVE, tente novamente.");
      } else {
      document.getElementById("encode_decode").innerHTML = cipher.encode(offset, string);
    }
}

document.getElementById('decode').addEventListener('click', decifrar);
    function decifrar() {
    const string = document.getElementById("msg").value;
    const offset = Number(document.getElementById("chave").value);
    if (string == "" || offset == "" ) {
      alert("Ops... você esqueceu de preencher o campo para DESCRIPTOGRAFAR a mensagem ou não informou a CHAVE, tente novamente.");
      } else {
      document.getElementById("encode_decode").innerHTML = cipher.decode(offset, string);
    }
}
