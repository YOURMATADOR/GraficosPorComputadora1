//xi, yi se usan para guardar las coordenadas del primer punto de la recta
let canvas = document.getElementById("miCanvas");
canvas.addEventListener("click", dibujar);

var xi = 0;
var yi = 0;
//la recta se define por dos puntos, el punto inicial de la recta
//será la posición donde se haga clic por primera vez y el punto
//final estara definido por la ubicación del segundo clic
var primerPunto = true; //bandera para controlar los clics
function ponerPixel(contexto, x, y, color) {
  contexto.fillStyle = color;
  contexto.fillRect(x, y, 1, 1);
}
//Para pintar una recta esta función deberá ser ejecutada dos veces
//la primera vez captura las coordenadas del punto incial de la recta
// y lo grafica sobre el lienzo. La segunda vez toma las coordenadas
//del segundo punto y pinta la línea llamando a la función lineaBresenham.
function dibujar(event) {
  //Esta función se ejecuta cada que se hace clic sobre el lienzo
  var canvas = document.getElementById("miCanvas"); //accedemos al lienzo de dibujo
  var contexto = canvas.getContext("2d"); //obtenemos el contexto 2d del lienzo
  let color = document.getElementById('f').elements['c'].value;
  contexto.fillText(`x-> ${event.offsetX} y-> ${event.offsetY}`, event.offsetX, event.offsetY + 10, 100);
  
  if (primerPunto) {
    //Si es el primer clic, se lee el primer punto de la línea
    xi = event.offsetX; //Guardamos la abscisa
    yi = event.offsetY; //guardamos la ordenada
    ponerPixel(contexto, xi, yi, "#FF00FF"); //ponemos el pixel en rosa
  } //Si es el segundo clic, pintamos la línea con los valores xi, yi
  //y la posición del último clic del ratón (event.offsetX, event.offsetY)
  else
    lineaBresenham(xi, yi, event.offsetX, event.offsetY, contexto, color);

    xi = event.offsetX;
    yi = event.offsetY;
  primerPunto =false;
}
//Implementación del algoritmo de Bresenham para líneas
function lineaBresenham(x0, y0, x1, y1, contexto, color) {
  var dx = Math.abs(x1 - x0);
  var dy = Math.abs(y1 - y0);
  var sx = x0 < x1 ? 1 : -1;
  var sy = y0 < y1 ? 1 : -1;
  var err = dx - dy;
  while (x0 != x1 || y0 != y1) {
    ponerPixel(contexto, x0, y0, color);
    var e2 = 2 * err;
    if (e2 > -dy) {
      err -= dy;
      x0 += sx;
    }
    if (e2 < dx) {
      err += dx;
      y0 += sy;
    }
  }
}
