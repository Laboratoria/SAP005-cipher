

export function encode(offset, letras) {

  if(offset === null ||  letras === [] ){
   throw TypeError()

  }

  let posicaoCodificada;
  let palavraConcatenada ="";

  for (let i = 0; i < letras.length; i++) {


      posicaoCodificada = (((letras.charCodeAt(i)) - 65 + offset ) % 26) + 65

      palavraConcatenada += String.fromCharCode(posicaoCodificada);

  }

  return palavraConcatenada
  }




