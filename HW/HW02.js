/* 1.1 Напишите программу по согласованию отпуска в зависимости от месяца. 
Если месяц “July” или “August”, то программа должна показать - ‘approved’, 
если другие месяцы, то - “denied”. */
console.log("=======Задача 1.1")

let nameMonth = 'August'

if(nameMonth == 'July' || nameMonth == 'August')
{
    console.log('Approved')
}
else{
    console.log('Denied')
}

/* 1.2 Напишите простенький калькулятор (*, /, +, -). Проверьте ваш код на охват исключений для арифметических операций.
У вас должны быть две переменные для исходных чисел и одна для оператора. 
В зависимости от оператора, должно происходить то или иное арифметическое 
действие и выводиться результат в консоль. */
console.log("=======Задача 1.2")

let a = 1
let b = 2
let operator = '*'

if (operator == '+')
{
    console.log(a + b)
}
else if (operator == '-'){
    console.log(a - b)
}
else if (operator == '*'){
    console.log(a * b)
}
else if (operator == '/' && b != 0){
    console.log(a / b)
}
else if (operator == '/'){
    console.log('It is impossible to divide by zero')
}

/* 1.3 Решите задачу с помощью пройденных тем:
«Улитка ползёт вверх по стене высотой 5 метров. 
Каждый день она проползает вверх на 3 метра, а каждую ночь съезжает вниз на 2 метра. 
За сколько дней она доползёт до вершины стены.» */
console.log("=======Задача 1.3")

// let h = 5
// let up = 3
// let down = 2
// let l = up - down
// let days = 0

// if (moning <= h) {
//     days = days + 1
//     console.log("Days = " + days)
//     console.log("Moning = " + (up - down))
// } else {
//     console.log("Days = " + days)
// }
//     console.log("Days = " + days)
//     console.log("Moning = " + (up - down))

// if (moning < h) {
//     days = days + 1
//     moning = 
//     console.log("Days = " + days)
//     console.log("Moning = " + moning)
// }

// console.log("Days = " + days)
// console.log("Moning = " + moning)

// if (moning < h) {
//     days = days + 1
//     console.log("Days = " + days)
//     console.log("Moning = " + moning)
// }
// console.log("Days = " + days)
// console.log("Moning = " + moning)


/* Д/З от Татьяны Волк
 Напишите программу для расчета стоимости билетов. 
 Для пассажиров старше 18 лет- полная цена, 
 для младенцев младше 2 лет - 10% стоимости, 
 для детей от 2-х до 18ти лет - 50 % стоимости, 
 для пенсионеров старше 65 лет - 60% стоимости
*/
console.log("=======Задача от Татьяны Волк")
let age = 18

if (age >= 18) {
    console.log("полная цена")
} else if (age < 2) {
    console.log("10% стоимости")
} else if (age > 2 && age < 18) {
    console.log("50 % стоимости")
} else if (age > 65) {
    console.log("60% стоимости")
}