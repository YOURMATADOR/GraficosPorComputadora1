let canvas = document.getElementById("miCanvas");
canvas.style.backgroundColor='yellow';
let contexto = canvas.getContext("2d");
//? itinerar entre un for de 4 y dentro de ese for un for de 24 por cada uno del for de 4
let bites = "100100111000011110000000100100100100010000000000100100100100010010000000011000111000011110000000".split(
  ""
);
let contador = -3;
bites = [...bites];
console.log(typeof bites);
// bites.map((e, i) => console.log(e + ": " + i));

const pintar = (arr = []) => {
  for (let alto = 0; alto <=4; alto++) {
    for (let ancho = 0; ancho <= 24; ancho++) {
      contador++;
      console.log(arr[contador]);
      punto(contexto, ancho*10, alto*10, arr[contador] == 0 ? "white" : "red");
    }
  }
};

const punto = (context, x, y, color) => {
  context.fillStyle = color;
  context.fillRect(x, y, 5, 5);
};

pintar(bites);
