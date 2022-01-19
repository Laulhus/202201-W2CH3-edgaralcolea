//  Se declara la variable con los vuelos de forma global.
const flights = [
  { id: 0, to: "Bilbao", from: "Barcelona", cost: 1600, scale: false },

  { id: 1, to: "New York", from: "Barcelona", cost: 700, scale: false },

  { id: 2, to: "Los Angeles", from: "Madrid", cost: 1100, scale: true },

  { id: 3, to: "Paris", from: "Barcelona", cost: 210, scale: false },

  { id: 4, to: "Roma", from: "Barcelona", cost: 150, scale: false },

  { id: 5, to: "London", from: "Madrid", cost: 200, scale: false },

  { id: 6, to: "Madrid", from: "Barcelona", cost: 90, scale: false },

  { id: 7, to: "Tokyo", from: "Madrid", cost: 1500, scale: true },

  { id: 8, to: "Shangai", from: "Barcelona", cost: 800, scale: true },

  { id: 9, to: "Sydney", from: "Barcelona", cost: 150, scale: true },

  { id: 10, to: "Tel-Aviv", from: "Madrid", cost: 150, scale: false },
];

//  Función que muestra la información de los vuelos disponibles.
function airlines() {
  //  Se pide nombre de usuario.
  const userName = window.prompt(
    "Introduzca su nombre de usuario.",
    "Usuario:"
  );
  if (userName == null) {
    window.alert("¡Adiós!");
    return;
  }
  alert(
    `Bienvenido a Skylab Airlines ${userName}.\n Estos son los vuelos de hoy.`
  );
  let avgCost = 0;
  //  Se recorre el array de vuelos y se muestran sus datos y su coste medio.
  for (let i = 0; i < flights.length; i++) {
    console.log(
      `El vuelo con origen: ${flights[i].from}, y destino: ${flights[i].to}, ` +
        `tiene un coste de ${flights[i].cost}€ y ${
          flights[i].scale ? "realiza escalas" : "no realiza escalas"
        }.`
    );
    avgCost += flights[i].cost.valueOf();
  }
  console.log(
    `\nEl precio medio de los vuelos es: ${parseFloat(
      avgCost / flights.length
    ).toFixed(2)}€.\n`
  );
  //  Se muestran vuelos con escala y últimos del día.
  console.log(`Los vuelos que realizan escalas son:\n`);
  for (let j = 0; j < flights.length; j++) {
    if (flights[j].scale) {
      console.log(
        `Vuelo EA${flights[j].id}: ${flights[j].from} - ${flights[j].to}.`
      );
    }
  }
  console.log(`\nLos últimos 5 vuelos del día tienen destino a:\n`);
  for (let l = flights.length - 5; l < flights.length; l++) {
    console.log(`- ${flights[l].to}.\n`);
  }
}

//  Función para mostras la lista de vuelos.
function showFlights() {
  console.log("\nLista de vuelos:");
  for (let i = 0; i < flights.length; i++) {
    console.log(
      `EA${flights[i].id} con origen: ${flights[i].from}, y destino: ${flights[i].to}, ` +
        `tiene un coste de ${flights[i].cost}€ y ${
          flights[i].scale ? "realiza escalas" : "no realiza escalas"
        }.`
    );
  }
}

//  Función para localizar vuelo por ID.
function findId(id) {
  let i = 0;
  while (i < flights.length) {
    if (id === flights[i].id) {
      return i;
    }
    i++;
  }
  return false;
}

//  Función para buscar vuelo por precio.
function findPrice(price) {
  let i = 0;
  while (i < flights.length) {
    if (price >= flights[i].cost) {
      console.log(
        `EA${flights[i].id} con origen: ${flights[i].from}, y destino: ${flights[i].to}, ` +
          `tiene un coste de ${flights[i].cost}€ y ${
            flights[i].scale ? "realiza escalas" : "no realiza escalas"
          }.`
      );
      i++;
    } else {
      i++;
    }
  }
}
//  Función para eliminar vuelos.

function delFlight() {
  const id = parseInt(prompt("Introduzca el número de vuelo a eliminar."), 10);
  const delId = findId(id);
  if (delId === false) {
    alert("El vuelo no se ha encontrado.");
    delFlight();
  } else {
    alert(
      `El vuelo EA${flights[delId].id} con origen ${
        flights[delId].from.charAt(0).toUpperCase() +
        flights[delId].from.substring(1)
      } y` +
        ` destino ${
          flights[delId].to.charAt(0).toUpperCase() +
          flights[delId].to.substring(1)
        } se ha eliminado.`
    );
    flights.splice([delId], 1);
  }
}
//  Función para comprar un vuelo.
function buyFlight() {
  const id = parseInt(
    prompt("Introduzca el número de vuelo que desea comprar."),
    10
  );
  const buyId = findId(id);
  if (buyId === false) {
    alert("El vuelo no se ha encontrado.");
    buyFlight();
  } else {
    alert(
      `Ha comprado el vuelo EA${flights[buyId].id} con origen ${
        flights[buyId].from.charAt(0).toUpperCase() +
        flights[buyId].from.substring(1)
      } y` +
        ` destino ${
          flights[buyId].to.charAt(0).toUpperCase() +
          flights[buyId].to.substring(1)
        }.`
    );
    alert("Gracias por su compra, vuelva pronto.");
  }
}

//  Función para crear vuelos.
function addFlight() {
  const newFlight = { id: 0, to: " ", from: " ", cost: 0, scale: null };
  let n = 0;
  newFlight.id = prompt("Introduzca el ID del vuelo.");
  if (findId(newFlight.id)) {
    alert("ID ya en uso.");
    addFlight();
  } else {
    newFlight.from = prompt("Introduzca el origen del vuelo.");
    newFlight.to = prompt("Introduzca el destino del vuelo.");
    newFlight.cost = parseFloat(prompt("Introduzca el coste del vuelo."));
    let scale = prompt("¿El vuelo tiene escalas? Y/N").toUpperCase();
    while (n !== 1) {
      if (scale === "Y") {
        newFlight.scale = true;
        n++;
      } else if (scale === "N") {
        newFlight.scale = false;
        n++;
      } else {
        scale = prompt("Entrada no válida, introduce Y o N").toUpperCase();
      }
    }

    console.log(newFlight);
    flights.push(newFlight);
    alert(
      `El vuelo EA${newFlight.id} con origen ${
        newFlight.from.charAt(0).toUpperCase() + newFlight.from.substring(1)
      } y` +
        ` destino ${
          newFlight.to.charAt(0).toUpperCase() + newFlight.to.substring(1)
        } se ha añadido a la lista.`
    );
  }
}

//  Función que pedirá al usuario su nivel de acceso para habilitar unas herramientas u otras.
function airlinesPro(input) {
  let access = input;
  let n = 0;
  while (n !== 1) {
    //  Si se entra como ADMIN.
    if (access === "ADMIN") {
      alert(`Has entrado como ${access}.`);

      n++;
      const option = prompt(
        `Introduce "Add" para añadir vuelos o "Del" para eliminarlos`
      ).toUpperCase();
      switch (option) {
        case "ADD":
          if (flights.length === 15) {
            alert("No se pueden añadir más vuelos.");
          } else {
            addFlight();
            showFlights();
          }
          if (window.confirm("¿Desea realizar otra operación como ADMIN?")) {
            airlinesPro(access);
          } else {
            break;
          }
          break;
        case "DEL":
          delFlight();
          showFlights();
          if (window.confirm("¿Desea realizar otra operación como ADMIN?")) {
            airlinesPro(access);
          } else {
            break;
          }
          break;
        default:
          alert("Opción no válida, introduce 'Add' o 'Del'.");
          airlinesPro(access);
      }
      //  Si se entra como USER.
    } else if (access === "USER") {
      alert(`Has entrado como ${access}.`);

      n++;
      const userPrice = parseInt(prompt("Introduzca el precio que busca."), 10);
      if (Number.isNaN(userPrice)) {
        alert("Formato no válido, introduzca un número.");
        airlinesPro(access);
      } else {
        console.log(`Los vuelos que cuestan ${userPrice} o menos son:`);
        findPrice(userPrice);
        buyFlight();
        if (window.confirm("¿Desea realizar otra operación como USER?")) {
          airlinesPro(access);
        }
      }
    } else {
      access = prompt(
        "Entrada no válida, introduzca ADMIN o USER."
      ).toUpperCase();
    }
  }
  showFlights();
}
//  Pedimos al usuario el nivel de acceso mediante un prompt
const access = prompt(
  "Introduzca nivel de acceso.",
  "ADMIN/USER"
).toUpperCase();
airlinesPro(access);

airlines();
if (window.confirm("¿Desea continuar realizando operaciones?")) {
  airlines();
}
alert("¡Hasta la próxima!");
