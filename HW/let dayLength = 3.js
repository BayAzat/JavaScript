let dayLength = 3
let nightLength = -2
let days = 0
let finLength = 0

// f = (dL - nL) * (d - 1) + 3


if ((finLength += dayLength) <= 5) {
    days ++
    console.log(`За ${days} улитка прошла ${finLength}`)
    finLength += nightLength
    console.log(`finLength = ${finLength}`)
}

if ((finLength += dayLength) <= 5) {
    days ++
    console.log(`За ${days} улитка прошла ${finLength}`)
    finLength += nightLength
    console.log(`finLength = ${finLength}`)
}
    
if ((finLength += dayLength) <= 5) {
    days ++
    console.log(`За ${days} улитка прошла ${finLength}`)
    finLength += nightLength
    console.log(`finLength = ${finLength}`)
}

if ((finLength += dayLength) > 5) {
    console.log('Finish!')
}
