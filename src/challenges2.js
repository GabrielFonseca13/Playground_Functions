// Desafio 11
function generatePhoneNumber() {


}

// Desafio 12
function triangleCheck(lineA, lineB, lineC){
  if (lineA > lineB + lineC || lineA < Math.abs(lineB - lineC)) {
    return false
} else if (lineB > lineA + lineC || lineB < Math.abs(lineA - lineC)) {
    return false
} else if (lineC > lineB + lineA || lineC < Math.abs(lineB - lineA)) {
    return false
} else {
return true
}
}
console.log(triangleCheck(10,14,8));


// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
