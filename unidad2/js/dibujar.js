let dibujar = document.getElementById("dibujar");
let canvas = document.getElementById("miCanvas");

const pintarCuadro = (contexto, x, y, color) => {
  contexto.fillStyle = color;

  contexto.fillRect(x, y, 20, 20);
};

const dibujo = e => {
  let context = canvas.getContext("2d");
  let x, y,color;
  if (e) {
    console.log(e);
    let formulario = document.getElementById("f");
    color = formulario.elements["c"].value;
    console.log(color);
    // let x = +formulario.elements["x"].value;
    // let y = +formulario.elements["y"].value;

    x = e.offsetX ? e.offsetX : 10;
    y = e.offsetY ? e.offsetY : 10;
  } else {
    color = '#FFF000';
    x = 10;
    y = 10;
  }
  pintarCuadro(context, x, y, color);
  context.fillText(`x: ${x} y: ${y}`, x, y, 100);
};

dibujo();
canvas.addEventListener("click", dibujo);
