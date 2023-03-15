let cup = 'cup'
let water = 'water'
let waterValume 
let milk = 'milk'
let milkValume 

let coffeeType = "withMilk" // black / withMilk
let cupSize = "L" // S / M / L
let price = 2

if (cupSize == 'S') {
    waterValume = "150 ml"
    milkValume = "20 ml"
} 
else if (cupSize == 'M') {
    waterValume = "250 ml"
    milkValume = "40 ml"
    price *= 1.5
} 
else if (cupSize == 'L') {
    waterValume ="400 ml"
    milkValume = "60 ml"
    price *= 3
} 

let order = `You choosed a ${cup} of ${coffeeType} coffe size ${cupSize}.` + '\n'
let step1 = `Take a ${cup} size ${cupSize}`
let step2 = `Put 1 spoon of coffee on it`
let step3 = `Pour ${waterValume} ${water} in a cup with coffee`
let step4 = `Pour ${milkValume} ${milk} in a cup of coffee`
let step5 = `Stir coffee in a cup with a spoon`
let step6 = '\n' + `The order price is - ${price} $`

let coffeeBlack = order + '\n' + '1.' + step1 + '\n' + '2.' +  step2 + '\n' + '3.' + step3 + '\n' + '4.' + step5 + '\n' + step6
let coffeeWithMilk = order + '\n' + '1.' + step1 + '\n' + '2.' +  step2 + '\n' + '3.' + step3 + '\n' + '4.' + step4 + '\n' + '5.' + step5 + '\n' + step6

if (coffeeType == 'black') {
    console.log(coffeeBlack)
}
else if (coffeeType == 'withMilk') {
    console.log( coffeeWithMilk)    
}