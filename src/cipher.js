const cipher = {

   encode: (offset, text) => {
    let cifrar = '';
    for (let i = 0; i < text.length; i++) {
      if(text.charCodeAt(i) >= 65 && text.charCodeAt(i) <= 90) {
        cifrar+=String.fromCharCode(((text.charCodeAt(i)-65+offset)%26)+65);
      } if (text.charCodeAt(i) >= 97 && text.charCodeAt(i) <= 122) {
        cifrar+=String.fromCharCode(((text.charCodeAt(i)-97+offset)%26)+97);
      } if (text.charCodeAt(i) >= 32 && text.charCodeAt(i) <= 64) {
        cifrar+=String.fromCharCode(((text.charCodeAt(i)-32+offset)%33)+32);
      }
    }
    return cifrar;
  },

   decode: (offset, text) => {
     let decifrar = '';
     for (let i = 0; i < text.length; i++) {
       if (text.charCodeAt(i) >= 65 && text.charCodeAt(i) <= 90) {
         decifrar += String.fromCharCode(((text.charCodeAt(i) - 90 - offset) % 26) + 90);
       } if (text.charCodeAt(i) >= 97 && text.charCodeAt(i) <= 122) {
         decifrar += String.fromCharCode(((text.charCodeAt(i) - 122 - offset) % 26) + 122);
       } if (text.charCodeAt(i) >= 32 && text.charCodeAt(i) <= 64) {
         decifrar += String.fromCharCode(((text.charCodeAt(i) - 64 - offset) % 33) + 64);
       }
     }
     return decifrar;
   }
};

export default cipher;
