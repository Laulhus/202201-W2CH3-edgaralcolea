function bingo() {
  //Creo el cartón con una función que devuelve un array de números aleatorios.

  let nuevoCarton = () => {
    let cartonArr = [];
    for (let i = 0; i < 5; i++) {
      cartonArr.push(Math.floor(Math.random() * 98) + 1);
    }
    return cartonArr;
  };

  //Función para generar número aleatorio.

  let nuevoNum = (numSalidos) => {
    return Math.floor(Math.random() * 98) + 1;
    
  
  };

  //Función para avanzar turno.
  function nuevoTurno(num) {
    for (let i = 0; i < carton.length; i++) {
      if (num === carton[i]) {
        carton[i] = "X";
        numMarcados++;
      }
    }
    return carton;
  }
  //Función para preguntar si avanzar turno.
  function preguntaTurno(num) {
    if (confirm(`¡Ha salido el ${num}! ¿Continuar?`)) {
      nuevoTurno(num);
    } else {
      return false;
    }
  }
  //Función para comprobar si se consiguió línea.
function isLine (numMarcados, carton){
 
if (numMarcados === carton.length){
  return true;
} else {
  return false;
}
  }

  //Función para comprobar que un número no haya salido anteriormente, devuelve true si el número está repetido.
  function checkRep(num, numSalidos) {
    for (let i = 0; i < numSalidos.length; i++) {
      if (num === numSalidos[i]) {
        return true;
      }
    }
    return false;
  }

  //Se llaman las funciones.
  let contador = 0;
  let carton = nuevoCarton();
  let numSalidos = [0];
  let numMarcados = 0;
  console.log(carton);
  //Empieza turno.
  if (confirm("Bienvenido al Bingo ¿Empezamos?") === true) {
    
    while (contador < 500) {
      let num = nuevoNum(numSalidos);
      if (preguntaTurno(num) === false) {
        alert(`Has jugado ${contador} turnos! ¡Gracias por jugar!`);
        return;
      } else {
        if (checkRep(num, numSalidos) === false) {
          numSalidos.push(num);
          contador++;
        } else {
          console.log('Este número ya ha salido.')
          contador++;
        }
      }
      
      console.log(carton);
      if (isLine(numMarcados, carton)){
        alert(`¡Felicidades!¡Has logrado LÍNEA en ${contador} turnos!`);
        return;
      }
    }
    alert(`¡Lástima! Han pasado ${contador} y no has logrado LÍNEA.`);
    return;
  }
}
bingo();
