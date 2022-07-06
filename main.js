'use strict';

/* El juego consiste en que la aplicación genera un número al azar entre 1 y 100 y la jugadora tiene que
adivinarlo. El juego da pistas sobre si el número que prueba es demasiado alto o bajo, y va contabilizando el
número de intentos. Hasta que al final la jugadora acierta el número. Si la jugadora quiere adivinar otro
número, deberá volver a cargar la página. */


console.log('Esto funciona');

function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
};

const randonNumber = getRandomNumber(100);
console.log(`Mi número aleatorio es ${randonNumber}`);
