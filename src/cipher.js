 const cipher = {

  encode: function (offset, string){
  
         const primeiraAsciiCode = 65
         const tamanhoAlfabeto = 26
         let unicodeString = ""
         let codificado = ""
         let auxiliarCode = ""

      for(let i = 0; i < string.length; i++){
        unicodeString = string.charCodeAt(i)
        if(unicodeString == 32){
          codificado += " "
        }  else
        auxiliarCode = ((unicodeString - primeiraAsciiCode + offset) % tamanhoAlfabeto) + primeiraAsciiCode
        codificado += String.fromCharCode(auxiliarCode)     
      }
        return codificado
  },

  decode: function (offsetCipher, stringCipher){
        const primeiraAsciiCode = 65
        const tamanhoAlfabeto = 26
        let unicodeCipher = ""
        let descodificado = ""
        let auxiliarCipher = ""
    
        for(let x = 0; x < stringCipher.length; x++){
          unicodeCipher = stringCipher.charCodeAt(x)
          console.log(unicodeCipher)
          if(unicodeCipher == 32){
            descodificado += " "
          } else
          auxiliarCipher = ((unicodeCipher + primeiraAsciiCode -offsetCipher) % tamanhoAlfabeto) + primeiraAsciiCode
       //   if(auxiliarCode > 90)
          descodificado += String.fromCharCode(auxiliarCipher)
        }
          return descodificado
      }
  
}

export default cipher;  
