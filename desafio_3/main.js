let nombreProducto = "zapatillas";  
let precioUnitario = 5000;  
let cantidadDeseada;  


cantidadDeseada = prompt("¿Cuántas " + nombreProducto + " deseas comprar?");


cantidadDeseada = parseInt(cantidadDeseada);


let costoTotal = precioUnitario * cantidadDeseada;


if (cantidadDeseada >= 5) {
   
    costoTotal = costoTotal * 0.9;  
}


alert("El costo total de tu compra es: $" + costoTotal.toFixed(2));
