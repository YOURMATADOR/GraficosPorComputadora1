---
layout: default
---
<link rel="shortcut icon" type="image/x-icon" href="https://raw.githubusercontent.com/YOURMATADOR/GraficosPorComputadora1/master/docs/public/img/favicon.ico?">
<script>window.onload = function() {
  var link = top.document.createElement("link");
  link.type = "image/x-icon";
  link.rel = "shortcut icon";
  link.href = "https://raw.githubusercontent.com/YOURMATADOR/GraficosPorComputadora1/master/docs/public/img/favicon.ico";
  top.document.getElementsByTagName("head")[0].appendChild(link);
} </script>



  _Jesus Eduardo Avila Mancilla_

# Unidad 1

-----
## Sistemas de coordenadas :tada:







### Cilindrico

![ejemplo](https://raw.githubusercontent.com/YOURMATADOR/GraficosPorComputadora1/master/docs/public/img/a13.png)
> Se utiliza en la resolucion de problemas que tienen incluidas las simetrias de tipo cilindro o [acimutal](https://es.wikipedia.org/wiki/Proyecci%C3%B3n_acimutal), es una convinacion de coordenadas polares de la geometria analitaca plana, pero esta en **3** dimensiones.

un punto ${p}$ se representa por ($\rho, φ, z$)


| Simbolo | Descripcion                                                                                                                     |
| ------- | ------------------------------------------------------------------------------------------------------------------------------- |
| $\rho$  | Coordenada radial, la distancia del punto $p$ al eje $z$  o la longitud de la proyeccion del radio vector sobre el plano **XY** |
| φ       | Coordanada acimital como el angulo que forma con el eje **X** la proyeccion del radiovector sobre el plano **XY**.              |
| $z$     | La coordenada _Vertical_, definida como la distancia, con el signo, desde el punto P al plano **XY**.                           |

los Rangos de variacion entre las tres coordenadas son 

![coordenadas](https://wikimedia.org/api/rest_v1/media/math/render/svg/5d61f26d8910801e1fa31b4682381b920080cbc4)


## convertir medidas cartesianas a polares
![conversion1](https://raw.githubusercontent.com/YOURMATADOR/GraficosPorComputadora1/master/docs/public/img/a15.png)

## convertir medidas polares a cartesianas

coordenada cilíndrico (r,a,z) su equivalente cartesiano (x,y,z) vendría dado por la relación:

* x=r cos a
* y=r sen a
* z=z


## de manera inversa
* z=z
* ![alt](https://www.ecured.cu/images/a/af/Coordenadas_cartesianas_a_cilindricas_r.png)
  
* ![alt](https://www.ecured.cu/images/6/6c/Coordenadas_cartesianas_a_cilindricas_a.png)



# Esferico

![cilindrica](https://www.ecured.cu/images/3/3e/Coordenadas_esfericas_elementos.gif)

> Dicese que la forma de identificar un punto en el espacio tridimensional colocado en la superficie de una esfera con centro en el origen y radio determinado mediante tres magnitudes:




| Simbolo | Descripcion                                                                                                |
| ------- | ---------------------------------------------------------------------------------------------------------- |
| $r$     | radio de la esfera                                                                                         |
| $a$     | la longitud y la latitud                                                                                   |
| $b$     | los dos anteriores expresados en radianes de forma similar a como se realiza en las coordenadas terrestres |

Todo punto $A$ en el espacio tridimensional puede definirse mediante ($rφ,\phi$) o ($r,a,b$)

una distancia y dos angulos o ($r,a,b$) o (r,a,b) 
1. la distancia radial r donde 0 ${<}{=}$ r < $\infty$
Let $\text{S}_1(N) = \sum_{p=1}^N \text{E}(p)$
2. Longitud $\theta$ (a en la imagen) la amplitud de los radianes del angulo $XOA_a$, en sentido antihorario, donde $A_x$, es la proyeccion del vector $\Overrightarrow{A}$ en el plano $XOY$
3. Latitud $\theta$ (b en la imagen) la amplitud de los radianes del angulo $ZOA$, $0{<}\phi{<}\pi$

A todo lo anterior de le llama **Coordenadas esfericas de A**.

> A las circunferencias definidas de fijar el radio y la latitud se les conoce como paralelos, cuyos planos son paralelos a XOY y a las circunferencias verticales definidas al dejar constantes las magnitudes del radio y la longitud se les llama meridianos.
## A coordenadas cartesianas

Las fórmulas de conversión entre los sistemas esféricos y cartesianos son simples. Dada la coordenada esférica $(r,a,b)$ su equivalente cartesiano $(x,y,z) $ vendría dado por la relación:
* x = $r$$\cos(a)$ $\cos(b)$
* r = $\sin(a)\cos(b)$ 
* z = $\cos(b)$

## Esfericas y cilindricas

>Si bien las coordenadas esféricas (r,a,b) y cilíndricas (a,R,z) tiene como elemento común el ángulo longitudinal a conformado entre el eje X el origen de coordenadas y la proyección del vector A sobre el plano XOY; aunque difiere en el hecho de que el radio R de la base del cilindro es el módulo del vector proyectado y no como en el sistema esférico, donde el radio r era la distanciaOA.

Por ende, las coordenadas esféricas y las cilíndricas se relacionan mediante las fórmulas:

* r2=z2+R2
* ![alt](https://www.ecured.cu/images/8/80/Esferica_2_Cilindrica_latitud_def.gif)
  
  # Curvilineas
![alt](https://upload.wikimedia.org/wikipedia/commons/0/0c/Curvilinear.svg)
  >Un sistema de coordenadas curvilíneos es la forma más general de parametrizar o etiquetar los puntos de un espacio localmente euclídeo o variedad diferenciable (globalmente el espacio puede ser euclídeo pero no necesariamente). Si tenemos un espacio localmente euclídeo M de dimensión m, podemos construir un sistema de coordenadas curvilíneo local en torno a un punto p siempre a partir de cualquier difeomorfismo que cumpla:

Dada una variedad de (pseudo)riemanniana ${\mathcal {M}}$, un conjunto abierto {O} O del mismo y un punto dentro de dicho conjunto abierto $m\in O\subset {\mathcal {M}}$ $m\in O\subset\mathcal{M}$, una carta local o "sistema de coordenadas" local puede representarse por una función:

![alt](https://wikimedia.org/api/rest_v1/media/math/render/svg/eaede496690cd2138dfe5da016ca2b88a655305d)

Donde d es la dimensión del espacio donde se define el sistema de coordenadas local. Las d curvas coordenadas Ci(t) y sus vectores tangentes vienen definidas por las ecuaciones:
![alt](https://wikimedia.org/api/rest_v1/media/math/render/svg/a4dffee55598bcb0eab47ac426ecc815502cb488)

>El cálculo diferencial en variedades permite generalizar el concepto de coordenadas cartesianas, cilíndricas o esféricas a variedads diferenciables, es decir, espacios globalmente no euclídeos que sin embargo son localmente euclídeos. Los sistemas de coordenadas totalmente generales son difíciles y en general no tienen propiedades que los hagan interesantes. Una clase especial de estos son las coordenadas ortogonales. Un sistema de coordenadas será ortogonal si los vectores tangentes a las curvas coordenadas xi son ortogonales, es decir, si:

![alt](https://wikimedia.org/api/rest_v1/media/math/render/svg/e0487f38ecc9f8c89da56a9758026eced8e89987)

---

# Unidad 2
---
## Tranformaciones

_Descripcion del problema_ :pencil2:

```
Ejercicio: Diseñe la inicial de su nombre en un
plano cartesiano. Escale su figura al doble de
tamaño. Mueva la figura resultante dos
unidades a la derecha y dos hacia arriba. Rote
la figura resultante 30 grados antihorario
tomando como centro de rotación el origen.
```
### [Tranformaciones](/unidad2/transformaciones.html)

---
## Circulos

_Descripcion del problema_ :pencil2:

```
implementa el algoritmo del punto medio para
círculos. 
Muestra círculos de 100 pixeles de diámetro tomando
como centro el clic del ratón. 
Modifique los archivos circulo.html
y circulo.html para incorporar un selector utilizado por el usuario
para indicar el color del círculo. 
Agregue también una caja de
texto donde pueda especificar el radio del mismo.
```
### [Circulos](/unidad2/circulos.html)

---

## Colores Random

_Descripcion del problema_ :pencil2:

```
El ejemplo 4 muestra 1000 pixeles en colores y posiciones al azar
dentro del lienzo de dibujo. Recordemos que en los ejemplos se
utiliza un lienzo de 400x400 pixeles. Modifique los archivos
pixeles.html y pixeles.js para que todos los pixeles del lienzo se
iluminen con un color al azar.
```
### [Colores](/unidad2/colores.html)

---
## Dibujar 

_Descripcion del problema_ :pencil2:

```
El ejemplo 3, permite graficar puntos al hacer clic con el ratón.
Todos los puntos graficados aparecen en color azul. Modifique los
archivos pixelclic.html y pixelclic.js para que se permita
especificar al usuario el color del punto a graficar. No incluya un
botón, sólo el selector con la paleta de colores html.
```
### [Dibujar](/unidad2/dibujo.html)

---
## Dibujar Linea 

_Descripcion del problema_ :pencil2:

```
El ejemplo 5 permite al usuario dibujar una línea recta basados en
la ecuación de la recta especificando los puntos de inicio y fin de
la línea mediante un par de clics del ratón. El ejemplo requiere
que el punto inicial de la línea este más a la izquierda que el
punto final, ya que es solo un algoritmo demostrativo. Modifique
los archivos lineaec.html y lineaec.js para que grafique líneas sin
importar dónde estén ubicados los puntos que la definen. Para
este ejemplo, basta con intercambiar los puntos inicial y final
dentro de la función lineaEcuacionRecta() si el inicial está a la
derecha del final. Lo anterior, antes de iniciar con el cálculo de los
puntos medios.
```
### [Linea colores](/unidad2/lineasColores.html)

---
## Practica 1 | modos de color (imprimir UDG)

_Descripcion del problema_ :pencil2:

```
Una imagen monocromática está representada por una estructura de datos organizada de la
siguiente manera: 1 byte para la anchura, 1 byte para la altura y el resto de la información
representa la imagen 1 bit por pixel. (0=negro, 1 = blanco). Considerando lo anterior, dibuje la
imagen que resulta de procesar la siguiente información:
0001100000000100101001001001100011000100101001101001000010100100101001011001
100010100100010001001001110011000111
```
### [# 1](/colores/num1.html)

---
## Practica 2 | modos de color (Matris)

_Descripcion del problema_ :pencil2:

```
Escriba la información hexadecimal de un archivo que permita almacenar la siguiente imagen
en escala de grises:
```

![ejemplo](https://raw.githubusercontent.com/YOURMATADOR/GraficosPorComputadora1/master/docs/public/img/matris.png)

```
Considere los siguientes valores hexadecimales para cada color en la imagen:
000000 = negro
C0C0C0 = gris claro
858585 = gris obscuro
El archivo deberá formarse de la siguiente manera:
```
![ejemplo](https://raw.githubusercontent.com/YOURMATADOR/GraficosPorComputadora1/master/docs/public/img/arreglo.png)
### [# 2](/colores/num2.html)

---
## Practica 3 | modos de color (mario)

_Descripcion del problema_ :pencil2:

```
Considere la siguiente información utilizada para representar una paleta de 16 colores RGB.
Suponga que deseamos almacenar la imagen de mario (18 X 14 pixeles) en un archivo en
modo de color indexado utilizando la paleta siguiente: (use valores hexadecimales)
```

![ejemplo](https://raw.githubusercontent.com/YOURMATADOR/GraficosPorComputadora1/master/docs/public/img/mario.png)
### [UDG](/colores/num3.html)


---

## Practica 4 | mario a RGB

_Descripcion del problema_ :pencil2:

```
Cuál sería el contenido del archivo (solo la información de los pixeles) si se desea almacenar
utilizando un formato de color real, por ejemplo, RGB?
```
Respuesta 
```
var mario = "FFFFFF FFFFFF FFFFFF FFFFFF FFFFFF FFFFFF FF0000 FF0000 FF0000 FF0000 FF0000 FFFFFF FFFFFF FF00FF FF00FF FF00FF FFFFFF FFFFFF FFFFFF FFFFFF FFFFFF FFFFFF FFFFFF FF0000 FF0000 FF0000 FF0000 FF0000 FF0000 FF0000 FF0000 FF0000 FF00FF FF00FF FFFFFF FFFFFF FFFFFF FFFFFF FFFFFF FFFFFF FFFFFF 800000 800000 800000 FF00FF FF00FF 000000 FF00FF FFFFFF FF0000 FF0000 FF0000 FFFFFF FFFFFF FFFFFF FFFFFF FFFFFF FFFFFF 800000 FF00FF 800000 FF00FF FF00FF FF00FF 000000 FF00FF FF00FF FF00FF FF0000 FF0000 FFFFFF FFFFFF FFFFFF FFFFFF FFFFFF FFFFFF 800000 FF00FF 800000 800000 FF00FF FF00FF FF00FF 000000 FF00FF FF00FF FF00FF FF0000 FFFFFF FFFFFF FFFFFF FFFFFF FFFFFF FFFFFF 800000 800000 FF00FF FF00FF FF00FF FF00FF 000000 000000 000000 000000 FF0000 FFFFFF FFFFFF FFFFFF FFFFFF FFFFFF FFFFFF FFFFFF FFFFFF FFFFFF FF00FF FF00FF FF00FF FF00FF FF00FF FF00FF FF00FF FF0000 FF0000 FFFFFF FFFFFF FFFFFF FFFFFF FFFFFF FF0000 FF0000 FF0000 FF0000 FF0000 0000FF FF0000 FF0000 FF0000 0000FF FF0000 FF0000 FFFFFF FFFFFF FFFFFF 800000 FF00FF FF00FF FF0000 FF0000 FF0000 FF0000 FF0000 FF0000 0000FF FF0000 FF0000 FF0000 0000FF FFFFFF FFFFFF FFFFFF 800000 800000 FF00FF FF00FF FF00FF FF0000 FF0000 FF0000 FF0000 FF0000 0000FF 0000FF 0000FF 0000FF FFFF00 0000FF 0000FF 0000FF 800000 800000 FFFFFF FF00FF FFFFFF FFFFFF FFFFFF 0000FF FF0000 0000FF 0000FF FFFF00 0000FF 0000FF 0000FF 0000FF 0000FF 0000FF 800000 800000 FFFFFF FFFFFF FFFFFF 800000 800000 800000 0000FF 0000FF 0000FF 0000FF 0000FF 0000FF 0000FF 0000FF 0000FF 0000FF 800000 800000 FFFFFF FFFFFF 800000 800000 800000 0000FF 0000FF 0000FF 0000FF 0000FF 0000FF FFFFFF FFFFFF FFFFFF FFFFFF FFFFFF FFFFFF FFFFFF FFFFFF FFFFFF 800000 800000 FFFFFF FFFFFF FFFFFF FFFFFF FFFFFF FFFFFF FFFFFF FFFFFF FFFFFF FFFFFF FFFFFF FFFFFF FFFFFF FFFFFF
```

---
# Unidad 3
---
## Filtros

_Descripcion del problema_ :pencil2:

```
Agregar multiples filtros a una imagen original y devolver la imagen con el filtro aplicado
```
### [Filtros de camara](/unidad3/index.html)

---
## concolucion

_Descripcion del problema_ :pencil2:

```
Agregar el brillo de brillo a una imagen

La operación debe aplicarse sobre cada uno de los canales RGB en imágenes a color, por
lo que para agilizar el proceso se puede aplicar sobre una imagen en escala de grises,
evitando hacer tres veces el proceso (El código de color de un tono de gris tiene la misma
intensidad en sus canales RGB)
```
### [Convolucion](/convolucion/convolucion.html)

---

# Unidad 4
---
## Filtros con camara en vivo

_Descripcion del problema_ :pencil2:

```
Agregar multiples filtros a una imagen original y devolver la imagen con el filtro aplicado
```
### [Filtros de camara](unidad4/filtros/index.html)


<script type="text/javascript" src="http://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML"></script>
