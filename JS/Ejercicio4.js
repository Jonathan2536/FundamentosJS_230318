
const producto = {
    nombre: "tablet",
    precio: 100,
    disponible: true
}

console.log(producto);
console.table(producto);

console.log(producto.nombre);
console.log(precio.nombre);
console.log(disponible.nombre);

//Destructing

const {nombre2, precio2, disponible2} = producto
console.log(nombre);
console.log(precio);
console.log(disponible);

//Objeto Literal Enchantent

const autenticado = true;
const usuario = "F-Ank";
const newobject ={
    autenticado: autenticado,
    usuario: usuario
}

console.table(newobject);
