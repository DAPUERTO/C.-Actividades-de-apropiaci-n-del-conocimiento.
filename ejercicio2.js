/*
Promedio de notas de un estudiante
Un estudiante tiene tres calificaciones en sus exámenes. Debe averiguar el promedio
para conocer su desempeño en la materia. Realiza un programa que reciba tres
números y muestre el promedio en pantalla.
*/

// --- RECEPCIÓN DE DATOS ---
// Solicitamos al usuario ingresar las tres calificaciones.
let nota1Texto = prompt("Ingresa la primera nota:");
let nota2Texto = prompt("Ingresa la segunda nota:");
let nota3Texto = prompt("Ingresa la tercera nota:");

// --- CONVERSIÓN DE DATOS ---
// Transformamos las entradas en valores numéricos.
let nota1 = Number(nota1Texto);
let nota2 = Number(nota2Texto);
let nota3 = Number(nota3Texto);

// --- CÁLCULO DEL PROMEDIO ---
// Sumamos las tres notas y dividimos entre tres para obtener el promedio.
let promedio = (nota1 + nota2 + nota3) / 3;

// --- RESULTADO ---
// Presentamos el promedio al usuario.
alert("El promedio de las notas es: " + promedio);