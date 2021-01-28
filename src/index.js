import cipher from './cipher.js';

let textAreas = {
	dcodedTxt: document.querySelector("#dcodedTxt"),
	ncodedTxt: document.querySelector("#ncodedTxt"),
}
let offsetNum = document.querySelector("#offsetNum");
let encodeBtn = document.querySelector("#encodeBtn");
let decodeBtn = document.querySelector("#decodeBtn");

encodeBtn.addEventListener("click", function(){cipher.encode(offsetNum, textAreas)});
decodeBtn.addEventListener("click", function(){cipher.decode(offsetNum, textAreas)});
