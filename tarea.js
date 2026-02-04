//switch 
let mes =12;
switch(mes){
    case 12:
    case 1:
    case 2:
        console.log("Invierno");
        break;
    case 3:
    case 4:
    case 5:
        console.log("Primavera");
        break;
    case 6:
    case 7:
    case 8:
        console.log("Verano");
        break;
    case 9:
    case 10:
    case 11:
        console.log("Otoño");
        break;
    default:
        console.log("Mes no válido");
        break;
}

//for 
for(let i=0;i<=5;i+=2){
    console.log(i);
}
for(let i=1;i<=10;i++){
    console.log(i+"^2 = "+(i*i));
}

//while, do while 
let num=10;
while(num>=1){
    console.log(num);
    num--;
}

do{
    console.log("Este mensaje se muestra al menos una vez");

}while(false);

//break y continue
for(let i=1;i<=10;i++){
    if(i===6){ //=== compara valor y tipo
        break; //corta el bucle al llegar al 6
    }
}
for(let i=1;i<=10;i++){
    if(i===5){
        continue; //continua el bucle saltandose el 5
    }
}

//try catch

let a=10;

try{
    let suma=a+b;
    alert("La suma es: "+suma);
}catch(error){
    console.error("error:",error.message);
}
 
let texto="hola";//texto que no es un número

try{//intenta ejecutar este bloque de código

    let numero=Number(texto);//convierte texto a número
   if(texto!==numero){//comprueba si no es un número
         console.log("El texto no es un número");
   }else{
         console.log("El texto es un número");
   }

}catch(error){//captura error
    console.error("error:",error.message);
}