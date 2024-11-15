window.document.addEventListener("change", (ev) => {
    let seleccion = document.getElementById("clientes");
    let idClientes = seleccion.options[seleccion.selectedIndex].value;
    document.getElementById(
        "clientesForm").setAttribute(
            "action", "/clientes/" +
            idClientes +
        "/");
    document.getElementById("clientesForm").submit();
});