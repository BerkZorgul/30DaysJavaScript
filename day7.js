function multiply(num1, num2) {
    let total = num1 * num2
    return total
}

let sayHello2 = (function(name){
    console.log(`Hello ${name}`)
    
    })("Berk")

let num1 = 5,
    num2 = 2
 
let total = multiply(num1, num2)

function sumArrayValues(array){
    let total = 0
    for (let i = 0; i < array.length; i++) {
        total += array[i]
    }
    return array
}

let dizi = [2, 4, 6, 8, 10]

console.log(sumArrayValues(dizi))

function topla() {
    let total = 0
    for (let i = 0; i < arguments.length; i++){
        total += arguments[i]
    }
    return total
}

console.log(topla(2, 5, 7, 9, 10))

const sayHello = function(name){
    return `Hello ${name}`
}
console.log(sayHello("Berk"))

;(function () { 
    console.log("He Yo!")
})()

// normal fonksiyon
function hello(name){
    // arguments
    return `hello ${name}`
}

// arrow fonksiyon
const hello2 = name => `hello ${name}`

const toplama = (... numbers) => {
    console.log(numbers)
}
toplama(2,5,7,8,10)

console.log(hello2("Gökhan"))

function multiply(num1, num2 = 2){
    return num1 * num2
}

console.log(multiply(10))
console.log(multiply(15,5))