// 1.1 Объявите две переменные: firstName и lastName.
let firstName
let lastName

//  1.2 Передайте значение “John”в переменную firstName и значение “Adams”  в переменную lastName.
firstName = 'John'
lastName = 'Adams'

//  1.3 Выведите на страницу значение firstName и lastName (должно показать John Adams).
console.log(firstName + ' ' + lastName +'<br>')

// 1.4 Используйте те же переменные (перезапишите) firstName и lastName для того, чтобы вывести новое значение (Anna Karenina).
// В итоге на экране должно быть две строки:
// John Adams
// Anna Karenina
firstName = 'Anna'
lastName = 'Karenina'
console.log(firstName + ' ' + lastName + '<br>')


// 2  Выведите в консоль тип данных следующих переменных:
let a
let c = 9
let str = "Hi 5!"
let b = true
let y = 9 + '1'
let x =  'a' / 6

console.log('<br>' + 'Type of a is ' + typeof a + '<br>')
console.log('Type of c is ' + typeof c + '<br>')
console.log('Type of str is ' + typeof str + '<br>')
console.log('Type of b is ' + typeof b + '<br>')
console.log('Type of y is ' + typeof y + '<br>')
console.log('Type of x is ' + typeof x + '<br>')

//3 Подумайте, какие переменные логично объявить через const. Придумайте 3 разных,  объявите их и  выведите на экран

const E = 2.7182818284 // Число Эйлера
const CONTINENT = "Eurasia"// Название континена
const DOMAIN ="google.com"// Домен

console.log('<br>' + E + '<br>')
console.log(CONTINENT + '<br>')
console.log(DOMAIN + '<br>')

// Креативное задание*:
//  1.5 Напишите пошаговый алгоритм приготовления кофе и выведите его на экран (страницу).
// Желательно пронумеровать шаги. Каждый шаг должен быть выведен с новой строки.

let kettle = 'kettle'
let cup = 'cup'
let coffee = 'coffee'
let teaspoon = 'teaspoon'
let sugar = 'sugar'

let step1 = `1. Take the ${kettle}`
let step2 = `2. Pour cold water into the ${kettle}`
let step3 = `3. Put the ${kettle} with water on the gas stove burner `
let step4 = `4. Turn on the gas stove burner`
let step5 = `5. Take an empty ${cup} and put it on the table`
let step6 = `6. Take a jar of ${coffee}, open a jar of ${coffee} and put it on the table`
let step7 = `7. Take a ${teaspoon}. Take ${coffee} with the ${teaspoon} from the tank from under ${coffee}`
let step8 = `8. Put the ${teaspoon} with ${coffee} in the ${cup} `
let step9 = `9. Remove the ${kettle} when the water in the ${kettle} boils.`
let step10 = `10. Pour hot water from the ${kettle} into the ${cup}.`
let step11 = `11. Stir water with ${coffee} with the ${teaspoon}.`
let step12 = `12. Take a carton of milk. Open it`
let step13 = `13. Pour milk into the ${cup}  with ${coffee}`
let step14 = `14. Take a sugar bowl. Open it`
let step15 = `15. Take ${sugar} with the ${teaspoon}. And add ${sugar} to the ${cup} `
let step16 = `16 Stir ${coffee} in the ${cup} with the ${teaspoon}.`
let step17 = `17. ${coffee} done!`

console.log('<br>' +  step1 + '<br>' + step2 + '<br>' + step3 + '<br>' + step4 + '<br>' + step5 + '<br>' + step6 + '<br>' + step7 + '<br>' + step8 + '<br>' + step9 + '<br>' + step10 + '<br>' + step11 + '<br>' + step12 + '<br>' + step13 + '<br>' + step14 + '<br>' + step15 + '<br>' + step16 + '<br>' + step17)