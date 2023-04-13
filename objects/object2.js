function add(x1, x2) {
    return x1 + x2
}
console.log(add(1, 2))

let myFunction = function (x1, x2) {
    return x1 + x2 + 5
}

let myFunction2 = (x1, x2) => {

    return x1 + x2 + 1
}

console.log(myFunction(1, 2))
console.log(myFunction2(1, 2))


const myFunction3 = myFunction;
console.log(myFunction3(1, 2))

function add_1_2(add) {
    console.log(add(5, 10))
}

add_1_2(myFunction2)

let o = {
    x: 1,
    y: 2,
    display: function () {
        console.log(this)
    },
    displaySum: function () {
        console.log(this.x + this.y)
    }
}

let x = 100

let o1 = {
    x: 10,
    y: 20,
    display: function () {
        console.log(this)
    },
    displaySum: function () {
        console.log(this.x + this.y)
    }
}

o.display()
o.x = 3
o.displaySum()
o1.displaySum()


let o2 = {
    name: "A",
    age: 20,
}


function displayObj(my_obj) {
    console.log(`${my_obj.name}: ${my_obj.age}`)
}


o2.displayObj = function () {
    console.log(`${this.name}: ${this.age}`)
}

displayObj(o2)
o2.displayObj()


let a = [1, 2, 3]

a.display = function () {
    console.log(this[2])
}

console.log(a)
a.display()

a.sum = function () {
    let sum = 0
    for (let i = 0; i < this.length; ++i) {
        sum += this[i]
    }

    return sum
}

console.log(a.sum())

a[2] = 20
console.log(a.sum())
// console.log(a)
// a.bubble_sort()
// console.log(a)


