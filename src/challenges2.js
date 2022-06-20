// Desafio 11
function generatePhoneNumber(numTelefone) {
  if (numTelefone.length != 11) {
    return 'Array com tamanho incorreto.';
  }
  let counter = 0;
for (let index = 0; index < numTelefone.length; index = index +1 ) {
  for (let index2 = 0; index2 < numTelefone.length; index2 = index2 +1 ) {
      if (numTelefone[index] === numTelefone[index2]) {
        counter += 1;
      }
      if (counter === 3) {
        return 'não é possível gerar um número de telefone com esses valores';
      }
      if (numTelefone[index] > 9 || numTelefone[index] < 0) {
        return 'não é possível gerar um número de telefone com esses valores';
      }
    }
    counter = 0;
  }
  numTelefone.splice(0, 0, '(');
  numTelefone.splice(3, 0, ')');
  numTelefone.splice(4, 0, ' ');
  numTelefone.splice(10, 0, '-');
  numTelefone = numTelefone.join('');
  return numTelefone;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA > lineB + lineC || lineA < Math.abs(lineB - lineC)) {
    return false;
  }
  if (lineB > lineA + lineC || lineB < Math.abs(lineA - lineC)) {
    return false;
  }
  if (lineC > lineB + lineA || lineC < Math.abs(lineB - lineA)) {
    return false;
  } else {
    return true;
  }
}

// Desafio 13
function hydrate(param) {
  let takeOutNumbers = /\d+/g;
  let resultado = param.match(takeOutNumbers);
  sum = 0;
  for (index = 0; index < resultado.length; index = index + 1) {
    sum = sum + parseInt(resultado[index]);
  }
  if (sum === 1) {
    return sum + ' copo de água';
  } else {
    return sum + ' copos de água';
  }
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
