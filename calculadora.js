//////////////////////// CALCULADORA ////////////////////////


// Funciones

function menuCalculadora() {
    // Menú que verá el usuario cada vez que se ejecute el programa
    let menu = '\n*****     Menu Calculadora     *****\n1. Sumar\n2. Restar\n3. Multiplicar\n4. Dividir\n5. Salir';
    return console.log(menu);
}



function opcionMenu() {
    // Función que captura la operación que desea realizar el usuario.
    let opcion = prompt('Ingrese la operación que desee realizar: ');
    // Comprobar que la opción no esté vacia, y que es un número entre 1 y 5 
    if ((opcion !== '' && !isNaN(opcion) && opcion <= 5 && opcion >= 1)) {
        return Number(opcion);
    } else {
        alert('Opción no válida, por favor, inténtelo nuevamente.');
        // Recursividad en caso de que el usuario no ingrese una opción válida
        return opcionMenu();
    }
}

function ingresarNumeros() {
    // Función que solicitara al usuario los números para operar
    let a = prompt('Ingrese el primer numero: ');
    let b = prompt('Ingrese el segundo numero: ');
    // Comprobar que los campos no estén vacíos y que ambos sean números
    if ((a !== '' & !isNaN(a)) && (b !== '' & !isNaN(b))) {
        return [Number(a), Number(b)];
    } else {
        alert('Los valores ingresados deben ser números, por favor, inténtelo nuevamente');
        // Recursividad en caso de que el usuario no haya ingresado valores correctos
        return ingresarNumeros();
    }
}


function sumar(a,b) {
    // Función que imprime en pantalla la suma de dos números ingresados por el usuario
    return console.log(`\nEl resultado de ${a}+${b} es: ${a + b}\n`);
}

function restar(a,b) {
    // Función que imprime en pantalla la resta de dos números ingresados por el usuario
    return console.log(`\nEl resultado de ${a}-${b} es: ${a - b}\n`);
}

function multiplicar(a,b) {
    // Función que imprime en pantalla la multiplicación entre dos números ingresados por el usuario
    return console.log(`\nEl resultado de ${a}*${b} es: ${a * b}\n`)
}

function dividir(a,b) {
    // Función que imprime en pantalla la división entre dos números ingresados por el usuario
    // Comprobar que el denominador es distinto de 0 para poder efectuar la operación
    if (b != 0) {
        return console.log(`\nEl resultado de ${a}/${b} es: ${a / b}\n`);
    } else {
        alert('El denomiandor no puede ser 0, por favor, inténtelo nuevamente');
        // Recursividad en caso de que el demonimador ingresado haya sido 0, se solicitan ambos números nuevamente
        let [num1, num2] = ingresarNumeros();
        dividir(num1, num2);
    }
}

// Programa

while (true) {

    menuCalculadora();
    let ejecutar = opcionMenu()
    // El programa se dejará de ejecutar si el usuario ingresa la opción 5 correspondiente a "Salir"
    if (ejecutar === 5) {
        console.log('\nHa salido de la calculadora.\n');
        break;
    }
    // Switch case para cada opción del menú de la calculadora
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