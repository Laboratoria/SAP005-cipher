 const cipher = {

  encode: function (offset, string){
  
         const primeiraAsciiCode = 65
         const tamanhoAlfabeto = 26
         let unicodeString = ""
         let codificado = ""

         if(offset == 0 || offset == "" || offset == null || string == "" || string == null){
            throw new TypeError("Verifique se escolheu o deslocamento e inseriu sua frase(NÃO USE SINAIS OU CARACTÉRES ESPECIAIS)", 'cipher.js', 11)
        } else {

              for(let i = 0; i < string.length; i++){
              unicodeString = string.charCodeAt(i)
              if(unicodeString == 32){
              codificado += " "
           }  else
              codificado += String.fromCharCode(((unicodeString - primeiraAsciiCode + offset) % tamanhoAlfabeto) + primeiraAsciiCode)    
              }
          }   
        return codificado
      },


  decode: function (offsetCipher, stringCipher){
        const primeiraAsciiCode = 65
        const tamanhoAlfabeto = 26
        let unicodeCipher = ""
        let descodificado = ""
    
        if(offsetCipher == 0 || offsetCipher == "" || offsetCipher == null || stringCipher == "" || stringCipher == null){
          throw new TypeError("Verifique se escolheu o deslocamento e inseriu sua frase(NÃO USE SINAIS OU CARACTÉRES ESPECIAIS)", 'cipher.js', 32)
      } else {
        
        for(let x = 0; x < stringCipher.length; x++){
          unicodeCipher = stringCipher.charCodeAt(x)
          if(unicodeCipher == 32){
            descodificado += " "
          } else
          descodificado += String.fromCharCode(((unicodeCipher + primeiraAsciiCode - offsetCipher) % tamanhoAlfabeto) + primeiraAsciiCode)
        }
      }
          return descodificado
      }
  
}

export default cipher;  
