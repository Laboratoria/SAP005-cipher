const cipher = {


  encode: (offset, message) => {
    let cifrar = '';
    if (message == null || message == "" || offset == null || offset == "") {
      throw new TypeError("E necessario inserir chave e texto, por favor revise os campos", "cipher.js");
    } else {
      for (let i = 0; i < message.length; i++) {
        if ((message.charCodeAt(i) >= 65) && (message.charCodeAt(i) <= 90)) {
          cifrar += String.fromCharCode(((message.charCodeAt(i) - 65 + offset) % 26) + 65);
        } else if ((message.charCodeAt(i) >= 97) && (message.charCodeAt(i) <= 122)) {
          cifrar += String.fromCharCode(((message.charCodeAt(i) - 97 + offset) % 26) + 97);
        } else if ((message.charCodeAt(i) >= 32) && (message.charCodeAt(i) <= 64)) {
          cifrar += String.fromCharCode(((message.charCodeAt(i) - 32 + offset) % 33) + 32);
        }
      }
      return cifrar;
    }
  },

  decode: (offset, message) => {
    let decifrar = '';
    if (message == null || message == "" || offset == null || offset == "") {
      throw new TypeError("E necessario inserir chave e texto, por favor revise os campos", "cipher.js");
    } else {
      for (let i = 0; i < message.length; i++) {
        if ((message.charCodeAt(i) >= 65) && (message.charCodeAt(i) <= 90)) {
          decifrar += String.fromCharCode(((message.charCodeAt(i) - 90 - offset) % 26) + 90);
        } else if ((message.charCodeAt(i) >= 97) && (message.charCodeAt(i) <= 122)) {
          decifrar += String.fromCharCode(((message.charCodeAt(i) - 122 - offset) % 26) + 122);
        } else if ((message.charCodeAt(i) >= 32) && (message.charCodeAt(i) <= 64)) {
          decifrar += String.fromCharCode(((message.charCodeAt(i) - 64 - offset) % 33) + 64);
        }
      }
      return decifrar;
    }
  }

};

export default cipher
