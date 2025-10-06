// --- SOLICITUD DE DATOS ---
// Solicitamos al usuario los valores de base y altura como texto.
let baseTexto = prompt("Ingresa la base del rectángulo (metros):");
let alturaTexto = prompt("Ingresa la altura del rectángulo (metros):");

// --- CONVERSIÓN DE DATOS ---
// Transformamos los textos ingresados a valores numéricos.
let baseNumero = Number(baseTexto);
let alturaNumero = Number(alturaTexto);

// --- CÁLCULO DEL ÁREA ---
// Calculamos el área multiplicando base por altura.
let area = baseNumero * alturaNumero;

// --- CÁLCULO DEL PERÍMETRO ---
// Sumamos base y altura y multiplicamos el resultado por dos.
let perimetro = 2 * (baseNumero + alturaNumero);

// --- PRESENTACIÓN DE RESULTADOS ---
// Enviamos al usuario el área y el perímetro calculados.
alert("Área: " + area + " m².");
alert("Perímetro: " + perimetro + " m.");