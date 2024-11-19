window.document.addEventListener("change", (ev) => {
    let seleccion = document.getElementById("nombre");
    let paisOrigen = seleccion.options[seleccion.selectedIndex].value;
    document.getElementById(
        "autorForm").setAttribute(
            "action", "/autor/" + "autores_por_pais/"+
            paisOrigen);
    document.getElementById("autorForm").submit();
});