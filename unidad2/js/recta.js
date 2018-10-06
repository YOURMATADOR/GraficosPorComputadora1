//xi, yi se usan para guardar las coordenadas del primer punto de la recta
let canvas = document.getElementById("miCanvas");
canvas.addEventListener("click", dibujar);
var xi = 0;
var yi = 0;
//la recta se define por dos puntos, el punto inicial de la recta
//será la posición donde se haga clic por primera vez y el punto
//final estara definido por la ubicación del segundo clic
var primerPunto = true; //bandera para controlar los clics
const inicioFin = (contexto, x, y) => {
  contexto.fillStyle = "#0000";
  contexto.fillRect(x, y, 3, 3);
};
function ponerPixel(contexto, x, y, color) {
  //Pintar un punto
  contexto.fillStyle = color;
  contexto.fillRect(x, y, 1, 1);
}
//Para pintar una recta esta función deberá ser ejecutada dos veces
//la primera vez captura las coordenadas del punto incial de la recta
//y lo grafica sobre el lienzo. La segunda vez toma las coordenadas
//del segundo punto y pinta la línea llamando a la función lineaEcuacionRecta.
function dibujar(event) {
  //Se ejecuta cada que se hace clic sobre el lienzo
  var canvas = document.getElementById("miCanvas"); //accedemos al lienzo de dibujo
  var contexto = canvas.getContext("2d"); //obtenemos el contexto 2d del lienzo
  if (primerPunto) {
    //Si es el primer clic, se lee el primer punto de la línea
    xi = event.offsetX; //Guardamos la abscisa
    yi = event.offsetY; //guardamos la ordenada
    ponerPixel(contexto, xi, yi, "#00FF00"); //ponemos el punto inicial en verde
  } //Si es el segundo clic, pintamos la línea con los valores xi, yi
  //y la posición del último clic del ratón (event.offsetX, event.offsetY)
  else
    lineaEcuacionRecta(
      xi,
      yi,
      event.offsetX,
      event.offsetY,
      contexto,
      "#00FF00"
    );
  inicioFin(contexto, event.offsetX, event.offsetY);
  primerPunto = !primerPunto; //Invertir el valor de la bandera para pintar más líneas
}
function lineaEcuacionRecta(x0, y0, x1, y1, contexto, color) {
  var m = (y1 - y0) / (x1 - x0); //calcular pendiente
  var b = y0 - m * x0; //determinar el punto donde la recta se cruza con el eje y
  if (x0 >= x1) {
    for (var x = x1; x <= x0; x++) {
      //El punto inicial debe estár más a la izq. q el final
      var y = m * x + b; //Ecuación de la recta
      ponerPixel(contexto, x, Math.round(y), color); //pintar el sig. punto de la línea
    }
  } else {
    for (var x = x0; x <= x1; x++) {
      //El punto inicial debe estár más a la izq. q el final
      var y = m * x + b; //Ecuación de la recta
      ponerPixel(contexto, x, Math.round(y), color); //pintar el sig. punto de la línea
    }
  }
}
