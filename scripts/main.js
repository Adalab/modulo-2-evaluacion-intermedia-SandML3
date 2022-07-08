'use strict';

//Pasos a seguir:
//--1.Guardamos en variables los elementos HTML que vamos a necesitar: input, botón, textos(pista y contador de intentos).
//--2. Añadimos la función que genera números aleatorios y comprobamos que funciona correctamente. Guardamos su retorno en una constante para trabajar con el número aleatorio generado.
//--3.Añadimos el evento click al botón y definimos las funciones que contendrá: 
//------*.Validar si el dato introducido es correcto.
//------a.Sumar intento al contador.
//------b.Comprobar si el número introducido está dentro del rango permitido.
//------c.Comprobar si el número es igual al random o no y mostrar pistas en función de ello.
//------d.Inicializar el campo del input.



const inputUserNumber = document.querySelector('.main__form__userNumber');
const buttonForm = document.querySelector('.main__form__button');
const textClue = document.querySelector('.main__clue');
const textTries = document.querySelector('.main__triesNumber');
const form = document.querySelector('.main__form');
const resetButton = document.querySelector('.main__form__button--reset');
let numberOfTries = 0;

const getRandomNumber = max => Math.ceil(Math.random() * max);
const randonNumber = getRandomNumber(100);

console.log(`Mi número aleatorio es ${randonNumber}`);

const checkNumber = userNumber => {
  if (textClue.classList.contains('error')) {
    textClue.classList.remove('error');
  }
  userNumber === randonNumber 
  ?includeHTML('<span class="main__clue--bold">¡¡¡Has ganado, campeona!!!</span> Refresca la página para comenzar un nuevo reto.', textClue) 
  : userNumber < randonNumber 
  ?includeHTML('Demasiado bajo.', textClue) 
  :includeHTML('Demasiado alto.', textClue);
}

const validateUserNumber = (userNumber) => {
  if (!userNumber && userNumber !== 0) {
    includeHTML('Debe introducir un número.',textClue);
    textClue.classList.add('error');
  } else {
    userNumber < 1 || userNumber > 100 
    ? numberOutOfRange(userNumber)
    : checkNumber(userNumber);
  }
};

const includeHTML = (string, element) => {
  element.innerHTML = string;
};

const numberOutOfRange = (userNumber) => {
  textClue.classList.add('error');
  userNumber < 1 
    ?includeHTML('Has introducido un número menor de 1.<span class="explanation"> El número debe estar comprendido entre 1 y 100.</span>', textClue)
    :includeHTML('Has introducido un número mayor de 100.<span class="explanation"> El número debe estar comprendido entre 1 y 100.</span>', textClue);
}

const triesCounter = () => {
  numberOfTries++;
  includeHTML(`Número de intentos: ${numberOfTries}`, textTries); 
};

const initInputNumber = () => inputUserNumber.value = '';

const handlerFunction = (event) => {
  event.preventDefault();
  const userNumber = parseInt(inputUserNumber.value);
  triesCounter();
  validateUserNumber(userNumber);
  initInputNumber();
}; 

const avoidRefreshing = (event) => {
  if (event.key === 'Enter') {
    event.preventDefault();
    buttonForm.click()
  }
}


buttonForm.addEventListener('click', handlerFunction);
inputUserNumber.addEventListener('keypress', avoidRefreshing);

const initInput = () => inputUserNumber.value = "";
const initTries = () => {
  numberOfTries= 0
  includeHTML(`Número de intentos: ${numberOfTries}`, textTries);
};
const initTextClue = () => {
  if (textClue.classList.contains('error')) {
    textClue.classList.remove('error');
  };
  includeHTML(`¡Empecemos de nuevo! <span class="explanation">Pista: <span class="main__clue--capitalize">escribe</span> el número y dale a <span class="main__clue--capitalize">prueba</span></span>`, textClue);
};

const resetHandlerFunction = (event) => {
  event.preventDefault();
  initInput();
  initTries();
  initTextClue();
  getRandomNumber(100);
};

resetButton.addEventListener('click', resetHandlerFunction);