function bonjour (...params) {
    for (let param of params) {
        console.log("bonjour " + param)
    }
}

function calc (...numbers) {
    let result = 0;
    for (let number of numbers) {
        if (Number.isInteger(number))
        result += number
    }
    return result
}

bonjour("les gars", "les meufs")
bonjour("la street", "la classe", "les zoivs")

document.querySelector("#result1").innerHTML = calc(3, 2)
document.querySelector("#result2").innerHTML = calc(3, 2, 5, 5, 6)
document.querySelector("#result3").innerHTML = calc(3, 2, 5, 5, 6, 12, 34, 45)