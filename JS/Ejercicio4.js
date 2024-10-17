// Repaso de Arreglo

//Declaración de Variables de Estilo
const bg = "linear-gradient(11deg, rgba(199,0,36,1) 0%, rgba(255,129,26,1) 33%, rgba(255,191,26,1) 86%)";
const style_console = `background: ${bg}; color: white; border-radius: 6px; padding: 4px; font-size: 1.0rem; font-weight: bold`;

//Personalización de las Salidas a Consola
console.warn("Práctica 06: Arreglos en JavaScript");

//DECLARACIÓN DE UN ARREGLO
console.log("%c1.- Declaración de un Arreglo (Array)", style_console);
//Para declarar un arreglo (array) de datos en JavaScript basta con agregar [], y dentro los datos que contendrá el arreglo.
const mesesAnio = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
//Visualización de los elementos de un arreglo.
console.log(mesesAnio);
console.table(mesesAnio);

// Acceder a los valores de un arreglo de datos para acceder al valor solo basta enviar la posición del dato que queremos dentro de los límites establecidos, siendo el límite inferior 0 y el superior tamaño -1.
console.log("%c2.- Leer o recuperar los datos de un arreglo", style_console);
console.log(`El primer mes del año es: ${mesesAnio[0]}`);
console.log(`El último mes del año es: ${mesesAnio[mesesAnio.length - 1]}`);

// No se pueden acceder a elementos con posiciones negativas o posiciones superiores al tamaño definido.
console.log(`El mes del año en la posición -1 es:  ${mesesAnio[-1]}`);
console.log(`El treceavo mes del año en la posición es:  ${mesesAnio[12]}`);
console.log(`¿Qué tipo de dato es un arreglo? : ${typeof (mesesAnio)}`);

//Al ser JavaScript un lenguaje débilmente tipado podremos crear arreglos mixtos de tipos de Datos
console.log("Declarando un Arreglo Mixto");
const saludar = function (nombre) { return `Hola, ${nombre}!`; };
let arregloMixto = ["String", 5, 45.26, -200, -0.16854, Symbol("MARH"), 'z', false, BigInt(1111222233334444555566667777), true, { latitud: "20° 18' 0\" N", longitud: "97° 58' 00\" W", altitud: 796 }, saludar, null];

//Mostramos el contenido del objeto
console.log(arregloMixto);
console.table(arregloMixto);
console.log(typeof (arregloMixto));

console.log("Verificamos los tipos de datos de los elementos del arreglo: ");
console.log(`El dato en la posición[0] = ${arregloMixto[0]} y es del tipo: ${(typeof (arregloMixto[0]))}`);
console.log(`El dato en la posición[1] = ${arregloMixto[1]} y es del tipo: ${(typeof (arregloMixto[1]))}`);
console.log(`El dato en la posición[2] = ${arregloMixto[2]} y es del tipo: ${(typeof (arregloMixto[2]))}`);
console.log(`El dato en la posición[3] = ${arregloMixto[3]} y es del tipo: ${(typeof (arregloMixto[3]))}`);
console.log(`El dato en la posición[4] = ${arregloMixto[4]} y es del tipo: ${(typeof (arregloMixto[4]))}`);
console.log(`El dato en la posición[5] = ${arregloMixto[5].toString} y es del tipo: ${(typeof (arregloMixto[5]))}`);
console.log(`El dato en la posición[6] = ${arregloMixto[6]} y es del tipo: ${(typeof (arregloMixto[6]))}`);
console.log(`El dato en la posición[7] = ${arregloMixto[7]} y es del tipo: ${(typeof (arregloMixto[7]))}`);
console.log(`El dato en la posición[8] = ${arregloMixto[8]} y es del tipo: ${(typeof (arregloMixto[8]))}`);
console.log(`El dato en la posición[9] = ${arregloMixto[9]} y es del tipo: ${(typeof (arregloMixto[9]))}`);
console.log(`El dato en la posición[10] = ${arregloMixto[10]} y es del tipo: ${(typeof (arregloMixto[10]))}`);
console.log(`El dato en la posición[11] = ${arregloMixto[11]} y es del tipo: ${(typeof (arregloMixto[11]))}`);
console.log(`El dato en la posición[12] = ${arregloMixto[12]} y es del tipo: ${(typeof (arregloMixto[12]))}`);

console.log("%c3.- Arreglos Multidimensionales (Matrices)", style_console);
console.log("Declarando una matriz regular.");
//Una matriz es una estructura de datos multidimensional (tabla) de n columnas o m filas

let matriz = [[1, 2, 3, 4], ['a', 'b', 'c', 'd']];
//esta es una matriz regular de 4 x 4
console.log(matriz);
console.table(matriz);
console.log("Declarando una matriz irregular.");

const matrizIrregular = [["Juan", "Pedro", "María", "Inés"],
[true, false, null],
[9.2]];

console.log(matrizIrregular);
console.table(matrizIrregular);

// Accediendo a los valores de una matriz
console.log("Leyendo las Propiedades de una Matriz Regular");
console.log(`Elemento en la posición [0][0]: ${matriz[0][0]}`);
console.log(`Elemento en la posición [1][2]: ${matriz[1][2]}`);

// Accediendo a los valores de una matriz irregular
console.log("Leyendo las Propiedades de una Matriz Irregular");
console.log(`Elemento en la posición [0][0]: ${matrizIrregular[0][0]}`);
console.log(`Elemento en la posición [2][0] (Promedio de Juan): ${matrizIrregular[2][0]}`);
console.log(`Elemento en la posición [1][2] (¿Es María mayor de edad?): ${matrizIrregular[1][2]}`);

// Funciones y Métodos de Arreglos
// Los métodos de un objeto siempre son invocados usando un . y al término se delimitan los parámetros entre (), en caso de que no lleve (), no es un método sino una propiedad
console.log("%c4.- Funciones o Métodos de los Arreglos (Array Methods or Array Functions", style_console);
console.log("¿Cómo saber cuál es el tamaño de un arreglo?");
console.log(`meses es un arreglo de tamaño: ${mesesAnio.length}`);
console.log(`arregloMixto es un arreglo de tamaño: ${arregloMixto.length}`);
console.log(`¿Qué pasa con los multidimensionales ?`);
console.log(`matriz es un arreglo de tamaño: ${matriz.length}`);
console.log("mmm, eso me da el tamaño de número de filas de la matriz, pero cómo saber el número de columnas?");
console.log(`la matriz regular tiene un número de ${matriz[0].length}`);
console.log("Y para las irregulares?");
// Para saber la dimensión de una matriz irregular podemos hacer el uso de ciclo
let numeroFilas = matrizIrregular.length;
for (let i = 0; i < numeroFilas; i++)
    console.log(`La longitud de la fila ${[i]} es = ${matrizIrregular[i].length}`);


console.log("%c5.- Agregar un nuevo elemento a un arreglo (PUSH)", style_console);

let estudiantes = ["Matías Granillo", "Al Farías", "José Francisco", "Teresa Vargas", "Sayurid Bautista", "Derek Sesni"];
console.log("Los elementos actuales del arreglo son: ");
console.table(estudiantes);
console.log(`Agregamos a un nuevo estudiante llamado: Obed Gúzman`);
estudiantes.push("Obed Gúzman");
console.log(`Después de agregarlo los elementos del arreglo son: `);
console.table(estudiantes);

console.log("¿Qué pasa con los Mixtos?");
console.log("El arregloMixto actualmente tiene los siguientes elementos: ");
console.table(arregloMixto);
console.log("Agregamos la palabra: \"Hola\", como nuevo elemento");
arregloMixto.push("Hola");
console.log("Y también agregamos el número -3218817875487448415.23597518864, siendo este un BigInt");
arregloMixto.push(BigInt(-3218817875487448415.23597518864));
console.log("Después de esta dos operaciones el arreglo queda con los siguientes elementos: ");
console.table(arregloMixto);

console.log("%c6.- Agregar un nuevo elemento a un arreglo (UNSHIFT) en la posición inicial", style_console);
console.table(estudiantes);
console.log("Ahora agregamos a Raúl Pasos, al comienzo del arreglo.");
arregloMixto.unshift("Raúl Pasos")
console.log("La lista actual es:")
console.table(estudiantes)

// 7.- Eliminar el elemento de un arreglo en la última posición (POP)
console.log("%c7.- Eliminar el elemento de un arreglo en la última posición (POP)", style_console);

// Mostrar el arreglo actual
console.log("El arreglo tiene los siguientes elementos: ");
console.table(estudiantes);

// Eliminar el último elemento del arreglo
console.log("Para este caso eliminaremos a Obed Gúzman, en la última posición.");
console.log("Después de eliminar el elemento el arreglo quedó de la siguiente manera:");
arregloMixto.pop();
console.table(estudiantes);

// 8.- Eliminar el elemento de un arreglo en la primera posición (SHIFT)
console.log("%c8.- Eliminar el elemento de un arreglo en la primera posición (SHIFT)", style_console);

// Mostrar el arreglo actual
console.log("El arreglo tiene los siguientes elementos:");
console.table(estudiantes);

// Eliminar el primer elemento del arreglo
console.log("Para este caso eliminaremos a Raúl Pasos, en la primera posición.");
estudiantes.shift();
console.log("Después de eliminar el elemento el arreglo quedó de la siguiente manera:");
console.table(estudiantes);

// 9.- Modificar un arreglo en un arreglo nuevo con posiciones definidas (SPLICE)
console.log("%c9.- Modificar un arreglo en un arreglo nuevo con posiciones definidas (SPLICE)", style_console);

// Mostrar el arreglo original
console.log("El arreglo original tiene los elementos:");
console.table(estudiantes);

// Eliminar elementos del arreglo basados en su posición
console.log("Dividir el arreglo en uno nuevo eliminando ciertos elementos en base a su posición");
estudiantes.splice(2);
console.table(estudiantes);

// Agregar nuevos estudiantes al arreglo
console.log("Se agregaron 5 nuevos estudiantes, por lo que el arreglo es:");
console.log("Dividir el arreglo y agregar más nombres a la lista de estudiantes");
estudiantes.push("Francisco García");
estudiantes.push("Chester Bennington");
estudiantes.push("Edwin Cruz");
estudiantes.push("Diego Miguel");
estudiantes.push("Luis Humberto");
console.table(estudiantes);

// Insertar a "Rafa Navejas" en las posiciones 0 y 1
console.log("Vamos a meter a \"Rafa Navejas\" en los elementos de las posiciones 0 y 1");
estudiantes.splice(1, 0, "Rafa Navejas");
console.log("El resultado es:");
console.table(estudiantes);

// Reemplazar elementos del arreglo usando splice
console.log("Ahora vamos a reemplazar a \"Al Farías\" en las posiciones por \"Jorge Siddhartha\"");
estudiantes.splice(0, 1, "Siddhartha");
console.log("Resultando en:");
console.table(estudiantes);

// 10.- Métodos para la manipulación de Arreglos INMUTABLES
console.log("%c10.- Métodos para la manipulación de Arreglos INMUTABLES", style_console);

// Declarar un arreglo de signos zodiacales
let signosZodiacales = ["Aries", "Tauro", "Géminis", "Cáncer", "Leo", "Virgo", "Libra", "Escorpio", "Sagitario", "Capricornio", "Acuario", "Piscis"];

// Congelamos el arreglo volviéndolo INMUTABLE
Object.freeze(signosZodiacales);
// Desestructuración de Arreglos
let [signo1,, signo3,,,, signo7,,,,] = signosZodiacales
console.log(`EL PRIMER SIGNO ZODIACAL ES: ${signo1}`)
console.log(`EL TERCER SIGNO ZODIACAL ES: ${signo3}`)
console.log(`EL SÉPTIMO SIGNO ZODIACAL ES: ${signo7}`)
// console.log(`EL CUARTO SIGNO ZODIACAL ES: ${signo4}`)

// Ninguna se ejecuta porque está congelada 

/*signosZodiacales.push("Ofiuco")
signosZodiacales.unshift();
signosZodiacales.splice(6,2);*/

console.log("%c11.- Filtrado de Elemento dentro de un arreglo utilizando el método FILTER", style_console);

console.table(estudiantes);
// Antes de filtrar datos, llenemos el arreglo con 10 elementos
estudiantes.push("Sonic");
estudiantes.push("Shadow")
estudiantes.push("Silver")
estudiantes.push("Tails")
estudiantes.push("Amy")
estudiantes.push("Cream")
console.table(estudiantes)

Object.freeze(estudiantes)

// Filter es un método que recorre los elementos de un arreglo haciendo alguna tarea en específico; lo que tenemos que considerar es que este nuevo arreglo resultante es un objeto nuevo que pueda ser mutable.

console.log("Filtrando los primeros 5 elementos")
let nuevoEstudiantes = estudiantes.filter((estudiante, index) => index < 5);
console.table(nuevoEstudiantes);

console.table(filtraPrimeros5(estudiantes));

// Filtrar a los estudiantes que su nombre tenga más de 15 caracteres
let nuevoEstudiantesNombre = estudiantes.filter((estudiante) => estudiante.length > 15);
console.table(nuevoEstudiantesNombre);

// Intentamos modificar el arreglo inmutable
/* estudiantes.pop()
console.table(estudiantes) */

// Intentamos modificar el nuevo arreglo que no ha sido congelado
nuevoEstudiantes.unshift("Diego Mota")
console.table(nuevoEstudiantes);

function filtraPrimeros5(arregloEstudiantes) {
    let listaFiltrada = []
    for (let i = 0; i < 5; i++) {
        listaFiltrada.push(arregloEstudiantes[i]);
    }
    return listaFiltrada;
}

console.log("%c12.- Filtrado de Elementos dentro de un arreglo utilizando el método MAP, en el que necesitemos transformarlos", style_console);

console.log("Imprimimos los elementos actuales de signosZodiacales:")
console.table(signosZodiacales)
// ¿Qué podemos hacer si necesitamos el mismo arreglo pero ahora con todos sus elementos en letras mayúsculas?
console.log("Los signosZodiacales después de aplicar toUpperCase para que todos estén en mayúsculas")
console.table(signosZodiacales.map(signoZodiacal => signoZodiacal.toUpperCase()));

// Reducción de elementos de un arreglo, se usa cuando debemos hacer operaciones matemáticas o cuantitativas a un arreglo, como obtener totales; la idea es reducir la lista a un valor más simplificado.

const costosListaCompras = [15, 52.50, 16.90, 32.50, 28, 105, 45.2, 94.10]
// ¿Cómo podemos calcular el total de una lista de costos de un carrito de compras?
// Mostrar todos los precios de la lista de compras
console.log("Todos los precios:");
console.table(costosListaCompras);

// Calcular y mostrar el total de la compra usando reduce()
console.log(`El total de la compra es: ${costosListaCompras.reduce((total, precio) => total + precio, 0).toFixed(2)}`);

// 13.- Método Reduce()
console.log("%c13.- Método Reduce()", style_console);

// Lista de costos de un carrito de compras
const costosListaCompra = [15, 52.50, 16.90, 32.50, 28, 105, 45.2, 94.10];

// Mostrar los precios de la lista de compras
console.log("Los precios son:");
console.table(costosListaCompra);

// Calcular y mostrar el total de la compra usando reduce()
console.log(`El total de la compra es: ${costosListaCompra.reduce((total, precio) => total + precio, 0).toFixed(2)}`);
/*
- El método reduce() aplica una función a un acumulador y a cada elemento de un array (de izquierda a derecha) para reducirlo a un único valor.
*/
