



function crearCategoria() {
    let categoriaInput = document.getElementById('categoria');
    let nombreCategoria = categoriaInput.value.trim();

    if (nombreCategoria !== '' && isNaN(Number(nombreCategoria))) {
        
        let contenedorCategoria = document.createElement('div');
        contenedorCategoria.classList.add(`categoria__${nombreCategoria}`);

        let tituloCategoria = document.createElement('h3');
        tituloCategoria.textContent = nombreCategoria;

        let lista = document.createElement('ul');
        lista.classList.add(`categoria__${nombreCategoria}__lista`);

        contenedorCategoria.appendChild(tituloCategoria);
        contenedorCategoria.appendChild(lista);
        
        document.querySelector('.notepad__listas').appendChild(contenedorCategoria);

        categoriaInput.value = ''
        } else {
            alert('Por favor, ingrese un nombre de categoría válido')
        }
}
