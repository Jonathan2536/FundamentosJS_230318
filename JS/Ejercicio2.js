// Tipos de Datos en JS

// 1. Undefined
let cliente;
console.log(`El cliente es: ${cliente}`);
console.log(`El tipo de dato de la variable cliente es: ${typeof(cliente)}`);
cliente = "Juan Romero";
console.log(`El cliente es: ${cliente}`);
console.log(`El tipo de dato de la variable cliente es: ${typeof(cliente)}`);
cliente = 19227;
console.log(`El cliente es: ${cliente}`);
console.log(`El tipo de dato de la variable cliente es: ${typeof(cliente)}`);

// Undefined es el tipo de dato que por defecto se asigna a variables no inicializadas o no declaradas.

// 2. Boolean
console.warn("--- Tipo de Dato: BOOLEAN (Booleano - True/False)");
let esPremium = "No lo sé";
console.log(`¿Es el cliente premium? : ${esPremium}`);
console.log(`El tipo de dato de la variable esPremium es: ${typeof(esPremium)}`);
console.log(`Asignando el valor "true" a la variable`);
esPremium = "true";
console.log(`¿Es el cliente premium? : ${esPremium}`);
console.log(`El tipo de dato de la variable esPremium es: ${typeof(esPremium)}`);
console.log("Asignando el valor true a la variable");
esPremium = true;
console.log(`¿Es el cliente premium? : ${esPremium}`);
console.log(`El tipo de dato de la variable esPremium es: ${typeof(esPremium)}`);
console.log("Asignando el valor false a la variable");
esPremium = false;
console.log(`¿Es el cliente premium? : ${esPremium}`);
console.log(`El tipo de dato de la variable esPremium es: ${typeof(esPremium)}`);
if (esPremium) {
    console.log("El cliente pagó por usar el servicio");
} else {
    console.log("El cliente recibe los servicios gratuitos");
}

// 3. Number

var cantidad;
const costo_producto = 10.50;
let saldo_cuenta = -2500.40;
let monto_transaccion;

console.warn("--- Tipo de Dato - NUMBER (Números, positivos, negativos, decimales, flotantes)");
console.log(`Tu saldo al día de hoy es de: ${saldo_cuenta}, (Tipo de Dato = ${typeof(saldo_cuenta)})`);
console.log(`El producto que has seleccionado cuesta: ${costo_producto}, (Tipo de Dato = ${typeof(costo_producto)})`);
cantidad = 8;
console.log(`Has elegido comprar: ${cantidad} de productos`);
console.log(`El importe total de la compra es: ${cantidad * costo_producto}`);
saldo_cuenta = saldo_cuenta - (cantidad * costo_producto);
console.log(`Tu nuevo saldo es de: ${saldo_cuenta}`);
// El cliente realiza un abono de 1500 
monto_transaccion = 1500;
console.log(`Tu abono de: ${monto_transaccion} ha sido recibido, tu nuevo saldo es de: ${saldo_cuenta + monto_transaccion}`);

// 4. Strings o Cadenas de Texto
const alumno = "Jesús Domínguez Ramírez";
let producto;

console.warn("--- Tipo de Dato - STRING (Cadena de Caracteres)");
console.log(`El nombre del alumno es: ${alumno}, que es un tipo de dato ${typeof(alumno)}`);
producto = "MONITOR 20\"";
console.log(`El nombre del producto es: ${producto}, que es un tipo de dato ${typeof(producto)}`);

// Manipulando los STRINGS
console.log(`Más adelante podremos transformar el contenido de los STRINGS usando funciones específicas como convertir a mayúsculas: ${alumno} => ${alumno.toUpperCase()}`);
console.log(`O en su defecto a minúsculas: ${producto} => ${producto.toLowerCase()}`);

let numero = "30";
let numero2 = 30;

console.log(typeof numero);
console.log(typeof numero2);

// 5. BigInt (Enteros de Dimensiones Amplias) - Generalmente utilizado en sistemas matemáticos, físicos o espaciales donde se requiere de una excelente precisión numérica.
console.warn("--- Tipo de Dato - BIGINT (Número Amplio)");
const numeroGrande = 1234567890;
const numeroGrande2 = 12345678901234567890;
let numeroGrande3 = 12345678901234567890123456789;
let numeroGrande4 = 1234567890123456789012345678901234567890;
console.log(`El primer experimento de un número grande es: ${numeroGrande}, que sí es soportado por NUMBER, y su tipo de dato es: ${typeof(numeroGrande)}`);
console.log(`El primer experimento de un número grande es: ${numeroGrande2}, que sí es soportado por NUMBER, y su tipo de dato es: ${typeof(numeroGrande2)}`);
console.log(`El primer experimento de un número grande es: ${numeroGrande3}, que sí es soportado por NUMBER, y su tipo de dato es: ${typeof(numeroGrande3)}`);
console.log(`El primer experimento de un número grande es: ${numeroGrande4}, que ya no es soportado por NUMBER perdiendo precisión, y su tipo de dato es: ${typeof(numeroGrande4)}`);

// Para definir el tipo de dato BigInt debemos invocar la función BigInt o usar la letra "n" al final del número en la asignación de valor.
console.log("Declaramos los valores numéricos de gran tamaño...");
numeroGrande3 = BigInt(12345678901234567890123456789);
numeroGrande4 = 123456789012345678901234567891234567890n;

console.log(`El segundo experimento de un número grande es: ${numeroGrande3}, y su tipo de dato es: ${typeof(numeroGrande3)}`);  
console.log(`El segundo experimento de un número grande es: ${numeroGrande4}, y su tipo de dato es: ${typeof(numeroGrande4)}`);
// Hay que considerar que los tipos de datos declarados como BigInt no son operables con los de tipo number.

let numero1 = 238;
console.log(typeof numeroGrande);

// Si intentamos realizar una operación matemática entre estos dos tipos de datos, obtendremos un error crítico de operación.

console.log(`El resultado de la operación de: numeroGrande4 / numero1 es = a: ${numeroGrande4 / BigInt(numero1)}`);

// const numero3 = 10;
// const numero4 = 20;

// console.log(numero3 + Number(numeroGrande));

// const numero5 = "30";
// const numero6= 30;
// console.log(typeof String(numero2));
// console.log(typeof Number(numeroGrande));

// 6. Symbol
console.warn("--- Tipo de Dato - SYMBOL (Símbolo o Forzar la Unicidad)");
// VID APUNTES
// const primerSymbol = Symbol(30);
// const segundoSymbol= Symbol(30);

// console.log(primerSymbol === segundoSymbol);
// console.log(primerSymbol.valueOf());
// console.log(segundoSymbol.valueOf());

// Marco APUNTES

// Declaramos diferentes variables con valores similares o iguales.
const numero3 = 2;
const numero4 = 2.0;
const numero5 = "2";
const numero6 = "2.0";
const numero7 = Symbol(2);
const numero8 = Symbol(2.0);
const numero9 = Symbol("2");
const numero10 = Symbol(2);
// Prueba de comparación 1: ¿Es 2 = 2.0?
console.log("Prueba de comparación 1:");
if (numero3 == numero4) {
    console.log(`Se han comparado los valores de numero3 y numero4, confirmando que tienen el mismo valor.`);
} else {
    console.log(`Se han comparado los valores de numero3 y numero4, detectando que NO tienen el mismo valor.`);
}

// Prueba de comparación 2: ¿Es 2 = "2"?
console.log("Prueba de comparación 2:");
if (numero3 == numero5) {
    console.log(`Se han comparado los valores de numero3 y numero5, confirmando que tienen el mismo valor.`);
} else {
    console.log(`Se han comparado los valores de numero3 y numero5, detectando que NO tienen el mismo valor.`);
}

// Prueba de comparación 3: ¿Es 2 estrictamente = "2"?
/* 
= Es asignación 
== Igualdad de valor
=== Igualdad estricta (compara valor y tipo de dato)
*/
console.log("Prueba de comparación 3:");
if (numero3 === numero5) {
    console.log(`Se han comparado los valores de numero3 y numero5, confirmando que tienen el mismo valor.`);
} else {
    console.log(`Se han comparado los valores de numero3 y numero5, detectando que NO tienen el mismo valor.`);
}

// Prueba de comparación 4: ¿Es 2 = "2.0"?
console.log("Prueba de comparación 4:");
if (numero3 == numero6) {
    console.log(`Se han comparado los valores de numero3 y numero6, confirmando que tienen el mismo valor.`);
} else {
    console.log(`Se han comparado los valores de numero1 y numero4, detectando que NO tienen el mismo valor.`);
}

// Prueba de comparación 5: ¿Es 2 estrictamente = "2.0"?
console.log("Prueba de comparación 5:");
if (numero3 === numero6) {
    console.log(`Se han comparado los valores de numero3 y numero6, confirmando que tienen el mismo valor.`);
} else {
    console.log(`Se han comparado los valores de numero1 y numero6, detectando que NO tienen el mismo valor.`);
}

// Prueba de comparación 6: ¿Son diferentes?
console.log("Prueba de comparación 6:");
if (numero7 == numero8) {
    console.log(`Se han comparado los valores de numero7 y numero8, confirmando que tienen el mismo valor.`);
} else {
    console.log(`Se han comparado los valores de numero7 y numero8, detectando que NO tienen el mismo valor.`);
}

// ¿Qué ocurre cuando se intenta comparar un número con un símbolo?
console.log("Prueba de comparación entre un número y un símbolo:");
if (numero7 === numero3) {
    console.log(`Se han comparado los valores de numero7 y numero3, confirmando que tienen el mismo valor.`);
} else {
    console.log(`Se han comparado los valores de numero7 y numero3, detectando que NO tienen el mismo valor.`);
}

// 7. Object (Conjunto de Propiedades) - Definido como una colección de propiedades donde cada propiedad tiene un nombre y un valor (esto incluye las funciones que son valores asignados a las propiedades de un objeto).
console.warn("--- Tipo de Dato - OBJECT (Objeto)");
// Declaramos un objeto vacío
let objetoVacio = {};
console.log(`Objeto vacío: ${objetoVacio}, que es un tipo de dato ${typeof(objetoVacio)}`);

// Declaramos un objeto con propiedades
let cliente1 = {
    nombre: "Carlos",
    edad: 29,
    esPremium: false,
};

console.log(`Cliente1: ${cliente1}, que es un tipo de dato ${typeof(cliente1)}`);
console.log(`El nombre del cliente es: ${cliente1.nombre}, que es un tipo de dato ${typeof(cliente1.nombre)}`);
console.log(`La edad del cliente es: ${cliente1.edad}, que es un tipo de dato ${typeof(cliente1.edad)}`);
console.log(`¿Es el cliente premium? : ${cliente1.esPremium}, que es un tipo de dato ${typeof(cliente1.esPremium)}`);

// Objeto que puede almacenar información de un pedido
let pedido = {
    id: 123,
    fecha: "2023-10-15",
    productos: ["Producto 1", "Producto 2"],
    total: function() {
        return this.productos.length * 10; // Ejemplo simple
    }
};

console.log(`El total del pedido es: ${pedido.total()}`);

// 8. Array (Arreglo) - Un tipo de objeto que permite almacenar colecciones de datos.
console.warn("--- Tipo de Dato - ARRAY (Arreglo)");
// Definimos un arreglo
let carrito = [];
console.log(`El carrito de compras está vacío: ${carrito}, que es un tipo de dato ${typeof(carrito)}`);

carrito.push("Producto A");
carrito.push("Producto B");
console.log(`El carrito de compras ahora contiene: ${carrito}, que es un tipo de dato ${typeof(carrito)}`);

// 9. Null
console.warn("--- Tipo de Dato - NULL (Nulo)");
// Null es un tipo de dato que representa la ausencia intencionada de valor
let productoElegido = null;
console.log(`El producto elegido es: ${productoElegido}, que es un tipo de dato ${typeof(productoElegido)}`);

// 10. Función - Se considera un objeto de primer nivel, se le puede asignar a una variable, pasarla como argumento a otra función y devolverla.
console.warn("--- Tipo de Dato - FUNCTION (Función)");
// Definimos una función
function saludar(nombre) {
    return `Hola, ${nombre}!`;
}

console.log(`La función saludar es de tipo: ${typeof(saludar)}`);
console.log(saludar("María")); // Llamada a la función

// 11. Ejemplo de uso de los tipos de datos
console.warn("--- Ejemplo de Uso de Tipos de Datos");
let usuario = {
    id: 1,
    nombre: "Ana",
    edad: 30,
    esPremium: true,
    productosComprados: ["Producto 1", "Producto 2"],
};

console.log(`Usuario: ${usuario.nombre}, Edad: ${usuario.edad}, Premium: ${usuario.esPremium}`);
