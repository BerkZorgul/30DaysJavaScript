/*
function outerFunction() {
    let count = 0;
    function innerFunction() {
        count++
        return count
    }

    return innerFunction
}
const innerFunc = outerFunction()

console.log(innerFunc())
console.log(innerFunc())
console.log(innerFunc())
*/

function counter(){
    let count = 0;
    function up() {
        count++
        return count
    }
    function down() {
        count--
        return count
    }

    return {
        yukari: up,
        asagi: down
    }
}

let count = counter()

console.log(
    count.yukari()
)
console.log(
    count.yukari()
)
console.log(
    count.yukari()
)
console.log(
    count.asagi()
)