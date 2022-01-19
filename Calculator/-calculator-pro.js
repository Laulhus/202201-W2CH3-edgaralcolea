//Declaramos la función.
function calculatorPRO() {
  //Inicializamos variables y pedimos números al usuario.
  let newNumber;
  let numberList = [];
  do {
    newNumber = prompt("Introduce un número o pulsa Cancelar para parar.");
    if (isNaN(newNumber) || newNumber == "") {
      alert("Formato no válido.");
    } else if (newNumber !== null) {
      newNumber = parseFloat(newNumber);
      numberList.push(newNumber);
    }
  } while (newNumber != null);
  //Comprobamos si solo se ha introducido un número.
  if (numberList.length == 1) {
    console.log(
      `Has introducid un solo número, su raíz cuadrada es ${
        Math.round(Math.sqrt(numberList[0]) * 1000) / 1000
      }`
    );
    if (confirm("¿Desea realizar otra operación?")) {
      calculatorPRO();
    } else {
      console.log("¡Adiós!");
    return;
    }
    //Inicializamos y guardamos resultados.
  } else {
    let resultSum = 0;
    let resultRes = 0;
    let resultMul = 1;
    let resultDiv = numberList[0];

    for (let i = 0; i < numberList.length; i++) {
      resultSum += numberList[i];
      resultRes -= numberList[i];
      resultMul *= numberList[i];
    }
    for (let j = 1; j < numberList.length; j++) {
      resultDiv /= numberList[j];
    }
    //Guardamos resultados en un array.
    let resultados = [];
    resultados.push(resultSum, resultRes, resultMul, resultDiv);
    //Mostramos resultados.
    console.log(
      `Resultados:\nDe la suma: ${resultados[0]}\nDe la resta: ${
        resultados[1]
      }\nDe la multiplicación: ${resultados[2].toFixed(
        3
      )}\nDe la división: ${resultados[3].toFixed(3)}`
    );
  }
  //Preguntamos al usuario si quiere volver a empezar.
  if (confirm("¿Desea realizar otra operación?")) {
    calculatorPRO();
  } else {
    console.log("¡Adiós!");
  }
}
calculatorPRO();
