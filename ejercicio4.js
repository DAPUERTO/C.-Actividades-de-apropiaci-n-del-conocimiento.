/*
Contador de visitas web
Un portal inicia con 100 visitas registradas. Durante el día suma 25 nuevas visitas,
después se restan 10 por un fallo en el sistema, y al final la cantidad de visitas se multiplica por dos.
Modela este escenario y calcula cuántas visitas hay al terminar el día.
*/

// --- INICIO (Valor Inicial) ---
// Se establece el contador en 100.
let contador = 100;

// --- PASO 1: SUMAR VISITAS ---
// Se agregan 25 visitas más.
contador = contador + 25; // También puede escribirse como: contador += 25;

// --- PASO 2: RESTAR VISITAS ---
// Se descuentan 10 visitas por un inconveniente.
contador = contador - 10; // También puede escribirse como: contador -= 10;

// --- PASO 3: MULTIPLICAR VISITAS ---
// Se duplica la cantidad total de visitas.
contador = contador * 2; // También puede escribirse como: contador *= 2;

// --- RESULTADO ---
// Se muestra el resultado final del contador.
alert("El valor final del contador de visitas es: " + contador);