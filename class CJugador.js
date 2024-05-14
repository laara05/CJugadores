class CJugador {
    constructor(nombre, posicion, edad, estatura, peso, nacionalidad) {
      this.nombre = nombre;
      this.posicion = posicion;
      this.edad = edad;
      this.estatura = estatura;
      this.peso = peso;
      this.nacionalidad = nacionalidad;
    }
  }
  
  // jugadores
  const jugadores = [
    new CJugador("Fabio1", "G", 43, 1.88, 86, "Brasil"),
    new CJugador("Marlon4", "D", 28, 1.83, 78, "Brasil"),
    new CJugador("Marcelo12", "D", 35, 1.73, 72, "Brasil"),
    new CJugador("Nino33", "D", 26, 1.88, 82, "Brasil"),
    new CJugador("John Kennedy9", "A", 21, 1.73, 71, "Brasil"),
    new CJugador("Keno11", "A", 34, 1.78, 72, "Brasil"),
    new CJugador("Germán Cano14", "A", 35, 1.78, 81, "Argentina")
  ];
  
  // a. jugadores argentinos
  console.log("Jugadores de nacionalidad Argentina:");
  jugadores.forEach(jugador => {
    if (jugador.nacionalidad === "Argentina") {
      console.log(jugador.nombre);
    }
  });
  
  // b. jugadores que pesen entre 75 y 80 kg
  console.log("\nJugadores con peso entre 75 y 80 kg:");
  jugadores.forEach(jugador => {
    if (jugador.peso >= 75 && jugador.peso <= 80) {
      console.log(jugador.nombre);
    }
  });
  
  // c. jugador más alto
  let jugadorMasAlto = jugadores[0];
  jugadores.forEach(jugador => {
    if (jugador.estatura > jugadorMasAlto.estatura) {
      jugadorMasAlto = jugador;
    }
  });
  console.log("\nEl jugador más alto es:", jugadorMasAlto.nombre);
  