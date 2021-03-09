function abrir() {
    document.getElementById("textomenu").style.width = "300px";
    document.getElementById("textomenu").style.marginRight = "500px";
    document.getElementById("abrirmenu").style.display = "none";
    document.getElementById("cerrarmenu").style.display = "inline";
}

function cerrar() {
    document.getElementById("cerrarmenu").style.width = "300px";
    document.getElementById("menucerrar").style.marginRight = "1000000px";
    document.getElementById("abrirmenu").style.display = "inline";
    document.getElementById("cerrarmenu").style.display = "none";
}

