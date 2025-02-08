// ***** DÍA 1 *****

// Variables

let numeroUn = 1

let stringUn = '1'

let numeroTreinta = 30

let stringTreinta = '30'

let numeroDiez = 10

let stringDiez = '10'

// Ejercicios - Comparaciones

if (numeroUn == stringUn) {
    console.log("Las variables numeroUn y stringUn tienen el mismo valor, pero son de tipos diferentes")
} else {
    console.log("Las variables numeroUn y stringUn no tienen el mismo valor")
}

if (numeroTreinta === stringTreinta) {
    console.log("Las variables numeroTreinta y stringTreinta tienen el mismo valor y son del mismo tipo")
} else {
    console.log("Las variables numeroTreinta y stringTreinta no tienen el mismo valor o no son del mismo tipo")
}

if (numeroDiez == stringDiez) {
    console.log("Las variables numeroDiez y stringDiez tienen el mismo valor, pero son de tipos diferentes")
} else {   
    console.log("Las variables numeroDiez y stringDiez no tienen el mismo valor")
}


// ***** DÍA 2 *****

// Variables - Interacción con el usuario:

let nombre = prompt("¿Cuál es tu nombre?")
let edad = prompt("¿Cuántos años tienes?")
let lenguajeProgramacion = prompt('¿Qué lenguaje de programación estás estudiando?')

console.log(`Hola ${nombre}, tienes ${edad} años y ya estás aprendiendo ${lenguajeProgramacion}!`)

let respuesta = prompt(`¿Te gusta estudiar ${lenguajeProgramacion}? Responde con el número 1 para SÍ o 2 para NO:`)

if (respuesta == '' | isNaN(respuesta)) {
    console.log('Por favor, ingresa una respuesta valida')
    let respuesta = prompt(`¿Te gusta estudiar ${lenguajeProgramacion}? Responde con el número 1 para SÍ o 2 para NO:`)
} else if (respuesta == 1) {
    console.log('¡Muy bien! Sigue estudiando y tendrás mucho éxito.')
} else if (respuesta == 2) {
    console.log('Oh, que pena... ¿Ya intentaste aprender otros lenguajes?')
    let preguntaLenguaje = prompt('Responde con 1 para SÍ o 2 para NO:')
    if (preguntaLenguaje == '' | isNaN(preguntaLenguaje)) {
        console.log('Por favor, ingresa una respuesta válida')
        let preguntaLenguaje = prompt('Responde con 1 para SÍ o 2 para NO:')
    } else if (preguntaLenguaje == 1) {
        let nuevoLenguaje = prompt('¿Que otro lenguaje has aprendido?: ')
        let lenguajeProgramacion = nuevoLenguaje
        console.log(`¡Estupendo! Si te gusta más ${lenguajeProgramacion}, sigue estudiando y tendrás mucho éxito. 
            Pero recuerda, a veces es útil conocer más de un lenguaje de programación aunque te especialices en alguno en particular.`)
    } else if (preguntaLenguaje == 2) {
        console.log('¡No te preocupes! Siempre puedes intentar aprender otro lenguaje de programación.')
    } else {
        console.log('Por favor, ingresa una respuesta válida')
    }
} else {
    console.log('Por favor, ingresa una respuesta válida')
}