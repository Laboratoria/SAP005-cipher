import cipher from './cipher.js';

console.log(cipher);



function sorteio() {
    const getRandomIntegerInclusive = (min, max) =>
        Math.floor(Math.random() * (max - min + 1)) + min;

    document.getElementById("sorteio").innerHTML = sort;

    console.log(getRandomIntegerInclusive(1, 100))
}


