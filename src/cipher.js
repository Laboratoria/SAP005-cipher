const cipher = {


  encode: (offset, mensagem) => {
    let cifrar = '';
    if (mensagem == null || mensagem == "" || offset == null || offset == "") { // Criação de um TypeError para a condição de null ou vazio apresentara a messagem.
      throw new TypeError("E necessario inserir chave e texto, por favor revise os campos", "cipher.js");
    } else {
      for (let i = 0; i < mensagem.length; i++) {
        if ((mensagem.charCodeAt(i) >= 65) && (mensagem.charCodeAt(i) <= 90)) { // Do A ao Z, de acordo com a posição do ASCII.
          cifrar += String.fromCharCode(((mensagem.charCodeAt(i) - 65 + offset) % 26) + 65); // Utilizando o String.fromCharCode para converter o  codigo ASCII
        } else if ((mensagem.charCodeAt(i) >= 97) && (mensagem.charCodeAt(i) <= 122)) { // Do A ao Z minusculo, de acordo com a posição do ASCII.
          cifrar += String.fromCharCode(((mensagem.charCodeAt(i) - 97 + offset) % 26) + 97);
        } else if ((mensagem.charCodeAt(i) >= 32) && (mensagem.charCodeAt(i) <= 64)) { // Do espaço, numeros e simbolos, de acordo com a posição do ASCII.
          cifrar += String.fromCharCode(((mensagem.charCodeAt(i) - 32 + offset) % 33) + 32);
        }
      }
      return cifrar;
    }
  },

  decode: (offset, mensagem) => {
    let decifrar = '';
    if (mensagem == null || mensagem == "" || offset == null || offset == "") {
      throw new TypeError("E necessario inserir chave e texto, por favor revise os campos", "cipher.js");
    } else {
      for (let i = 0; i < mensagem.length; i++) {
        if ((mensagem.charCodeAt(i) >= 65) && (mensagem.charCodeAt(i) <= 90)) {
          decifrar += String.fromCharCode(((mensagem.charCodeAt(i) - 90 - offset) % 26) + 90);
        } else if ((mensagem.charCodeAt(i) >= 97) && (mensagem.charCodeAt(i) <= 122)) {
          decifrar += String.fromCharCode(((mensagem.charCodeAt(i) - 122 - offset) % 26) + 122);
        } else if ((mensagem.charCodeAt(i) >= 32) && (mensagem.charCodeAt(i) <= 64)) {
          decifrar += String.fromCharCode(((mensagem.charCodeAt(i) - 64 - offset) % 33) + 64);
        }
      }
      return decifrar;
    }
  }

};

export default cipher
