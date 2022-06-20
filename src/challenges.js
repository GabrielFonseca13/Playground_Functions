// Desafio 1

function compareTrue(animal1, animal2) {
  if (animal1 === true && animal2 === true) {
    return true;
  } else {
    return false;
  }
}


// Desafio 2
function calcArea(base, height) {
  let resultado = (base * height) / 2;
  return resultado;
}
console.log(calcArea());

// Desafio 3
function splitSentence(palavras) {
  resultado = palavras.split(' ');
  return resultado;
}
console.log(splitSentence('go Trybe'));

// Desafio 4
function concatName(names) {
  for (let index = 0; index < names.length; index += 1) {
    let firstName = names[0];
    let lastName = names[names.length - 1];
    let resultado = lastName + ', ' + firstName;
    return resultado
  }
}
console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));

// Desafio 5
function footballPoints(wins, ties) {
  let pointWins = wins * 3;
  let sumPoints = pointWins + ties;
  return sumPoints;
}
console.log(footballPoints(10, 15));

// Desafio 6
function highestCount(parametro) {
  let maiorNum = parametro[0];
  let contRepetido = 0;
  for (let index = 0; index < parametro.length; index += 1){
    if(maiorNum < parametro[index]){
        maiorNum = parametro[index];
    }
    contRepetido = 0;
    for (let index2 = 0; index2 < parametro.length; index2 += 1){
        if (maiorNum === parametro[index2]){
            contRepetido += 1;
        }
    }
}
return contRepetido;
}
console.log(highestCount([0, 4, 4, 4, 9, 2, 1]));

// Desafio 7
function catAndMouse(posMouse, posCat1, posCat2) {
  let distCat1 = posCat1 - posMouse;
    if (distCat1 < 0){
      distCat1 = distCat1 * -1;
    }
  let distCat2 = posCat2 - posMouse;
    if (distCat2 < 0){
      distCat2 = distCat2 * -1;
    }
  if (distCat1 < distCat2){
    return 'cat1';
  } else if (distCat2 < distCat1){
    return 'cat2';
  } else if (distCat1 === distCat2){
    return 'os gatos trombam e o rato foge';
  }
}
console.log(catAndMouse(3,1,7));

// Desafio 8
function fizzBuzz(parametro) {
  let valor = [];
  for (let index = 0; index < parametro.length; index += 1){
    if(parametro[index] % 3 === 0 && parametro[index] % 5 === 0){
      valor.push ('fizzBuzz');
    } else if (parametro[index] % 3 === 0){
      valor.push ('fizz');
    } else if (parametro[index] % 5 === 0){
      valor.push ('buzz');
    } else {
      valor.push ('bug!');
    };
  };
  return valor;
}
console.log(fizzBuzz([2, 15, 7, 9, 45]));

// Desafio 9
//implementar uma funçao que codifica e decodifica
//criar estrutura para substituir vogal por números
// criar estrutura para substituir números por vogais
function encode(parametro) {
  let resultado1 = parametro.replaceAll('a', '1');
  let resultado2 = resultado1.replaceAll('e','2');
  let resultado3 = resultado2.replaceAll('i','3');
  let resultado4 = resultado3.replaceAll('o','4');
  let resultado5 = resultado4.replaceAll('u','5');
  return resultado5;
}
function decode(parametro) {
  let resultado1 = parametro.replaceAll('1', 'a');
  let resultado2 = resultado1.replaceAll('2','e');
  let resultado3 = resultado2.replaceAll('3','i');
  let resultado4 = resultado3.replaceAll('4','o');
  let resultado5 = resultado4.replaceAll('5','u');
  return resultado5;
}
console.log(decode('H4w 1r2 y45 t4d1y?'));
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