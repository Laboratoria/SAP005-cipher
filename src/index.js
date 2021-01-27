import cipher from './cipher.js';

function code(event) {
	cipher.output = cipher.input.replaceAll(/[A-Z]/gi, cipher.formula);
	event.preventDefault();
}

document.forms[0].addEventListener("submit", code);
