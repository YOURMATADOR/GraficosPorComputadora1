// * dimensiones son 18 X 14 = 00000012 = 18 0000000E = 14
// * Hexadecimal Nombre
// ! 0 #FFFFFF white
// ! 1 #000000 black
// ! 2 #000080 navy
// ! 3 #0000FF blue
// ! 4 #008000 green
// ! 5 #008080 teal
// ! 6 #00FF00 lime
// ! 7 #00FFFF aqua
// ! 8 #800000 maroon
// ! 9 #800080 purple
// ! A #808000 olive
// ! B #808080 gray
// ! C #C0C0C0 silver
// ! D #FF0000 red
// ! E #FF00FF fuchsia
// ! F #FFFF00 yellow
let canvas = document.getElementById('miCanvas');
let contexto = canvas.getContext('2d');
var mario = "FFFFFF FFFFFF FFFFFF FFFFFF FFFFFF FFFFFF FF0000 FF0000 FF0000 FF0000 FF0000 FFFFFF FFFFFF FF00FF FF00FF FF00FF FFFFFF FFFFFF FFFFFF FFFFFF FFFFFF FFFFFF FFFFFF FF0000 FF0000 FF0000 FF0000 FF0000 FF0000 FF0000 FF0000 FF0000 FF00FF FF00FF FFFFFF FFFFFF FFFFFF FFFFFF FFFFFF FFFFFF FFFFFF 800000 800000 800000 FF00FF FF00FF 000000 FF00FF FFFFFF FF0000 FF0000 FF0000 FFFFFF FFFFFF FFFFFF FFFFFF FFFFFF FFFFFF 800000 FF00FF 800000 FF00FF FF00FF FF00FF 000000 FF00FF FF00FF FF00FF FF0000 FF0000 FFFFFF FFFFFF FFFFFF FFFFFF FFFFFF FFFFFF 800000 FF00FF 800000 800000 FF00FF FF00FF FF00FF 000000 FF00FF FF00FF FF00FF FF0000 FFFFFF FFFFFF FFFFFF FFFFFF FFFFFF FFFFFF 800000 800000 FF00FF FF00FF FF00FF FF00FF 000000 000000 000000 000000 FF0000 FFFFFF FFFFFF FFFFFF FFFFFF FFFFFF FFFFFF FFFFFF FFFFFF FFFFFF FF00FF FF00FF FF00FF FF00FF FF00FF FF00FF FF00FF FF0000 FF0000 FFFFFF FFFFFF FFFFFF FFFFFF FFFFFF FF0000 FF0000 FF0000 FF0000 FF0000 0000FF FF0000 FF0000 FF0000 0000FF FF0000 FF0000 FFFFFF FFFFFF FFFFFF 800000 FF00FF FF00FF FF0000 FF0000 FF0000 FF0000 FF0000 FF0000 0000FF FF0000 FF0000 FF0000 0000FF FFFFFF FFFFFF FFFFFF 800000 800000 FF00FF FF00FF FF00FF FF0000 FF0000 FF0000 FF0000 FF0000 0000FF 0000FF 0000FF 0000FF FFFF00 0000FF 0000FF 0000FF 800000 800000 FFFFFF FF00FF FFFFFF FFFFFF FFFFFF 0000FF FF0000 0000FF 0000FF FFFF00 0000FF 0000FF 0000FF 0000FF 0000FF 0000FF 800000 800000 FFFFFF FFFFFF FFFFFF 800000 800000 800000 0000FF 0000FF 0000FF 0000FF 0000FF 0000FF 0000FF 0000FF 0000FF 0000FF 800000 800000 FFFFFF FFFFFF 800000 800000 800000 0000FF 0000FF 0000FF 0000FF 0000FF 0000FF FFFFFF FFFFFF FFFFFF FFFFFF FFFFFF FFFFFF FFFFFF FFFFFF FFFFFF 800000 800000 FFFFFF FFFFFF FFFFFF FFFFFF FFFFFF FFFFFF FFFFFF FFFFFF FFFFFF FFFFFF FFFFFF FFFFFF FFFFFF FFFFFF".split(
  " "
);
let contador = 0;
mario = [...mario];

const dibujo = (arr = []) => {
  for (let alto = 0; alto < 14; alto++) {
    for (let ancho = 0; ancho < 18; ancho++) {
      contador++;
      console.log(arr[contador]);
      punto(contexto, ancho * 10, alto * 10, arr[contador]);
    }
  }
};

const punto = (context, x, y, color) => {
  context.fillStyle = `#${color}`;
  context.fillRect(x, y, 5, 5);
};

dibujo(mario);
