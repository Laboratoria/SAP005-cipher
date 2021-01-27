// import cipher from './cipher.js';

document.querySelector("#submit").onclick = function(event) {
	let inputText = document.querySelector("#input").value;
	let offsetNum = Number(document.querySelector("#offset").value);

	function formula(match) {
		let outputCodePoint = match.codePointAt(0) + offsetNum;

		if (
			(/[A-Z]/.test(match) && outputCodePoint < 65) ||
			(/[a-z]/.test(match) && outputCodePoint < 97)) {
			outputCodePoint += 26;
		}

		if (
			(/[A-Z]/.test(match) && outputCodePoint > 90) ||
			(/[a-z]/.test(match) && outputCodePoint > 122)) {
			outputCodePoint -= 26;
		}

		return String.fromCodePoint(outputCodePoint)
	}

	document.querySelector("#output").value = inputText.replaceAll(/[A-Z]/gi, formula);
}
