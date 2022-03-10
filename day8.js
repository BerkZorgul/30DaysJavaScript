ad = `Berk`
{
//let deneme = "Test"
//console.log(deneme)

}
//let name = "Berk"
//let surname = "Zorgül"

// function letsLearnScope(){
//     console.log(name, surname)
//     if (true){
//         let name = "Gökhan"
//         let surname  = "Zorgül"
//         console.log(name, surname)
//     }
//     console.log(name, surname)
// }
//letsLearnScope()
//console.log(name, surname)

for (var i = 0; i <=5; i++){
    //console.log("i", i)
}
//console.log("i", i)

const user = {
    name: "Berk",
    surname: "Zorgül",
    age: 14,
    isMarried: false,
    test: {
        deneme: "Deneme Text"
    },
    skills: ["C#","Javascript","C++"],
    getFullName2: () => `${user.name} ${user.surname}`,
    getFullName: function(){
        return `${this.name} ${this.surname}`
    }

}
let keyName = `age`

user.name = `Gökhan`
user.title = `Developer`
user.country = `Turkey`
user.skills.push("React")
user.skills.push("Svelte")

user.getPersonInfo = function(){
    let skillsWithoutLastOne = this.skills.splice(0, this.skills.length -1).join(", ")
    let lastSkills = this.skills.at(-1)
    let skills = `${skillsWithoutLastOne} and ${lastSkills}`
    let fullName = this.getFullName()
    let statement = `${fullName} is a ${this.title}.\nHe lives in ${this.country}.\nHe teaches ${skills}.`
    return statement
}

console.log(user.getPersonInfo())