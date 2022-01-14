// 10 - Calcule a média de consumo de combustível utilizada em uma viagem e o
// tempo levado durante a viagem. Você deve imprimir no console esses dois
// valores:
// Os valores de entrada serão:
// Distância percorrida na viagem em km;
// Velocidade do automóvel em km/h;
// Quantidade de combustível gasto em litros.
// Exemplo de Entrada:
// 240
// 80
// 20
// Exemplo de Saída:
// Média de consumo: 12 km/l
// Tempo da viagem: 3 horas

let distKm = 240
let velKmH = 80
let litersFuel = 20

let averageCons = distKm / litersFuel
let timeTravel = distKm / velKmH

console.log("Média de consumo: " + averageCons + " km/l")
console.log("Tempo da viagem: " + timeTravel + " horas")
