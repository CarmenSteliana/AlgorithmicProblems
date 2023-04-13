function largerNumber(x, y) {
    if (x >= y) {
        return x
    } else {
        return y
    }
}
console.log(largerNumber(2, 4))
console.log(largerNumber(-10, -20))
console.log(largerNumber(5, 1))
console.log(largerNumber(5, 5))

function productSign(x, y, z) {
    let result = x * y * z;
    if (result < 0) {
        return "The sign is - "
    } else {
        return "The sign is + "
    }
}
console.log(productSign(2, 3, -7))
console.log(productSign(2, 3, 4))

function sortNumbers(x, y, z) {
    let arr = [x, y, z];
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] > arr[i]) {
                aux = arr[i]
                arr[i] = arr[j]
                arr[j] = aux
            }
        }

    }
    return arr.join(", ")


}
console.log(sortNumbers(7, 10, 9))

function findLargestNumber(x, y, z, t, w) {
    let arr = [x, y, z, t, w];
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]
        }
    }

    return max
}
console.log(findLargestNumber(3, 10, 6, 10, 2))

function getOddEvenNumbers(n) {
    for (let i = 0; i <= n; i++) {
        if (i % 2 == 0) {
            console.log(`${i} is even`)
        } else if (i % 2 == 1) {
            console.log(`${i} is odd`)
        }
    }
}
getOddEvenNumbers(15)
function getGrade(mark) {
    // return A, B,C,D
}
function getGradeStudents(arr) {
    let sum = 0
    let average = 1;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i][1];
        if (arr[i][1] >= 0 && arr[i][1] < 60) {
            console.log(`The student ${arr[i][0]} has grade F`)
        } else if (arr[i][1] >= 60 && arr[i][1] < 70) {
            console.log(`The student ${arr[i][0]} has grade D`)
        } else if (arr[i][1] >= 70 && arr[i][1] < 80) {
            console.log(`The student ${arr[i][0]} has grade C`)
        } else if (arr[i][1] >= 80 && arr[i][1] < 90) {
            console.log(`The student ${arr[i][0]} has grade B`)
        } else if (arr[i][1] >= 90 && arr[i][1] < 100) {
            console.log(`The student ${arr[i][0]} has grade A`)
        }
    }
    average = sum / arr.length
    if (average >= 0 && average < 60) {
        console.log(`The average has grade F`)
    } else if (average >= 60 && average < 70) {
        console.log(`The average has grade D`)
    } else if (average >= 70 && average < 80) {
        console.log(`The average has grade C`)
    } else if (average >= 80 && average < 90) {
        console.log(`The average has grade B`)
    } else if (average >= 90 && average < 100) {
        console.log(`The average has grade A`)
    }


}
getGradeStudents([["David", 80], ["Vinoth", 77], ["Divya", 88], ["Ishitha", 95], ["Thomas", 68]])

function findMultiples(n) {
    for (let i = 1; i <= n; i++) {
        if (i % 3 == 0 && i % 5 != 0) {
            console.log(`${i} Fizz`)
        } else if (i % 3 != 0 && i % 5 == 0) {
            console.log(`${i} Buzz`)
        } else if (i % 3 == 0 && i % 5 == 0) {
            console.log(`${i} FizzBuzz`)
        }
    }
}
findMultiples(100)

function sumSquares(x) {
    let sum = 0;
    while (x > 0) {
        let lastDigit = x % 10;
        x = Math.floor(x / 10);
        sum = sum + Math.pow(lastDigit, 2)
    }
    return sum
}
console.log(sumSquares(64))

// function recursiveSumSquares(x) {
//     if (sumSquares(x) == 1) {
//         return true
//     } else if (sumSquares(x) was before) {
//         return false
//     }else {
//         return recursiveSumSquares(sumSquares(x))
//     }
// }
// console.log(recursiveSumSquares(13))

function containItem(arr, x) {
    for (let i = 0; i < arr.length; i++) {
        if (x === arr[i]) {
            return true
        }
    }

    return false

}
console.log(containItem([3, 4, 5], 3))

function getHappyNumber(x) {
    let array = []
    while (true) {
        if (x === 1) {
            return true
        } else if (containItem(array, x) == true) {
            return false
        } else {
            array.push(x)
            x = sumSquares(x)
        }
    }

}

console.log(getHappyNumber(13))
console.log(getHappyNumber(1))
console.log(getHappyNumber(64))
console.log(getHappyNumber(98))

function getFirstFiveHappyNr() {
    let counter = 0
    let array = []
    for (let i = 1; counter < 5; i++) {
        if (getHappyNumber(i) == true) {
            array.push(i)
            counter = counter + 1;
        }
    }
    return array
}
console.log(getFirstFiveHappyNr())

function sumCubes(x) {
    let sum = 0;
    while (x > 0) {
        let lastDigit = x % 10;
        x = Math.floor(x / 10);
        sum = sum + Math.pow(lastDigit, 3)
    }
    return sum
}
console.log(sumCubes(641))

function armstrongNumbers() {
    let array = []
    for (let i = 100; i <= 999; i++) {
        if (i === sumCubes(i)) {
            array.push(i)
        }
    }
    let result = array.join(", ")
    console.log(`The armstrong numbers are: ${result}`)
}
armstrongNumbers()

function greatestCommonDivisor(x, y) {
    let min;
    if (x < y) {
        min = x
    } else {
        min = y
    }
    for (let i = min; i > 1; i--) {
        if (x % i == 0 && y % i == 0) {
            return i
        }
    }
}
console.log(greatestCommonDivisor(8, 12))

function sumItemsArray(arr){
    let sum = 0;
    for(let i = 0 ; i < arr.length; i++){
        sum = sum + arr[i]
    }
    return sum
}
console.log(sumItemsArray([1,2,3]))

function sumMultiples(){
    let array = []
    for (let i = 1; i < 1000; i++){
        if(i % 3 == 0 && containItem(array, i) == false){
            array.push(i)
        }

        if( i % 5 == 0 && containItem(array, i) == false){
            array.push(i)
        }

    }

    console.log(array)
    return sumItemsArray(array)

}
console.log(sumMultiples())

// function getstars(x){
//     let star = "";
//     for(let i = 0 ; i < x ; i++){
//         star = star.concat("* ")
//         console.log(star)
//     }

// }
// getstars(5)

function getstars1(x){
    let counter = 0;
    while( counter <= x){
        let array = []
        for(let i = 1 ; i <= counter ; i++){
            if( counter % 2 == 0){
                array.push("+")
            } else  if (counter % 2 == 1){
                array.push("*")
            }
        }
        
        counter = counter + 1
        console.log(array.join(" "))
    
    }
    
}
getstars1(5)
