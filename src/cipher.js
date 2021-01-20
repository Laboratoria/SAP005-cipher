const cipher = {
	//	1   2   3   4   5   6   7   8   9   10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26

	//	A   B   C   D   E   F   G   H   I   J   K   L   M   N   O   P   Q   R   S   T   U   V   W   X   Y   Z
	//	65  66  67  68  69  70  71  72  73  74  75  76  77  78  79  80  81  82  83  84  85  86  87  88  89  90

	//	a   b   c   d   e   f   g   h   i   j   k   l   m   n   o   p   q   r   s   t   u   v   w   x   y   z
	//	97  98  99  100 101 102 103 104 105 106 107 108 109 110 111 112 113 114 115 116 117 118 119 120 121 122

	"input": document.getElementById(input).innerText,
	"offset": Number(document.getElementById(offset).innerText),
	"output": document.getElementById(output).innerText,

	formula(v) {
		if (
			(65 >= v.codePointAt(0) <= 90) ||
			(97 >= v.codePointAt(0) <= 122)) {
			let outputCodePoint = v.codePointAt(0) + cipher.offset;
			if (
				(65 >= v.codePointAt(0) <= 90 && outputCodePoint < 65) ||
				(97 >= v.codePointAt(0) <= 122 && outputCodePoint < 96)) {
				outputCodePoint + 26
			} else if (
				(65 >= v.codePointAt(0) <= 90 && outputCodePoint > 90) ||
				(97 >= v.codePointAt(0) <= 122 && outputCodePoint > 122)) {
				outputCodePoint - 26
			}
			return String.fromCodePoint(outputCodePoint)
		} else {
			return v
		}
	},

	code() {
		cipher.output = Array.from(cipher.input, cipher.formula).join("")
	},
};

export default cipher;
