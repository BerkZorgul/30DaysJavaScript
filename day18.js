const test = callback => {
    setTimeout(() => {
        callback('hata oluştu!', [])
    }, 2000)
}

const callback = (err,data) => {
    if(err) {
        console.log('hata', err)
    } else {
        console.log('data', data)
    }
}

//test(callback)

/*
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('işlem başarılı')
    }, 1500)
    //resolve('işlem başarılı')
    //reject('işlem başarısız')
}
)

promise.then((data) => {
    console.log(data)
}).catch(err => {
    console.warn(err)
})
*/

const API_URL = 'https://jsonplaceholder.typicode.com/posts'

async function getPosts() {
    try{
        const response = await fetch(API_URL)
        const data = await response.json()
        console.log(data)
    } catch(err) {
        console.log(err)
    }
}

getPosts( )


/*
fetch(API_URL)
    .then(res => res.json())
    .then(data => console.log(data))
*/