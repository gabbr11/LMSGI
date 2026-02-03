//practica1.js
let nombre = "Gabriel";
let edad = 20;
let esAlumno = true;

console.log("Nombre:", nombre);
console.log("Edad:", edad);
console.log("Es alumno:", esAlumno);

console.log("Tipo de 'nombre':", typeof nombre);
console.log("Tipo de 'edad':", typeof edad);
console.log("Tipo de 'esAlumno':", typeof esAlumno);    

//practica2.js
let precio=10;
let cantidad=3;
let total=precio*cantidad;
total-=2;

console.log("Total a pagar:", total, "€");

//practica3.js
let nota=10;
if(nota>=5){
    console.log("Aprobado")
}if(nota<5) {
    console.log("Suspenso")
}

//practica4.js
let numero=5; let texto="5";
console.log("numero == texto:", numero == texto); 
// true -> porque == compara solo el valor, no el tipo

console.log("numero === texto:", numero === texto); 
// false -> porque === compara valor y tipo.

//practica5.js
let listaCompra=["pan","leche","huevos"];
console.log("primero producto",listaCompra[0]);
console.log("último producto",listaCompra[2]); 
console.log("numero total de productos:",listaCompra.length); 
console.log("añadimos queso a la lista de la compra");
listaCompra.push("queso");
console.log("número total de productos después de añadir queso:",listaCompra.length); 
//practica6.js
for(let i=0;i<listaCompra.length;i++){ //recorremos array ejercicio5
    console.log("Producto",i+1+":"+listaCompra[i]);
}

//practica7.js
let notasAlumnos=[4, 6, 8, 3, 9];
let aprobados=0;
let suspensos=0;
for(let i=0;i<notasAlumnos.length;i++){//recorremos array notasAlumnos
    if(i>=5){//condicion
        console.log("Alumno",i+1+"aprobado");
        aprobados++;//acumuladores
    }if(i<5){
        console.log("Alumno",i+1+"suspenso");
        suspensos++;
    }
}
console.log("Número de aprobados:",aprobados);
console.log("Número de suspensos:",suspensos);