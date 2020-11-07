const cipher = {
  /*Criptografar*/
  encode: function (offset, string) {
    let palavraDigitada = "";
    let maiusculo = string.toUpperCase();
    for (let deslocamento = 0; deslocamento < maiusculo.length; deslocamento++) {
      let codeLetra = maiusculo[deslocamento]
      if (codeLetra !== "") {
        let novaLetra = codeLetra.charCodeAt();
        let novoCode = ((novaLetra - 65 + parseInt(offset)) % 26) + 65;

        codeLetra = String.fromCharCode(novoCode);
      }
      palavraDigitada = palavraDigitada + codeLetra;
    }
    return palavraDigitada
  },
  /*Descriptografar*/
  decode: function (offset, string) {
    let palavraDigitada = ""
    let maiusculo = string.toUpperCase();
    for (let deslocamento = 0;
      deslocamento < maiusculo.length; deslocamento++) {
      let codeLetra = maiusculo[deslocamento]
      if (codeLetra !== " ") {
        let novaLetra = maiusculo[deslocamento].charCodeAt();
        let novoCode = ((novaLetra + 65 - parseInt(offset)) % 26) + 65;
        codeLetra = String.fromCharCode(novoCode);
      }
      palavraDigitada = palavraDigitada + codeLetra
    }
    return palavraDigitada
  },
  /*Sorteio*/
  sorteio: function () {
    return document.getElementById("resultado").innerHTML
      = Math.floor(Math.random() * (25 - 1 + 1)) + 1;

  },
  /*Limpar */
  clear: function () {
    document.getElementById("mensagemUsuario").value = ""
    document.getElementById("offset").value = ""
    document.getElementById("resultado").value = ""
    resultadoFinal.innerHTML = 'NOVO LOGIN'
    resultado.innerHTML = ""
  }
};

export default cipher;