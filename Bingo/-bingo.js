function bingo() {
  //  Creo el cartón con una función que devuelve un array de números aleatorios.

  const nuevoCarton = () => {
    const cartonArr = [];
    for (let i = 0; i < 5; i++) {
      cartonArr.push(Math.floor(Math.random() * 98) + 1);
    }
    return cartonArr;
  };

  //  Función para generar número aleatorio.

  const nuevoNum = () => Math.floor(Math.random() * 98) + 1;

  //  Función para comprobar si se consiguió línea.
  function isLine(numMarcados, carton) {
    if (numMarcados === carton.length) {
      return true;
    }
    return false;
  }

  //  Función para comprobar que un número no haya salido anteriormente, devuelve true si el número está repetido.
  function checkRep(num, numSalidos) {
    for (let i = 0; i < numSalidos.length; i++) {
      if (num === numSalidos[i]) {
        return true;
      }
    }
    return false;
  }

  //  Se llaman las funciones.
  let contador = 0;
  const carton = nuevoCarton();

  const numSalidos = [0];
  let numMarcados = 0;
  console.log(carton);

  //  Función para avanzar turno.
  function nuevoTurno(num) {
    for (let i = 0; i < carton.length; i++) {
      if (num === carton[i]) {
        carton[i] = "X";
        numMarcados++;
      }
    }
    return carton;
  }

  //  Función para preguntar si avanzar turno.
  function preguntaTurno(num) {
    if (window.confirm(`¡Ha salido el ${num}! ¿Continuar?`)) {
      nuevoTurno(num);
    }
    return false;
  }

  //  Empieza turno.
  if (window.confirm("Bienvenido al Bingo ¿Empezamos?") === true) {
    while (contador < 500) {
      const num = nuevoNum(numSalidos);
      if (preguntaTurno(num) === false) {
        alert(`Has jugado ${contador} turnos! ¡Gracias por jugar!`);
        return;
      }
      if (checkRep(num, numSalidos) === false) {
        numSalidos.push(num);
        contador++;
      }
      console.log("Este número ya ha salido.");
      contador++;
    }

    console.log(carton);
    if (isLine(numMarcados, carton)) {
      alert(`¡Felicidades!¡Has logrado LÍNEA en ${contador} turnos!`);
      return;
    }
  }
  alert(`¡Lástima! Han pasado ${contador} y no has logrado LÍNEA.`);
}

bingo();
