function buscarProducto() {
    let input = document.getElementById("buscar").value.toLowerCase();
    let productos = document.querySelectorAll(".producto");

    productos.forEach(function(producto) {
        let nombre = producto.querySelector("h3").textContent.toLowerCase();

        if (nombre.includes(input)) {
            producto.style.display = "block";
        } else {
            producto.style.display = "none";
        }
    });
}

function filtrar(categoria) {
    let productos = document.querySelectorAll(".producto");

    productos.forEach(function(producto) {

        let esCategoriaTodo = categoria === "todo";
        let perteneceACategoria = producto.classList.contains(categoria) || 
                                 producto.querySelector("h3").textContent.toLowerCase().includes(categoria);

        if (esCategoriaTodo || perteneceACategoria) {
            producto.style.display = "block";
        } else {
            producto.style.display = "none";
        }
    });
}




