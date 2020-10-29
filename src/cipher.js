const cipher = {

  encode: (offset, string) => {
    let cifrar = '';
    for (let i = 0; i < string.length; i++) {
      if (string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90) {
        cifrar += String.fromCharCode(((string.charCodeAt(i) - 65 + offset) % 26) + 65);
      } else if (string.charCodeAt(i) >= 97 && string.charCodeAt(i) <= 122) {
        cifrar += String.fromCharCode(((string.charCodeAt(i) - 97 + offset) % 26) + 97);
      } else if (string.charCodeAt(i) >= 32 && string.charCodeAt(i) <= 64) {
        cifrar += String.fromCharCode(((string.charCodeAt(i) - 32 + offset) % 33) + 32);
      } 
    }
    return cifrar;
  },

  decode: (offset, string) => {
    let decifrar = '';
    for (let i = 0; i < string.length; i++) {
      if (string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90) {
        decifrar += String.fromCharCode(((string.charCodeAt(i) - 90 - offset) % 26) + 90);
      } else if (string.charCodeAt(i) >= 97 && string.charCodeAt(i) <= 122) {
        decifrar += String.fromCharCode(((string.charCodeAt(i) - 122 - offset) % 26) + 122);
      } else if (string.charCodeAt(i) >= 32 && string.charCodeAt(i) <= 64) {
        decifrar += String.fromCharCode(((string.charCodeAt(i) - 64 - offset) % 33) + 64);
      }
    }
    return decifrar;
  }
};

export default cipher;
