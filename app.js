const Perro = require("./Perro");
const Entrenador = require("./Entrenador")


const unEntrenador = new Entrenador("Facundo", "Behotegui", 25, 29/05/98, "CABA", 56485834, "Columbia", 1161069758, "Masculino", "Argentina");
const unoPerro = new Perro("Zando", 50.0, "Masculino", "DogoArgentino", true, 1.60, 4);
const dosPerro = new Perro("Umma", 43.0, "Femenino", "Golden", false, 1.30, 8);

console.log ( unEntrenador.getEdad() );
console.log ( unEntrenador.getNombre() );
console.log ( unoPerro.getCaracter() );
console.log ( dosPerro.getCaracter() );

unEntrenador.setEdad(15);
console.log ( unEntrenador.getEdad() );