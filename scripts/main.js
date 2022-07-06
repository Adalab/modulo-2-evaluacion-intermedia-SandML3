'use strict';

//Pasos a seguir:
//--1.Guardamos en variables los elementos HTML que vamos a necesitar: input, botón, textos(pista y contador de intentos).
//--2. Añadimos la función que genera números aleatorios y comprobamos que funciona correctamente. Guardamos su retorno en una constante para trabajar con el número aleatorio generado.
//--3.Añadimos el evento click al botón y definimos las funciones que contendrá: 
//------a.Sumar intento al contador.
//------b.Comprobar si el número introducido está dentro del rango permitido.
//------c.Comprobar si el número es igual al random o no y mostrar pistas en función de ello.
//------d.Inicializar el campo del input.



const inputUserNumber = document.querySelector('.main__form__userNumber');
const buttonForm = document.querySelector('.main__form__button');
const textClue = document.querySelector('.main__clue');
const textTries = document.querySelector('.main__triesNumber');
let numberOfTries = 0;

const getRandomNumber = max => Math.ceil(Math.random() * max);
const randonNumber = getRandomNumber(100);

console.log(`Mi número aleatorio es ${randonNumber}`);



const checkNumber = userNumber => parseInt(userNumber) === randonNumber ?textClue.innerHTML = "<span class='main__clue--bold'>¡¡¡Has ganado, campeona!!!</span> Refresca la página para comenzar un nuevo reto." : parseInt(userNumber) < randonNumber ?textClue.innerHTML = "Demasiado bajo.": textClue.innerHTML = "Demasiado alto.";

const validateUserNumber = userNumber => userNumber < 1 || userNumber > 100 ? textClue.innerHTML = "El número debe estar entre 1 y 100": checkNumber(userNumber);

const triesCounter = (numberOfTries) => textTries.innerHTML = `Número de intentos: ${numberOfTries}`; 

const initInputNumber = () => inputUserNumber.value = "";

const handlerFunction = (event) => {
    event.preventDefault();
    const userNumber = inputUserNumber.value;
    numberOfTries += 1;

    triesCounter(numberOfTries);
    validateUserNumber(userNumber);
    initInputNumber();
}

buttonForm.addEventListener('click', handlerFunction);