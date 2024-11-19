window.document.addEventListener("change", (ev) => {
    let seleccion = document.getElementById("nombre");
    let nombreCliente = seleccion.options[seleccion.selectedIndex].value;
    document.getElementById(
        "clientesForm").setAttribute(
            "action", "/clientes/" + "clientes_nombre/"+
            nombreCliente);
    document.getElementById("clientesForm").submit();
});