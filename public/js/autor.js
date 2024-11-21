window.document.addEventListener("change", (ev) => {
    let seleccion = document.getElementById("paisOrigen");
    let paisOrigen = seleccion.options[seleccion.selectedIndex].value;
    document.getElementById(
        "autorForm").setAttribute(
            "action", "/autor/autoresPorPais/"+ 
            paisOrigen);
    document.getElementById("autorForm").submit();
});