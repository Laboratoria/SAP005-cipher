const cipher = {
  // ...
  encode: function(deslocamento,mensagem){
    
    let res = "";
    
    if(!deslocamento || !mensagem){
      throw new TypeError('O usuário não inseriu os dados corretamente');
    }else {

    for (let i = 0; i< mensagem.length; i++){
    let resultado = ((mensagem.charCodeAt(i)-65 + deslocamento) % 26) + 65
    res +=  String.fromCharCode(resultado);
    
    }
        return res
  }
},

   
    
    decode: function(deslocamento,mensagem){

       
    let res  = "";

    if(!deslocamento || !mensagem){
      throw new TypeError('O usuário não inseriu os dados corretamente');
    }else {
    for (let i = 0; i< mensagem.length; i++){
    let resultado = ((mensagem.charCodeAt(i)+65 - deslocamento)% 26) +65
    res += String.fromCharCode(resultado);
        
        }
      }
            return res
        
      }   
        
     


   };
  export default cipher;
