import cipher from "./cipher.js";

function btCifrar(event) {
  event.preventDefault();
  const mensagem = String(
    document.getElementById("mensagem").value
  ).toLocaleUpperCase();
  const deslocamento = Number(document.getElementById("deslocamento").value);
  const mensagemRecebida = cipher.encode(deslocamento, mensagem);
  const mensagemCifrada = document.getElementById("mensagemCifrada");
  mensagemCifrada.value = mensagemRecebida;
}

function btDecifrar(event) {
  event.preventDefault();
  const mensagem = String(
    document.getElementById("mensagem").value
  ).toLocaleUpperCase();
  const deslocamento = Number(document.getElementById("deslocamento").value);
  const mensagemRecebida2 = cipher.encode(deslocamento, mensagem);
  const mensagemDecifrada = document.getElementById("mensagemDecifrada");
  mensagemDecifrada.value = mensagemRecebida2;
}

const cifrar = document.getElementById("cifrar");
cifrar.addEventListener("click", btCifrar);

const decifrar = document.getElementById("decifrar");
decifrar.addEventListener("click", btDecifrar);
