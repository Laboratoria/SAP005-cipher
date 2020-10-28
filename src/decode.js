// export function decode(offset,letras) {

// // if(offset === null ||  letras === [] )


//   let posicaoDecodificada;
//   let palavraConcatenada ="";
//   let validacao;

//   for (let i = 0; i < letras.length; i++) {

//       validacao = letras.charCodeAt(i) - 65 - offset

//       if (validacao >= 0){
//           posicaoDecodificada = (((letras.charCodeAt(i)) - 65 - offset ) % 26) + 65;

//       }else {
//           posicaoDecodificada = letras.charCodeAt(i)  - offset + 26
//       }

//       palavraConcatenada += String.fromCharCode(posicaoDecodificada);

//   }

//   return palavraConcatenada
// }





