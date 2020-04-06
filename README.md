# Draw!
An application that let you draw with different colors and stroke sizes using [p5.js](https://p5js.org).
> **Adrián Lorenzo Melián** - *Creando Interfaces de Usuario*, [**ULPGC**](https://www.ulpgc.es).
> adrian.lorenzo101@alu.ulpgc.es

<div align="center">
 <img src=images/demo.gif alt="Demo"></img>
 <p>Figura 1 - Demostración de la ejecución de la aplicación</p>
</div>

***

## Índice
* [Introducción](#introduction)
* [Requisitos](#requirements)
* [Instrucciones](#instructions)
* [Implementación](#implementation)
    * [Creación de trazos](#song)
* [Herramientas y recursos utilizados](#tools-and-resources)
* [Referencias](#references)

## Introducción <a id="introduction"></a>
El objetivo de esta práctica es **crear una aplicación que permita al usuario dibujar en un lienzo pudiendo como mínimo cambiar el color y grosor del trazo.**

## Instrucciones <a id="introduction"></a>
Haciendo **click y arrastrando el puntero/ratón, puedes dibujar en el lienzo.** Además, puedes **cambiar el grosor del "pincel" moviendo el slider** o **cambiar el color del pincel con el selector en la barra inferior.**

Además, puedes **eliminar el contenido del lienzo pulsando el botón rojo con la imagen de la papelera.**

## Implementación <a id="implementation"></a>

### Creación de trazos <a id="strokes"></a>
Los trazos del usuario se registran a partir del conjunto de puntos obtenidos cada vez que se lanza los eventos `mouseDragged` y/o `mousePressed`. En concreto, el evento `mouseDragged` se lanza con una tasa de refresco arbitraria. **Por tanto, el usuario decide mover muy rápido el curso mientras mantiene pulsado, el efecto de continuidad en el trazo se vería afectado.**

La solución para ello es dibujar líneas con los puntos que se van registrando. Para ello hay que tener en cuenta la discontinuidad al dejar de pulsar el botón. 

La solución en la implementación fue crear dos clases diferentes: 
- La clase **`Element` que representa un trazo continuo dibujado.** Esta contiene el conjunto de puntos que forman este elemento, un color y un grosor de trazo.
- La clase **`Canvas`, que representa el lienzo.** Contiene el conjunto de elementos dibujados en él.

Cuando el **puntero es pulsado, se crea un nuevo elemento.** Cuando el **puntero es arrastrado, al último elemento creado se le añaden los puntos necesarios.**

```javascript
function mousePressed(){
    element = new Element(strokeSize, colorPicker.color());
    element.points.push(new Point(mouseX, mouseY))
    canvas.elements.push(element)
}

function mouseDragged(){
    canvas.elements[canvas.elements.length - 1].points.push(
        new Point(mouseX, mouseY)
    )
}
```


## Herramientas y recursos utilizados <a id="tools-and-resources"></a>
- [Feather icons](https://feathericons.com) - Conjunto de iconos de los que se obtuvo el icono de la papelera para el botón de borrar el contenido del lienzo.
- [Giphy](https://giphy.com) - Herramienta usada para la creación de gifs a partir de los frames de la aplicación.

## Referencias <a id="references"></a>
- ***Guión de Prácticas 2019/20**, Creando Interfaces de Usuario*. Modesto F. Castrillón Santana, J Daniel Hernández Sosa.


