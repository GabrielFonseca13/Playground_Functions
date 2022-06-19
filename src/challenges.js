// Desafio 1

function compareTrue(animal1, animal2) {
  if (animal1 === true && animal2 === true) {
    return true;
  } else if (animal1 === true && animal2 === false){
    return false;
  } else {
    return false;
  }
}
console.log(compareTrue('girafa','elefante'));

// Desafio 2
function calcArea(base, height) {
  let resultado = (base * height) / 2;
  return resultado;
}
console.log(calcArea(10,50));


// Desafio 3
function splitSentence() {

  // seu código aqui
}

// Desafio 4
function concatName() {

  
}

// Desafio 5
function footballPoints(wins, ties) {
  let pointWins = wins * 3
  let sumPoints = pointWins + ties;
  return sumPoints   
}
console.log(footballPoints(10,15));

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
