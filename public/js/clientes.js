
window.document.addEventListener("change", (ev) => {
    let seleccion = document.getElementById("nombre");
    let nombreCliente = seleccion.options[seleccion.selectedIndex].value;
    document.getElementById(
        "clientesForm").setAttribute(
<<<<<<< HEAD
            "action", "/clientes/clientesNombre" +
             nombreCliente);
=======
            "action", "/clientes/" + "clientesNombre/"+
            nombreCliente);
>>>>>>> e4ca330f035fb790010bc336d4810f23e177e4e2
    document.getElementById("clientesForm").submit();
});
