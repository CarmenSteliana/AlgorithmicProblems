  function isString(x) {
	if (typeof x === 'string') {
		return true
	}
	else {
		return false
	}
}
console.log(isString('w3resource'))
console.log(isString([2, 3, 4]))
console.log(isString(1))
console.log(isString("vb"))

function stringBlank(x) {
	if (x === "") {
		return true
	} else {
		return false
	}
}
console.log(stringBlank(''))
console.log(stringBlank('abc'))

function stringToArray(x) {
	let array = [];
	array = x.split(" ")
	return array
}
console.log(stringToArray("Robin Singh"))

function truncateString(x, nr) {
	let string = x.substring(0, nr)
	return string
}
console.log(truncateString("Robin Singh", 4))

function abreviettedString(x) {
	let array = [];
	array = x.split(" ")
	let string = array[1].substring(0, 1)
	let arrayfinal = array[0].concat(" " + string + ".")
	return arrayfinal
}
console.log(abreviettedString("Robin Singh"))

function hideEmail(x) {
	let first;
	let last;
	for (let i = 0; i < x.length; i++) {
		if (x[i] === "@") {
			first = x.slice(0, i);
			last = x.slice(i);
			break
		}
	}

	let index = Math.floor(first.length / 2);
	let item = first.slice(0, index);
	let result = item.concat("...", last)
	return result
}
console.log(hideEmail("robin_singh@example.com"))

function parameterizeString(x) {
	let string = x.toLowerCase()
	let array = [];

	for (let i = 0; i < string.length; i++) {
		if (string[i] >= "0" && string[i] <= "9") {
			array.push(string[i])
		} else if (string[i] >= "a" && string[i] <= "z") {
			array.push(string[i])
		} else if (string[i] === " " || string[i] === "-") {
			array.push("-")

		}
	}
	return array.join("")
}
console.log(parameterizeString("Robin, Singh.------- 234from USA."))

function firstLetterString(x) {
	let array = x.split('')
	let result = array[0].toUpperCase()
	array.shift()
	let string = result.concat(array.join(""))

	return string
}
console.log(firstLetterString('js string exercises'))

function eachFirstLetterString(x) {
	let f = x.replaceAll("\t", " ")
	f = f.replaceAll("\n", ' ')
	f = f.replaceAll("     ", " ")
	let array = f.split(' ')
	let arrayfinal = []
	let result
	for (let i = 0; i < array.length; i++) {
		let j = 0;
		let a = array[i][j].toUpperCase()
		result = a.concat(array[i].substring(1))
		arrayfinal.push(result)


	}
	return arrayfinal.join(" ")
}
console.log(eachFirstLetterString('js	string\nexercises\r\nnew     word'))

function word(x) {
	let first = x.substring(0, 1)
	upperLetter = first.toUpperCase()
	return upperLetter.concat(x.substring(1))
}
console.log(word("string"))

function eachFirstLetterString2(x) {
	let array = []
	let a = ""
	let upperLetter;
	for (let i = -1; i < x.length; i++) {
		if (i === -1 || x[i] === "\t" || x[i] === "\n" || x[i] === " ") {
			let first = x[i + 1]
			upperLetter = first.toUpperCase()
			array.push(upperLetter)

		} else {
			array.push(x[i + 1])

		}
	}
	return array.join("")

}
console.log(eachFirstLetterString2('js	string\nexercises\r\nnew     word'))

function swapCase(x) {
	let array = x.split("")
	for (let i = 0; i < array.length; i++) {
		if (array[i] >= "A" && array[i] <= "Z") {
			array[i] = array[i].toLowerCase()
		} else if (array[i] >= "a" && array[i] <= "z")
			array[i] = array[i].toUpperCase()
	}
	return array.join("")
}
console.log(swapCase('AaBbc'))

function camelCase(x) {
	x = x.replaceAll("\t", " ")
	x = x.replaceAll("\n", " ")
	x = x.replaceAll("\r", " ")

	let array = x.split(" ");
	for (let i = 0; i < array.length; i++) {
		if (array[i + 1] >= "a" && array[i + 1] <= "z") {
			let first = array[i + 1].substring(0, 1);
			first = first.toUpperCase()
			array[i + 1] = first.concat(array[i + 1].substring(1))

		}
	}
	return array.join("")
}
console.log(camelCase("JavaScript      \tExercises"))
console.log(camelCase("JavaScript \n\rexercises"))
console.log(camelCase("JavaScriptExercises"))

// function uncamelize(x, character) {
// 	let string = ""

// 	for (let i = 0; i < x.length; i++) {
// 		if (x[i] >= "A" && x[i] <= "Z") {
// 			let firstLetter = x[i].toLowerCase()
// 			let secondWord = x.substring(i + 1)
// 			let final = firstLetter.concat(secondWord)
// 			let firstWord = x.substring(0, i)
// 			if (character === undefined) {
// 				string = firstWord.concat(` ${final}`)
// 			} else {
// 				string = firstWord.concat(`${character}${final}`)
// 			}


// 		}
// 	}
// 	return string
// }
// console.log(uncamelize('helloWorld'))
// console.log(uncamelize('helloWorld', '-'))
// console.log(uncamelize('helloWorld', '_'))


function uncamelize(x, character) {
	let array = []
	if (!character) {
		character = " ";
	}
	for (let i = 0; i < x.length; i++) {
		if (x[i] >= "A" && x[i] <= "Z") {
			let firstLetter = x[i].toLowerCase()
			array.push(character, firstLetter)
		} else if (x[i] >= "a" && x[i] <= "z") {
			array.push(x[i])

		}

	}
	return array.join("")
}
console.log(uncamelize('helloWorldSAasdasA'))
console.log(uncamelize('helloWorldSAasdasA', '-'))
console.log(uncamelize('helloWorld'))
console.log(uncamelize('helloWorld', '-'))
console.log(uncamelize('helloWorld', '_'))

function repeat(str, number) {
	let counter = 0;
	let string = "";

	if (number === undefined) {
		number = 1;
	}

	for (let i = 0; i < number; ++i) {
		string = string.concat(str)
	}

	// while (counter < number){
	// 	string = string.concat(str)
	// 	counter = counter + 1;
	// }

	return string
}
console.log(repeat("Ha!", 3))
console.log(repeat("Ha!", 0))
console.log(repeat('Ha!'));

function insert(string, word, position) {
	if (word === undefined) {
		word = ""
	} if (position === undefined) {
		position = 0
	}

	let firstString = string.substring(0, position)
	let secondString = string.substring(position)
	let result = firstString.concat(word, secondString)

	return result

}
console.log(insert('We are doing some exercises.', 'JavaScript ', 100))
console.log(insert('We are doing some exercises.', 'JavaScript '))
console.log(insert('We are doing some exercises.'))

function format(nr) {
	if (nr === undefined) {
		return ""
	}
	string = nr.toString()
	let result;

	if (string[string.length - 1] === "1") {
		result = string.concat("st")
	} else if (string[string.length - 1] === "2") {
		result = string.concat("nd")
	} else if (string[string.length - 1] === "3") {
		result = string.concat("rd")
	} else if (string[string.length - 1] >= "4") {
		result = string.concat("th")
	}

	return result
}
console.log(format(302))
console.log(format(1))
console.log(format(8))
console.log(format(404))
console.log(format())

function truncate(str, number, character) {
	let truncate;
	let result;
	let final;
	if (number === undefined && character === undefined) {
		return str
	} else if (character === undefined) {
		truncate = number - 3;
		result = str.substring(0, truncate);
		final = result.concat("...")
		return final
	}


	truncate = number - character.length;
	result = str.substring(0, truncate);
	final = result.concat(character)
	return final

}
console.log(truncate("We are doing JS string exercises.", 15, "!!"))
console.log(truncate("We are doing JS string exercises.", 4))
console.log(truncate("We are doing JS string exercises."))

function stringChop(str, nr) {
	let array = []
	if (!nr) {
		array.push(str)
		return array
	}

	for (let i = 0; i < str.length; i += nr) {
		let result = str.substr(i, nr)
		array.push(result)
	}
	return array
}
console.log(stringChop('w3resource', 2))
console.log(stringChop('w3resource', 3));
console.log(stringChop('w3resource'));

function countSubstring(str, item, parameter) {
	let array;
	let result;
	if (parameter === true) {
		result = str.toLowerCase();
		array = result.split(" ");
	} else if (parameter === false || parameter === undefined) {
		result = str;
		array = str.split(" ");

	}
	let count = 0;
	for (let i = 0; i < array.length; i++) {
		if (item === array[i]) {
			count = count + 1;
		}
	}
	return count
}
console.log(countSubstring("The quick brown fox jumps over the lazy dog", 'the', false))
console.log(countSubstring("The quick brown fox jumps over the lazy dog", 'the', true))
console.log(countSubstring("The quick brown fox jumps over the lazy dog", 'fox'))

function formattedString(str, element, direction) {
	element = element.toString()
	let truncate;
	let substring;
	if (str.length >= element.length) {
		truncate = str.length - element.length
		if (direction === 'l') {
			substring = str.substring(0, truncate)
			let result = substring.concat(element)
			return result
		} else if (direction === 'r' || direction === '') {
			substring = str.substring(element.length)
			result = element.concat(substring)
			return result
		}

	} else if (str.length < element.length) {
		truncate = element.length - str.length;
		let substringLeft;
		if (direction === 'l') {
			substringLeft = element.substring(truncate)
		} else if (direction === 'r') {
			substringLeft = element.substr(0, str.length)
		}
		// result = substringLeft
		// substring = ""
		// result = element.concat(substring)
		return substringLeft
	}

}
console.log(formattedString('00', 123, 'l'))
console.log(formattedString('00017000', 123, ''));
console.log(formattedString('00', 123, 'r'))
console.log(formattedString('0000', 123, 'l'))

function repeatString(str, times) {
	if (!times) {
		return "Error in string or count."
	}
	let result = ""
	for (let i = 0; i < times; i++) {
		result = result.concat(str)
	}
	return result
}
console.log(repeatString('a', 4))
console.log(repeatString('a'))

function partString(str, character, position) {
	let result;
	for (let i = 0; i < str.length; i++) {
		if (character === str[i] && position === 'a') {
			result = str.substring(0, i)
		} else if (character === str[i] && position === 'b') {
			result = str.substring(i + 1)
		}
	}
	let final = result.trim()
	return final
}
console.log(partString('w3resource: JavaScript Exercises', ':', 'a'))
console.log(partString('w3resource: JavaScript Exercises', 'E', 'a'))

function tailingSpaces(str) {
	let result = str.trim()
	return result
}
console.log(tailingSpaces('w3resource '))
console.log(tailingSpaces(' w3resource'))
console.log(tailingSpaces(' w3resource '))

function numberOfWorlds(str, nr) {
	let array = str.split(" ")
	let final = []
	for (let i = 0; i < nr; i++) {
		final.push(array[i])
	}
	return final.join(" ")
}
console.log(numberOfWorlds("The quick brown fox jumps over the lazy dog", 2))

function getLetters(array) {
	let result = []
	for (let i = 0; i < array.length; i++) {
		if (array[i] >= "A" && array[i] <= "Z" || array[i] >= "a" && array[i] <= "z") {
			result.push(array[i])
		}
	}
	return result
}
console.log(getLetters([1, "f", "."]))

function alphabetizedString(str) {
	let array = str.split("")
	let resultLetters = getLetters(array)

	for (let i = 0; i < resultLetters.length; i++) {
		for (let j = 0; j < resultLetters.length; j++) {
			if (resultLetters[j] >= resultLetters[i]) {
				let aux = resultLetters[i];
				resultLetters[i] = resultLetters[j];
				resultLetters[j] = aux;
			}
		}
	}

	let result = resultLetters.join("")
	return result


}
console.log(alphabetizedString('United States'))
console.log(alphabetizedString('Unite da    ll;   a States'))

function stringChop2(str, str2) {
	let array = []
	let lengthString = str2.length
	for (let i = 0; i < str.length; i += lengthString) {
		let result = str.substr(i, lengthString)
		array.push(result)
	}
	return array
}
console.log(stringChop2('w3resource', "re"))


function removeFirstDuplicate(str, element) {
	let length = element.length
	let final;
	let index = str.indexOf(element)
	console.log(index)
	if (index != -1) {
		let first = str.substring(0, index)
		console.log(first)
		let second = str.substring(index + length)
		final = first.concat(second)
		return final


	} else {
		return str
	}


}
console.log(removeFirstDuplicate("The quick brown fox jumps over the lazy the dog", ".."))

function convertDecimal(x) {
	let array = []
	for (let i = 0; i < x.length; i++) {
		let str = x.charCodeAt(i)
		array.push(str)

	}

	return array

}

function hexDigit(x) {
	if (x === 10) {
		x = "A";
	} else if (x === 11) {
		x = "B";
	} else if (x === 12) {
		x = "C";
	} else if (x === 13) {
		x = "D";
	} else if (x === 14) {
		x = "E";
	} else if (x === 15) {
		x = "F";
	} else if (x >= 0 && x <= 9) {
		x = "" + x
	}

	return x
}
console.log(hexDigit(11))


function ascii_to_hex(x) {
	let array = convertDecimal(x)
	array.reverse()
	let arrayfinal = []
	for (let i = 0; i < array.length; i++) {
		while (array[i] > 0) {
			y = array[i] % 16
			arrayfinal.unshift(hexDigit(y))
			array[i] = Math.floor(array[i] / 16);
		}


	}
	return arrayfinal.join("")


}
console.log(ascii_to_hex("$#*"))
console.log(ascii_to_hex("/."))

function convertHexadecimal2(x) {
	let arrayfinal = []
	while (x > 0) {
		y = x % 16

		arrayfinal.unshift(hexDigit(y))

		x = Math.floor(x / 16);
	}

	return arrayfinal.join("")

}
console.log(convertHexadecimal2(74))



function getDecDigitHex(x) {
	if (x === "A") {
		x = 10;
	} else if (x === "B") {
		x = 11;
	} else if (x === "C") {
		x = 12;
	} else if (x === "D") {
		x = 13;
	} else if (x === "E") {
		x = 14;
	} else if (x === "F") {
		x = 15;
	} else {
		x = Number(x)
	}

	return x
}
console.log(getDecDigitHex("2"))

function containsLetter(x) {
	for (let i = 0; i < x.length; i++) {
		if (x[i] >= "A" && x[i] <= "F") {
			return true
		}
	}
	return false
}
console.log(containsLetter("3B"))

function getAsciiCharHex(x) {
	let string;
	let decimalDigit;
	if (containsLetter(x) === true) {
		let array = x.split("");
		console.log(array)
		let final = [];
		for (let i = 0; i < array.length; i++) {
			final.push(getDecDigitHex(array[i]))

		}
		decimalDigit = final[0] * Math.pow(16, 1) + final[1] * Math.pow(16, 0);
		string = String.fromCharCode(decimalDigit)
	} else {
		let number = Number(x)
		let firstDigit = Math.floor(number / 10);
		let secondDigit = number % 10;
		decimalDigit = firstDigit * Math.pow(16, 1) + secondDigit * Math.pow(16, 0);
		string = String.fromCharCode(decimalDigit)

	}

	return string

}
console.log(getAsciiCharHex("3A"))
console.log(getAsciiCharHex("32"))

function hex_to_ascii(x) {
	let array = []
	let substring;
	for (let i = 0; i < x.length; i += 2) {
		substring = x.substr(i, 2)
		array.push(getAsciiCharHex(substring))

	}

	return array.join("")
}

console.log(hex_to_ascii("A"))

function hex_digit(x) {
	if (x[0] >= 'A' && x[0] <= 'F') {
		return x.charCodeAt(0) - 'A'.charCodeAt(0) + 10
	} else {
		return Number(x)
	}
}

function get_char_from_hex(x) {
	let code = hex_digit(x[0]) * 16 + hex_digit(x[1])

	return String.fromCharCode(code)
}

function hex_to_ascii2(x) {
	let result = []

	for (let i = 0; i < x.length; i += 2) {
		let substring = x.substr(i, 2)
		let char = get_char_from_hex(substring)

		result.push(char)
	}

	return result.join("")
}
console.log(hex_to_ascii2("3A"))

function find_word(x, word) {
	let length = word.length;
	let counter = 0;
	for (let i = 0; i < x.length; i++) {
		if (x.substr(i, length) === word) {
			counter = counter + 1;
		}
	}
	return `${word} was found ${counter} times.`
}
console.log(find_word('The quick brown fox', 'ic'))
console.log(find_word('aa, bb, cc, dd, aa', 'aa'))

function find_suffix(x, suffix) {
	let length = suffix.length;
	let string = x.substr(x.length - length)

	return string === suffix
}
console.log(find_suffix('JS PHP PYT HON', 'PYT HON'));

function escape_characters(x) {
	x = x.replace("&", "&amp;")
	x = x.replace(">", "&gt;")
	x = x.replace("<", "&lt;")
	return x

}
console.log(escape_characters('PHP & MySQL'));
console.log(escape_characters('3 > 2'));


function remove_nonprintable(x) {
	let array = []
	for (let i = 0; i < x.length; i++) {
		if (x.charCodeAt(i) >= "32" && x.charCodeAt(i) <= "127") {
			array.push(x[i])
		}
	}
	return array.join("")
}
console.log(remove_nonprintable('äÄçÇéÉasêdödaÖdÐadaþúÚ'))

function remove_nonWord(x) {
	let array = []
	for (let i = 0; i < x.length; i++) {
		if (
			x[i] === " " ||
			x[i] === "-" ||
			x[i] === "_" ||
			(x[i] >= "a" && x[i] <= "z") ||
			(x[i] >= "A" && x[i] <= "Z") ||
			(x[i] >= "0" && x[i] <= "9")
		) {
			array.push(x[i])
		}
	}
	return array.join("")
}
console.log(remove_nonWord('PHP ~!@#$%^&*()+`-={}[]|\\:";\'/?><., _MySQL'))

function convert_titleCase(x) {
	let string = x.toLowerCase()
	let array = string.split("")
	for (let i = 0; i < array.length; i++) {
		array[0] = array[0].toUpperCase()
		if (array[i] === " ") {
			array[i + 1] = array[i + 1].toUpperCase()

		}
	}
	return array.join("")
}
console.log(convert_titleCase('PHP exercises. python exercises.'))

function convert_upperCase(x) {
	let first = x.substring(0, 1)
	let upper = first.toUpperCase();
	let secondWord = x.substring(1)
	let word = upper.concat(secondWord)
	return word

}
console.log(convert_upperCase("exercises"))

function convert_titleCase2(x) {
	let string = x.toLowerCase()
	let array = string.split(" ")
	let final = [];
	for (let i = 0; i < array.length; i++) {
		final.push(convert_upperCase(array[i]))
	}
	return final.join(" ")
}
console.log(convert_titleCase2('PHP pP PP  exercises. python exercises.'))

function return_index(x) {
	let array = [];
	for (let i = 0; i < x.length; i++) {
		if (x[i] === "<" && array.length === 0) {
			array.push(i)
		} else if (x[i] === "<" && array.length > 0) {
			array.splice(0, array.length)
			array.push(i)
		} else if (x[i] === ">" && array.length === 1) {
			array.push(i)
			break
		}

	}
	return array

}

console.log(return_index('a><p><st<rong><em>PHP Exercises</em></strong></p>'))
console.log(return_index('a'))

function remove_firstTag(x) {
	let indices = return_index(x)
	if (indices.length >= 2) {
		let [start, end] = indices
		let result = x.split("")
		let nrElements = (end - start) + 1
		result.splice(start, nrElements)
		return [result.join(""), true]
	} else {
		return [x, false]
	}
	// string
	// boolean - daca ai sters sau nu
}
console.log(remove_firstTag(">>wor<d>"))
console.log(remove_firstTag("wor"))

function remove_AllTags(x) {
	let exists = true
	while (exists) {
		const [result_string, exists_tags] = remove_firstTag(x)

		x = result_string
		exists = exists_tags
	}
	return x

}
console.log(remove_AllTags('a><p><st<rong><em>PHP Exercises</em></strong></p>'))

function zeroFill(nr, digits) {
	let positiveNr = Math.abs(nr)
	let string = positiveNr.toString()
	let addZeroCount = digits - string.length;
	console.log(addZeroCount)
	// let counter = 0;
	let array = [`${positiveNr}`]

	if (digits > string.length) {
		for (let counter = 0; counter < addZeroCount; ++counter) {
			// while(counter < addZeroCount){
			array.unshift('0')
			// counter = counter + 1
		}
		return array
	} else if (digits <= string.length) {
		return array
	}

}
console.log(zeroFill(-123, 4))
console.log(zeroFill(123, 3))

function addSign(nr, digits, sign) {
	let array = zeroFill(nr, digits)
	if (nr > 0 && sign === true) {
		array.unshift("+")
	} else if (nr < 0) {
		array.unshift("-")
	}
	console.log(array)
	return array.join("")
}
console.log(addSign(123, 15, false))
console.log(addSign(123, 5, true))
console.log(addSign(-123, 5, false))
console.log(addSign(123, 2, true))
console.log(addSign(-123, 5, true))


function convert_strings(x) {
	let array = x.split("")
	for (let i = 0; i < array.length; i++) {
		if (array[i] >= "A" && array[i] <= "Z") {
			array[i] = array[i].toLowerCase()
		}
	}
	return array.join("")

}
console.log(convert_strings("abCD234e"))

function compare_strings(x, y) {
	return x.toLowerCase() === y.toLowerCase()
}
console.log(compare_strings("ABCde", "abcde"))
console.log(compare_strings("abde", "acdd"))
console.log(compare_strings("23bdf", "23BDf"))


function equal_substr(s, index, match) {
	if (s.length - index < match.length) {
		return false
	}

	for (let i = 0, j = 0; ((i + index) < s.length && j < match.length); i++, j++) {
		if (s[i + index] != match[j]) {
			return false
		}
	}

	return true
}

console.log(equal_substr("abcd", 1, "d"))
console.log(equal_substr("abc", 1, "bc"))

function search_caseInsensitive(x, y) {
	let searchWord = y.toLowerCase()
	let string = x.toLowerCase()
	for (let i = 0; i < string.length; i++) {
		if (equal_substr(string, i, searchWord) === true) {

			return "Matched"
		}

	}
	return "Not Matched"


}
console.log(search_caseInsensitive("JavaScript Exercises", "script"))

function Uncapitalized(x) {
	let array = x.split("")
	array[0] = array[0].toLowerCase()
	return array.join("")
}
console.log(Uncapitalized("JS string exercises"))

function unCapitalized_Words(x) {
	let string = x.toLowerCase()
	return string
}
console.log(unCapitalized_Words("Js StriNg Exercises"))

function isUpperCaseAt(x, index) {
	let array = x.split("")
	if (index > array.length) {
		console.error(`Please input an index smaller than ${array.length}`)
		return false
	}

	if (array[index] >= "A" && array[index] <= "Z") {
		return true
	} else {
		return false
	}

}
console.log(isUpperCaseAt("Js STRING EXERCISES", 30))

function isLowerCaseAt(x, index) {
	if (x == undefined || x == null) {
		console.error(`Please provide a string`)
		return false
	}

	if (index > x.length) {
		console.error(`Please input an index smaller than ${x.length}`)
		return false
	}

	if (x[index] >= "a" && x[index] <= "z") {
		return true
	} else {
		return false
	}

}
console.log(isLowerCaseAt("Js STRING EXERCISES", 30))
console.log(isLowerCaseAt("Js STRING EXERCISES", 1))
console.log(isLowerCaseAt(null, 1))
console.log(isLowerCaseAt(null, 2))

function humanize(x) {

	if (!x || !Number.isInteger(x)) {
		return "Please input a number"
	}

	let modulo = x % 10;
	let string = "";

	if (modulo === 1) {
		string = string.concat(x + "st")
	} else if (modulo === 2) {
		string = string.concat(x + "nd")
	} else if (modulo === 3) {
		string = string.concat(x + "rd")
	} else {
		string = string.concat(x + "th")
	}

	return string
}
console.log(humanize(301))
console.log(humanize(302))
console.log(humanize(303))
console.log(humanize(304))
console.log(humanize(3010))
console.log(humanize(3015))
console.log(humanize("fgf"))
console.log(humanize())

function startsWith(s, match) {

	if (s === undefined || s === null) {
		console.error("Please input a string")
		return false
	}

	if (match === undefined || match == null) {
		console.error("Please input a match")
		return false
	}

	let length = match.length;
	let prefix = s.substring(0, length);


	return prefix === match
}

console.log(startsWith('js string exercises', 'bs'))
console.log(startsWith('', 'bs'))
console.log(startsWith('js string exercises', "j"))

function endsWith(s, character) {

	if (s === undefined || s === "") {
		console.error("Please input a string")
		return false
	}

	if (character === undefined || character === "") {
		console.error("Please input a character")
		return false
	}

	let length = character.length;

	let endCharacters = s.substring(s.length - length);

	if (endCharacters === character) {
		return true;
	} else {
		return false;
	}

}
console.log(endsWith('js string exercises', 'es'))
console.log(startsWith('', 'bs'))
console.log(startsWith('js string exercises', "ses"))

function convert_toNumbers(x) {
	let array = x.split("");
	for (let i = 0; i < array.length; i++) {
		array[i] = Number(array[i])
	}
	return array
}
//console.log(convert_toNumbers("599"))

function checkCarryNr(x) {
	let array = convert_toNumbers(x)
	for (let i = array.length - 1; i >= 0; i--) {
		if (array[i] + 1 <= 9) {
			array[i] = array[i] + 1;
			break;

		} else if (array[i] + 1 > 9) {
			array[i] = 0;
		}
	}

	if (array[0] === 0) {
		array[0] = 10
	}
	return array.join("")
}
console.log(checkCarryNr("1989"))


// function decimalAscii(x) {
// 	let array = []
// 	for (let i = 0; i < x.length; i++) {
// 		let decimal = x.charCodeAt(i)
// 		array.push(decimal)
// 	}
// 	return array
// }
// console.log(decimalAscii("abc"))


// function convert_toCharacters(array) {
// 	for (let i = 0; i < array.length; i++) {
// 		array[i] = String.fromCharCode(array[i])
// 	}
// 	return array
// }
// console.log(convert_toCharacters([97, 98, 99]))


// function checkCarryLetters(str) {
// 	let array = decimalAscii(str)
// 	console.log(array)
// 	let FirstCarry = false;
// 	for (let i = array.length - 1; i >= 0; i--) {
// 		if (array[i] >= 97 && array[i] < 122) {
// 			array[i] = array[i] + 1;
// 			return [convert_toCharacters(array), FirstCarry]
// 		} else if (array[i] === 122) {
// 			array[i] = 97

// 		} else if (array[i] === 90) {
// 			array[i] = 65

// 		}
// 	}
// 	if (array[0] === 97) {
// 		FirstCarry = true;
// 	}
// 	return [convert_toCharacters(array), FirstCarry]
// }
// console.log(checkCarryLetters("zz"))

// function successor(x) {
// 	let lastPart = x.substring(x.length - 3)
// 	let firstPart = x.substring(0, x.length - 3)
// 	let result;
// 	let array2;
// 	let array = checkCarryLetters(lastPart)
// 	console.log(array)
// 	if (array[1] === true) {
// 		 array2 = checkCarryNr(firstPart)
// 		result = array2.concat(array[0].join(""))

// 	} else {
// 		array2 = checkCarryLetters(lastPart);
// 		result = firstPart.concat(array2[0].join(""))
// 	}
// 	return result 
// }
// console.log(successor("1aa21mm989zzz"))
console.log("------------------------")
function checkNumber_Letters(x) {
	if (Number.isInteger(x)) {
		return true

	} else if ((x >= "a" && x < "z") || (x >= "A" && x < "Z")) {
		return true
	} else {
		return false
	}

}
console.log(checkNumber_Letters("!"))

function successor_character(char) {
	let carry = false;
	let array = []
	if (char >= "0" && char < "9") {
		let number = Number(char) + 1;
		array.push(number.toString(), carry)

	} else if (char === "9") {
		carry = true;
		array.push("0", carry)

	} else if ((char >= "a" && char < "z") || (char >= "A" && char < "Z")) {
		let string = char.charCodeAt(0) + 1;
		let character = String.fromCharCode(string)
		array.push(character, carry)
	} else if (char === "z") {
		carry = true;
		character = String.fromCharCode(97)
		array.push(character, carry)

	} else if (char === "Z") {
		carry = true;
		character = String.fromCharCode(65)
		array.push(character, carry)

	} else {
		array.push(char, carry)
	}

	return array

}
function add_char(x) {
	let array = x.split("")
	for (let i = array.length - 1; i >= 0; i--) {
		let [first, carry] = successor_character(array[i])
		array[i] = first
		//if(i === 0 && carry === true){
			//array.unshift(array[0])
		//}
		if(carry === true && i === 0 &&(array[0] === "0" || array[0] === "a" || array[0] === "A")){
			array.unshift(array[0])
		}
		
		if (carry === false) {
			break

		}
	}
	return array.join("")
}

console.log(add_char("ZZZ9999"))
console.log(add_char("abcdz"))
console.log(add_char("THX1138"))
console.log(add_char("< >"))
console.log(add_char("1999zzz"))
console.log(add_char("999ZZZ"))

function getRandom_Characters(counter){
	let string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
	// let array = string.split("")
	let result = []

	if(counter === undefined){
		counter = 32;
	}

	for(let i = 0; i < counter; i++){
		random = string[Math.floor(Math.random() * string.length)]
		result.push(random)
	}
	return result.join("")
}
console.log(getRandom_Characters(5))
console.log(getRandom_Characters())

