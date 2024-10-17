// Estilización de los mensajes de salida
const bg = "linear-gradient(11deg, rgba(10,35,105,1) 0%, rgba(60,105,180,1) 33%, rgba(90,155,225,1) 86%)";
const style_console = `background: ${bg}; color: white; border-radius: 6px; padding: 4px; font-size: 1.0rem; font-weight: bold`;

// Personalización de las salidas a consola
// Se muestra un aviso en la consola indicando el propósito de la práctica.
console.warn("Práctica 07: Repaso de Ciclos y sentencias de control ");
console.log("%c1.- Si/Entonces ... (IF)", style_console);
// Se utiliza un estilo personalizado para imprimir el texto en la consola.
// El comentario explica que el siguiente bloque de código se basa en una prueba lógica que evalúa verdadero o falso.

// Obtiene la fecha y hora actual
let fechaActual = new Date();
// Imprime la fecha actual en formato de texto legible
console.log(`Hola, la fecha de hoy es: ${fechaActual.toDateString()}`);

// Se necesita la fecha en formato local de México
const fechaLocalMX = fechaActual.toLocaleString('es-MX', {
    weekday: 'long', // Día de la semana
    year: 'numeric', // Año en formato numérico
    month: 'long',   // Nombre del mes completo
    day: 'numeric',  // Día del mes
    hour: 'numeric', // Hora en formato numérico
    minute: 'numeric', // Minutos
    second: 'numeric',  // Segundos
    hour12: false      // Usar formato de 24 horas
});

// Imprime la fecha en formato local
console.log(`En formato local (México): ${fechaLocalMX}`);

// Condición que verifica si la hora actual es antes de las 12
if (fechaActual.getHours() < 12) 
    console.log(`Buenos días, hoy es ${fechaLocalMX}`); // Saludo matutino

// Condición que determina si estamos en la primera o segunda mitad del año
if (fechaActual.getMonth() <= 6)
    console.log(`Estás en la primera mitad del año`);
else
    console.log(`Estás en la segunda mitad del año.`);

// Se establecen fechas de inicio de las estaciones del año
const anio = fechaActual.getFullYear(); // Año actual
let inicioPrimavera = new Date(anio, 2, 21); // 21 de marzo
let inicioVerano = new Date(anio, 5, 21);    // 21 de junio
let inicioOtonio = new Date(anio, 8, 23);    // 23 de septiembre
let inicioInvierno = new Date(anio, 11, 21); // 21 de diciembre

// Variable para almacenar la estación actual
let estacion;
let horarioVerano = false; // Inicializa la variable para el horario de verano

// Condiciones para determinar en qué estación del año estamos
if (fechaActual >= inicioPrimavera && fechaActual < inicioVerano) {
    console.log(`Estamos en PRIMAVERA`);
    console.log("Inicia la floración de muchas plantas.");
    console.log("Los días son más largos y las noches más cortas.");
    console.log("Muchos animales despiertan de la hibernación.");
    estacion = "Primavera"; // Asigna la estación
    horarioVerano = true; // Indica que estamos en horario de verano
} else if (fechaActual >= inicioVerano && fechaActual < inicioOtonio) {
    console.log("Estamos en VERANO");
    console.log("En esta temporada abundan los días soleados y calurosos.");
    console.log("En esta temporada el índice de turismo vacacional sube.");
    console.log("Mucha gente busca realizar actividades al aire libre.");
    estacion = "Verano"; // Asigna la estación
    horarioVerano = true; // Indica que estamos en horario de verano
} else if (fechaActual >= inicioOtonio && fechaActual < inicioInvierno) {
    console.log("Estamos en OTOÑO");
    console.log("Los árboles suelen cambiar de follaje.");
    console.log("Se registrarán temperaturas más templadas.");
    console.log("Los animales comienzan con la recolección de alimento y preparan sus espacios para la hibernación; incluso algunas aves migran.");
    estacion = "Otoño"; // Asigna la estación
    horarioVerano = false; // Indica que no estamos en horario de verano
} else {
    console.log("Estamos en INVIERNO");
    console.log("En esta temporada los días son más cortos y las noches más largas.");
    console.log("En algunas regiones suele nevar.");
    console.log("Dadas las bajas temperaturas, se recomienda abrigarse.");
    estacion = "Invierno"; // Asigna la estación
    horarioVerano = false; // Indica que no estamos en horario de verano
}

console.log("%c2.- Operador Ternario (validación ? cumple : no_cumple)", style_console);
// En JavaScript existe una operación simplificada que valida si una condición se cumple o no, y qué hacer en cada caso.

const edadPersona = 18;
const mayoriaEdadMX = 18;
const mayoriaEdadUS = 21;
let evaluarMayoriaEdad = (edad) =>
    edad >= 18 ? "Eres mayor de edad." : "No eres mayor de edad.";

console.log("Evaluando la mayoría de edad de una persona: ");
console.log(evaluarMayoriaEdad(edadPersona));


// Sin embargo, tenemos que considerar que la mayoría de edad varía en cada país por cuestiones legales, por lo que debemos considerar un segundo parámetro en la evaluación.

evaluarMayoriaEdad = (edad, pais) =>
    (edad >= 18 && pais == "MX") ? `En ${pais} eres mayor de edad.` : `En ${pais} NO eres mayor de edad.`;

console.log("Evaluando la mayoría de edad de una persona en Estados Unidos");
console.log(evaluarMayoriaEdad(edadPersona, "USA"));

console.log("Evaluando la mayoría de edad de una persona en México");
console.log(evaluarMayoriaEdad(edadPersona, "MX"));

console.log("%c3.- SWITCH - CASE (Elección por valor definido)", style_console);

// Calculando tu generación en base a tu edad
let anioNacimiento;
let asignaGeneracion = (anioNacimiento) => {
    switch (true) {
        case (anioNacimiento < 1968):
            return "Baby Boomer";
        case (anioNacimiento > 1968 && anioNacimiento <= 1980):
            return "Generación X";
        case (anioNacimiento > 1980 && anioNacimiento <= 1994):
            return "Generación Y/Millennial";
        case (anioNacimiento > 1994 && anioNacimiento <= 2009):
            return "Generación Z/Centennial";
        case (anioNacimiento > 2009):
            return "Generación Alfa";
    }
};

console.log(`Dado que nací en el año 2005, soy de la generación ${asignaGeneracion(2005)}`);

console.log("%c4.- Manejo de Excepciones (TRY/CATCH)", style_console);

// En algunas ocasiones existirán errores que no son culpa del programa, sino del usuario, la red, el SO o incluso de un middleware, pero que sin duda debemos controlar para evitar fallas de ejecución.

console.log("Intentamos dividir: 0/10, el resultado es: ");
try {
    let result = 0 / 10;
    console.log(result);
} catch (error) {
    console.log("Ocurrió un error: " + error.message);
}

console.log("Intentamos dividir: 10/0, el resultado es: ");
try {
    let result = 10 / 0;
    console.log(result);
} catch (error) {
    console.log("Ocurrió un error: " + error.message);
}

console.log("Intentamos dividir: a/0, el resultado es: ");
try {
    let result = "a" / 0;
    console.log(result);
} catch (error) {
    console.log("Ocurrió un error: " + error.message);
}

console.log("Intentamos dividir: la variable a/0, el resultado es: ");
try {
    let result = a / 0;
    console.log(result);
} catch (error) {
    console.log("Ocurrió un error: " + error.message);
}

console.log("Intentamos dividir: el valor de la variable x entre el valor de la variable y, el resultado es:");
try {
    let x = 8, y = 2, result = x / y;
    console.log(result);
} catch (error) {
    console.log("Ocurrió un error: " + error.message);
}

console.log("%c5.- Control de Ciclos (BREAK/CONTINUE)", style_console);

// En algunas ocasiones será importante detener un ciclo de manera abrupta para controlar casos especiales en un ciclo...

console.log("Vamos a contar del 1 al 10...");
for (let num = 1; num < 11; num++) {
    console.log(num);
}
console.log("Ahora necesitamos que, si llegas al 7, pares de contar... suponiendo que solo por hoy es de mala suerte...");
for (num = 1; num < 11; num++) {
    if (num == 7)
        break;
    else
        console.log(num);
}
console.log("Ahora necesitamos que, si llegas al 7, te saltes ese número y continúes");
for (num = 1; num < 11; num++) {
    if (num == 7)
        continue;
    console.log(num);
}
console.log("%c6.- Ciclo Iterativo - (FOR)", style_console);

// Recorre de manera iterativa (i), de forma incremental o decremental

console.log("Los días de la semana en orden ascendente son: ");
let dias = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];

for (let i = 0; i < dias.length; i++) {
    console.log(dias[i]);
}
console.log("Ahora vamos a imprimir los meses en orden descendente...");
const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

for (let i = 11; i >= 0; i--) {
    console.log(meses[i]);
}

console.log("%c7.- Ciclo Condicionales - (WHILE)", style_console);
// Estos ciclos (BUCLE) dependen de una condición para continuar ejecutándose 
let finDeSemana = false;
let j = 0;
let mensaje = " ";
while (j < dias.length) {    
    // Lógica del ciclo
}

    // let diaHabil= dias[i];
switch(j) // Usamos "j" para que coincida con los casos
{
    case 0:
        finDeSemana = true;
        mensaje = "Domingo Perezoso";
        break;
    case 1:
        finDeSemana = false;
        mensaje = "Lunes casi viernes, ¡ÁNIMOS!";
        break;
    case 2:
        finDeSemana = false;
        mensaje = "Martes de comer Tacos dorados";
        break;
    case 3:
        finDeSemana = false;
        mensaje = "Miércoles casi VIERNES";
        break;
    case 4:
        finDeSemana = false;
        mensaje = "Último día que veo a mi noviecita en la escuela :c";
        break;
    case 5:
        finDeSemana = false;
        mensaje = "Viernes, ya no veo a mi noviecita :(";
        break;
    case 6:
        finDeSemana = true;
        mensaje = "Sábado, diviértete";
        break;
}

if (!finDeSemana) {
    console.log(`Día: ${j} ${dias[j]}`);
    console.log(`Mensaje del día: ${mensaje}`);
}
j++;

console.log("%c8.- Ciclo Condicionales, que se ejecuten al menos una vez - (DO...WHILE)", style_console);

let episodios = [
  "Episodio 1: Buscando las Semillas",
  "Episodio 2: Invasión Canina",
  "Episodio 3: Parque Anatómico",
  "Episodio 4: La Simulación Alienígena",
  "Episodio 5: Meeseeks Destructores"
];

let indice = 0;
let continuarViendo = true; // Esta variable simula la decisión del usuario de continuar viendo

do {
  console.log(`Reproduciendo ${episodios[indice]}`);
  // Simulamos la reproducción del episodio
  indice++;

  // Simulamos una pregunta al usuario si desea seguir viendo
  if (indice < episodios.length) {
    continuarViendo = confirm("¿Deseas continuar con el siguiente episodio?");
  } else {
    continuarViendo = false; // Cuando se acaba la lista de episodios
  }
} while (continuarViendo && indice < episodios.length);

console.log("Fin de la reproducción");
// El WHILE primero evalúa y luego ejecuta, y el DO...WHILE se repite mientras se cumple una determinada condición
console.log("%c9.- Ciclo para recorrer elementos finitos - (FOR...OF)", style_console);

let seriesTrending = [
  { nombre: "Rick y Morty", temporadas: 7, totalViewers: "3.0M", totalReprods: "30M" },
  { nombre: "One Punch Man", temporadas: 2, totalViewers: "2.0M", totalReprods: "3M" },
  { nombre: "La Historia de Jeffrey Dahmer", temporadas: 1, totalViewers: "3.0M", totalReprods: "2.5M" },
  { nombre: "Estamos Muertos", temporadas: 1, totalViewers: "3.5M", totalReprods: "1M" },
  { nombre: "Un Show Más", temporadas: 8, totalViewers: "4.0M", totalReprods: "10M" }
];

// Usando for...of para recorrer la lista
for (let serie of seriesTrending) {
  console.log(`Serie: ${serie.nombre}, Temporadas: ${serie.temporadas}`);
}
// console.log(`La última serie leída fue ${serie.nombre}`);

console.log("%c10.- Ciclos para recorrer las propiedades de elementos finitos - (FOR...IN)", style_console);

// Usando for...in para recorrer cada serie
for (let i in seriesTrending) {
  console.log(`Serie ${parseInt(i) + 1}:`);
  for (let propiedad in seriesTrending[i]) {
    console.log(`${propiedad}: ${seriesTrending[i][propiedad]}`);
  }
  console.log(`---------------------`);
}

// Se muestra un mensaje en la consola indicando que se abordará el uso del ciclo forEach para recorrer un arreglo.
console.log("%c11.- Ciclos interrumpidos para cada uno de los elementos del arreglo (FOR EACH)", style_console);

// Se define un arreglo de objetos que contiene información sobre series de TV en tendencia, incluyendo el nombre, número de temporadas, total de espectadores y reproducciones.
let seriesTrending2 = [
  { nombre: "Rick y Morty", temporadas: 7, totalViewers: "800000", totalReprods: "12000" },
  { nombre: "One Punch Man", temporadas: 2, totalViewers: "90000", totalReprods: "220000" },
  { nombre: "La Historia de Jeffrey Dahmer", temporadas: 3, totalViewers: "150000", totalReprods: "252000" },
  { nombre: "Estamos Muertos", temporadas: 1, totalViewers: "80000", totalReprods: "250000" },
  { nombre: "Un Show Más", temporadas: 3, totalViewers: "7000", totalReprods: "50000" },
];

// Se utiliza el método forEach para recorrer cada serie en el arreglo y calcular su calificación.
seriesTrending2.forEach((serie, index) => {
  // Se calcula la calificación como el cociente entre total de reproducciones y total de espectadores.
  let calificacion = (serie.totalReprods / serie.totalViewers).toFixed(2); // Se redondea a 2 decimales.

  console.log(`Serie ${index + 1}:`);
  console.log(`Nombre: ${serie.nombre}`);
  console.log(`Vistas: ${serie.totalViewers}`);
  console.log(`Reproducciones: ${serie.totalReprods}`);
  console.log(`Calificación: ${calificacion}`);
  console.log(`---------------------`);
});

let seriesDeseadas = ["Rick y Morty", "One Punch Man", "Un Show Más"];

let seriesConTresTemporadas = seriesTrending2
  .filter(serie => serie.temporadas <= 3) // Filtramos las series que tienen 3 temporadas
  .map(serie => serie.nombre) // Obtenemos solo los nombres de esas series
  .filter(nombre => seriesDeseadas.includes(nombre)); // Filtramos las que están en la lista de series deseadas

// Mostramos los resultados
console.log("Series con 3 temporadas que están en la lista deseada (TABLA): ");
