// ***** DÍA 1 *****

// Variables

let numeroUn = 1;

let stringUn = '1';

let numeroTreinta = 30;

let stringTreinta = '30';

let numeroDiez = 10;

let stringDiez = '10';

// Ejercicios - Comparaciones

if (numeroUn == stringUn) {
    console.log("Las variables numeroUn y stringUn tienen el mismo valor, pero son de tipos diferentes");
} else {
    console.log("Las variables numeroUn y stringUn no tienen el mismo valor");
}

if (numeroTreinta === stringTreinta) {
    console.log("Las variables numeroTreinta y stringTreinta tienen el mismo valor y son del mismo tipo");
} else {
    console.log("Las variables numeroTreinta y stringTreinta no tienen el mismo valor o no son del mismo tipo");
}

if (numeroDiez == stringDiez) {
    console.log("Las variables numeroDiez y stringDiez tienen el mismo valor, pero son de tipos diferentes");
} else {   
    console.log("Las variables numeroDiez y stringDiez no tienen el mismo valor");
}


// ***** DÍA 2 *****

// Variables - Interacción con el usuario:

let nombre = prompt("¿Cuál es tu nombre?");
let edad = prompt("¿Cuántos años tienes?");
let lenguajeProgramacion = prompt('¿Qué lenguaje de programación estás estudiando?');

alert(`Hola ${nombre}, tienes ${edad} años y ya estás aprendiendo ${lenguajeProgramacion}!`);

let respuesta = prompt(`¿Te gusta estudiar ${lenguajeProgramacion}? Responde con el número 1 para SÍ o 2 para NO:`);

if (respuesta == '' | isNaN(respuesta)) {
    alert('Por favor, ingresa una respuesta valida');
    let respuesta = prompt(`¿Te gusta estudiar ${lenguajeProgramacion}? Responde con el número 1 para SÍ o 2 para NO:`);
} else if (respuesta == 1) {
    alert('¡Muy bien! Sigue estudiando y tendrás mucho éxito.');
} else if (respuesta == 2) {
    alert('Oh, que pena... ¿Ya intentaste aprender otros lenguajes?');
    let preguntaLenguaje = prompt('Responde con 1 para SÍ o 2 para NO:');
    if (preguntaLenguaje == '' | isNaN(preguntaLenguaje)) {
        alert('Por favor, ingresa una respuesta válida');
        let preguntaLenguaje = prompt('Responde con 1 para SÍ o 2 para NO:');
    } else if (preguntaLenguaje == 1) {
        let nuevoLenguaje = prompt('¿Que otro lenguaje has aprendido?: ');
        let lenguajeProgramacion = nuevoLenguaje;
        alert(`¡Estupendo! Si te gusta más ${lenguajeProgramacion}, sigue estudiando y tendrás mucho éxito. 
            Pero recuerda, puede resultar útil conocer más de un lenguaje de programación aunque te especialices en alguno en particular.`);
    } else if (preguntaLenguaje == 2) {
        alert('¡No te preocupes! Siempre puedes intentar aprender otro lenguaje de programación.');
    } else {
        alert('Por favor, ingresa una respuesta válida');
    }
} else {
    alert('Por favor, ingresa una respuesta válida');
}


// ***** DÍA 3 *****

while (true) {
    var usuario = prompt('¡Hola!, antes de comenzar me gustaría que me digas tu nombre: ').trim();
    while (true) {
        var caminoProgramacion = prompt('¿Qué camino de programación te gustaría seguir? Responde con el número 1 para Front-end o 2 para Back-end: ').trim();
        if (caminoProgramacion > 2 || caminoProgramacion < 1 || isNaN(caminoProgramacion)) {
            alert('Por favor, ingrese una respuesta válida');
        } else if (caminoProgramacion == 1) {
            caminoProgramacion = 'Front-End';
            alert ('¡Excelente elección! El Front-end es una parte muy importante de la programación.');
            var frameFrontEnd = prompt('¿Que framework de Front-End te gustaría aprender? Responde 1 para React o 2 para Vue: ').trim();
            if (frameFrontEnd > 2 || frameFrontEnd < 1 || isNaN(frameFrontEnd)) {
                alert('Por favor, ingrese una respuesta válida');
            } else if (frameFrontEnd == 1) {
                frameFrontEnd = 'React';
                alert(`¡Muy bien! "${frameFrontEnd}" es altamente eficiente y flexible gracias a su virtual DOM y su enfoque basado en componentes reutilizables.`);
                break;
                
            } else if (frameFrontEnd == 2) {
                frameFrontEnd = 'Vue';
                alert(`¡Muy bien! "${frameFrontEnd}" es fácil de aprender y tiene una sintaxis clara, lo que permite un desarrollo rápido y una integración sencilla en proyectos existentes.`);	
                break;
                
            } else {
                alert('Por favor, ingrese una respuesta válida');
            }
        } else if (caminoProgramacion == 2) {
            caminoProgramacion = 'Back-End';
            alert ('¡Excelente elección! El Back-end es una parte muy importante de la programación.');
            var frameBackEnd = prompt('¿Que framework de Back-End te gustaría aprender? Responde 1 para C# o 2 para Java: ').trim();
            if (frameBackEnd > 2 || frameBackEnd < 1 || isNaN(frameBackEnd)) {
                alert('Por favor, ingrese una respuesta válida');
            } else if (frameBackEnd == 1) {
                frameBackEnd = 'C#';
                alert(`¡Muy bien! "${frameBackEnd}" ofrece un alto rendimiento y una integración perfecta con el ecosistema de Microsoft, ideal para desarrollo web, de escritorio y videojuegos.`);
                break;
                
            } else if (frameBackEnd == 2) {
                frameBackEnd = 'Java';
                alert(`¡Muy bien! "${frameBackEnd}" es multiplataforma, robusto y altamente escalable, lo que lo convierte en una opción confiable para aplicaciones empresariales y backend.`);
                break;
                
            } else {
                alert('Por favor, ingrese una respuesta válida');
            }
        } else {
            alert('Por favor, ingrese una respuesta válida');
        }
    }
    while (true) {
        var nextCaminoProgramacion = prompt(`Ahora dime, ¿te gustaría especializarte en ${caminoProgramacion} o prefieres convertirte en Desarrollador Full-Stack? Responde 1 para ${caminoProgramacion} o 2 para Full-Stack: `).trim();
        if (nextCaminoProgramacion > 2 || nextCaminoProgramacion < 1 || isNaN(nextCaminoProgramacion)) {
            alert('Por favor, ingrese una respuesta válida');
        } else if (nextCaminoProgramacion == 1) {
            nextCaminoProgramacion = caminoProgramacion;
            alert(`¡Excelente!, especializarte en un area particular te permitirá profundizar tus conocimientos y habilidades en ${nextCaminoProgramacion}.`);
            break;
        } else if (nextCaminoProgramacion == 2) {
            nextCaminoProgramacion = 'Desarrollador Full-Stack';
            alert(`¡Excelente!, ser un ${nextCaminoProgramacion} te permitirá tener un conocimiento más amplio y versátil en programación.`);
            break;
        } else {
            alert('Por favor, ingrese una respuesta válida');
        }
    }

    var tecnologias = [];
    if (caminoProgramacion == 'Front-End') {
        tecnologias.push(frameFrontEnd)
    } else {
        tecnologias.push(frameBackEnd)
    }
    
    while (true) {
        let opcion = prompt('¿Hay alguna otra tecnología que te gustaría aprender? Responde "OK" para continuar o "NO" para finalizar: ').toUpperCase().trim();
        if (opcion == 'OK') {
            let nuevaTecnologia = prompt('¿Qué tecnología te gustaría aprender?').trim();
            tecnologias.push(nuevaTecnologia);
        } else if (opcion == 'NO') {
            break;
        } else {
            alert('Por favor, ingrese una respuesta válida');
        }
    }

    alert(`¡Excelente ${usuario}!, has elegido el camino de ${caminoProgramacion}, particularmente en ${caminoProgramacion == 'Front-End' ? frameFrontEnd : frameBackEnd}.
        El siguiente paso será ${nextCaminoProgramacion == caminoProgramacion ? `especializarte ${nextCaminoProgramacion}` : `convertirte en ${nextCaminoProgramacion}`},
        y te gustaría aprender las siguientes tecnologías: ${tecnologias.join(', ')}.
        ¡Te deseamos la mejor de las suertes en este emocionante camino!`);
    break;
}

// ***** DÍA 4 *****


let numeroSecreto = Math.ceil(Math.random() * 10);
console.log(numeroSecreto);

let intento = 0;

while (intento < 3) {

    let numeroUsuario = prompt('Ingrese un numero del 1 al 10: ').trim()
    if (isNaN(numeroUsuario) || numeroUsuario < 1 || numeroUsuario > 10) {
        alert('Por favor, ingrese un número valido');
    } else if (numeroUsuario == numeroSecreto) {
        alert('¡Excelente!, adivinaste el número secreto.');
        break;
    } else {
        alert(`¡Ups!, no has acertado, intentalo nuevamente. Te quedan: ${2-intento} ${intento == 1 ? 'intento' : 'intentos'}.`)
        intento++;
    }
}

if (intento == 3) {
    alert(`El juego ha terminado, el numero secreto era: ${numeroSecreto}`)
}
