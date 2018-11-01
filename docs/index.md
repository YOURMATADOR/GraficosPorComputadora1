---
layout: default
---

# Actividades


## Unidad #1

# Sistemas de coordenadas :tada:

#### _Jesus Eduardo Avila Mancilla_


---


# Cilindrico

![ejemplo](https://0c16d2e5-a-62cb3a1a-s-sites.googlegroups.com/site/calculovectorialhakim/coordenadas-cilindricas-y-esfericas/a13.png?attachauth=ANoY7cqBXhkxPA3jqQBOa2O6WGlU1ilkpJbve0qWOVbNnzISMwk3eMHSCrJddU7vCZIBiC09o0DJ0EYmXZtgoCQHA6QrtmwumI4j1BjPGykyl1CzTr7XNSo44su95ZF2cW1G_WQ6cEuLIMoY2UgaM4lUUtlRXB0UnO1rDO63vZeACnGy-O00Cp4FPvrDIX9umw-1ehm20oO6rD7OAVecja9wErOArrZFKXxTdPAE3q5rLFCNsVluDBy9k8ulyWFCG64k0QR4RKrg5QACKIlVZqNUCxn49LDtdg%3D%3D&attredirects=0)
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
![conversion1](https://sites.google.com/site/calculovectorialhakim/coordenadas-cilindricas-y-esfericas/a15.png?attredirects=0)

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


## Unidad 2
Column A | Column B | Column C
---------|----------|---------
 A1 | B1 | C1
 A2 | B2 | C2
 A3 | B3 | C3
