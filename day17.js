//localStorage.setItem('name', 'berk')

//const names = ['berk', 'volkan', 'gokhan']
//const user = {
//    name: 'berk',
//    surname: 'zorgül'
//}

//localStorage.setItem('user', JSON.stringify(user, undefined, 4))

//localStorage.removeItem('names')

//console.log(
//    localStorage
//)

//console.log(
//  JSON.parse(localStorage.getItem('user'))
//)

let basket = JSON.parse(localStorage.getItem('basket')) || []
const products = [
    {
        id:1,
        title: 'Gamepower Jin 7.1 Headphone',
        price: 75
    },
    {
        id:2,
        title: 'Gamepower Ogre RGB Keyboard',
        price: 150
    },
    {
        id:3,
        title: 'NVDIA RTX 3080 Ti Gaming Display Card',
        price: 3900
    }
]

function saveToStorage() {
    localStorage.setItem('basket', JSON.stringify(basket))
}

function addBasket (productId) {
    const basketIndex = basket.findIndex(b => b.productId == productId)
    if (basketIndex > -1) {
        basket[basketIndex] = {
        ... basket[basketIndex],
        amount: basket[basketIndex].amount + 1
        }
    } else {
        basket.push({
            productId, 
            amount: 1
        })
    }
    saveToStorage()
}

function removeBasket(productId) {
    const item = basket.find(p => p.productId == productId)
    if (item) {
        if (item.amount == 1) {
            basket = basket.filter(p => p.productId != productId)
        } else {
            basket = basket.map ( i => {
                if (i.productId == productId) {
                    i.amount -= 1
                }
                return i 
            }
            )
        }
    }
    saveToStorage()
}

function totalPrice () {
    return  basket.reduce((prev, basket) => {
        const product = products.find(p => p.id == basket.productId)
        return prev += (product.price * basket.amount)
    },0 )
}

//removeBasket(2)

console.log(
    totalPrice()
)