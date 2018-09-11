function ponerPixel(contexto, x, y, color) {
  contexto.fillStyle = color;
  contexto.fillRect(x, y, 1, 1);
}
const dibujar = event => {
  console.log("hola");
  var canvas = document.getElementById("miCanvas");
  var contexto = canvas.getContext("2d");
  let formulario = document.getElementById("f");

  let color = formulario.elements["c"].value;
  let radio = +formulario.elements["radio"].value;
  formualrio["valorR"].value = radio;
  //círculo amarillo con radio de 50 pixeles.
  //cuyo centro está definido por las coordenadas del clic del ratón
  circulo(event.offsetX, event.offsetY, radio, contexto, color);
};
//Implementación del algoritmo de Bresenham para circulos
function circulo(xc, yc, radio, contexto, color) {
  var x = radio * -1;
  var y = 0;
  var r = radio;
  var err = 2 - 2 * radio;
  do {
    ponerPixel(contexto, xc - x, yc + y, color);
    ponerPixel(contexto, xc - y, yc - x, color);
    ponerPixel(contexto, xc + x, yc - y, color);
    ponerPixel(contexto, xc + y, yc + x, color);
    r = err;
    if (r > x) err += ++x * 2 + 1;
    if (r <= y) err += ++y * 2 + 1;
  } while (x < 0);
}

let canvas = document.getElementById("miCanvas");
canvas.onclick = dibujar;
