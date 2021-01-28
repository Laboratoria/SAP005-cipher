const cipher = {
	encode(offset, string) {
		function formula(match) {
			let outputCodePoint = match.codePointAt(0) + Number(offset.value);

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

			return String.fromCodePoint(outputCodePoint);
			}

		string.ncodedTxt.value = string.dcodedTxt.value.replaceAll(/[A-Z]/gi, formula);
	},

	decode(offset, string) {
		function formula(match) {
			let outputCodePoint = match.codePointAt(0) - Number(offset.value);

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

			return String.fromCodePoint(outputCodePoint);
			}

		string.dcodedTxt.value = string.ncodedTxt.value.replaceAll(/[A-Z]/gi, formula);
	},
};

export default cipher;
