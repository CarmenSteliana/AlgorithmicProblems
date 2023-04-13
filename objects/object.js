function get_properties(o) {

    let array = []
    for (let k in student1) {
        array.push(k)
    }
    return array
}
let student1 = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
};
console.log(get_properties(student1))

function display_properties(o) {

    for (let k in student2) {
        console.log(k)
    }

}

let student2 = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
};
display_properties(student2)


function delete_property(o) {
    console.log(student3)
    delete student3.rollno
    console.log(student3)
}
let student3 = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
};

delete_property(student3)


function get_length(o) {
    let keys = Object.keys(o);
    return keys.length

}
let student4 = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
};

console.log(get_length(student4))

//let array = library[0]
//console.log(Object.values(array))

// function get_values(o){
//     let array = []
//     for(let i = 0; i < o.length; i++){
//         array.push(Object.values(o[i]))
//     }
//     return array
// }

// function get_ReadingStatus(o){
//     let array = get_values(o);

//     for(let i = 0; i < array.length; i++){
//         if(array[i][2] === true){
//             console.log(`I read the book "${array[i][1]}" written by ${array[i][0]}`)
//         }else{
//             console.log(`I still hasn't finished reading the book "${array[i][1]}" written by ${array[i][0]}`)
//         }
//     }
// }


function get_ReadingStatus(o) {
    for (let i = 0; i < o.length; i++) {
        if (o[i] === null) {
            console.log("The object is missing")
        } else if (
            "readingStatus" in library[i] &&
            "author" in library[i] &&
            "title" in library[i]
        ) {
            if (o[i].readingStatus === true) {
                console.log(`You read the book "${o[i].title}" written by ${o[i].author}`)
            } else {
                console.log(`You still haven't finished reading the book "${o[i].title}" written by ${o[i].author}`)
            }
        } else {
            console.log(`Properties are missing`)
        }


    }
}
let library = [
    {
        title: 'The Road Ahead',
        author: 'Bill Gates',
        readingStatus: false,
    },
    {
        author: 'Steve\'s Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    },
    {
        author: 'Suzanne Collins',
        title: 'Mockingjay: The Final Book of The Hunger Games',
        readingStatus: false
    },
    {
        readingStatus: true
    },
    null
];

get_ReadingStatus(library)

console.log("readingStatus" in library[3])

function get_volumeCylinder(obj) {
    let r = obj.radius;
    let h = obj.heigth;
    let volume = Math.PI * Math.pow(r, 2) * h;

    return volume.toFixed(4)
}

let cylinder2 = {
    radius: 3.5,
    heigth: 10.2
}

console.log(get_volumeCylinder(cylinder2))

// function bublle_sort(array) {
//     for (let i = 0; i < array.length; i++) {
//         for (let j = i + 1; j <= array.length; j++) {
//             if (array[j] < array[i]) {
//                 let aux = array[i];
//                 array[i] = array[j];
//                 array[j] = aux;
//             }

//         }
//     }
//     return array
// }
// console.log(bublle_sort([6, 4, 0, 3, -2, 1]))

let a = [6, 4, 0, 3, -2, 1]

a.bubble_sort = function () {
    for (let i = 0; i < this.length; i++) {
        for (let j = i + 1; j < this.length; j++) {
            if (this[j] < this[i]) {
                let aux = this[i];
                this[i] = this[j];
                this[j] = aux;
            }

        }
    }

    return this
}

console.log(a.bubble_sort())


// function subset_ofString(str){
//     let array = []
//     for(let i = 1; i <= str.length; i++){
//         for(let j = 0; j <= str.length - i; j++){
//             let result = str.substr(j,i);
//             array.push(result)
//         }
//     }
//     return array
// }
// console.log(subset_ofString("asdsc"))

let message = "dog"

String.prototype.subset_ofString = function () {
    let array = []
    for (let i = 1; i <= this.length; i++) {
        for (let j = 0; j <= this.length - i; j++) {
            let result = this.substring(j, j + i);
            array.push(result)
        }
    }
    return array
}

console.log(message.subset_ofString())

// function perimeter_circle(r) {
//     return 2 * Math.PI * r
// }

// function area_circle(r) {
//     return Math.PI * Math.pow(r, 2)
// }

let circle = {
    radius: 5,
    perimeter_circle: function () {
        return 2 * Math.PI * this.radius
    },
    area_circle: function () {
        return Math.PI * Math.pow(this.radius, 2)
    },

}
console.log(circle.perimeter_circle())
circle.radius = 2;
console.log(circle.perimeter_circle())
console.log(circle.area_circle())

var library2 = [
    {
        title: 'The Road Ahead',
        author: 'Bill Gates',
        libraryID: 1254
    },
    {
        title: 'Walter Isaacson',
        author: 'Steve Jobs',
        libraryID: 4264
    },
    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        libraryID: 3245
    }];

// library2.sort_by('title')
// library2.sort_by('author')
//console.log(library2)

library2.sort_by = function (field) {
    for (let i = 0; i < this.length; i++) {
        for (let j = i + 1; j < this.length; j++) {
            if (this[j][field] < this[i][field]) {
                let aux = this[i];
                this[i] = this[j];
                aux = this[j];
            }
        }
    }
    return this
}
console.log(library2.sort_by('author'))

// console.log(Object.getOwnPropertyNames(library2))
// console.log(Object.getOwnPropertyDescriptors(library2))

function get_keys(obj) {
    let result = Object.keys(obj)
    return result

}
let person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
};
console.log(get_keys(person))


function get_values(obj) {
    let keys = get_keys(obj)
    let array = [];
    for (let i = 0; i < keys.length; i++) {
        array.push(obj[keys[i]])
    }
    return array
}
let person2 = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
};
console.log(get_values(person2))

function get_properties(obj) {
    let result = [];
    for (let k in obj) {
        result.push([k, obj[k]])
    }

    return result

}
let person3 = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
};
console.log(get_properties(person3))


function get_reverseProperties(obj) {
    let result = {}
    let keys = get_keys(obj);
    for (let k in obj) {
        result[obj[k]] = k
    }
    return result
}
let person4 = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
};
console.log(get_reverseProperties(person4))

function check_property(obj, p) {
    if (p === undefined || p === null) {
        console.error("Please input a property")
        return false
    }


    for (let k in obj) {
        if (p === k) {
            return true
        }
    }
    return false
}
let person5 = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
};
console.log(check_property(person5, " last name "))
console.log(check_property(person5))
console.log(check_property(person5, "firstName"))

window.addEventListener("DOMContentLoaded", function() {
   
    console.log(person5 instanceof HTMLElement)
    console.log(document.getElementById("a") instanceof HTMLElement)


    console.log((person5))
    console.log((document.getElementById("a")))
}, false);