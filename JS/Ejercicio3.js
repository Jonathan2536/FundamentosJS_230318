// Objetos

const bg = "linear-gradient(11deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 33%, rgba(0,212,255,1) 86%)";
const style_console = `background: ${bg}; color: white; border-radius: 6px; padding: 4px; font-size: 1.0rem; font-weight: bold`

console.warn("Practica 05: Repaso de Objetos en Java Script");
//VARIABLES INDEPENDIENTES
console.log("%c1.- Variables Independientes", style_console);
//Declaramos valores independientes relacionadas a un PRODUCTO
let Producto_Nombre = "Computadora Gammer Laptop 17\"";
let Producto_Marca= "ASUS"
let Producto_Modelo= "TUF 17"
let Producto_Precio= 15749.50;
let Producto_Disponibilidad= true;
let Producto_SKU= Symbol("TUF707VV-HX221W") 
let Producto_Stock = 15;
let Producto_Imagen= null;
let Producto_Barcode;
let Producto_Categorias= ["Electrónicos", "Computación", "Gamming", "Promociones Buen Fin", "Mejor Valorados"];


// Accedemos a los valores de las carácterísticas del producto de manera indepentiente
console.log(`Los datos del PRODUCTO son: \n
    Nombre: ${Producto_Nombre}, Tipo de Dato <${typeof(Producto_Nombre)}>
    Marca:  ${Producto_Marca}, Tipo de Dato <${typeof(Producto_Marca)}>
    Modelo: ${Producto_Modelo}, Tipo de Dato <${typeof(Producto_Modelo)}>
    Precio: ${Producto_Precio}, Tipo de Dato <${typeof(Producto_Precio)}>
    Disponibilidad: ${Producto_Disponibilidad}, Tipo de Dato <${typeof(Producto_Disponibilidad)}>   
    Stock: ${Producto_Stock}, Tipo de Dato <${typeof(Producto_Stock)}>
    Barcode: ${Producto_Barcode}, Tipo de Dato <${typeof(Producto_Barcode)}>
    Imagen: ${Producto_Imagen}, Tipo de Dato <${typeof(Producto_Imagen)}>
    Categorias: ${Producto_Categorias}, Tipo de Dato <${typeof(Producto_Categorias)}>`);

console.log("En el caso del SKU al ser un Symbol, no se puede concatenar a la cadena de impresión anterior");
console.log(Producto_SKU);
console.log(typeof(Producto_SKU));

// Ahora lo declaramos como un OBJETO
console.log("%c2.- Objeto", style_console);
let Producto = 
{
    Nombre : "VAPE", 
    Marca: "Instabar",
    Modelo: "20000", 
    Precio: 500,
    Disponibilidad: false,
    Stock: 0,
    SKU: "DZ5485-612",
    Imagen: "../assets/products/sneakers/JORDAN.png",
    Barcode:null,
    Categorias: ["Deportes", "Juvenil"]
}
// Ahora leemos el objeto completo
console.table(Producto)

console.log("Accediendo a propiedades específicas del PRODUCTO")
console.log(`Nombre Completo del PRODUCTO: ${Producto.Nombre} ${Producto.Marca} ${Producto.Modelo}`)
console.log(`Precio: ${Producto.Precio}`)
if(Producto.Disponibilidad == 0)
console.log(`Estatus: Agotado`)
else 
console.log(`Estatus: ${Producto_Stock} unidades disponibles.`);


// Desestructuración de Objetos.

console.log("%c3.- Destructuración de Objetos", style_console);

let Producto2 =
{   
    Clave: 316,
    Nombre : "Vape", 
    Marca: "Waka",
    Modelo: "15000 hits", 
    Precio: 400.00,
    Disponibilidad: true,
    Stock: 5,
    SKU: "OO9481D-0356",
    Imagen: "../assets/products/sunglasses/KatoRed.png",
    Barcode:  888392491626,
    Categorias: ["Deportes", "Lentes", "Hombre", "Accesorios"]
}


let Comprador =
{
    Clave: 3216,
    Nombre: "Jonathan",
    Apellidos: "López Morales",
    Tipo: "Frecuente",
    Correo: "jonathan@gmail.com",
    PaisOrigen: "México",
    SaldoActual: 14000.00
}

let Pedido= {
    Producto_Clave: 316, 
    Comprador_Clave: 3216,
    Cantidad: 2, 
    Estatus: "Carrito de Compra",
    TipoPago: "Tarjeta de Crédito"
}

// En base  a los 3 objetos necesitamos calcular el costo de la compra y si le alcanza con sus saldo a favor

let {Precio: Producto_Precio2 } = Producto2; 
let {Cantidad:Pedido_Cantidad} = Pedido;
let {SaldoActual: Cliente_SaldoActual} = Comprador;
let Costo_Compra= Producto_Precio2 * Pedido_Cantidad;

console.log(`El cliente ha agregado a su carrito de compras ${Pedido_Cantidad} undidades, con un costo total de: $${Costo_Compra}`);
if(Costo_Compra< Cliente_SaldoActual)
    console.log("El cliente tiene saldo suficiente.");

// Actualizar el valor de los Objetos



// console.log(`El objeto actualmente tiene los siguientes valores`)

// console.log(`El objeto actualizado tiene los siguientes valores`)

// let.tipoDisponibildad=typeof(Producto2.Disponibilidad)

console.log("%c5- Agregacion de propiedades de Objeto (Inmutacion)", style_console);
console.log("Objeto antes de ser modificado")
console.table(Comprador)

// Agregacion de propiedades

Comprador['Direccion'] = "Calle 2 de Mayo, Numero interios 179, Xicotepec de Juarez.Pue, Mexico"

Comprador['Tipo']="Premium"

Comprador['Estatus'] = "Inactivo"

Comprador['TotalCompras'] = 50000.00

console.log("Objetod despieds de ser mpodificado")

console.table(Comprador)

// Eliminacion de propiedades de Tipopago de Pedido

delete Pedido.TipoPago;

console.log("Objeto despues de ser modificado")

console.table(Pedido)



console.log("%c7- Metodo para controlar la mutabilidad de los objetos, Congelacion (FREEZE)", style_console);

// Si deseamos no permitir que los objetos sean modificados ni en estructura,  el  valor, utilizamos el metodo FREEZE (Congelar)

console.log('L estructura actual del Objeto COMPRADOR es :')

console.table(Comprador)

Object.freeze(Comprador);

// Intentaremos agregar, eliminar o modificar los valores de sus propiedades

Comprador.FechaUltimaCompra = "25/11/2024 10:50:23"
delete Comprador.Tipo;

Comprador.Direccion = "Calle de matias q vive por su casa No. 125 Xicotepec de Juarez.Pue Mexico"

console.table(Comprador)





console.log("%c8- Metodo para controlar la mutabilidad de los objetos Sellado (SEAL))", style_console);

// Sin embargo, en el caso de que deseemos poder modifcar los valores de las propiedades del objectToString,
//  pero no su estructura, usaremos SEAL
console.log ("Objeto antes de ser modificado")

// Se aplico el metodo de sellado SEAL

Object.seal(Pedido)


Pedido['FechaPedido']  = "25/03/2024 11:03:03"

delete Pedido['Cantidad']

console.log('Verificamos que se realizaron cambios en el objeto PEDIDO')

console.table (Pedido)

// Ahora intentamos modificar los valores de las propiedades

Pedido.Cantidad = 5

console.log('Verificamos que se realizaron cambios en el objeto PEDIDO')

console.table (Pedido)

//Destructuracion de 2 o mas objetos

console.log("%c9.- Destructuracion de 2 o mas objetos)", style_console);

const{Precio: ProductoPrecio, SKU: ProductoSKU, Marca: ProductoMarca} = Producto

const{Correo: ClienteCoreo, Pais: clientepais, SaldoActual: ClienteSaldoActual } = Comprador

// Tranferir valores cuantutativos en caulitativos
if{ProductoPrecio=2000}
    ProductoPrecio= "Carichimo"
else
    ProductoPrecio="Baratichimo"

    if{ClienteSaldoActual>0}
    clientesaldo="A favor"

// Operaciones sobre objetos 
// Union de objetos

console.log("%c10- Metodo para controlar la mutabilidad de los objetos Sellado (SEAL))", style_console);