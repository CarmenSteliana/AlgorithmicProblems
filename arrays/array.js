// function is_array(x) {
//     if (x.constructor === Array) {
//         return true
//     }

//     return false
// }

// console.log("is_array",is_array('w3resource'));
// console.log("is_array",is_array([1, 2, 4, 0]));
// console.log("is_array",is_array([]))


// function array_clone(arr) {
//     console.log("input: ", JSON.stringify(arr))
//     let result = []

//     for (let i = 0; i < arr.length; ++i) {
//         if (is_array(arr[i])) {
//             let item = array_clone(arr[i])
//             result.push(item)
//             console.log(result)
//         } else {
//             result.push(arr[i])
//             console.log(result)
//         }
//     }

//     console.log("result: ", result)
//     return result
// }
// // console.log("array_clone", array_clone([1, 2, 4, 0]));
// // console.log("array_clone", array_clone([1, 2, [4, 0]]));

// let a = [1, 2, [4, [1, 2]]]
// let b = array_clone(a)

// b[1] = 4
// b[2][1][0] = 5
// console.log(JSON.stringify(a), JSON.stringify(b))


// function first(x, n) {
//     if (n == undefined) {
//         return x[0]
//     } else {
//         return x.slice(0)
//     }
//     console.log("from function ", x, n == undefined)
// }



// console.log("first", first([7, 9, 0, -2]));
// console.log("first", first([], 3));
// console.log("first", first([7, 9, 0, -2], 3));
// console.log("first", first([7, 9, 0, -2], 6));
// console.log("first", first([7, 9, 0, -2], -3));



// function suma(n) {
//     if (n == 0) {
//         return 0
//     }

//     console.log((n-1)+n)
//     return suma(n - 1) + n

// }

// console.log(suma(100))

// function produs(n) {
//     if (n == 1) {
//         return 1
//     }

//     return produs(n - 1) * n
// }

// console.log(produs(70))

function last(x, n) {
    if (n == undefined) {
        return x[x.length - 1]
    }
    if (n > x.length - 1) {
        return x.slice(0)
    } else {
        return x.slice(x.length - n)
    }

}

console.log(last([7, 9, 0, -2]));
console.log(last([7, 9, 0, -2], 3));
console.log(last([7, 9, 0, -2], 6));

function myColor(x) {

    let arr = "";
    for (let i = 0; i < x.length; i++) {
        if (i === x.length - 1) {
            arr = arr.concat(x[i])
        } else {
            arr = arr.concat(x[i], ",")
        }

    }
    console.log('"' + arr + '"')

    arr = ""
    for (let i = 0; i < x.length; i++) {
        if (i === x.length - 1) {
            arr = arr.concat(x[i])
        } else {
            arr = arr.concat(x[i], "+")
        }
    }
    console.log('"' + arr + '"')



}
x = ["Red", "Green", "White", "Black", "Black"];
myColor(x)

function charEven(x) {
    if (Number(x[0]) % 2 == 0) {
        return true
    }

    return false
}

function even(x) {
    let str = ""
    for (let i = 0; i < x.length; i++) {
        if (
            charEven(x[i]) && (i < (x.length - 1)) && charEven(x[i + 1])
        ) {
            str = str.concat(x[i], "-");
        } else {
            str = str.concat(x[i]);
        }
    }

    return str
}

console.log(even("0259111468"))

function sort(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] <= arr[i + 1]) {
            console.log(arr[i], arr[i + 1])
            let aux = arr[i + 1]
            arr[i + 1] = arr[i]
            arr[i] = aux
            console.log(arr)
        }
    }
    return arr
}

console.log(sort([3, 8, 7, 6, 5, -4, 3, 2, 1]))

function counter(arr, x) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (x === arr[i]) {
            count = count + 1;
        }
    }

    return `${x}` + " " + `(${count} times)`

}
console.log(counter([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3], 3))

function upper(str) {
    let first = str.substring(0, 1);
    let second = str.substring(1);
    let concat = first.toLowerCase() + second.toUpperCase();

    return concat
}

console.log(upper("Fox"))

function upperList(string) {
    let array = string.split(" ");
    let str = " ";
    console.log(array)
    for (let i = 0; i < array.length; i++) {
        console.log(array[i])
        str = str.concat(upper(array[i]) + ' ');
        console.log(str)

    }

    return `'${str}'`
}

console.log(upperList("The Quick brOwn Fox"))


function counter1(arr) {
    let maxCounter = 0;
    let maxElement = 0;

    for (let i = 0; i < arr.length; i++) {
        let counter = 1;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                counter = counter + 1;
            }
        }

        if (counter > maxCounter) {
            maxCounter = counter;
            maxElement = arr[i];
            console.log(arr[i])
        }


    }
    return [maxElement, maxCounter]

}
let t = counter1([3, 2, 3, 'a', 3, 1, 1, 1, 1, 1, 2, 4, 9, 3]);
console.log(`${t[0]} (${t[1]} times)`);

function upperLower(str) {
    let array = [];
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) >= "A" && str.charAt(i) <= "Z") {
            let a = str.charAt(i).toLowerCase();
            array.push(a)
        } else if (str.charAt(i) >= "a" && str.charAt(i) <= "z") {
            let b = str.charAt(i).toUpperCase();
            array.push(b)
        } else {
            array.push(str.charAt(i))
        }


    }
    let arrayfinal = array.join("")

    return arrayfinal
}

console.log(upperLower('The Quick, Br1own Fox'))
// console.log(upperLower('The Quick Brown Fox'))


function displayTable(arr) {

    for (let i = 0; i < arr.length; i++) {
        console.log(`row ${i}`);
        for (let j = 0; j < arr[i].length; j++) {
            console.log(arr[i][j]);
        }

    }
}
displayTable([[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 27], [7, 4, 28, 14], [3, 10, 26, 7]])

function vector(arr) {
    let produs = 1;
    let suma = 0;
    for (let i = 0; i < arr.length; i++) {
        produs = arr[i] * arr[i];
        suma = suma + produs;

    }

    return suma
}
console.log(vector([0, 1, 2]))

function sumProduct(arr) {
    let produs = 1;
    let suma = 0;
    for (let i = 0; i < arr.length; i++) {
        produs = produs * arr[i];
        suma = suma + arr[i];

    }

    return [produs, suma]

}
let result = (sumProduct([5, 1, 2]));
let sum = result[1]
let produs = result[0]
console.log(`product = ${produs}, sum = ${sum}`)

list = [];

function addNumber() {
    let number = document.getElementById("number").value;
    let value = Number(number);
    list.push(value)
    console.log(list)
    document.getElementById("number").value = "";
}

function displayNumber() {
    let str = ""
    for (let i = 0; i < list.length; i++) {
        str = str.concat(` Element ${i} = ${list[i]} <br>`)
        console.log(str)

    }
    document.getElementById("list").innerHTML = str

}

function removeDuplicate(arr) {
    let array = [];

    for (let i = 0; i < arr.length; i++) {
        let isItem = true;
        for (let j = 0; j < i; j++) {
            if (arr[i].toLowerCase() === arr[j].toLowerCase()) {
                isItem = false;

            }
        }
        if (isItem != false) {
            array.push(arr[i])
        }


    }

    return array
}
console.log(removeDuplicate(["ANA", "ANa", "anA", "candy", "banana", "caNdy"]))

function color(arr, arr1) {
    let str = "";
    for (let i = 0; i < arr.length; i++) {
        let j = 0;
        if (i < 3) {
            j = i + 1;
        }
        console.log(arr[i])
        str = str.concat(`"${i + 1}${arr1[j]} choice is ${arr[i]}."\n`)
    }

    console.log(str)
}
color(
    [
        "Blue", "Green", "Red", "Orange",
        "Violet", "Indigo", "Yellow"
    ],
    ["th", "st", "nd", "rd"]
)

function leapYears(x, y) {
    for (let i = x; i <= y; i++) {
        if (i % 4 == 0 && i % 100 != 0 || i % 400 == 0) {
            console.log("Leap year is:", i)
        }
    }
}

leapYears(2000, 2050)

function random(arr) {
    let array = []

    console.log(arr, array)
    for (let i = 0; arr.length > 0; i++) {
        let aIndex = Math.floor(Math.random() * arr.length)
        let a = arr[aIndex]
        array.push(a)
        arr.splice(aIndex, 1)
    }
    console.log(array)

}

random([1, 2, 3, 4, 6, 12, 7])

function sumArrays(arr1, arr2) {
    let sum = 0;
    let sumArrays = [];
    let max = 0;
    if (arr1.length > arr2.length) {
        max = arr1.length
    } else {
        max = arr2.length
    }
    console.log(max)

    for (let i = 0; i < max; i++) {

        if (i < arr1.length && i < arr2.length) {
            sum = arr1[i] + arr2[i]
            console.log(sum)

        } else if (i < arr2.length) {
            sum = arr2[i]
            console.log(sum)
        } else if (i < arr1.length) {
            sum = arr1[i]
        }
        sumArrays.push(sum)
    }

    return sumArrays
}
arr2 = [1, 0, 2, 3, 4];
arr1 = [3, 5, 6, 7, 8, 13];
console.log(sumArrays(arr1, arr2))

function existItem(arr, x) {
    for (let i = 0; i < arr.length; i++) {
        if (x === arr[i]) {
            return true
        }
    }

    return false
}
console.log(existItem([2, 4, 5, 1], 2))



function duplicate(arr) {
    let array = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j] && existItem(array, arr[i]) == false) {

                array.push(arr[i])

            }

        }


    }
    let result = `The duplicate is: ${array.join(", ")}`
    return result

}
arr = [0, 1, 2, 2, 1, 0, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
console.log(duplicate(arr))

function is_array(x) {
    return x.constructor === Array
}

function flattenArrayOne(arr) {
    let array = []
    for (let i = 0; i < arr.length; i++) {
        if (is_array(arr[i]) == false) {
            array.push(arr[i])
        } else {
            for (let j = 0; j < arr[i].length; j++) {
                array.push(arr[i][j])
            }
        }
    }
    
    return array
}

console.log(JSON.stringify(flattenArrayOne([1, [2], [3, [[4]]], [5, 6]])))

function containArray(arr){
    for(let i = 0; i < arr.length; i++){
        if(is_array(arr[i])){
            return true
        }
    }
    return false
}

console.log(containArray([1,2,3,[4]]))

function flattenArray(arr) {
    let array = arr
    while(containArray(array)==true){
        array = flattenArrayOne(array)
    }

    return array

}
console.log(flattenArray([1, [2], [3, [[4]]], [5, 6]]))

function unionArrays(arr1, arr2) {
    // let result = arr1.slice()
    for (let i = 0; i < arr1.length; i++) {
        if (existItem(result, arr1[i]) == false) {
            result.push(arr1[i])
        }
    }

    for (let j = 0; j < arr2.length; j++) {

        if (existItem(result, arr2[j]) == false) {
            result.push(arr2[j])
        }
    }

    result.sort(function (a, b) { return a - b });

    return result
}

console.log(unionArrays([2, 4, 6, 7], [2, 5, 7]))

function differenceArrays(arr1,arr2){
    let array = []
    arr1 = flattenArray(arr1)
    arr2= flattenArray(arr2)
    
    
   for(let i = 0 ; i < arr1.length; i++){
        if(existItem(arr2, arr1[i]) === false){
            array.push(arr1[i])
        }
    }

    for(let j = 0; j < arr2.length; j++){
        if(existItem(arr1,arr2[j]) === false){
            array.push(arr2[j])
        }
    }
    return array
}

console.log(differenceArrays([1, 2, 3], [100, 10, 2, 1,])); 
console.log(differenceArrays([1, 2, 3, 4, 5], [1, [2], [3, [[4]]],[5,6]]));

function integer(arr){
    let array = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i]){
            array.push(arr[i])
        }
    }
    return array
}
console.log(integer([NaN, 0, 15, false, -22, '',[ ], "adfv", undefined, 47, null]))

