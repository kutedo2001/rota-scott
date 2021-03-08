function mostrar() {
    document.getElementById("menuabierto").style.width = "300px";
    document.getElementById("menuabierto").style.marginRight = "500px";
    document.getElementById("abrirmenu").style.display = "none";
    document.getElementById("menucerrar").style.display = "inline";
}
function cerrar() {
    document.getElementById("menucerrar").style.width = "300px";
    document.getElementById("menucerrar").style.marginRight = "1000px";
    document.getElementById("abrirmenu").style.display = "inline";
    document.getElementById("cerrarmenu").style.display = "none";
}

