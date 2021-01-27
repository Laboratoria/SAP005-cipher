const cipher = {
	"input": document.getElementById("input").innerText,
	"offset": Number(document.getElementById("offset").innerText),
	"output": document.getElementById("output").innerText,

	formula(match) {
		let outputCodePoint = match.codePointAt(0) + cipher.offset;
		if (
			(/[A-Z]/.test(match) && outputCodePoint < 65) ||
			(/[a-z]/.test(match) && outputCodePoint < 97)) {
			outputCodePoint + 26
		} else if (
			(/[A-Z]/.test(match) && outputCodePoint > 90) ||
			(/[a-z]/.test(match) && outputCodePoint > 122)) {
			outputCodePoint - 26
		}
		return String.fromCodePoint(outputCodePoint)
	},
};

export default cipher;
