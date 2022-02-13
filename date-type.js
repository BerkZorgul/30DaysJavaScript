let numOne = 3
let numTwo = 3

console.log(numOne == numTwo)

let js ="JavaScript"
let py = "Pyhton"

console.log(js == py)

let nums =[1, "berk", 3]

console.log(nums)

nums[0] ="2"

console.log(nums)

let nums1 = [1, 2, 3]
let nums2 = nums1

console.log(nums1 == nums2)

let user1 = {
    name: "Berk",
    surname: "Zorgül"
}

let user2 = {
    name: "Berk",
    surname: "Zorgül"
}

console.log(user1 == user2)

let name = "Berk"
let surname = "Zorgül"

let a = 5
let b = 4

//let fullname = name + " " + surname

//console.log(fullname)

let fullName = `${name}

test
deneme

${a} + ${b} = ${a + b}

${surname}`
console.log(fullName)