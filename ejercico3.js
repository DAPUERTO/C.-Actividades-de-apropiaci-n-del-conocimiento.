/*
Registro de visitas en la web
Un sitio inicia con 100 visitas. Durante la jornada se suman 25 visitas nuevas,
luego se restan 10 por un fallo en el conteo, y al final se duplican las visitas.
Simula este proceso y calcula el total de visitas al finalizar el día.
*/

// --- ESTADO INICIAL ---
// El contador se inicializa en 100.
let contador = 100;

// --- PASO 1: INCREMENTAR VISITAS ---
// Se añaden 25 visitas al contador.
contador = contador + 25; // También se puede escribir como: contador += 25;

// --- PASO 2: REDUCIR VISITAS ---
// Se eliminan 10 visitas por un error en el sistema.
contador = contador - 10; // También se puede escribir como: contador -= 10;

// --- PASO 3: DOBLAR VISITAS ---
// El número de visitas se multiplica por dos.
contador = contador * 2; // También se puede escribir como: contador *= 2;

// --- RESULTADO FINAL ---
// Se muestra el total de visitas al terminar el proceso.
alert("El valor final del contador de visitas es: " + contador);