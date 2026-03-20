document.addEventListener("DOMContentLoaded", function() {
    const imagenes = document.querySelectorAll(".slider img");
    let indiceActual = 0;

    function cambiarImagen() {
        imagenes.forEach(img => img.classList.remove("active"));
        
        indiceActual = (indiceActual + 1) % imagenes.length;
        
        imagenes[indiceActual].classList.add("active");
    }

    if (imagenes.length > 0) {
        imagenes[0].classList.add("active");
        setInterval(cambiarImagen, 4000);
    }
});