let canvas = document.getElementById("miCanvas");
canvas.style.backgroundColor='yellow';
let contexto = canvas.getContext("2d");
// 00001010000010100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000C0C0C0858585C0C0C0858585C0C0C0858585C0C0C085858500000000 // line primera y segunda
//00000000858585C0C0C0858585C0C0C0858585C0C0C0858585C0C0C000000000 3ra linea
let bites = [];

const marco = (tamaño = 100) => {
  for (let al = 0; al <= tamaño; al++) {
    for (let an = 0; an <= tamaño; an++) {
      if (al == 0 || al == 99 || an == 0 || an == 99) {
        punto(contexto, an, al, "red");
      } else punto(contexto, an, al, "white");
      if (al > 1 && an > 1 && al != 99 && an != 99) {
        if (al % 2 == 0 && an % 2 == 0) {
          punto(contexto, an, al, "black");
        } else {
          punto(contexto, an, al, "white");
        }
      }
    }
  }
};

const punto = (context, x, y, color) => {
  context.fillStyle = color;
  context.fillRect(x, y, 5, 5);
};

marco(101);
