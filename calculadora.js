//////////////////////// CALCULADORA ////////////////////////


// Funciones

function menuCalculadora() {
    let menu = '\n*****     Menu Calculadora     *****\n1. Sumar\n2. Restar\n3. Multiplicar\n4. Dividir\n5. Salir';
    return console.log(menu);
}



function opcionMenu() {
    let opcion = prompt('Ingrese la operación que desee realizar: ');
    if ((opcion !== '' && !isNaN(opcion) && opcion <= 5 && opcion >= 1)) {
        return Number(opcion);
    } else {
        alert('Opción no válida, por favor, inténtelo nuevamente.');
        return opcionMenu();
    }
}

function ingresarNumeros() {
    let a = prompt('Ingrese el primer numero: ');
    let b = prompt('Ingrese el segundo numero: ');
    if ((a !== '' & !isNaN(a)) && (b !== '' & !isNaN(b))) {
        return [Number(a), Number(b)];
    } else {
        alert('Los valores ingresados deben ser numeros, por favor, inténtelo nuevamente');
        return ingresarNumeros();
    }
}


function sumar(a,b) {
    return console.log(`\nEl resultado de ${a}+${b} es: ${a + b}\n`);
}

function restar(a,b) {
    return console.log(`\nEl resultado de ${a}-${b} es: ${a - b}\n`);
}

function multiplicar(a,b) {
    return console.log(`\nEl resultado de ${a}*${b} es: ${a * b}\n`)
}

function dividir(a,b) {
    if (b != 0) {
        return console.log(`\nEl resultado de ${a}/${b} es: ${a / b}\n`);
    } else {
        alert('El denomiandor no puede ser 0, por favor, inténtelo nuevamente');
        let [num1, num2] = ingresarNumeros();
        dividir(num1, num2);
    }
}

// Programa

while (true) {

    menuCalculadora();
    let ejecutar = opcionMenu()
    if (ejecutar === 5) {
        console.log('\nHa salido de la calculadora.\n');
        break;
    }
    switch (ejecutar) {
        case 1: {
            let [a, b] = ingresarNumeros();
            sumar(a, b);
            break;
        }
        case 2: {
            let [a, b] = ingresarNumeros();
            restar(a, b);
            break;
        }
        case 3: {
            let [a, b] = ingresarNumeros();
            multiplicar(a, b);
            break;
        }
        case 4: {
            let [a, b] = ingresarNumeros();
            dividir(a, b);
            break;
        }
        default:
            console.log('\nOpción no válida.\n')
    }
    
}