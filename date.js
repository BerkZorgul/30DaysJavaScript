const date = new Date()

let year = date.getFullYear(),
month = date.getMonth(),
day = date.getDate()
hours = date.getHours(),
minute = date.getMinutes(),
seconds = date.getSeconds(),
dayNumber = date.getDay()

let months = [
"Ocak",
"Şubat",
"Mart",
"Nisan",
"Mayıs",
"Haziran",
"Temmuz",
"Ağutos",
"Eylül",
"Ekim",
"Kasım",
"Aralık"
]

let days = [
"Pazar",
"Pazartesi",
"Salı",
"Çarşamba",
"Perşembe",
"Cuma",
"Cumartesi",

]

let humanReadableDate = `${day}, ${months[month]}, ${year}, ${days[dayNumber]}, ${hours}:${minute}:${seconds}`

console.log(humanReadableDate)