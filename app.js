
let listadoCategorias = []


function limpiarCajasProductos() {
    document.getElementById('prod_categoria').value = '';
    document.getElementById('prod_producto').value = '';
    document.getElementById('prod_cantidad').value = '';
    return;
}

function limpiarCajaCategoria() {
    document.getElementById('categoria').value = '';
    return;
}


function crearCategoria() {
    let categoriaInput = document.getElementById('categoria');
    let nombreCategoria = categoriaInput.value.trim().toUpperCase();

    if (listadoCategorias.includes(nombreCategoria)) {
        alert('La categoría ya existe.');
        limpiarCajaCategoria();
    }
     else if (nombreCategoria !== '' && isNaN(Number(nombreCategoria))) {
        
        let contenedorCategoria = document.createElement('div');
        contenedorCategoria.classList.add(`categoria__${nombreCategoria.toLowerCase()}`);

        let tituloCategoria = document.createElement('h3');
        tituloCategoria.classList.add('notepad__listado__titulo')
        tituloCategoria.textContent = nombreCategoria;

        let lista = document.createElement('ul');
        lista.classList.add(`categoria__${nombreCategoria}__lista`);

        contenedorCategoria.appendChild(tituloCategoria);
        contenedorCategoria.appendChild(lista);
        
        document.querySelector('.notepad__listado__listas').appendChild(contenedorCategoria);

        listadoCategorias.push(nombreCategoria);
        categoriaInput.value = ''

        } else {
            alert('Por favor, ingrese un nombre de categoría válido')
        }
}

function agregarProducto() {
    let categoriaProducto = document.getElementById('prod_categoria').value.trim().toUpperCase();
    let nombreProducto = document.getElementById('prod_producto').value.trim();
    let cantidadProducto = document.getElementById('prod_cantidad').value.trim();

    if (!listadoCategorias.includes(categoriaProducto)) {
        alert('La categoría ingresada no existe, debes crearla o asignar el producto a otra categoría.');
        limpiarCajasProductos();
        return;
    } else {

        let categoriaElemento = document.getElementsByClassName(`categoria__${categoriaProducto.toLowerCase()}`);
        let listaCategoria = categoriaElemento[0].querySelector('ul');
        let li = document.createElement('li');
        li.id = `${nombreProducto}`
        li.textContent = `${nombreProducto}: ${cantidadProducto}`;
        listaCategoria.appendChild(li);

        limpiarCajasProductos();      
    }
    return;
}


function tacharProducto() {
    let producto = document.getElementById('prod_producto').value.trim().toLowerCase();
    if (!producto) {
        alert('Debe ingresar un producto.');
        limpiarCajasProductos();
        return;
    }

    let lista = document.querySelectorAll('.notepad__listado__listas li');
    let encontrado = false;

    lista.forEach(item => {
        let textoItem = item.textContent.trim().toLowerCase();
        if (textoItem.includes(producto)) {  
            item.style.textDecoration = 'line-through';
            encontrado = true;
        }
    });

    if (!encontrado) {
        alert('El producto no pertenece a ninguna lista');
    }

    limpiarCajasProductos();
}