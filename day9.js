const fonksiyon = number => number ** 2

function cube (cb, number) {
    return cb(number) * number
}

// console.log( cube(fonksiyon, 3) )

const a = s1 => {
    const b = s2 => {
        const c = s3 => {
            return s1+s2+s3
        }
        return c
    }
    return b
}

//console.log (a(5)(10)(20))
const numbers = [1,3,5,7,9]
/*
console.log(numbers.find(number => number > 3))
console.log( numbers.reduce((oldValue, currentValue) => {
    return oldValue + currentValue
    }, 0))
*/
//let total = 0
//let calculate = (number, index) => total += (number+index)
//numbers.forEach(calculate)
//console.log(total)

let users = [
    {
        id: 1,
        name: 'Berk',
        age: 14,
        gender: 1

    },
    {
        id: 2,
        name: 'Ahmet',
        age: 19,
        gender: 1
    },
    {
        id: 3,
        name: 'Mahmut',
        age: 23,
        gender: 1
    },
    {
        id: 4,
        name: 'Zerafet',
        age: 25,
        gender: 1
    }

]

 users.sort((a,b) => a.id - b.id)
 //console.log(users)


const currentUser = users.find(user => user.id == 3)
//console.log(currentUser)

console.log(users.every(user => user.gender == 1))

users = users.map(user => {
    if ( user.id == 2 ){
        user.name = 'Hakan'
    }
    return user
})

const women = users.filter(user=> user.gender == 2 )
const men = users.filter(user=> user.gender == 1 )

console.log(men)


const numbers2 = numbers.map(number => number * 2)
console.log(numbers2)

function sayHello(){
    console.log('hello!')
}

const interval = setInterval(sayHello, 1000)
//clearTimeout
//clearInterval

const timeout = setTimeout(() => {
    clearInterval(interval)
    console.log('interval iptal edildi!')
}, 5000)

setTimeout(()=> {
    clearTimeout(timeout)
    console.log('timeout işlemi iptal edildi!, interval devam edecek. ')
}, 3000)

const names = ['Berk', 'Ahmet', 'Zülal','Mahmut']
const numaralar = [3,6,2,10,1,9,20]
names.sort((a,b) => a.localeCompare(b))
//numaralar.sort((a, b) => a-b)
console.log(names)