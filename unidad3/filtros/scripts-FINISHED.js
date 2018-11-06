const video = document.querySelector(".player");
const canvas = document.querySelector(".photo");
const ctx = canvas.getContext("2d");
const strip = document.querySelector(".strip");
const snap = document.querySelector(".snap");
const filtroBrillo = document.getElementById("filtroBrillo");
const EscalaGrises = document.getElementById("filtroEscalaGrises");
const desRGB = document.getElementById("filtroRGB");
const blancoNegro = document.getElementById("blancoNegro");
const rojos = document.getElementById("filtroRojo");
const azules = document.getElementById("filtroAzul");
const amarillos = document.getElementById("filtroAmarillo");
const sepias = document.getElementById("filtroSepia");
const inversos = document.getElementById("filtroInverso");

let filtro = redEffect;
let pixels = 0;
filtroBrillo.addEventListener("click", () => (filtro = aplicarBrillo));
EscalaGrises.addEventListener("click", () => (filtro = aplicarEscalaGrises));
desRGB.addEventListener("click", () => (filtro = rgbSplit));
blancoNegro.addEventListener("click", () => (filtro = bNegro));
rojos.addEventListener("click", () => (filtro = redEffect));
azules.addEventListener("click", () => (filtro = blueScale));
amarillos.addEventListener("click", () => (filtro = yellowScale));
sepias.addEventListener("click", () => (filtro = sepia));
inversos.addEventListener("click", () => (filtro = inverse));

function getVideo() {
  navigator.mediaDevices
    .getUserMedia({ video: true, audio: false })
    .then(localMediaStream => {
      console.log(localMediaStream);
      video.src = window.URL.createObjectURL(localMediaStream);
      video.play();
    })
    .catch(err => {
      console.error(`OH NO!!!`, err);
    });
}

function paintToCanvas() {
  const width = video.videoWidth;
  const height = video.videoHeight;
  canvas.width = width;
  canvas.height = height;

  return setInterval(() => {
    ctx.drawImage(video, 0, 0, width, height);
    // take the pixels out
    pixels = ctx.getImageData(0, 0, width, height);
    // mess with them
    // pixels = redEffect(pixels);

    // pixels = rgbSplit(pixels);
    ctx.globalAlpha = 0.8;

    pixels = filtro(pixels);
    // put them back
    ctx.putImageData(pixels, 0, 0);
  }, 30);
}

function takePhoto() {
  // played the sound
  snap.currentTime = 0;
  snap.play();

  // take the data out of the canvas
  const data = canvas.toDataURL("image/jpeg");
  const link = document.createElement("a");
  link.href = data;
  link.setAttribute("download", "handsome");
  link.innerHTML = `<img src="${data}" alt="Handsome Man" />`;
  strip.insertBefore(link, strip.firsChild);
}
const vuelta = (valor, suma) => {
  for (let i = 0; i < suma; i++) {
    if (valor > 254) {
      valor = 0;
    } else {
      valor ++;
    }
  }
  return valor;
};
var inverse = function inverse(imageData) {
  var data = imageData.data;
  for (var i = 0; i < data.length; i += 4) {
    data[i] = 255 - data[i];
    data[i + 1] = 255 - data[i + 1];
    data[i + 2] = 255 - data[i + 2];
  }
  return imageData;
};
var sepia = function sepia(imageData) {
  var data = imageData.data;
  for (var i = 0; i < data.length; i += 4) {
    var red = data[i];
    var green = data[i + 1];
    var blue = data[i + 2];
    data[i] = (red * 0.393) + (green * 0.769) + (blue * 0.189);
    data[i + 1] = (red * 0.349) + (green * 0.686) + (blue * 0.168);
    data[i + 2] = (red * 0.272) + (green * 0.534) + (blue * 0.131);
  }
  return imageData;
};
function aplicarBrillo(pixels) {
  const brillo = document.getElementById("brillo").value;
  const tam = pixels.width * pixels.height;

  let factor = (259 * (brillo + 255)) / (255 * (259 - brillo));
  console.log("brillo", brillo);
  for (let i = 0; i < tam; i++) {
    pixels.data[i * 4] =
      pixels.data[i * 4] + brillo > 254
        ? vuelta(pixels.data[i * 4], brillo)
        : pixels.data[i * 4] + brillo;
    pixels.data[i * 4 + 1] =
      pixels.data[i * 4 + 1] + brillo > 254
        ? vuelta(pixels.data[i * 4 + 1], brillo)
        : pixels.data[i * 4 + 1] + brillo;
    pixels.data[i * 4 + 2] =
      pixels.data[i * 4 + 2] + brillo > 254
        ? vuelta(pixels.data[i * 4 + 2], brillo)
        : pixels.data[i * 4 + 2] + brillo;
  }
  return pixels;
}
function aplicarEscalaGrises(pixels) {
  const tam = pixels.width * pixels.height;
  for (let i = 0; i < tam; i++) {
    let R = pixels.data[i * 4];
    let G = pixels.data[i * 4 + 1];
    let B = pixels.data[i * 4 + 2];

    let gris = 0.3 * R + 0.59 * G + 0.11 * B;
    pixels.data[i * 4] = gris;
    pixels.data[i * 4 + 1] = gris;
    pixels.data[i * 4 + 2] = gris;
  }
  return pixels;
}
var yellowScale = function yellowScale(imageData) {
  var data = imageData.data;
  for (var i = 0; i < data.length; i += 4) {
    var red = data[i];
    var green = data[i + 1];
    var blue = data[i + 2];
    var average = (red + green + blue) / 3;
    data[i] = data[i + 1] = average;
    data[i + 2] = 0;
  }
  return imageData;
};
function bNegro(pixels) {
  const tam = pixels.width * pixels.height;
  for (let i = 0; i < tam; i++) {
    let R = pixels.data[i * 4];
    let G = pixels.data[i * 4 + 1];
    let B = pixels.data[i * 4 + 2];

    let gris = (R + G+ B )/ 3;
    pixels.data[i * 4] = gris;
    pixels.data[i * 4 + 1] = gris;
    pixels.data[i * 4 + 2] = gris;
  }
  return pixels;
}
function redEffect(pixels) {
  for (let i = 0; i < pixels.data.length; i += 4) {
    pixels.data[i + 0] = pixels.data[i + 0] + 120; // RED
    pixels.data[i + 1] = pixels.data[i + 1] - 50; // GREEN
    pixels.data[i + 2] = pixels.data[i + 2] * 0.5; // Blue
  }
  return pixels;
}

var blueScale = function blueScale(imageData) {
  var data = imageData.data;
  for (var i = 0; i < data.length; i += 4) {
    var red = data[i];
    var green = data[i + 1];
    var blue = data[i + 2];
    var average = (red + green + blue) / 3;
    data[i + 2] = average;
    data[i] = data[i + 1] = 0;
  }
  return imageData;
};
function rgbSplit(pixels) {
  for (let i = 0; i < pixels.data.length; i += 4) {
    pixels.data[i - 150] = pixels.data[i + 0]; // RED
    pixels.data[i + 500] = pixels.data[i + 1]; // GREEN
    pixels.data[i - 550] = pixels.data[i + 2]; // Blue
  }
  return pixels;
}

function greenScreen(pixels) {
  const levels = {};

  document.querySelectorAll(".rgb input").forEach(input => {
    levels[input.name] = input.value;
  });

  for (i = 0; i < pixels.data.length; i = i + 4) {
    red = pixels.data[i + 0];
    green = pixels.data[i + 1];
    blue = pixels.data[i + 2];
    alpha = pixels.data[i + 3];

    if (
      red >= levels.rmin &&
      green >= levels.gmin &&
      blue >= levels.bmin &&
      red <= levels.rmax &&
      green <= levels.gmax &&
      blue <= levels.bmax
    ) {
      // take it out!
      pixels.data[i + 3] = 0;
    }
  }

  return pixels;
}

getVideo();

video.addEventListener("canplay", paintToCanvas);
