function ocultarTodo(){
    document.getElementById("inicio").style.display="none";
    document.getElementById("login").style.display="none";
    document.getElementById("registro").style.display="none";
    document.getElementById("recuperar").style.display="none";
}

function mostrarLogin(){
    ocultarTodo();
    document.getElementById("login").style.display="block";
}

function mostrarRegistro(){
    ocultarTodo();
    document.getElementById("registro").style.display="block";
}

function mostrarRecuperar(){
    ocultarTodo();
    document.getElementById("recuperar").style.display="block";
}

function volverInicio(){
    ocultarTodo();
    document.getElementById("inicio").style.display="block";
}

function togglePassword(id, icon){
    const input = document.getElementById(id);

    if(input.type === "password"){
        input.type = "text";
        icon.textContent = "👁";
    } else {
        input.type = "password";
        icon.textContent = "🙈";
    }
}