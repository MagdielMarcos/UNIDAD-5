document.getElementById("arrow").addEventListener("click", function() {
    window.location.href = "index.html";
});
 
// Recibo //

document.getElementById("agregarItem").addEventListener("click", function() {
    var nombre = prompt("Ingrese el nombre de la comida:");
    var precio = parseFloat(prompt("Ingrese el precio de la comida:"));
    
    if (nombre && precio) {
        agregarItem(nombre, precio);
        calcularTotal();
    }
});

function agregarItem(nombre, precio) {
    var itemDiv = document.createElement("div");
    itemDiv.classList.add("item");

    var nombreSpan = document.createElement("span");
    nombreSpan.classList.add("nombre");
    nombreSpan.textContent = nombre;
    itemDiv.appendChild(nombreSpan);

    var precioSpan = document.createElement("span");
    precioSpan.textContent = "$" + precio.toFixed(2);
    itemDiv.appendChild(precioSpan);

    var eliminarBtn = document.createElement("button");
    eliminarBtn.textContent = "Eliminar";
    eliminarBtn.addEventListener("click", function() {
        itemDiv.parentNode.removeChild(itemDiv);
        calcularTotal();
    });
    itemDiv.appendChild(eliminarBtn);

    document.getElementById("items").appendChild(itemDiv);
}

function calcularTotal() {
    var total = 0;
    var items = document.querySelectorAll(".item span:nth-child(3)");

    items.forEach(function(item) {
        total += parseFloat(item.textContent.slice(1)); // Elimina el signo $ y convierte a float
    });

    document.getElementById("totalAmount").textContent = total.toFixed(2);
}
