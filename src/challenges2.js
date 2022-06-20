// Desafio 11
function generatePhoneNumber(telefone) {
  if (telefone.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let index = 0; index < telefone.length; index += 1) {
    if (telefone[index] < 0 || telefone[index] > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
    contRepeticao = 0;
    for (let index2 = 0; index2 < telefone.length; index += 1) {
      if (telefone[index] === telefone[index2]) {
        contRepeticao += 1;
      }
      if (contRepeticao > 3) {
        return 'não é possível gerar um número de telefone com esses valores';
      }
    }
    return ('(' + telefone[0] + telefone[1] + ') ' + telefone[2] + telefone[3] + telefone[4] + telefone[5] + telefone[6] + '-' + telefone[7] + telefone[8] + telefone[9] + telefone[10]);
  }
}
console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]));
// exercicio 11
//implementar a função
//criar estrutura para retornar núemro padornizado
//criar estrutura para informar tamanho incorrto
// crirar estrutura para informar que não é possível gerar um numero com os valores informados.

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
let condition1 = false;
  if (lineA < lineB + lineC && lineB < lineA + lineC && lineC < lineA + lineC){
    condition1 = true;
    console.log(lineA,lineB,lineC,condition1)
};
let condition2 = false;
if (lineA > Math.abs(lineB - lineC) && lineB > Math.abs(lineA - lineC) && lineC > Math.abs(lineB - lineA)){
    condition2 = true;
    console.log(lineA,lineB,lineC,condition2)
};
let ehTriangulo = false;
if (condition1 === true && condition2 === true){
    ehTriangulo = true;
    console.log(condition1,condition2,ehTriangulo)
}
}
console.log(triangleCheck());
//implementar a função
//criar estrutura para verificar se qualquer lado é menor que a soma dos outros 2 lados
//criar estrutura para verificar se o valor Absoluto(mód) da dif é maior que os outros 2 lados.
// retornar a função com booleano

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
