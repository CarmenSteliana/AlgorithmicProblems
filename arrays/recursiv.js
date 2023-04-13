function factorial(n) {
    if (n == 1) {
        return 1
    }
    console.log(n)
    return n * factorial(n - 1)

}

console.log(factorial(3))

// function range(x, y) {

//     if (x === y) {
//         return [x]
//     }

//     let result = range(x + 1, y - 1)
//     result.push(y)
//     return result
// }

// console.log(range(3, 6))

function range2(x, y) {
    if (y == x + 1) {
        return []
    }

    let result = range2(x + 1, y)
    result.unshift(x + 1)
    return result
}

console.log(range2(100, 200))

function sum(array) {
    if (array.length === 1) {
        return array[0]
    }

    return array[0] + sum(array.slice(1))
}

console.log(sum([1, 5, 7, 20]))

function exponent(x, y) {
    if (y == 0) {
        return 1
    }
    console.log(x, y - 1)
    return x * exponent(x, y - 1)
}

console.log(exponent(8, 5))

function even(n) {
    if (n === 0) {
        return true
    } if (n === 1) {
        return false
    } if (n < 0) {
        return even(-n)
    }
    console.log(n - 2)
    return even(n - 2)
}

console.log(even(-11))

function sort(arr) {
    if (arr.length == 0) {
        return []
    }

    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (min > arr[i]) {
            let aux = arr[i]
            arr[i] = min
            min = aux
        }

    }
    let result = [min];
    result = result.concat((sort(arr.slice(1))));
    return result

}

console.log(sort([20, 2, 15, 1, 67]))

function fibonacci(n) {
    if(n <= 1){
        return n
    }
    console.log(n)
    return fibonacci(n-1) + fibonacci(n-2)
}

console.log(fibonacci(10))

