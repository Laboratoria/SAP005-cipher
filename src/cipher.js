const cipher = {

  encode: (offset, mensagem) => {
    let cifrar = '';
    for (let i = 0; i < mensagem.length; i++) {
      if (mensagem.charCodeAt(i) >= 65 && mensagem.charCodeAt(i) <= 90) {
        cifrar += String.fromCharCode(((mensagem.charCodeAt(i) - 65 + offset) % 26) + 65);
      } else if (mensagem.charCodeAt(i) >= 97 && mensagem.charCodeAt(i) <= 122) {
        cifrar += String.fromCharCode(((mensagem.charCodeAt(i) - 97 + offset) % 26) + 97);
      } else if (mensagem.charCodeAt(i) >= 32 && mensagem.charCodeAt(i) <= 64) {
        cifrar += String.fromCharCode(((mensagem.charCodeAt(i) - 32 + offset) % 33) + 32);
      }
    }
    return cifrar;
  },

  decode: (offset, mensagem) => {
    let decifrar = '';
    for (let i = 0; i < mensagem.length; i++) {
      if (mensagem.charCodeAt(i) >= 65 && mensagem.charCodeAt(i) <= 90) {
        decifrar += String.fromCharCode(((mensagem.charCodeAt(i) - 90 - offset) % 26) + 90);
      } else if (mensagem.charCodeAt(i) >= 97 && mensagem.charCodeAt(i) <= 122) {
        decifrar += String.fromCharCode(((mensagem.charCodeAt(i) - 122 - offset) % 26) + 122);
      } else if (mensagem.charCodeAt(i) >= 32 && mensagem.charCodeAt(i) <= 64) {
        decifrar += String.fromCharCode(((mensagem.charCodeAt(i) - 64 - offset) % 33) + 64);
      }
    }
    return decifrar;
  }
};

export default cipher;
