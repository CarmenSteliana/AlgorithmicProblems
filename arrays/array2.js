function sortObject(library) {
    for (let i = 0; i < library.length; i++) {
        for (let j = i + 1; j < library.length; j++) {
            if (library[i].title > library[j].title) {
                let aux = library[j];
                library[j] = library[i]
                library[i] = aux;


            }
        }

    }

    return library
}

let library = [
    { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254 },
    { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264 },
    { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245 }
];
let sortArray = sortObject(library)
console.log(JSON.stringify(sortArray, null, 2))

function sumItems(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === target) {
                return [i, j]
            }
        }

    }
    return []

}

let a = sumItems([10, 20, 10, 40, 50, 60, 70], 50);
let b = sumItems([10, 20, 10, 40, 50, 60, 70], 200);
let c = sumItems([25, 20, 10, 40, 50, 60, 70], 50);

console.log(a)
console.log(b)
console.log(c)

function accessValue(arr, property) {

    let array = []
    for (let i = 0; i < arr.length; i++) {
        // array.push(arr[i]["ti" + "tle"])
        let { title, author } = arr[i]
        // let title = arr[i].title
        // let author = arr[i].author
        console.log(title)

    }
    console.log(array)

}
accessValue(library, "author")

function getSubstring(str1, str2) {
    for (let i = 0; i < str1.length; i++) {
        for (let j = 0; j < str2.length; j++) {
            console.log(str2[j])
        }
    }
}

console.log(getSubstring("caandy", "caaandy"))


function numericString(start, final, range) {
    let array = [];

    if ((Number.isInteger(start) && Number.isInteger(final))) {
        if (start < final) {
            for (let i = start; i <= final; i += range) {
                array.push(i)
            }
        } else {
            for (let i = start; i >= final; i -= range) {
                array.push(i)
            }
        }

    }

    if ((start >= "!" && start <= "~") && (final >= "!" && final <= "~")) {
        if (start < final) {
            let start1 = start.charCodeAt(0);
            let final1 = final.charCodeAt(0);
            for (let i = start1; i <= final1; i += range) {
                array.push(String.fromCharCode(i))

            }
        } else {
            let start1 = start.charCodeAt(0);
            let final1 = final.charCodeAt(0);
            for (let i = start1; i >= final1; i -= range) {
                array.push(String.fromCharCode(i))
            }


        }
    }

    return array
}


console.log(numericString("q", "a", 5))
console.log(numericString(10, 20, 2))
console.log(numericString(-8, -12, 2))
console.log(numericString(-12, -8, 2))
console.log(numericString("A", "Z", 2))
console.log(numericString("Z", "A", 2))
console.log(numericString("@", "z", 2))
console.log(numericString("!", ":", 2))
console.log(numericString(20, 10, 2))
console.log(numericString(10, -10, 4))
console.log(numericString(-8, 10, 3))
console.log(numericString(10, 10, 2))

function existElement(x, arr) {
    for (let i = 0; i < arr.length; i++) {
        if (x === arr[i]) {
            return true
        }
    }

    return false
}

function mergeArrays(arr1, arr2) {
    let array = arr1.concat(arr2);
    let result = []
    for (let i = 0; i < array.length; i++) {
        if (existElement(array[i], result) === false) {
            result.push(array[i])
        }

    }

    return result

}
console.log(mergeArrays([1, 1, 3], [1, 5, 6]))


function removeElement(arr, x) {
    let result = []
    let foundItem = false
    for (let i = 0; i < arr.length; i++) {
        if (x != arr[i] || foundItem == true) {
            result.push(arr[i])

        }
        if (x === arr[i]) {
            foundItem = true
        }
    }
    return result
}


console.log(removeElement([1, 5, 2, 4, 3, 5], 5))

function getLargestElement(arr, n) {
    for (let i = 0; i < n; i++) {
        console.log(arr, i)
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] < arr[j]) {
                aux = arr[i];
                arr[i] = arr[j];
                arr[j] = aux;
            }
        }
    }

    return arr[n - 1]
}

console.log(getLargestElement([1, 4, 3, 4, 5, 6, 7], 2))

function getRandomElement(arr) {
    let index = Math.floor(Math.random() * arr.length);
    let element = arr[index];

    return element
}
console.log(getRandomElement([2, 6, 9, 12, 33, 56, 78]))

function arrayfilled(counter, item) {
    let array = []
    for (let i = 0; i < counter; i++) {
        array.push(item)

    }

    return array
}


console.log(arrayfilled(6, 0))
//console.log(arrayfilled(100,11))

function arrayfilled2(counter, item) {
    let array = []
    for (let i = 0; i < counter; i++) {
        array.push(item)

    }

    return array
}

console.log(arrayfilled2(3, 'default value'))
console.log(arrayfilled2(4, 'password'))

function moveElement(arr, previousIndex, nextIndex) {

    if (previousIndex >= 0 && nextIndex >= 0) {
        let array = arr.splice(previousIndex, 1)
        arr.splice(nextIndex, 0, array[0])
    } else {
        array = arr.splice(previousIndex, 1)
        arr.splice(nextIndex + 1, 0, array[0])
    }


    return arr

}
console.log(moveElement([10, 20, 30, 40, 50], 0, 2))
console.log(moveElement([10, 20, 30, 40, 50], -4, -3))

function filterArray(arr) {
    let array = []
    for (let i = 0; i < arr.length; i++) {
        if ((arr[i]))
            array.push(arr[i])

    }
    return array
}

console.log(filterArray([58, '', 'abcd', true, null, false, 0]))


function generateArray(firstItem, arrLength) {
    let array = []
    for (let i = firstItem; array.length < arrLength; i++) {
        array.push(i)
    }

    return array
}

console.log(generateArray(1, 4))
console.log(generateArray(-6, 4))

function rangeArray(firstItem, arrLength) {
    let array = []
    for (let i = firstItem; i <= arrLength; i++) {
        array.push(i)
    }

    return array
}

console.log(rangeArray(4, 7))
console.log(rangeArray(-4, 7))



function putItems(arrays) {
    let array = [];

    for (let j = 0; true; j++) {
        let item = []
        for (let i = 0; i < arrays.length; i++) {
            if (j < arrays[i].length) {
                item.push(arrays[i][j])
            }
        }
        if (item.length == 0) {
            break
        }

        array.push(item)

    }

    return array

}
console.log(JSON.stringify(putItems([[2, 4, 5, 6], [7, 8, 9], [12, 7, 8, 9]])))


function getSubstring(str1, str2) {
    let result = ""
    for (let i = 0; i <= str1.length && i <= str2.length; i++) {
        if (str1[i] === str2[i]) {
            result = result.concat(str1[i])
        }
    }

    return `"` + result + `"`
}
console.log(getSubstring("goo", "google"))

function getSubstringCommon(arr) {
    let result = "";
    let character = true;

    getresult:
    for (let k = 0; true; k++) {
        for (let j = 1; j < arr.length; j++) {
            if (arr[0][k] != arr[j][k]) {
                character == false
                break getresult
            }

        }
        result = result.concat(arr[0][k])
    }

    return result

}
console.log(getSubstringCommon(["goo", "google", "gooooo", "go"]))